export default {
  "data": [

    {
      "id": "uuid-1",
      "type": "point_of_interest",
      "attributes": {
        "name": "KH Linz",
        "latitude": 48.2432843,
        "longitude": 14.2362089,
        "description": "Unfallkrankenhaus in Linz",
        "address": "KH-Strasse 21, 4020 Linz",
        "city": "Linz",
        "zip": "4020",
        "country": "Austria",
        "phones": [
          "+4310000000",
          "+43664000000"
        ],
        "opening_hours": {
          "mo": [{
            "from": 8,
            "to": 10
          }],
          "tu": [{
            "from": 8,
            "to": 10
          }],
          "we": [{
            "from": 8,
            "to": 10
          }],
          "th": [{
            "from": 8,
            "to": 10
          }],
          "fr": [{
            "from": 8,
            "to": 10
          }],
          "sa": [{
            "from": 8,
            "to": 10
          }],
          "su": [{
            "from": 8,
            "to": 10
          }]
        },
        "mails": [
          "office@domain.at",
          "office2@domain.at"
        ],
        "webaddress": "http://maybekhlinz.at"
      },
      "relationships": {
        "tags": {
          "data": [{
            "id": "1",
            "type": "tag"
          }, {
            "id": "2",
            "type": "tag"
          }]
        }
      }
    },
    {
      "id": "uuid-2",
      "type": "point_of_interest",
      "attributes": {
        "name": "KH Pasching",
        "latitude": 48.242617, 
        "longitude": 14.238602,
        "description": "Unfallkrankenhaus in Pasching",
        "address": "KH-Strasse 21, 4020 Pasching",
        "city": "Pasching",
        "zip": "4020",
        "country": "Austria",
        "phones": [
          "+4310000000",
          "+43664000000"
        ],
        "opening_hours": {
          "mo": [{
            "from": 8,
            "to": 10
          }],
          "tu": [{
            "from": 8,
            "to": 10
          }],
          "we": [{
            "from": 8,
            "to": 10
          }],
          "th": [{
            "from": 8,
            "to": 10
          }],
          "fr": [{
            "from": 8,
            "to": 10
          }],
          "sa": [{
            "from": 8,
            "to": 10
          }],
          "su": [{
            "from": 8,
            "to": 10
          }]
        },
        "mails": [
          "office@domain.at",
          "office2@domain.at"
        ],
        "webaddress": "http://maybekhlinz.at"
      },
      "relationships": {
        "tags": {
          "data": [{
            "id": "1",
            "type": "tag"
          }, {
            "id": "2",
            "type": "tag"
          }]
        }
      }
    }

  ],
  "included": [{
    "type": "tag",
    "id": "1",
    "attributes": {
      "name": "Shelters",
      "key": "translation_key_shelter",
      "description": "some tag desc"
    }
  }, {
    "type": "tag",
    "id": "2",
    "attributes": {
      "name": "Woman",
      "key": "translationkey_woman",
      "description": "some tag desc"
    }
  }]
}