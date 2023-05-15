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

/**
 * every: designed to take in a collection and a function, determine if collection is an
 *        object or an array, and return true if every property or element returns true when 
 *        passed thru the function; false if not. 
 * @param: the function takes in two parameters, a collection and a function
 * @return: the function returns a boolean value of true or false
 */

_.every = function(coll, func){
    let ret = true;
    if (!func){
        if (Array.isArray(coll)){
            for (let i = 0; i < coll.length; i++){
                if (!coll[i]){
                    return false;
                }
            }
            return true;
        } else {
            for (var key in coll){
                if (!coll[key]){
                    return false;
                }
            }
            return true;
        }
    } else {
        if (Array.isArray(coll)){
            for (let i = 0; i < coll.length; i++){
                if (func(coll[i], i, coll) === false){
                    ret = false;
            };
        }
        return ret;
    } else {
        for (var key in coll){
            if (func(coll[key], key, coll) === false){
                ret = false;
            }
        }
        return ret;
    };
}
}
module.exports.every = every;

/**
 * some: designed to take in a collection and a function, determine if collection is an
 *        object or an array, and return true if ANY property or element returns true when 
 *        passed thru the function; false if not. 
 * @param: the function takes in two parameters, a collection and a function
 * @return: the function returns a boolean value of true or false
 */

_.some = function(coll, func){
    let ret = false;
    if (!func){
        if (Array.isArray(coll)){
            for (let i = 0; i < coll.length; i++){
                if (coll[i]){
                    return true;
                }
            }
            return false;
        } else {
            for (var key in coll){
                if (coll[key]){
                    return true;
                }
            }
            return false;
        }
    } else {
        if (Array.isArray(coll)){
            for (let i = 0; i < coll.length; i++){
                if (func(coll[i], i, coll) === true){
                    ret = true;
            };
        }
        return ret;
    } else {
        for (var key in coll){
            if (func(coll[key], key, coll) === true){
                ret = true;
            }
        }
        return ret;
    };
}
}
module.exports.some = some;

/**
 * reduce: designed to take in three parameters, an array, a function, and a seed value.  Reduce passes each element 
 *         of the input array thru the input function, each time adjusting an accumulating value that begins with the seed
 *         value.  If no seed value is given, the default seed value is the first index of the input array.
 * @param: the function takes in three parameters, an array, a function, and a seed.
 * @return: the function returns an accumulated value resulting from each input array element being passed thru 
 *          the function.
 */
_.reduce = function(array, func, seed){
    let acc;
    if (seed === undefined){
        acc = array[0];
        for (let i = 1; i < array.length; i++){
            acc = func(acc, array[i], i, array);
        }
        
    } else {
        acc = seed;
        for (let i = 0; i < array.length; i++){
            acc = (func(acc, array[i], i, array));
        }
    }
    return acc;
}
module.exports.reduce = reduce;

/**
 * extend: designed to take in any number of objects as parameters, copying the contents of each of them 
 *         into the first one, in order.
 * @param: function takes in an unlimited number of, but at least two, parameters - all objects
 * @return: function returns a copy of the first object passed in, which now also contains the contents of all other
 *          objects passed in.  NOTE: in the event of duplicate properties among copied objects, returned object
 *          copy will retain the value of the last one passed in only. 
 */

_.extend = function(obj1, obj2, ...objects){
    Object.assign(obj1, obj2, ...objects);
    return obj1;
}
module.exports.extend = extend;

