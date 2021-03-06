'use strict';

/* Controllers */

var eventcatControllers = angular.module('eventcatControllers', []);

// eventcatControllers.controller('EventListCtrl', ['$scope', '$http',
//     function($scope, $http) {
//         $http.get('cities/events.json').success(function(data) {
//             $scope.events = data;
//         });
//     }
// ]);

eventcatControllers.controller('EventListCtrl', ['$scope', 'httpEventsFactory',
    function($scope, httpEventsFactory) {
        httpEventsFactory.getEvents()
            .then(function(data) {
              console.log(data);
                $scope.events = data;
            })
            .catch(function(err) {
                console.log(err);
            });
    $scope.orderProp = 'age';
    }
]);

eventcatControllers.controller('EventDetailCtrl', ['$scope', '$routeParams', 'httpFactory',
    function($scope, $routeParams, httpFactory) {

        httpFactory.getCity($routeParams.name)
            .then(function(data) {
                console.log(data);
                $scope.city = data;
                $scope.num = $scope.city.mktoId;
                console.log($scope.num);
                MktoForms2.loadForm("//app-sjh.marketo.com", "494-OYA-934", $scope.num);
            })
            .catch(function(err) {
                console.log(err);
            })
    }
]);

eventcatControllers.controller('DisplayCtrl', ['$scope', '$location',
    function($scope, $location) {
        $scope.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
    }
]);

var eventcatFactories = angular.module('eventcatFactories', []);

eventcatFactories.factory('httpFactory', ['$http', function($http) {

    var getCity = function(cityId) {
        return $http.get('cities/' + cityId + '.json')
            .then(function(res) {
                return res.data;
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    return {
        getCity: getCity
    };

}]);

eventcatFactories.factory('httpEventsFactory', ['$http', function($http) {

    var getEvents = function() {
        return $http.get('cities/events.json')
            .then(function(res) {
                return res.data;
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    return {
        getEvents: getEvents
    };

}]);

// eventcatControllers.controller("htmlCtrl", ['$scope', function($scope){
//   this.html = "<h1>" + $scope.num + "</h1>";
// }
// ]);

// eventcatControllers.factory('messages', function(){
//     var messages = {};

//     messages.list = [];

//   messages.add = function(message){
//     messages.list.push({id: messages.list.length, text: message});
//   };

//     return messages;
// });

// eventcatControllers.controller('ListCtrl', function (messages){
//   var self = this;

//   self.messages = messages.list;
// });

// eventcatControllers.controller('PostCtrl', function (messages){
//   var self = this;

//   self.newMessage = 'Hello World!';

//   self.addMessage = function(message){
//     messages.add(message);
//     self.newMessage = '';
//   };
// });

// eventcatControllers.controller('ContentCtrl', ['$scope', '$sce',
//     function($scope, $sce) {

//       // var loc = $scope.city;

//         $scope.skipValidation = function(value) {
//             return $sce.trustAsHtml(value);
//         };

//         // $scope.cityStr = $scope.city.LandingPageContent;

//         $scope.spliceSlice = function(str, index, count, add) {
//             return str.slice(0, index) + (add || "") + str.slice(index + count);
//         };

//         $scope.strHTML = function(string) {
//             var ul = false;
//             var p = false;
//             var strArr = string.split("\n");
//             for (var i = 0; i < strArr.length; i++) {
//                 if (strArr[i].charCodeAt(0) === 8226) {
//                     if (!ul) {
//                         strArr[i] = $scope.spliceSlice(strArr[i], 0, 0, '<ul><li>');
//                         ul = true;
//                     } else {
//                         strArr[i] = $scope.spliceSlice(strArr[i], 0, 0, '<li>');
//                     }
//                     strArr[i] = $scope.spliceSlice(strArr[i], strArr[i].length - 1, 0, '</li>');
//                 } else if (ul) {
//                     strArr[i] = $scope.spliceSlice(strArr[i], 0, 0, '</ul>');
//                     strArr[i] = $scope.spliceSlice(strArr[i], 5, 0, '<p>');
//                     strArr[i] = $scope.spliceSlice(strArr[i], strArr[i].length, 0, '</p>');
//                 } else {
//                     strArr[i] = $scope.spliceSlice(strArr[i], 0, 0, '<p>');
//                     strArr[i] = $scope.spliceSlice(strArr[i], strArr[i].length, 0, '</p>');
//                 }
//             }
//             return $scope.skipValidation(strArr.join(""));
//         };
//         // $scope.contentHTML = $scope.strHTML($scope.blurb);
//     }
// ]);
