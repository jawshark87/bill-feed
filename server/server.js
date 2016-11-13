// Require statements
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:8000/bill-feed-server';

// Add specified document 'doc' to db
var addDocument = function(doc, db, callback) {
	MongoClient.connect(url, function (err, db) {
		// Ensure connection to server is established
		assert.equal(null, err);
		console.log("Connected successfully to server");
		// Add document doc to database
		var collection = db.collection('documents');
		collection.insert(doc, function (err, result) {
			assert.equal(err, null);
			callback(result);
		});
	}
}