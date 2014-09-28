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
        .controller('meetupsController', function ($scope, $http, reviews) {

            $scope.meetups = [];

            $scope.submitNewMeetup = function (newMeetup) {
                if ($scope.addMeetupForm.$valid) {
                    $scope.meetups.push(angular.copy(newMeetup));
                    $scope.newMeetup = createNewMeetup();
                }
            }

            $scope.getReview = function(meetup) {
                reviews.getReview(meetup);
            }

            //$scope.getReview = function (meetup) {
            //    $http.get("http://localhost:1530/api/reviews")
            //        .success(function(data) {

            //            if (!meetup.reviews) meetup.reviews = [];

            //            meetup.reviews.push(data);

            //        });
            //}

            init();

            function createNewMeetup() {
                return {
                    name: "",
                    location: "",
                    email: "",
                    date: null
                };
            }

            function init() {
                $scope.meetups = meetups;
                $scope.newMeetup = createNewMeetup();
            }
        });


})();
