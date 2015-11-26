import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {

    payload.data = payload.data.map((p) => {
      p.type = "point";
      return p;
    });

    return this._super(...arguments);
  }
});