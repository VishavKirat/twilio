
'use strict';
const AWS = require('aws-sdk'); 
const uuid = require('uuid');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();


module.exports.Delete = (event, context, callback) => {
    event.Records.forEach((record) => {
        const fileName = record.s3.object.key;
        const action = record.eventName
        const Time = record.eventTime
    
        const params = {
          TableName: 'dropbox-minini',
          Item: {
            Id: uuid.v1(),
            fileName: this.fileName,
            Action: this.action,
            Time: this.Time
        }
      }
  
      dynamoDb.put(params, (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
      })
  });
  };