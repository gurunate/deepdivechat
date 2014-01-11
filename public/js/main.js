/**
 * @author Nate Johnson
 */
require.config({
	baseUrl : 'js',

	paths : {
		jquery : 'libs/jquery-1.10.2.min',
		angular : 'libs/angular.min',
		socket : 'libs/socket.io.min',
		domReady : 'libs/require/domReady',
		text : 'libs/require/text',
		css : 'libs/require/css'
	}
});

require(['modules/chat', 'domReady!'], function(Chat) {
	// TODO implement
	// new Chat('.chat');
});
