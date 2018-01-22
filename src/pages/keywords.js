// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Css            = require("bs-css/src/Css.js");
var Curry          = require("bs-platform/lib/js/curry.js");
var React          = require("react");
var Config         = require("../Config.js");
var Helmet         = require("../bindings/gatsby/helmet.js");
var Vrroom         = require("vrroom/src/Vrroom.bs.js");
var Graphql        = require("../utils/Graphql.js");
var ReasonReact    = require("reason-react/src/ReasonReact.js");
var PackageSummary = require("../components/PackageSummary.js");

var root = Css.style(/* :: */[
      Css.selector("& h2 > a", /* :: */[
            Css.textDecorationLine(/* None */0),
            /* :: */[
              Css.hover(/* :: */[
                    Css.textDecorationLine(/* Values */[/* :: */[
                            /* Underline */0,
                            /* [] */0
                          ]]),
                    /* [] */0
                  ]),
              /* [] */0
            ]
          ]),
      /* [] */0
    ]);

var Styles = /* module */[/* root */root];

var component = ReasonReact.statelessComponent("Keywords");

function make(data, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", {
                  className: root
                }, ReasonReact.element(/* None */0, /* None */0, Helmet.make(/* Some */[Config.titleTemplate("Keywords")], /* None */0, /* None */0, /* None */0, /* array */[])), React.createElement("h1", undefined, Vrroom.Helpers[/* text */0]("Keywords")), ReasonReact.element(/* None */0, /* None */0, Curry._3(Vrroom.Control[/* Map */0][/* make */1], data.keywords.group, /* None */0, (function (keyword) {
                            return React.createElement("div", {
                                        key: keyword.name
                                      }, React.createElement("h2", undefined, React.createElement("a", {
                                                href: "/keyword/" + keyword.name
                                              }, Vrroom.Helpers[/* text */0](keyword.name))), ReasonReact.element(/* None */0, /* None */0, Curry._3(Vrroom.Control[/* Map */0][/* make */1], Graphql.getNodes(keyword), /* None */0, (function ($$package) {
                                                  return ReasonReact.element(/* Some */[$$package.id], /* None */0, PackageSummary.make($$package, /* array */[]));
                                                }))));
                          }))));
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.data, /* array */[]);
      }));


  export const query = graphql`
    query KeywordsQuery {
      keywords: allPackages {
        group(field: keywords) {
          name: fieldValue
          edges {
            node {
              type
              id
              name
              version
              category
              flags
              platforms
              description
              keywords
              license
              updated
              score
              quality
              popularity
              maintenance
              stars
              slug
            }
          }
        }
      }
    }
  `

;

var Control = 0;

exports.Control   = Control;
exports.Styles    = Styles;
exports.component = component;
exports.make      = make;
exports.$$default = $$default;
exports.default   = $$default;
exports.__esModule= true;
/* root Not a pure module */
