// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Icon                = require("../bindings/Icon.js");
var Block               = require("bs-platform/lib/js/block.js");
var Curry               = require("bs-platform/lib/js/curry.js");
var React               = require("react");
var Config              = require("../Config.js");
var Rebase              = require("@glennsl/rebase/src/Rebase.bs.js");
var Control             = require("./helpers/Control.js");
var ReasonReact         = require("reason-react/src/ReasonReact.js");
var GatsbyLink          = require("gatsby-link");
var Algoliasearch       = require("algoliasearch");
var SearchBoxStyles     = require("./SearchBoxStyles.js");
var SearchResultItem    = require("./SearchResultItem.js");
var AlgoliasearchHelper = require("algoliasearch-helper");

var Key = /* module */[
  /* down */40,
  /* up */38,
  /* enter */13
];

function decodeResult(json) {
  return Object.assign({
              slug: "/packages/" + json.id
            }, json);
}

var component = ReasonReact.reducerComponent("PackageSearchBox");

function make() {
  var newrecord = component.slice();
  newrecord[/* didMount */4] = (function (param) {
      var reduce = param[/* reduce */1];
      param[/* state */2][/* searchClient */0].on("result", (function (results, _) {
              return Curry._2(reduce, (function () {
                            return /* ResultsChanged */Block.__(1, [results.hits]);
                          }), /* () */0);
            }));
      return /* NoUpdate */0;
    });
  newrecord[/* render */9] = (function (param) {
      var state = param[/* state */2];
      var reduce = param[/* reduce */1];
      return React.createElement("div", {
                  className: SearchBoxStyles.root
                }, React.createElement("div", {
                      className: SearchBoxStyles.fakeInput
                    }, ReasonReact.element(/* None */0, /* None */0, Icon.Search[/* make */0](/* Some */[SearchBoxStyles.searchIcon], /* array */[])), React.createElement("input", {
                          className: SearchBoxStyles.input,
                          placeholder: "Search packages",
                          value: state[/* query */1],
                          onKeyDown: Curry._1(reduce, (function (e) {
                                  return /* KeyDown */Block.__(3, [e.keyCode]);
                                })),
                          onChange: Curry._1(reduce, (function (e) {
                                  return /* QueryChanged */Block.__(0, [e.target.value]);
                                }))
                        })), React.createElement("div", {
                      className: SearchBoxStyles.results
                    }, ReasonReact.element(/* None */0, /* None */0, Control.$$Map[/* make */1](state[/* results */2], /* None */0, (function ($$package) {
                                return ReasonReact.element(/* Some */[$$package.id], /* None */0, SearchResultItem.make($$package, Rebase.Option[/* exists */9]((function ($$this) {
                                                      return +($$this.name === $$package.name);
                                                    }), state[/* focused */3]), Curry._1(reduce, (function (p) {
                                                      return /* SelectItem */Block.__(2, [p]);
                                                    })), /* array */[]));
                              })))));
    });
  newrecord[/* initialState */10] = (function () {
      return /* record */[
              /* searchClient */AlgoliasearchHelper(Algoliasearch(Config.Search[/* appId */0], Config.Search[/* apiKey */1]), Config.Search[/* packageIndex */2]),
              /* query */"",
              /* results : array */[],
              /* focused : None */0
            ];
    });
  newrecord[/* reducer */12] = (function (action, state) {
      switch (action.tag | 0) {
        case 0 : 
            var query = action[0];
            if (query === "") {
              return /* Update */Block.__(0, [/* record */[
                          /* searchClient */state[/* searchClient */0],
                          /* query */query,
                          /* results : array */[],
                          /* focused : None */0
                        ]]);
            } else {
              return /* UpdateWithSideEffects */Block.__(3, [
                        /* record */[
                          /* searchClient */state[/* searchClient */0],
                          /* query */query,
                          /* results */state[/* results */2],
                          /* focused */state[/* focused */3]
                        ],
                        (function (param) {
                            param[/* state */2][/* searchClient */0].setQuery(query).search();
                            return /* () */0;
                          })
                      ]);
            }
            break;
        case 1 : 
            var results = Rebase.$$Array[/* map */0](decodeResult, action[0]);
            return /* Update */Block.__(0, [/* record */[
                        /* searchClient */state[/* searchClient */0],
                        /* query */state[/* query */1],
                        /* results */results,
                        /* focused */Rebase.$$Array[/* get */17](results, 0)
                      ]]);
        case 2 : 
            var $$package = action[0];
            return /* UpdateWithSideEffects */Block.__(3, [
                      /* record */[
                        /* searchClient */state[/* searchClient */0],
                        /* query */"",
                        /* results : array */[],
                        /* focused : None */0
                      ],
                      (function () {
                          GatsbyLink.navigateTo($$package.slug);
                          return /* () */0;
                        })
                    ]);
        case 3 : 
            var key = action[0];
            if (key === 40) {
              var match = state[/* focused */3];
              var tmp;
              if (match) {
                var p = match[0];
                tmp = Rebase.$$Array[/* get */17](state[/* results */2], state[/* results */2].findIndex((function ($$this) {
                            return +($$this === p);
                          })) + 1 | 0);
              } else {
                tmp = Rebase.$$Array[/* get */17](state[/* results */2], 0);
              }
              return /* Update */Block.__(0, [/* record */[
                          /* searchClient */state[/* searchClient */0],
                          /* query */state[/* query */1],
                          /* results */state[/* results */2],
                          /* focused */tmp
                        ]]);
            } else if (key === 38) {
              var match$1 = state[/* focused */3];
              var tmp$1;
              if (match$1) {
                var p$1 = match$1[0];
                tmp$1 = Rebase.$$Array[/* get */17](state[/* results */2], state[/* results */2].findIndex((function ($$this) {
                            return +($$this === p$1);
                          })));
              } else {
                tmp$1 = Rebase.$$Array[/* get */17](state[/* results */2], Rebase.$$Array[/* length */16](state[/* results */2]) - 1 | 0);
              }
              return /* Update */Block.__(0, [/* record */[
                          /* searchClient */state[/* searchClient */0],
                          /* query */state[/* query */1],
                          /* results */state[/* results */2],
                          /* focused */tmp$1
                        ]]);
            } else if (key === 13) {
              return /* SideEffects */Block.__(2, [(function (self) {
                            return Rebase.Option[/* forEach */8]((function ($$this) {
                                          return Curry._2(self[/* reduce */1], (function () {
                                                        return /* SelectItem */Block.__(2, [$$this]);
                                                      }), /* () */0);
                                        }), self[/* state */2][/* focused */3]);
                          })]);
            } else {
              return /* NoUpdate */0;
            }
            break;
        
      }
    });
  return newrecord;
}

var Styles = 0;

var Config$1 = 0;

exports.Styles       = Styles;
exports.Config       = Config$1;
exports.Key          = Key;
exports.decodeResult = decodeResult;
exports.component    = component;
exports.make         = make;
/* component Not a pure module */
