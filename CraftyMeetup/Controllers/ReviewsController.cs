using System;
using System.Collections.Generic;
using System.Web.Http;

namespace CraftyMeetup.Controllers
{
    public class ReviewsController : ApiController
    {
        public static List<Review> Reviews = new List<Review>
                                             {
                                                 new Review {Name = "Steve", Comment = "Nice venue", Rating = 5},
                                                 new Review {Name = "Jim", Comment = "Horrible place", Rating = 1},
                                                 new Review {Name = "Bill", Comment = "Great Wifi!", Rating = 4},
                                                 new Review {Name = "Ted", Comment = "Lovely Tea and Coffee", Rating = 5},
                                                 new Review {Name = "Barry", Comment = "Rude staff", Rating = 2},
                                                 new Review {Name = "Gordon", Comment = "Not engough parking", Rating = 3},
                                             };

        [HttpGet]
        public Review Get()
        {
            return Reviews[new Random().Next(0, (Reviews.Count - 1))];
        }
    }

    public class Review
    {
        public string Comment { get; set; }
        public string Name { get; set; }
        public int Rating { get; set; }
    }
}
