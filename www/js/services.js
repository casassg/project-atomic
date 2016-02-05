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
		} , {
			id: 2,
			name: 'New York',
			query: 'new york'
		}, {
			id: 3,
			name: 'Bangkok',
			query: 'bangkok'
		}, {
			id: 4,
			name: 'Paris',
			query: 'paris'
		}, {
			id: 5,
			name: 'London',
			query: 'london'
		}, {
			id: 6,
			name: 'Pekin',
			query: 'beijing'
		}, {
			id: 7,
			name: 'Moscow',
			query: 'moscow'
		}, {
			id: 8,
			name: 'Munich',
			query: 'munich'
		}, {
			id: 9,
			name: 'Berlín',
			query: 'berlin'
		}, {
			id: 10,
			name: 'Münster',
			query: 'münster'
		} ];

		function toTitleCase(str)
		{
		    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		}

  return {
    query: function(cityQuery) {
      return $http.get('http://api.openweathermap.org/data/2.5/weather?q='+cityQuery+'&APPID=155de3b370efd8e0f45c05494dfb08e9');
    },
		get: function(cityId) {
			for (var i = 0; i < cities.length; i++) {
				if (cities[i].id === parseInt(cityId)) {
					return cities[i];
				}
			}
			return null;
		},
		add: function(newQuery) {
			var title = toTitleCase(newQuery);
			var lastId = cities.length;
			for (var i = 0; i < cities.length; i++) {
				if (cities[i].name === title) {
					return cities[i].id;
				}
			}
			cities.push({
				id : lastId,
				name : toTitleCase(newQuery),
				query : newQuery
			});
			return lastId;
		},
    all: function() {
      return cities;
    },
    refresh: function() {
    }
  }

});
