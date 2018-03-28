// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';

var Tag = require("../components/Tag.js");
var Icon = require("../bindings/Icon.js");
var Link = require("../bindings/gatsby/link.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Flags = require("../components/Flags.js");
var Score = require("../components/Score.js");
var React = require("react");
var Config = require("../Config.js");
var Helmet = require("../bindings/gatsby/helmet.js");
var Vrroom = require("vrroom/src/Vrroom.bs.js");
var TimeAgo = require("../bindings/TimeAgo.js");
var Version = require("../components/Version.js");
var Platforms = require("../components/Platforms.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var TypedGlamor = require("typed-glamor/src/TypedGlamor.bs.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var PackageStyles = require("../styles/PackageStyles.js");

((require('../../static/hljs.css')));

var component = ReasonReact.statelessComponent("Package");

function make(data, _) {
  var newrecord = component.slice();
  newrecord[/* didMount */4] = (function () {
      ((
      document.querySelectorAll('.redex-codeblock.m-tabbed')
      .forEach(el => {
        el.querySelector('li.reason').addEventListener('click', () => {
          el.querySelectorAll('.reason').forEach(_ => _.classList.add('s-selected'));
          el.querySelectorAll('.ml').forEach(_ => _.classList.remove('s-selected'));
        });

        el.querySelector('li.ml').addEventListener('click', () => {
          el.querySelectorAll('.reason').forEach(_ => _.classList.remove('s-selected'));
          el.querySelectorAll('.ml').forEach(_ => _.classList.add('s-selected'));
        });
      })
    ));
      return /* NoUpdate */0;
    });
  newrecord[/* render */9] = (function () {
      var $$package = data.package;
      var match = $$package.license;
      var tmp = { };
      var tmp$1 = Js_primitive.null_undefined_to_opt($$package.homepageUrl);
      if (tmp$1) {
        tmp.href = tmp$1[0];
      }
      var tmp$2 = { };
      var tmp$3 = Js_primitive.null_undefined_to_opt($$package.repositoryUrl);
      if (tmp$3) {
        tmp$2.href = tmp$3[0];
      }
      var tmp$4 = { };
      var tmp$5 = Js_primitive.null_undefined_to_opt($$package.npmUrl);
      if (tmp$5) {
        tmp$4.href = tmp$5[0];
      }
      var tmp$6 = { };
      var tmp$7 = Js_primitive.null_undefined_to_opt($$package.issuesUrl);
      if (tmp$7) {
        tmp$6.href = tmp$7[0];
      }
      var tmp$8 = { };
      var tmp$9 = Js_primitive.null_undefined_to_opt($$package.docsUrl);
      if (tmp$9) {
        tmp$8.href = tmp$9[0];
      }
      return React.createElement("div", {
                  className: TypedGlamor.toString(PackageStyles.root)
                }, ReasonReact.element(/* None */0, /* None */0, Helmet.make(/* Some */[Config.titleTemplate($$package.name)], /* None */0, /* None */0, /* None */0, /* array */[])), React.createElement("header", {
                      className: TypedGlamor.toString(PackageStyles.header)
                    }, React.createElement("div", {
                          className: TypedGlamor.toString(PackageStyles.props)
                        }, ReasonReact.element(/* None */0, /* None */0, Curry._2(Vrroom.Control[/* IfSome */3][/* make */1], Js_primitive.null_undefined_to_opt($$package.stars), (function (stars) {
                                    return React.createElement("div", {
                                                className: TypedGlamor.toString(PackageStyles.stars)
                                              }, Vrroom.text(stars), ReasonReact.element(/* None */0, /* None */0, Icon.Star[/* make */0](/* Some */[TypedGlamor.toString(PackageStyles.starIcon)], /* array */[])));
                                  }))), ReasonReact.element(/* None */0, /* None */0, Score.make($$package, /* array */[])), (match == null) ? React.createElement("div", {
                                className: TypedGlamor.toString(PackageStyles.nolicense)
                              }, Vrroom.text("No license")) : React.createElement("div", {
                                className: TypedGlamor.toString(PackageStyles.license)
                              }, Vrroom.text(match)), React.createElement("div", {
                              className: TypedGlamor.toString(PackageStyles.updated)
                            }, ReasonReact.element(/* None */0, /* None */0, TimeAgo.make($$package.updated, /* array */[])))), React.createElement("div", {
                          className: TypedGlamor.toString(PackageStyles.title)
                        }, ReasonReact.element(/* None */0, /* None */0, Link.make($$package.slug, /* Some */[TypedGlamor.toString(PackageStyles.name)], /* None */0, /* array */[Vrroom.text($$package.name)])), ReasonReact.element(/* None */0, /* None */0, Version.make($$package.version, +($$package.type === "published"), /* array */[])), ReasonReact.element(/* None */0, /* None */0, Platforms.make($$package.platforms, /* array */[]))), React.createElement("div", {
                          className: TypedGlamor.toString(PackageStyles.descLine)
                        }, ReasonReact.element(/* None */0, /* None */0, Flags.make($$package, /* Some */[/* true */1], /* array */[])), React.createElement("span", {
                              className: TypedGlamor.toString(PackageStyles.description)
                            }, Vrroom.text($$package.description))), React.createElement("div", {
                          className: TypedGlamor.toString(PackageStyles.tags)
                        }, ReasonReact.element(/* None */0, /* None */0, Icon.Tags[/* make */0](/* Some */[PackageStyles.tagsIcon], /* array */[])), ReasonReact.element(/* None */0, /* None */0, Tag.Category[/* make */2]($$package.category, /* array */[])), ReasonReact.element(/* None */0, /* None */0, Curry._3(Vrroom.Control[/* Map */0][/* make */1], $$package.keywords, /* None */0, (function (keyword) {
                                    return ReasonReact.element(/* Some */[keyword], /* None */0, Tag.Keyword[/* make */1](keyword, /* array */[]));
                                  })))), React.createElement("div", {
                          className: TypedGlamor.toString(PackageStyles.links)
                        }, React.createElement("a", tmp, Vrroom.text("homepage")), React.createElement("a", tmp$2, Vrroom.text("repository")), React.createElement("a", tmp$4, Vrroom.text("npm")), React.createElement("a", tmp$6, Vrroom.text("issues")), React.createElement("a", tmp$8, Vrroom.text("documentation")))), React.createElement("div", {
                      className: TypedGlamor.toString(PackageStyles.readme),
                      dangerouslySetInnerHTML: {
                        __html: $$package.readme
                      }
                    }));
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.data, /* array */[]);
      }));


  export const query = graphql`
    query PackageQuery($id: String!) {
      package: packages(id: { eq: $id }) {
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
        readme
        homepageUrl
        repositoryUrl
        npmUrl
        issuesUrl

        slug
      }
    }
  `

;

var Styles = 0;

exports.Styles = Styles;
exports.component = component;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/*  Not a pure module */
