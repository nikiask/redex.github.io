// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Link              = require("../../bindings/gatsby/link.js");
var Curry             = require("bs-platform/lib/js/curry.js");
var React             = require("react");
var Helmet            = require("../../bindings/gatsby/helmet.js");
var Helpers           = require("../utils/Helpers.js");
var ReasonReact       = require("reason-react/src/ReasonReact.js");
var IndexLayoutStyles = require("./IndexLayoutStyles.js");

var component = ReasonReact.statelessComponent("IndexLayout");

function make(children, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", {
                  className: IndexLayoutStyles.root
                }, ReasonReact.element(/* None */0, /* None */0, Helmet.make(/* Some */["re:libs"], /* None */0, /* array */[])), React.createElement("div", {
                      className: IndexLayoutStyles.header
                    }, React.createElement("div", {
                          className: IndexLayoutStyles.widthContainer
                        }, React.createElement("h1", {
                              className: IndexLayoutStyles.title
                            }, ReasonReact.element(/* None */0, /* None */0, Link.make("/", /* None */0, /* None */0, /* array */[Helpers.text("re:libs PAGE")]))))), React.createElement("div", {
                      className: IndexLayoutStyles.widthContainer
                    }, Curry._1(children, /* () */0)));
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.children, /* array */[]);
      }));

var Styles = 0;

var $$__esModule = /* true */1;

exports.Styles       = Styles;
exports.component    = component;
exports.make         = make;
exports.$$default    = $$default;
exports.default      = $$default;
exports.__esModule   = true;
exports.$$__esModule = $$__esModule;
/* component Not a pure module */