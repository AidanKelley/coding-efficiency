const keylogger = require('osx-keylogger'),
    fs = require('fs');

// shows only the stuff from the keylogger(not stdin) but breaks ctrl+c
// process.stdin.setRawMode(true);

let file = "output/output_" + Date.now() + ".csv";

if(process.argv.indexOf("-l") >= 0) {
    file = "output/combined_log.csv";
}

let stream = fs.createWriteStream(file, {flags:'a'});

let currentModifiers = '';
keylogger.listen((modifiers, key) => {
    stream.write(Date.now() + "\n");
}, 'english.json');