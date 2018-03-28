'use strict';
const AWS = require('aws-sdk'); 
const uuid = require('uuid');
const twilioaccountid = proceess.env.Twilio_SSID;
const Twilio_Token = process.env.Twilio_Token;
const Twilio_phoneNumber = process.env.Twilio_phoneNumber;
const Calling_Number = process.env.Calling_Number;
const twilio = require('twilio');
const client = new twilio(Twilio_SSID, Twilio_Token);
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();

module.exports.Post = (event, context, callback) => {
  event.Records.forEach((record) => {
    const fileName = record.s3.object.key;
    const action = record.eventName
    const Time = record.eventTime

    let params = {
      TableName: 'dropbox-minini',
      Item: {
        Id: uuid.v1(),
        fileName: this.fileName,
        Action: this.action,
        Time: this.Time
      }
    }
    client.messages.create({
      to: Calling_Number,
      from: Twilio_phoneNumber,
      body:'hi you have added' + fileName + 'in your database';
    },
    (error,message) => {
      window.alert(message);
    })

    dynamoDb.put(params, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
    })
});
};