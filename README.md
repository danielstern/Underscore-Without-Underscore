Underscore-Without-Underscore
=============================

![](http://37.media.tumblr.com/1f87e6ce14e70c61335f25eb43ebb746/tumblr_n4i7gtElJD1qz8z2ro1_500.png)

Everyone loves Underscore.js, but sometimes you just want the one function, without the hassle of needing the whole library. 

Enter Underscore without Underscore! It is a compilation of Underscore and Lodash's favorite functions in drop-in format.

## Getting Started
Just copy whatever functions you need out of this file or the _.js file and drop them into your code. Presto!

### Collaboration
Please add functions to this as you need them for your drop ins and issue a pull request.

### Supported So Far: *2*

```javascript
/**
 *
 *		Each
 *
 **/
var _ = _ || {};
_.each = _.each || function(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

/**
 *
 *  Filter
 *
 **/
var _ = _ || {};
_.filter = _.filter || function(arr, filt) {
  var r = [];
  for (var i = 0; i < arr.length; i++) {
    if (filt(arr[i])) r.push(arr[i])
  }
  return r;
}
```