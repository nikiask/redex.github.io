// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';

var Theme = require("../styles/Theme.js");
var TypedGlamor = require("typed-glamor/src/TypedGlamor.bs.js");

var root = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.position(TypedGlamor.relative),
      /* :: */[
        TypedGlamor.flex_(TypedGlamor.$$int(1)),
        /* [] */0
      ]
    ]);

var fakeInput = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.display(TypedGlamor.flex),
      /* :: */[
        TypedGlamor.backgroundColor(Theme.Panel[/* Color */0][/* background */0]),
        /* :: */[
          TypedGlamor.fontSize(TypedGlamor.em(1.2)),
          /* :: */[
            TypedGlamor.width(TypedGlamor.pct(100)),
            /* :: */[
              TypedGlamor.alignItems(TypedGlamor.center),
              /* :: */[
                TypedGlamor.padding2(TypedGlamor.zero, TypedGlamor.em(0.5)),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var searchIcon = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.unsafe("fill", Theme.Color[/* primary */0]),
      /* :: */[
        TypedGlamor.opacity(0.75),
        /* :: */[
          TypedGlamor.margin(TypedGlamor.em(0.5)),
          /* :: */[
            TypedGlamor.minWidth(TypedGlamor.em(1)),
            /* [] */0
          ]
        ]
      ]
    ]);

var input = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.padding2(TypedGlamor.em(0.75), TypedGlamor.em(0.25)),
      /* :: */[
        TypedGlamor.width(TypedGlamor.pct(100)),
        /* :: */[
          TypedGlamor.color(Theme.Color[/* primary */0]),
          /* :: */[
            TypedGlamor.select("::placeholder", /* :: */[
                  TypedGlamor.color(Theme.Color[/* primary */0]),
                  /* [] */0
                ]),
            /* [] */0
          ]
        ]
      ]
    ]);

var results = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.position(TypedGlamor.absolute),
      /* :: */[
        TypedGlamor.zIndex(TypedGlamor.$$int(100)),
        /* :: */[
          TypedGlamor.marginTop(TypedGlamor.ex(0.5)),
          /* :: */[
            TypedGlamor.width(TypedGlamor.pct(100)),
            /* :: */[
              TypedGlamor.boxShadows(/* :: */[
                    Theme.Shadow[/* overlay */0],
                    /* [] */0
                  ]),
              /* :: */[
                TypedGlamor.color(Theme.Color[/* text */4]),
                /* :: */[
                  TypedGlamor.select("& > div", /* :: */[
                        TypedGlamor.margin(TypedGlamor.zero),
                        /* :: */[
                          TypedGlamor.borderTop3(TypedGlamor.px(1), TypedGlamor.solid, Theme.Color[/* subtleBorder */6]),
                          /* [] */0
                        ]
                      ]),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var footer = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.backgroundColor(TypedGlamor.white),
      /* :: */[
        TypedGlamor.textAlign(TypedGlamor.right),
        /* :: */[
          TypedGlamor.select("> a", /* :: */[
                TypedGlamor.opacity(0.75),
                /* :: */[
                  TypedGlamor.hover(/* :: */[
                        TypedGlamor.opacity(1),
                        /* [] */0
                      ]),
                  /* [] */0
                ]
              ]),
          /* [] */0
        ]
      ]
    ]);

var algoliaLogo = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.height(TypedGlamor.em(0.85)),
      /* :: */[
        TypedGlamor.margin3(TypedGlamor.em(0.5), TypedGlamor.em(2), TypedGlamor.em(0.1)),
        /* [] */0
      ]
    ]);

exports.root = root;
exports.fakeInput = fakeInput;
exports.searchIcon = searchIcon;
exports.input = input;
exports.results = results;
exports.footer = footer;
exports.algoliaLogo = algoliaLogo;
/* root Not a pure module */
