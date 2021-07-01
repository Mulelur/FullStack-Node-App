const express = require('express');
const db = require('./db');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const getIP = require('ipware')().get_ip;

// 1) MIDDLEWARES
app.use(function (req, res, next) {
  var ipInfo = getIP(req);
  // { clientIp: '127.0.0.1', clientIpRoutable: false }
  next();
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// 2) ROUTES

app.post('/createdb', (req, res) => {
  db.query('CREATE DATABASE simcarddb', (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json({
      sucsess: true,
      massege: 'database created...',
    });
  });
});

// Createing DataBase Tables
//////
// Creating SimCard Table
app.post('/createdbtable', (req, res) => {
  let createTableSql =
    'CREATE TABLE simcards(id int AUTO_INCREMENT, name VARCHAR(255) NOT NULL UNIQUE, PRIMARY KEY (id))';
  db.query(createTableSql, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json({
      sucsess: 'true',
      massege: 'sim-card db table was created',
    });
  });
});
// Creationg Orders Table
app.post('/createordersdbtable', (req, res) => {
  let Sql =
    'CREATE TABLE orders(id int AUTO_INCREMENT, simId int, customerId int, createdAt DATETIME NOT NULL DEFAULT NOW(), status varchar(255) DEFAULT "Pending", PRIMARY KEY (id), FOREIGN KEY (customerId) REFERENCES customer(id)  ON DELETE CASCADE)';
  db.query(Sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json({
      sucsess: 'true',
      massege: 'order db table was created',
      result,
    });
  });
});

// ALTER TABLE orders ADD FOREIGN KEY (customerId) REFERENCES customer(id) ON DELETE CASCADE;
//Costomer Table

app.post('/createcustomerdbtable', (req, res) => {
  let Sql =
    'CREATE TABLE customer(id int AUTO_INCREMENT, name VARCHAR(255), address VARCHAR(255), city VARCHAR(255), zipCode int, country VARCHAR(255),PRIMARY KEY (id))';
  db.query(Sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json({
      sucsess: 'true',
      massege: 'customer db table was created',
    });
  });
});

app.get('/sim-cards', (req, res) => {
  let sql = 'SELECT * FROM simcards';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.status(200).json({
      sucsess: 'true',
      data: results,
    });
  });
});

// Create SimCard

app.post('/createsimcard', (req, res) => {
  let sql = `INSERT INTO simcards SET name = '${req.body.name}' `;
  let query = db.query(sql, (err, result) => {
    if (err) {
      // throw err;
      return res.status(500).json({
        sucsess: false,
        error: err,
        massege: 'Plses Provide a unique name',
      });
    }
    let rsql = `SELECT * FROM simcards WHERE name = '${req.body.name}'`;
    let rquery = db.query(rsql, (err, result) => {
      res.status(200).json({
        sucsess: 'true',
        data: result,
      });
    });
  });
});

// Create New Order

app.post('/order/:simID/:customerID', (req, res) => {
  // let sqlcustomer = `SELECT * FROM customer WHERE id = ${req.params.customerID}`;
  // let m = db.query(sqlcustomer, (err, resultA) => {
  //   if (err) {
  //     throw err;
  //   }
  let sql = 'INSERT INTO orders SET ?';
  //   const deAdrees = {
  //     address: resultA.query,
  //     city: resultA.city,
  //     zipCode: resultA.zip,
  //     country: resultA.country,
  //   };
  const order = {
    simId: req.params.simID,
    customerId: req.params.customerID,
  };
  let query = db.query(sql, order, (err, result) => {
    if (err) throw err;
    // const newOrder = Object.assign(order, {
    //   deliveryAddress: {
    //     address: resultA[0].query,
    //     city: resultA[0].city,
    //     zipCode: resultA[0].zip,
    //     country: resultA[0].country,
    //   },
    let q = `SELECT * FROM orders WHERE id = ${result.insertId}`;
    let orderQuery = db.query(q, (err, data) => {
      if (err) throw err;
      res.status(200).json({
        sucsess: 'true',
        data,
      });
    });
  });
});
// });
// });

// Create New Customer

app.post('/createCustomer', (req, res) => {
  fetch(`http://ip-api.com/json/${req.ip}`)
    .then((res) => res.json())
    .then((json) => {
      const order = {
        name: req.body.name,
        address: json.query,
        city: json.city,
        zipCode: json.zip,
        country: json.country,
      };
      let sql = 'INSERT INTO customer SET ?';
      let query = db.query(sql, order, (err, result) => {
        if (err) throw err;
        res.status(200).json({
          sucsess: 'true',
          data: order,
        });
      });
    });
});

app.get('/allcustomers', (req, res) => {
  let sql = 'SELECT * FROM customer';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.status(200).json({
      sucsess: 'true',
      results,
    });
  });
});

app.get('/customer/:name', (req, res) => {
  let sql = `SELECT * FROM customer WHERE name = '${req.params.name}'`;
  let query = db.query(sql, (err, result) => {
    console.log(result);
    console.log(err);
    if (err) {
    }
    if (result.find((item) => item.name === req.params.name)) {
      res.status(200).json({
        sucsess: 'true',
        result,
      });
    } else {
      fetch(`http://ip-api.com/json/${req.ip}`)
        .then((res) => res.json())
        .then((json) => {
          const order = {
            name: req.params.name,
            address: json.query,
            city: json.city,
            zipCode: json.zip,
            country: json.country,
          };
          let sql = 'INSERT INTO customer SET ?';
          let query = db.query(sql, order, (err, resultB) => {
            if (err) throw err;
            res.status(200).json({
              sucsess: 'true',
              data: order,
            });
          });
        });
    }
  });
});

// UpDate Order

app.patch('/orders/:id', (req, res) => {
  let orderSql = `SELECT * FROM orders WHERE id = ${req.params.id}`;
  let orderQuery = db.query(orderSql, (err, resultA) => {
    if (err) {
      throw err;
    }
    let sql = `UPDATE orders SET status = 'Complete' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
      if (err) throw err;
    });
    let getSqlQuery = `SELECT * FROM orders WHERE id = ${req.params.id}`;
    db.query(getSqlQuery, (err, resultB) => {
      if (resultB.status === 'Complete') {
        return res.status(500).json({
          sucsess: 'false',
          error: 'Order already Taken',
        });
      }
      res.status(200).json({
        sucsess: 'true',
        data: resultB,
      });
    });
  });
});

app.get('/orders/:id', getOrders);

function getOrders(req, res, next) {
  const limit = req.query.limit;
  const page = req.query.page;
  const offset = (page - 1) * limit;
  const prodsQuery = `SELECT * FROM orders WHERE customerId = '${req.params.id}' 'limit ' + ${limit} + ' OFFSET ' + ${offset}`;
  let query = db.query(prodsQuery, (err, results) => {
    if (err) {
      return res.status(500).json({
        sucsess: false,
        error: err,
      });
    }
    res.status(200).json({
      sucsess: 'true',
      data: results,
    });
  });
}

module.exports = app;
