
/**
 * Module dependencies.
 */

var express = require('express'),
	routes = require('./routes'),
	user = require('./routes/user'),
	app = express(),
	http = require('http'),
	path = require('path'),
	nib = require('nib'),
	server = http.createServer(app).listen(process.env.PORT || 3000, function(){
		console.log('Express server listening on port ' + app.get('port'));
	}),
	socket = require('./routes/socket'),
	io = require('socket.io').listen(server);
	
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/chat', function(){
	return 'chatting';
});

// io.set('heartbeat timeout', 0);
io.set('heartbeat interval', 100);
//io.set('log', 0);	// turn off debug message

io.sockets.on('connection', socket);

// io.disable('heartbeats');