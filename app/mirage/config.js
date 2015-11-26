import points from "./static-data/points/points";
import tags from "./static-data/tags/tags";

export default function() {

  this.get('/api/en/v1/tags', function(db, request) {
    return tags;
  });

  this.get('/api/en/v1/points_of_interest', function(db, request) {
    return points;
  });
}