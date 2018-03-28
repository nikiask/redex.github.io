// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Config = require("../Config.js");
var Helmet = require("../bindings/gatsby/helmet.js");
var Vrroom = require("vrroom/src/Vrroom.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var PackageSummary = require("./PackageSummary.js");

var component = ReasonReact.statelessComponent("CollectionPage");

function make(title, packages, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, Helmet.make(/* Some */[Config.titleTemplate(title)], /* None */0, /* None */0, /* None */0, /* array */[])), React.createElement("h1", undefined, Vrroom.text(title + (" (" + (String(packages.length) + ")")))), ReasonReact.element(/* None */0, /* None */0, Curry._3(Vrroom.Control[/* Map */0][/* make */1], packages, /* None */0, (function ($$package) {
                            return ReasonReact.element(/* Some */[$$package.id], /* None */0, PackageSummary.make($$package, /* array */[]));
                          }))));
    });
  return newrecord;
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
