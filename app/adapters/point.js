import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  //host: 'https://sleepy-fortress-7157.herokuapp.com',
  pathForType() {
    return 'points_of_interest';
  }
});