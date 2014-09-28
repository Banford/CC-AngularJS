(function() {
    'use strict';

    angular
        .module('craftyMeetup')
        .directive('blacklist', blacklist);
    
    function blacklist() {
        console.log("blacklist");
        var directive = {
            require: 'ngModel',
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, elem, attr, ngModel) {
            var blacklist = attr.blacklist.split(',');

            //For DOM -> model validation
            ngModel.$parsers.unshift(function (value) {
                var valid = blacklist.indexOf(value) === -1;
                ngModel.$setValidity('blacklist', valid);
                return valid ? value : undefined;
            });

            //For model -> DOM validation
            ngModel.$formatters.unshift(function(value) {
                ngModel.$setValidity('blacklist', blacklist.indexOf(value) === -1);
                return value;
            });
        }
    }

})();