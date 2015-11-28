export default {
    "data": [
        {
            "id": "uuid-1",
            "type": "country",
            "attributes": {
                "name": "France",
                "key": "country_fr"
            },
            "relationships": {
                "cities": {
                    "data": [
                        {
                            "id": "1",
                            "type": "city"
                        },
                        {
                            "id": "2",
                            "type": "city"
                        }
                    ]
                }
            }
        },
        {
            "id": "uuid-2",
            "type": "country",
            "attributes": {
                "name": "Austria",
                "key": "country_at"
            },
            "relationships": {
                "cities": {
                    "data": [
                        {
                            "id": "3",
                            "type": "city"
                        },
                        {
                            "id": "4",
                            "type": "city"
                        }
                    ]
                }
            }
        }        
    ],
    "included": [
        {
            "type": "city",
            "id": "1",
            "attributes": {
                "name": "Paris",
                "key": "paris_key",
                "zip_code": "75001"
            }
        },
        {
            "type": "city",
            "id": "2",
            "attributes": {
                "name": "Calais",
                "key": "calais_key",
                "zip_code": "62100"
            }
        },
        {
            "type": "city",
            "id": "3",
            "attributes": {
                "name": "Linz",
                "key": "linz_key",
                "zip_code": "4040"
            }
        },
        {
            "type": "city",
            "id": "4",
            "attributes": {
                "name": "Pasching",
                "key": "pasching_key",
                "zip_code": "4061"
            }
        }        
    ]
};