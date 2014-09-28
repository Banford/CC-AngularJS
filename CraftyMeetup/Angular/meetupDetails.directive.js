(function() {
    'use strict';

    angular
        .module('craftyMeetup')
        .directive('meetupDetails', meetupDetails);
    
    function meetupDetails () {

        var directive = {
            restrict: 'E',
            templateUrl: '/Angular/Templates/MeetupDetails.html'
        };
        return directive;

        
    }

})();