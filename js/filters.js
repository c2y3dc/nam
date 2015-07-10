'use strict';

/* Controllers */

angular.module('eventcatFilters', []).filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);