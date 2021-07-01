# FULL STACK NODE APP

A **Full Stack** app built with Node.js and React.js

### About

A Full Stack Web App that Connects tho node.js endpoints that get's a list of available sim cards, list sim card orders,
place an order, and to take an order.

### posts

Running on `PORT :3200`

### Features

- Tests
- Extensibility
- The Javascript you know and love
- Minimal abstractions

## Clone the repository, install node packages and verify routes locally

```
cd sample-node-api
npm install
```

## Start

```
//on development

npm start:dev

//on production

mpm start:prod
```

The API runs on port `3200` by default.

## Set Up The data base

send a `POST` request to **all** this endpoint to setUp the databse

- `http://127.0.0.1:3200/createdb`
- `http://127.0.0.1:3200/createordersdbtable`
- `http://127.0.0.1:3200/createcustomerdbtable`
- `http://127.0.0.1:3200/createdbtable`

## Testing

The tests of the API can be found in /**tests** folder.SuperTest was used for API Testing.

To run the tests:

```
npm test
```

## end points

- `http://127.0.0.1:3200/createsimcard`

- `http://127.0.0.1:3200/sim-cards`

* `http://127.0.0.1:3200/order/:simID/:customerID`

- `http://127.0.0.1:3200/orders/:id/?page=1&limit=2`

- `http://127.0.0.1:3200/createCustomer`

- `http://127.0.0.1:3200/orders/:id`

## Creating a Sim Card

To create a new sim card send a `POST` request to `http://127.0.0.1:3200/createsimcard`.
In the request body you need to provide a unique name of th e sim card.

Response:

```json
{
  "sucsess": "true",
  "massege": "sim card created..."
}
```

Getting All Available Sim Cards

To get all availabe sim card send a `GET` request to `http://127.0.0.1:3200/sim-cards`.

Resonpse:

```json
 ]
        {
            "id": 5,
            "name": "undefinedsim"
        },
        {
            "id": 38,
            "name": "vodacom sim 1"
        },
        {
            "id": 40,
            "name": "vodacom sim 2"
        },
        {
            "id": 1,
            "name": "vodacom(1)sim"
        },
        {
            "id": 2,
            "name": "vodacomsim"
        }
    ]...
```

## Creatting a customer

To create a customer send a `POST` request to `http://127.0.0.1:3200/createCustomer`.
Provide a name in the Request Body

Request:

```json
{
  "name": "Rotonda"
}
```

Response:

```json
{
  "sucsess": "true",
  "data": {
    "name": "Rotonda",
    "address": "24.48.0.1",
    "city": "Montreal",
    "zipCode": "0950",
    "country": "Canada"
  }
}
```

## Creating a Order

To create a order send `POST` request to `http://127.0.0.1:3200/order/:simID/:customerID` with the sim id and customer id in the uri.

Respone:

```json
{
  "sucsess": "true",
  "data": {
    "newOrder": {
      "simId": "3",
      "customerId": "1",
      "deliveryAddress": {
        "city": "Montreal",
        "country": "Canada"
      }
    }
  }
}
```

## Getting Orders

To get all the orders send a `GET` request to `http://127.0.0.1:3200/orders`.

## Take Order

To take a order send a `PATCH` request to `http://127.0.0.1:3200/orders/:id`. Theis will return a order object with a status **Complete**.

Response:

```json
{
  "sucsess": "true",
  "data": [
    {
      "id": 4,
      "simId": 1,
      "customerId": 4,
      "createdAt": "2021-06-28T06:10:13.000Z",
      "status": "Completed"
    }
  ]
}
```

## Author

Rotonda Mulelu

link to postman https://www.getpostman.com/collections/84c21ae657836a337e93
