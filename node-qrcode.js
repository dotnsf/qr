var QRCode = require( 'qrcode' );

var data = [];

var title = 'Hello World.';
var author = 'K.Kimura';
var town = 'My Town';

//. Title
for( var i = 0; i < title.length || i < 21; i ++ ){
  if( i < title.length ){
    var c = title.charCodeAt( i );
    data.push( c );
  }else{
    data.push( 0 );
  }
  data.push( 0 );
}

//. *1, *2
data.push( 0 );
data.push( 0 );

//. Author
for( var i = 0; i < author.length || i < 9; i ++ ){
  if( i < author.length ){
    var c = author.charCodeAt( i );
    data.push( c );
  }else{
    data.push( 0 );
  }
  data.push( 0 );
}

//. *12, *13, *3, *4
data.push( 0 );
data.push( 0 );
data.push( 0 );
data.push( 0 );

//. Town
for( var i = 0; i < town.length || i < 9; i ++ ){
  if( i < town.length ){
    var c = town.charCodeAt( i );
    data.push( c );
  }else{
    data.push( 0 );
  }
  data.push( 0 );
}

//. *14, *15, *5, *6
data.push( 0 );
data.push( 0 );
data.push( 0 );
data.push( 0 );

//. Color Pallete
data.push( 159 );
data.push( 145 );
data.push( 7 );
data.push( 16 );
data.push( 25 );
data.push( 34 );
data.push( 43 );
data.push( 52 );
data.push( 61 );
data.push( 70 );
data.push( 79 );
data.push( 88 );
data.push( 97 );
data.push( 106 );
data.push( 115 );

//. *7, *8, *9, *10, *11
data.push( 0 );
data.push( 10 );
data.push( 9 );
data.push( 0 );
data.push( 0 );

//. Palette data
for( var i = 0; i < 512; i ++ ){
  var r = Math.floor( Math.random() * 15 );
  data.push( r );
}
console.log( data );

QRCode.toFile( 
  'a.png',
  [ { data: data, mode: 'byte' } ]
);
