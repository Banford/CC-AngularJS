(function () {
    'use strict';

    angular
        .module('craftyMeetup')
        .service('reviews', reviews);

    function reviews($http) {
        return({
            getReview: getData
        });

        function getData(meetup) {
            $http.get("http://localhost:1530/api/reviews")
                .success(function(data) {

                    if (!meetup.reviews) meetup.reviews = [];

                    meetup.reviews.push(data);

                });
        }
    }
})();