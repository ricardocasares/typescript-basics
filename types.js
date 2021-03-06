/*
  Booleans
  The most basic datatype is the simple true/false value, which JavaScript
  and TypeScript call a 'boolean' value.
*/
var isDone = false;
/*
  Number
  As in JavaScript, all numbers in TypeScript are floating point values.
  These floating point numbers get the type 'number'.
*/
var height = 6;
/*
  String
  As in other languages, we use the type 'string' to refer to these textual
  datatypes.
*/
var name = 'bob';
/*
  Array
  TypeScript, like JavaScript, allows you to work with arrays of values.
  Array types can be written in one of two ways:
*/
var list = [1, 2, 3];
// Or
var list = [1, 2, 3];
/*
  Enum
  A helpful addition to the standard set of datatypes from JavaScript is the
  'enum'. An enum is a way of giving more friendly names to sets ofnumeric values.
*/
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
/*
  Any
  Sometimes you may opt-out of type-checking and let the values pass through
  compile-time checks. To do so, label these with the 'any' type
*/
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
/*
  Void
  Opposite to 'any', 'void' is the absence of having any type at all.
  You may see this as the return type of functions that do not return a value.
*/
function warnUser() {
    alert("This is my warning message");
}
