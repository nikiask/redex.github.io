// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Css          = require("bs-css/src/Css.js");
var Theme        = require("./Theme.js");
var GlobalStyles = require("./GlobalStyles.js");

var widthContainer = Css.style(/* :: */[
      Css.unsafe("label", "width-container"),
      /* :: */[
        Css.unsafe("margin", "0 auto"),
        /* :: */[
          Css.maxWidth(Css.px(960)),
          /* :: */[
            Css.width(Css.pct(100)),
            /* [] */0
          ]
        ]
      ]
    ]);

var html = Css.style(/* :: */[
      Css.selector("& h1", /* :: */[
            Css.fontSize(Css.rem(2.25)),
            /* :: */[
              Css.fontWeight(/* Bold */1),
              /* :: */[
                Css.lineHeight(Css.em(1.1)),
                /* :: */[
                  Css.marginBottom(Css.rem(1.45)),
                  /* [] */0
                ]
              ]
            ]
          ]),
      /* :: */[
        Css.selector("& h2", /* :: */[
              Css.fontSize(Css.rem(1.62671)),
              /* :: */[
                Css.fontWeight(/* Bold */1),
                /* :: */[
                  Css.lineHeight(Css.em(1.1)),
                  /* :: */[
                    Css.marginBottom(Css.rem(1.45)),
                    /* [] */0
                  ]
                ]
              ]
            ]),
        /* :: */[
          Css.selector("& h3", /* :: */[
                Css.fontSize(Css.rem(1.38316)),
                /* :: */[
                  Css.fontWeight(/* Bold */1),
                  /* :: */[
                    Css.lineHeight(Css.em(1.1)),
                    /* :: */[
                      Css.marginBottom(Css.rem(1.45)),
                      /* [] */0
                    ]
                  ]
                ]
              ]),
          /* :: */[
            Css.selector("& h1, & h2, & h3, & h4, & h5", /* :: */[
                  Css.selector("& > a.anchor", /* :: */[
                        Css.marginLeft(Css.px(-20)),
                        /* :: */[
                          Css.paddingRight(Css.px(4)),
                          /* :: */[
                            Css.selector("& > svg", /* :: */[
                                  Css.visibility(/* Hidden */1),
                                  /* [] */0
                                ]),
                            /* [] */0
                          ]
                        ]
                      ]),
                  /* :: */[
                    Css.hover(/* :: */[
                          Css.selector("& > a.anchor > svg", /* :: */[
                                Css.visibility(/* Visible */0),
                                /* [] */0
                              ]),
                          /* [] */0
                        ]),
                    /* [] */0
                  ]
                ]),
            /* :: */[
              Css.selector("& p", /* :: */[
                    Css.marginBottom(Css.rem(1.45)),
                    /* :: */[
                      Css.selector("& *:last-child", /* :: */[
                            Css.marginBottom(Css.zero),
                            /* [] */0
                          ]),
                      /* [] */0
                    ]
                  ]),
              /* :: */[
                Css.selector("& b, & strong", /* :: */[
                      Css.fontWeight(/* Bold */1),
                      /* [] */0
                    ]),
                /* :: */[
                  Css.selector("& i, & em", /* :: */[
                        Css.fontStyle(/* Italic */1),
                        /* [] */0
                      ]),
                  /* :: */[
                    Css.selector("& ol, & ul", /* :: */[
                          Css.margin(Css.zero),
                          /* :: */[
                            Css.marginLeft(Css.rem(1.45)),
                            /* :: */[
                              Css.marginBottom(Css.rem(1.45)),
                              /* :: */[
                                Css.unsafe("listStylePosition", "outside"),
                                /* :: */[
                                  Css.unsafe("listStyleImage", "none"),
                                  /* [] */0
                                ]
                              ]
                            ]
                          ]
                        ]),
                    /* :: */[
                      Css.selector("& li", /* :: */[
                            Css.marginBottom(Css.rem(1.45 / 2)),
                            /* :: */[
                              Css.selector("& > ol, & > ul", /* :: */[
                                    Css.marginLeft(Css.rem(1.45)),
                                    /* :: */[
                                      Css.marginBottom(Css.rem(1.45 / 2)),
                                      /* :: */[
                                        Css.marginTop(Css.rem(1.45 / 2)),
                                        /* [] */0
                                      ]
                                    ]
                                  ]),
                              /* :: */[
                                Css.selector("& *:last-child", /* :: */[
                                      Css.marginBottom(Css.zero),
                                      /* [] */0
                                    ]),
                                /* :: */[
                                  Css.selector("& > p", /* :: */[
                                        Css.marginBottom(Css.rem(1.45 / 2)),
                                        /* [] */0
                                      ]),
                                  /* [] */0
                                ]
                              ]
                            ]
                          ]),
                      /* :: */[
                        Css.selector("& ol", /* :: */[
                              Css.unsafe("listStyleType", "decimal"),
                              /* :: */[
                                Css.selector("& li", /* :: */[
                                      Css.paddingLeft(Css.zero),
                                      /* [] */0
                                    ]),
                                /* [] */0
                              ]
                            ]),
                        /* :: */[
                          Css.selector("& ul", /* :: */[
                                Css.unsafe("listStyleType", "disc"),
                                /* :: */[
                                  Css.selector("& li", /* :: */[
                                        Css.paddingLeft(Css.zero),
                                        /* [] */0
                                      ]),
                                  /* [] */0
                                ]
                              ]),
                          /* :: */[
                            Css.selector("& code", /* :: */[
                                  Css.unsafe("background", "hsla(0, 0%, 0%, 0.04)"),
                                  /* :: */[
                                    Css.fontFamily("'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono', 'Liberation Mono', Menlo, Courier, monospace"),
                                    /* :: */[
                                      Css.fontSize(Css.rem(0.85)),
                                      /* :: */[
                                        Css.lineHeight(Css.rem(1.45)),
                                        /* :: */[
                                          Css.unsafe("padding", ".2em 0"),
                                          /* [] */0
                                        ]
                                      ]
                                    ]
                                  ]
                                ]),
                            /* :: */[
                              Css.selector("& pre", /* :: */[
                                    Css.marginBottom(Css.rem(1.45)),
                                    /* :: */[
                                      Css.fontSize(Css.rem(0.85)),
                                      /* :: */[
                                        Css.lineHeight(Css.rem(1.42)),
                                        /* :: */[
                                          Css.unsafe("background", "hsla(0, 0%, 0%, 0.04)"),
                                          /* :: */[
                                            Css.borderRadius(Css.px(3)),
                                            /* :: */[
                                              Css.overflow(/* Auto */3),
                                              /* :: */[
                                                Css.unsafe("wordWrap", "normal"),
                                                /* :: */[
                                                  Css.padding(Css.rem(1.45)),
                                                  /* :: */[
                                                    Css.selector("& code", /* :: */[
                                                          Css.background(/* None */0),
                                                          /* :: */[
                                                            Css.lineHeight(Css.em(1.42)),
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
                                      ]
                                    ]
                                  ]),
                              /* :: */[
                                Css.selector("& a", /* :: */[
                                      Css.color(Theme.Color[/* link */5]),
                                      /* :: */[
                                        Css.textDecorationLine(/* None */0),
                                        /* :: */[
                                          Css.selector("&:hover", /* :: */[
                                                Css.textDecorationLine(/* Values */[/* :: */[
                                                        /* Underline */0,
                                                        /* [] */0
                                                      ]]),
                                                /* [] */0
                                              ]),
                                          /* [] */0
                                        ]
                                      ]
                                    ]),
                                /* [] */0
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var _reset = GlobalStyles._reset;

var _global = GlobalStyles._global;

exports._reset         = _reset;
exports._global        = _global;
exports.widthContainer = widthContainer;
exports.html           = html;
/* widthContainer Not a pure module */
