import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  pathForType() {
    // TODO handler queryParams
    return 'points_of_interest';
  }
});