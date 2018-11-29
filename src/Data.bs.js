// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");

var places = /* :: */[
  /* record */[
    /* id */"ff831a0f-d545-4439-a82b-f2fba7009601",
    /* name */"HERMAN Belgian Bar",
    /* description */"Best Belgian Beer",
    /* image : record */[
      /* url */"https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-1/p480x480/37274232_1878588205517912_6063607735839096832_n.jpg?_nc_cat=108&_nc_ht=scontent-frt3-2.xx&oh=c80c71f32cf65a8426832b735372cfb5&oe=5CA5FF21",
      /* attribution */"HERMAN",
      /* attributionUrl */"https://www.facebook.com/bravebelgians"
    ],
    /* address */"Sch\xc3\xb6nhauser Allee 173, 10119 Berlin",
    /* phone */undefined,
    /* email */undefined,
    /* coordinates : record */[
      /* lat */52.5323539,
      /* lng */13.4123515
    ]
  ],
  /* :: */[
    /* record */[
      /* id */"323e5faf-c52b-4651-8329-94157958102e",
      /* name */"Café Liebling",
      /* description */"Best bar to hang out after work",
      /* image : record */[
        /* url */"https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/557199_350331171685098_278284137_n.jpg?_nc_cat=108&_nc_ht=scontent-frt3-2.xx&oh=8d5c3c5894f59ecdaae69fec94377e24&oe=5CAB6460",
        /* attribution */"Caf\xc3\xa9 Liebling",
        /* attributionUrl */undefined
      ],
      /* address */"Raumerstra\xc3\x9fe 36A, 10437 Berlin",
      /* phone */"030 41198209",
      /* email */undefined,
      /* coordinates : record */[
        /* lat */52.5323526,
        /* lng */13.3970306
      ]
    ],
    /* :: */[
      /* record */[
        /* id */"be9a55d1-722c-4f88-82e2-980d96ccf06c",
        /* name */"The Bird",
        /* description */"Greasiest burger you will ever eat",
        /* image : record */[
          /* url */"https://static1.squarespace.com/static/59d28bcf29f187ae0fac58ce/t/59e8b035dc2b4a633cf5abfc/1540722980450/?format=1500w",
          /* attribution */"Slawomir Urban",
          /* attributionUrl */"www.slawourban.com"
        ],
        /* address */"Am Falkpl. 5, 10437 Berlin",
        /* phone */"030 51053283",
        /* email */"thebirdreservations@gmail.com",
        /* coordinates : record */[
          /* lat */52.53235,
          /* lng */13.3970306
        ]
      ],
      /* [] */0
    ]
  ]
];

var names = $$Array.of_list(List.map((function (place) {
            return place[/* name */1];
          }), places));

function search(term) {
  return List.find((function (place) {
                return place[/* name */1] === term;
              }), places);
}

var output = search("The Bird");

console.log(output);

exports.places = places;
exports.names = names;
exports.search = search;
exports.output = output;
/* names Not a pure module */
