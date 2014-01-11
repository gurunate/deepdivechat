var MongoClient = require('mongodb').MongoClient;

module.exports = function (socket) {
	var greetings = [
		"Hello.",
		"Hi.",
		"How's it going?",
		"What's Up?",
		"Well, well, well.  Who do we have here?",
		"Hey guy.",
		"Hi-O.",
		"Hey Aaron, long time no see.  You look like you're hiding something.",
		"Aaron?  Sorry, you look so different I couldn't tell if it was you.  It's like you've aged 10 years in 2.",
		"What's the password?",
		"Were you followed?",
		"Are you a cop?"
	];

	socket.on('chat', function (data) {
		// broadcast new msg to all users
		socket.broadcast.emit('chat', data);
		
		// assemble response
		// var msg = {
			// // recipient : 'nate',
			// sender : 'Hal.io',
			// msg : greetings[Math.floor(Math.random() * greetings.length)],
			// // created : new Date().getTime()
		// };
// 		
		// // response
		// socket.emit('chat', msg);
		
		// store msg to disk
		// MongoClient.connect('mongodb://localhost:27017/chat', function(err, db) {
			// if (err)
				// throw err;
// 			
			// db.collection('messages').insert(msg, {
				// safe : true
			// }, function(err, records) {
				// console.log("Record added as " + records[0]._id);
			// });
		// });
	});
};