angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    },
    refresh: function() {
    }
  };
})
.factory('Cities', function($http) {
    // Some fake testing data
    var cities = [{
      id: 0,
      name: 'Barcelona',
      query: 'barcelona,es'
    }, {
			id: 1,
			name: 'Manlleu',
			query: 'manlleu,es'
		}];



  return {
    get: function(cityQuery) {
      return $http.get('http://api.openweathermap.org/data/2.5/weather?q='+cityQuery+'&APPID=155de3b370efd8e0f45c05494dfb08e9');
    },
		oldget: function(cityId) {
			for (var i = 0; i < cities.length; i++) {
				if (cities[i].id === parseInt(cityId)) {
					return cities[i];
				}
			}
			return null;
		},
    all: function() {
      return cities;
    },
    refresh: function() {
    }
  }

});
