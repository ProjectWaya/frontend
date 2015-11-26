import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {

    payload.data = payload.data.map((t) => {
      t.type = "tag";
      return t;
    });

    return this._super(...arguments);
  }
});