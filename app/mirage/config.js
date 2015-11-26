import points from "./static-data/points/points";
import userStatus from "./static-data/user-status/user-status";

export default function() {
  this.namespace = "/api/en/v1";

  this.get('/points_of_interest', function(db, request) {
    return points;
  });

  this.get('/user_statuses', function(db, request) {
    return userStatus;
  });
}