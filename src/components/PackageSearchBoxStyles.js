// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Block  = require("bs-platform/lib/js/block.js");
var Glamor = require("bs-glamor/src/glamor.js");

var root = Glamor.css(/* :: */[
      Glamor.position("relative"),
      /* :: */[
        Glamor.flex("1"),
        /* [] */0
      ]
    ]);

var fakeInput = Glamor.css(/* :: */[
      Glamor.display("flex"),
      /* :: */[
        Glamor.background("white"),
        /* :: */[
          Glamor.fontSize("1.2em"),
          /* :: */[
            Glamor.width("100%"),
            /* :: */[
              Glamor.color("#dd4c39"),
              /* :: */[
                Glamor.alignItems("center"),
                /* :: */[
                  Glamor.padding("0 .5em"),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var searchIcon = Glamor.css(/* :: */[
      Glamor.fill("#dd4c39"),
      /* :: */[
        Glamor.opacity(".75"),
        /* :: */[
          Glamor.margin(".5em"),
          /* [] */0
        ]
      ]
    ]);

var input = Glamor.css(/* :: */[
      Glamor.display("block"),
      /* :: */[
        Glamor.background("white"),
        /* :: */[
          Glamor.border("none"),
          /* :: */[
            Glamor.padding(".75em .25em"),
            /* :: */[
              Glamor.width("100%"),
              /* :: */[
                Glamor.color("#dd4c39"),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var results = Glamor.css(/* :: */[
      Glamor.position("absolute"),
      /* :: */[
        Glamor.zIndex("10"),
        /* :: */[
          Glamor.width("100%"),
          /* :: */[
            Glamor.boxShadow("1px 1px 0 1px rgba(0, 0, 0, .05)"),
            /* :: */[
              /* Selector */Block.__(1, [
                  "& > div",
                  /* :: */[
                    Glamor.margin("0"),
                    /* :: */[
                      Glamor.borderTop("1px solid #eee"),
                      /* [] */0
                    ]
                  ]
                ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

exports.root       = root;
exports.fakeInput  = fakeInput;
exports.searchIcon = searchIcon;
exports.input      = input;
exports.results    = results;
/* root Not a pure module */