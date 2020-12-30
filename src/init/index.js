'use strict';

// import all listener files so they can attach to the DOM
import '../listeners/mousedown.js';
import '../listeners/mouseleave.js';
import '../listeners/mousemove.js';
import '../listeners/mouseup.js';

// does your project have code that executes when the document or window are ready?
// that code can go here

const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;


// import { data } from '../data.js';

// document.getElementById('separator-input').value = data.separator;
