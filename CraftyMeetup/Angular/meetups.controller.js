(function () {
    'use strict';
    var meetups = [
        {
            name: "Crafty Coders",
            location: "Basepoint",
            email: "ian@craftycoders.com",
            date: new Date("2014-10-02")
        },
        {
            name: "Foo Coders",
            location: "Brum",
            email: "foo@foocoders.com",
            date: new Date("2014-10-15")
        },
        {
            name: "WooWeb",
            location: "The Hive",
            email: "wooweb@names.co",
            date: new Date("2014-10-20")
        }
    ];

    angular
        .module('craftyMeetup')
        .controller('meetupsController', function ($scope) {

            $scope.submitNewMeetup = function (newMeetup) {
                // ToDo: Implement
            }

            init();

        function init() {
            $scope.meetups = meetups;
            $scope.newMeetup = {
                name: "",
                location: "",
                email: "",
                date: null
            };
        }
    });

    
})();
