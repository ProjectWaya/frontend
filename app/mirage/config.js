import points from "./static-data/points/points";
import userStatus from "./static-data/user-status/user-status";
import tags from "./static-data/tags/tags";
import countries from "./static-data/countries/countries";

export default function() {
  this.namespace = "/api/en/v1";

  this.get('/tags', function(db, request) {
    return tags;
  });

  this.get('/points_of_interest', function(db, request) {
    return points;
  });

  this.get('/user_statuses', function(db, request) {
    return userStatus;
  });

  this.get('/countries', function(db, request) {
    return countries;
  });  
}