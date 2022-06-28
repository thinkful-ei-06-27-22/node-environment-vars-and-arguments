let args = process.argv;
 
console.log(args);  //What is this logging?
/*
[
  '/usr/local/bin/node',                    args[0]
  '/Users/ttaylor/nodeEnv/main',            args[1]
  'Xander',                                 args[2]
  'Father Time'                             args[3]
]
*/
let nodeInstall = args[0];
let currentFilePath = args[1];

let fName = args[2];
let favSong = args[3];


console.log(`${fName} is jamming to ${favSong}`);


 
 /*
 
//You can also set local enviroment variables
//I will first set NODE_ENV=development node index.js in my terminal
//this runs my file and exposes the enviroment variable I set*/
console.log(process.env.NODE_ENV)