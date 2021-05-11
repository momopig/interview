
----------------------var-----------------------------------
var callbacks = [];
( function () {
  for ( var i = 0 ; i < 5 ; i++) {
    callbacks.push( function () { return i; } );
  }
})();
console .log(callbacks.map( function ( cb ) { return cb(); } ));       // [5, 5, 5, 5, 5]

----------------------let-----------------------------------
var callbacks = [];
( function () {
  for ( let i = 0 ; i < 5 ; i++) {
    callbacks.push( function () { return i; } );
  }
})();
console .log(callbacks.map( function ( cb ) { return cb(); } )); // [0, 1, 2, 3, 4]
