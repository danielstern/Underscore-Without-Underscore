// Underscore without Underscore
// http://github.com/danielstern
/*

	These functions are drop in replacements for Underscore and Lodash functions that you can use for your libraries.
	  .-.,     ,.-.
	 '-.  /:::\\   //:::\  .-'
	 '-.\|':':' `"` ':':'|/.-'
	 `-./`. .-=-. .-=-. .`\.-`
	   /=- /     |     \ -=\
	  ;   |      |      |   ;
	  |=-.|______|______|.-=|
	  |==  \  0 /_\ 0  /  ==|
	  |=   /'---( )---'\   =|
	   \   \:   .'.   :/   /
	    `\= '--`   `--' =/'
	      `-=._     _.=-'
	           `"""`  
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
