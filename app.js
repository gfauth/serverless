'use strict'

// app.js
const sls = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const AWS = require('aws-sdk');

const USERS_TABLE = process.env.USERS_TABLE;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

app.use(bodyParser.json({ strict: false }));

//Insert user endpoint
app.post('/users', function (req, res) {

  const { userId, name } = req.body;

  const params = {
    TableName: USERS_TABLE,
    Item: {
      userId: userId,
      name: name,
    },
  };

  dynamoDb.put(params, (error) => {
    if (error) {
      console.log(error);
      res.status(400).json({ error: `Could not create user ${userId}` });
    }
    res.json({ userId, name });
  });
});


//Select user endpoint
app.get('/users/:userId', function (req, res) {

  const params = {
    TableName: USERS_TABLE,
    Key: {
      userId: req.params.userId,
    },
  };

  dynamoDb.get(params, (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).json({ error: `Could not get user ${userId}` });
    }
    
    if (result.Item) {
      const { userId, name } = result.Item;
      res.json({ userId, name });
    } else {
      res.status(404).json({ error: `User ${userId} not found` });
    }
  });
});

//Handle the GET endpoint on the root route /
app.get('/', async (req, res, next) => {
  res.status(200).send('Hello my new serverless world!')
})

module.exports.server = sls(app)