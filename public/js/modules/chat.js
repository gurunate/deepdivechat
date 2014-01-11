/**
 * @author Nate Johnson
 */
 define(['jquery', 'angular', 'socket', 'domReady!', 'css!/css/chat.css'], function($) {
 	
	var socket = io.connect();
	var now = new Date();
	var sender = 'Guest' + now.getTime();

 	var chatApp = angular.module('chatApp', []).directive('initFocus', function() {
 		return function(scope, el, attr) {
 			el[0].focus();
 		};
 	});

 	chatApp.controller('chatCtrl', function ($scope, $timeout) {
 		$scope.messages = [];

 		$scope.$watch('messages', function() { 
 			$timeout(function(){
 				$('.chat ul').scrollTop($('.chat ul')[0].scrollHeight);
 			}, 10);
 		}, true);

		// send chat messages
 		$scope.chat = function(txt) {
 			if (txt) {
 				
 				var msg = {
	 				sender : sender,
	 				msg : txt
	 			};
	 			
	 			$scope.messages.push(msg);
		 		socket.emit('chat', msg);
	 			$scope.msg = '';
 			}
 		};

		// listen chat responses
	 	socket.on('chat', function (data) {
	 		$timeout(function() {
		 		$scope.messages.push(data);
	 		}, 10);
	 	});
 	});
 });