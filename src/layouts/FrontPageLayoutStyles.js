// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Css   = require("bs-css/src/Css.js");
var Theme = require("../styles/Theme.js");

var root = Css.style(/* :: */[
      Css.display(/* Flex */3),
      /* :: */[
        Css.flexDirection(/* Column */2),
        /* :: */[
          Css.backgroundColor(Theme.Inverted[/* Color */0][/* background */0]),
          /* :: */[
            Css.minHeight(Css.vh(100)),
            /* :: */[
              Css.color(Theme.Inverted[/* Color */0][/* text */1]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var header = Css.style(/* :: */[
      Css.margin(Css.em(1.45)),
      /* [] */0
    ]);

var links = Css.style(/* :: */[
      Css.selector("& > div", /* :: */[
            Css.display(/* Flex */3),
            /* :: */[
              Css.textAlign(/* Center */3),
              /* :: */[
                Css.unsafe("padding", "0.5em 1.45em"),
                /* :: */[
                  Css.selector("& > .left", /* :: */[
                        Css.flex(1),
                        /* [] */0
                      ]),
                  /* :: */[
                    Css.selector("& > .right", /* :: */[
                          Css.flex(1),
                          /* :: */[
                            Css.textAlign(/* Right */2),
                            /* [] */0
                          ]
                        ]),
                    /* :: */[
                      Css.selector("& a", /* :: */[
                            Css.unsafe("fontVariant", "small-caps"),
                            /* :: */[
                              Css.textDecorationLine(/* None */0),
                              /* :: */[
                                Css.textTransform(/* Lowercase */2),
                                /* :: */[
                                  Css.unsafe("margin", "0 1em"),
                                  /* :: */[
                                    Css.opacity(0.75),
                                    /* :: */[
                                      Css.selector("&:hover", /* :: */[
                                            Css.opacity(1),
                                            /* [] */0
                                          ]),
                                      /* [] */0
                                    ]
                                  ]
                                ]
                              ]
                            ]
                          ]),
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]
          ]),
      /* [] */0
    ]);

var inactiveLink = Css.style(/* :: */[
      Css.important(Css.opacity(0.25)),
      /* :: */[
        Css.cursor(/* Custom */["default"]),
        /* [] */0
      ]
    ]);

var publishLink = Css.style(/* :: */[
      Css.flex(1),
      /* :: */[
        Css.fontSize(Css.em(0.85)),
        /* :: */[
          Css.unsafe("whiteSpace", "nowrap"),
          /* :: */[
            Css.outline(Css.px(1), /* Solid */2, Theme.Inverted[/* Color */0][/* text */1]),
            /* :: */[
              Css.unsafe("padding", ".5ex 1.5ex"),
              /* :: */[
                Css.selector("&:hover", /* :: */[
                      Css.outline(Css.px(1), /* Solid */2, Theme.Inverted[/* Color */0][/* text */1]),
                      /* [] */0
                    ]),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var title = Css.style(/* :: */[
      Css.unsafe("margin", "1em 0 0"),
      /* :: */[
        Css.textAlign(/* Center */3),
        /* :: */[
          Css.unsafe("fontVariant", "small-caps"),
          /* :: */[
            Css.fontSize(Css.rem(2.5)),
            /* :: */[
              Css.lineHeight(Css.em(1.1)),
              /* :: */[
                Css.color(Css.hex("fff6")),
                /* :: */[
                  Css.selector("& > em", /* :: */[
                        Css.fontStyle(/* Normal */0),
                        /* :: */[
                          Css.color(Css.white),
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

var logo = Css.style(/* :: */[
      Css.display(/* Block */0),
      /* :: */[
        Css.unsafe("margin", "0 auto"),
        /* :: */[
          Css.height(Css.em(3)),
          /* :: */[
            Css.unsafe("fill", Theme.Inverted[/* Color */0][/* text */1]),
            /* [] */0
          ]
        ]
      ]
    ]);

exports.root         = root;
exports.header       = header;
exports.links        = links;
exports.inactiveLink = inactiveLink;
exports.publishLink  = publishLink;
exports.title        = title;
exports.logo         = logo;
/* root Not a pure module */
