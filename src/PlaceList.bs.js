// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var $$String = require("bs-platform/lib/js/string.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Data$ReactTemplate = require("./Data.bs.js");
var Phone$ReactTemplate = require("./Phone.bs.js");

var component = ReasonReact.reducerComponent("PlaceList-ReactTemplate");

function s(prim) {
  return prim;
}

function make(_children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              var filteredPlaces = Belt_List.keep(Data$ReactTemplate.places, (function (place) {
                      return $$String.lowercase(place[/* name */1]).includes($$String.lowercase(self[/* state */1][/* term */0]));
                    }));
              return React.createElement("div", undefined, React.createElement("input", {
                              placeholder: "search here",
                              onChange: (function ($$event) {
                                  return Curry._1(self[/* send */3], /* Search */[$$event.target.value]);
                                })
                            }), React.createElement("button", {
                              onClick: (function (_e) {
                                  return Curry._1(self[/* send */3], /* Reset */0);
                                })
                            }, "x"), React.createElement("ul", undefined, Belt_Array.map($$Array.of_list(filteredPlaces), (function (place) {
                                    var match = place[/* image */3][/* attributionUrl */2];
                                    return React.createElement("li", {
                                                key: place[/* id */0]
                                              }, React.createElement("div", undefined, place[/* name */1]), React.createElement("img", {
                                                    alt: place[/* name */1],
                                                    src: place[/* image */3][/* url */0]
                                                  }), match !== undefined ? React.createElement("a", {
                                                      href: match
                                                    }, place[/* image */3][/* attribution */1]) : React.createElement("p", undefined, place[/* image */3][/* attribution */1]), ReasonReact.element(undefined, undefined, Phone$ReactTemplate.make(place[/* phone */5], /* array */[])));
                                  }))));
            }),
          /* initialState */(function (param) {
              return /* record */[/* term */""];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, _state) {
              if (action) {
                return /* Update */Block.__(0, [/* record */[/* term */action[0]]]);
              } else {
                return /* Update */Block.__(0, [/* record */[/* term */""]]);
              }
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.s = s;
exports.make = make;
/* component Not a pure module */
