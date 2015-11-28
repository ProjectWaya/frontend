import points from "./static-data/points/points";
import userStatus from "./static-data/user-status/user-status";
import tags from "./static-data/tags/tags";

export default function() {
  this.namespace = "/api/en/v1";

  this.get('/tags', function(db, request) {
    return tags;
  });

  this.get('/points_of_interest', function(db, request) {
    return points;
  });

  this.passthrough('https://sleepy-fortress-7157.herokuapp.com/**');
}
