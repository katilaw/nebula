exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.eveningExerciseAnswers = {
  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++)
      sum += arr[i];
    return sum;
  },

  remove : function(arr, item) {
    for (var i = 0; i < arr.length; i++)
      if (arr[i] === item) {
        arr.splice(i,1);
      }
    return arr;
  },

  reverseString : function(str) {
    new_str = str.split('').reverse().join('');
    return new_str;
  },

  // reverseString : function(str) {
  //   new_str = str.split('').reverse().join('');
  //   return new_str;
  // },
  
  longestSubString : function(str) {
    str_arr = str.split(/\s/);
    for (var i = 0; i < str_arr.length; i++) {
      if (str_arr[i].length < str_arr[i+1].length) {
        str_arr.splice(i,1);
      }
    return str_arr[0];
    }
  },

  letterMoveForward : function(str) {
    new_str = str.split('');
    result = '';
    for (var i = 0; i < new_str.length; i++) {
      if (!isNaN(new_str[i] - 1)) {
        result += new_str[i];
      }
      else if (new_str[i] === 'z') {
        result += 'a';
      }
      else
        result += String.fromCharCode(new_str[i].charCodeAt() + 1);
        }
    return result

  },

  capitalizeWords : function(str) {
    var lower = str.toLowerCase();
    return lower.replace(/(^| )(\w)/g, function(x) {
      return x.toUpperCase();
    });
  }
};
