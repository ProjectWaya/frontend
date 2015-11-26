import points from "./static-data/points/points";

export default function() {
  this.get('/api/en/v1/points_of_interest', function(db, request) {
    return points;
  });
}