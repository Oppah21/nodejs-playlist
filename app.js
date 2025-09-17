// Creating and Removing Directories
var fs = require('fs');

// fs.unlink('./stuff/writeMe.txt', function() {
//     fs.rmdir('stuff')
       
//     });
//     const fs = require("fs");

// Delete a folder and its contents
fs.rm("./stuff", { recursive: true, force: true }, (err) => {
  if (err) {
    console.error("Error deleting folder:", err);
  } else {
    console.log("Folder deleted successfully");
  }
});


// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');

// fs.mkdir('stuff', function() {
//     fs.readFile('readMe.txt', 'utf8', function(err, data) {
//         fs.writeFile('./stuff/writeMe.txt', data);
//     });
// });

// // LATEST VERSION CODE NODE.JS

// const fs = require("fs");

// // Create a folder named "stuff"
// fs.mkdir("stuff", (err) => {
//   if (err && err.code !== "EEXIST") {
//     console.error("Error creating folder:", err);
//     return;
//   }

//   // Read from readMe.txt
//   fs.readFile("readMe.txt", "utf8", (err, data) => {
//     if (err) {
//       console.error("Error reading file:", err);
//       return;
//     }

//     // Write the data into ./stuff/writeMe.txt
//     fs.writeFile("./stuff/writeMe.txt", data, (err) => {
//       if (err) {
//         console.error("Error writing file:", err);
//       } else {
//         console.log("File written successfully in ./stuff/writeMe.txt");
//       }
//     });
//   });
// });

// // fs.unlink('writeMe.txt');
// // const fs = require("fs");

// // fs.unlink("file.txt", (err) => {
// //   if (err) {
// //     console.error("Error deleting file:", err);
// //   } else {
// //     console.log("File deleted successfully");
// //   }
// // });






//       // READING AND WRITING FILES
// var fs = require('fs');

// fs.readFile('readMe.txt', 'utf8', function(err, data) {
//     fs.writeFile('writeMe.txt', data);
//     // console.log(data);
// });

// console.log("test");

// var readMe = fs.readFileSync("readme.txt", 'utf8');
// fs.writeFileSync("writeme.txt", readMe);
// console.log(readMe);

// code


// Event Emitter
// var events = require('events');
// var util = require('util');

// var Person = function(name) {
//     this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// var james = new Person('james');
// var mary = new Person('mary');
// var ryu = new Person('ryu');
// var people = [james, mary, ryu];

// people.forEach(function(person) {
//     person.on('speak', function(msg) {
//         console.log(person.name + ' said: ' + msg);
//     });
// });

// james.emit('speak', 'hey dudes');
// mary.emit('speak', 'hello world');
// ryu.emit('speak', 'I want a curry');


// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(msg) {
//     console.log(msg);
// });

// myEmitter.emit('someEvent', 'the event was emitted');

// MODULE PATTERNS
// var stuff = require('./stuff');

// console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
// console.log(stuff.adder(5, 6));
// console.log(stuff.adder(stuff.pi, 5));

// var time = 0;

// var timer = setInterval(function() {
//     time += 2;
//     console.log(time + ' seconds have passed');
//     if (time > 5) {
//         clearInterval(timer);
//     }
// }, 2000);

// console.log(__dirname);
// console.log(__filename);

// normal function statement
// function sayHi() {
//     console.log('hi');
// }
// sayHi();

// function callFunction(fun) {
//     fun();
// }

// //function expression
// var sayBye = function() {
//     console.log('bye');
// };

// callFunction(sayBye);