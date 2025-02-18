// ES6 Module:    An external file that contains resuable code
                // that can be import into other JS files. 
                // Write resuable code for many different apps.
                // Can contain variables,classes,funcitons ... and more 
                // Introduced as part of ECMAScript 2015 Update

import {PI, getCircumference,getArea,getVolume} from './mathUtil.js';



const circuference=getCircumference(10);
const area=getArea(10);
const volume=getVolume(10);


console.log(`Circumference is: ${circuference.toFixed(2)}cm`);
console.log(`Area is: ${area.toFixed(2)}cm^2`);
console.log(`Volume is: ${volume.toFixed(2)}cm^3`);



