"use strict";

var angleIterate = require('./index.js');

// Above is the test. Use this if you have installed the module:
// var angleIterate = require('angle-iterate');

var a = new angleIterate();

// The folowing values are the defaults

a.fullIteration = Math.PI*2; // Full iteration
a.iterateBy = Math.PI/512; // Radians to iterate by
a.angle = 0; // Begin angle

console.log(a.getNextAngle());
// => 0.006135923151542565 radians on the circle



