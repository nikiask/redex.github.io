// Generated by BUCKLESCRIPT VERSION 2.2.0, PLEASE EDIT WITH CARE
'use strict';

var Graphql = require("../utils/Graphql.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var CollectionPage = require("../components/CollectionPage.js");

var component = ReasonReact.statelessComponent("Packages");

function make(data, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return ReasonReact.element(/* None */0, /* None */0, CollectionPage.make("Unpublished Packages", Graphql.getNodes(data.packages), /* array */[]));
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.data, /* array */[]);
      }));


  export const query = graphql`
    query UnpublishedQuery {
      packages: allPackages(filter: { type: { eq: "unpublished" }}) {
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
            stars
            score
            quality
            popularity
            maintenance
            slug
          }
        }
      }
    }
  `

;

var introduction = "\n  <em>\n  Unpublished packages are usually incomplete or experimental, often written just\n  to solve a specific need in the moment, then shared in the hopes that it'll be\n  of use to others. These packages are included in the index mostly to make it\n  easier to find a starting point or ideas for writing your own bindings and\n  libraries. They might very well be complete enough to solve your needs too,\n  however, since they've usually been written for a reason, to address a need.\n  </em>\n";

exports.introduction = introduction;
exports.component = component;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* component Not a pure module */