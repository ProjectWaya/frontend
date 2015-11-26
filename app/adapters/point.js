import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  pathForType() {
    // TODO handler queryParams
    return '/api/en/v1/points_of_interest';
  }
});