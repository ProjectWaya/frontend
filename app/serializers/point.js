import DS from 'ember-data';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {

    payload.data = payload.data.map((p) => {
      p.type = "point";
      return p;
    });

    return this._super(...arguments);
  }
});