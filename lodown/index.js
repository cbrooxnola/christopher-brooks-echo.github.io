'use strict';

const { unique } = require("../projects/underpants/underpants");

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: designed to take in an input array and return a new array with any duplicates removed
 * @param: function takes in a single parameter, an array
 * @return: function returns a new array with duplicates removed
 * 
 */
_.unique = function(array){
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        if (_.indexOf(array, array[i]) === i){
            newArray.push(array[i]);
        }
    }

    return newArray;
    }

module.exports.unique = unique;    

/**
 * filter: designed to take in an array and return a new array of elements that pass a test
 * @param: function takes two parameters, an array and a callback function
 * @return: function returns a new array of elements that return true when passed thru the callback function
 */

_.filter = function(array, func){
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        if (func(array[i], i, array) === true){
            newArray.push(array[i]);
        }
    }
    return newArray;

}

module.exports.filter = filter;

/**
 * reject: designed to take in an array and return elements that fail a test
 * @param: function takes two paramters, an array and a callback function
 * @return: function returns a new array consisting of elements that return false when passed thru callback function
 */

_.reject = function(array, func){
    let newArray = [];
    for (let i = 0 ; i < array.length; i++){
        if (func(array[i], i, array) === false){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

module.exports.reject = reject;

/**
 * partition: designed to take in an array and separate its elements into two new arrays
 *            based on passing or failing a test
 * @param: function takes in two parameters, an array and a callback function
 * @return: function returns a new array made up of two arrays, one of elements that pass,
 *          and one of elements that fail, the callback function test
 */
_.partition = function(array, func){
    let truArray = [];
    let falArray = [];
    for (let i = 0; i < array.length; i++){
        if (func(array[i], i, array)){
            truArray.push(array[i]);
        } else {
            falArray.push(array[i]);
        }
    }
    return [truArray, falArray];

}

module.exports.partition = partition;

/**
 * map: designed to take in a collection and return a new collection with the elements or properties modified
 * @param: function takes in two parameters, a collection and a function
 * @return: function returns a new collection of items modified by the callback function
 */
_.map = function(coll, func){
    let newArray = [];
    if (Array.isArray(coll)){
        for (let i = 0; i < coll.length; i++){
        newArray.push(func(coll[i], i, coll));
        }
    } else {
        for (var key in coll){
            newArray.push(func(coll[key], key, coll));
        }
    }
    return newArray;
}

module.exports.map = map;

/**
 * pluck: designed to take in an array of objects and a property, returning a new array containing input property
 *        in each element
 * @param: function takes in two parameters, an array of objects and a property
 * @return: function returns a new array with input property added to each element 
 */

_.pluck = function(array, property){
    return _.map(array, function(prop){
        return prop[property];
    });
}

module.exports.pluck = pluck;