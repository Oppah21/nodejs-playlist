// BASIC ROUTING
 var http = require('http');
 var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log('request was made: ' + req.url);
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if (req.url === '/api/ninjas') {
        var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas));
        }else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
    });

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');





// SERVING JSON DATA
//  var http = require('http');
//  var fs = require('fs');

// var server = http.createServer(function(req, res) {
//     console.log('request was made: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     var myObj = {
//         name: 'Oppah',
//         job: 'Ninja',
//         age: 24
//     };

//     res.end(JSON.stringify(myObj));
// });
// server.listen(3000, '127.0.0.1');
// console.log('yo dawgs, now listening to port 3000');
// SERVING HTML PAGES
//  var http = require('http');
//  var fs = require('fs');

// var server = http.createServer(function(req, res) {
//     console.log('request was made: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
// myReadStream.pipe(res);
//     });
// server.listen(3000, '127.0.0.1');
// console.log('yo dawgs, now listening to port 3000');

// PIPES
//  var http = require('http');
//  var fs = require('fs');

// var server = http.createServer(function(req, res) {
//     console.log('request was made: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// myReadStream.pipe(res);
//     // res.end('Hello Oppah');
//      });
// server.listen(3000, '127.0.0.1');
// console.log('yo dawgs, now listening to port 3000');

// WRITABLE STREAMS
//  var http = require('http');
//  var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// myReadStream.on('data',function(chunk){
//     console.log('new chunk received;');
//     myWriteStream.write(chunk);
// });
// READABLE STREAMS
//   var http = require('http');
//  var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

// myReadStream.on('data',function(chunk){
//     console.log('new chunk received;');
//     console.log(chunk);
// });
// STREAMS AND BUFFERS
// Defination : buffers are temporary storage areas for data being transferred from one place to another.another
// The buffer stores the data until it is ready to be used or processed.
// Transfer  small chunks of data at a time, rather than all at once.
// STREAMS IN NODE.JS
// Can create streams in Node.js to transfer data from one place to another.
// Increase performance and reduce memory usage. 

// CREATING A SERVER IN NODE.JS
// var http = require('http');

// var server = http.createServer(function(req, res) {
//     console.log('request was made: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello Oppah');

// });

// server.listen(3000, '127.0.0.1');
// console.log('yo dawgs, now listening to port 3000');
// Creating and Removing Directorie// var fs = require('fs');

// fs.unlink('./stuff/writeMe.txt', function() {
//     fs.rmdir('stuff')
       
//     });
//     const fs = require("fs");

// Delete a folder and its contents
// fs.rm("./stuff", { recursive: true, force: true }, (err) => {
//   if (err) {
//     console.error("Error deleting folder:", err);
//   } else {
//     console.log("Folder deleted successfully");
//   }
// });


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