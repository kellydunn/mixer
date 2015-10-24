var MIDI = function() {
    this.midiAccess = null;
    this.inputs = [];
    this.output = null;
}

var midiHandler = null;

var TEST_SYSEX_MESSAGE = [
    0xF0,
    0x00,
    0x01,
    0x61,
    0x07,
    0x04,
    
    0x11,
    0x34,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x0F7
]

var output;

module.exports.midiAccept = function(midi) {
    console.log(midi);

    var m = new MIDI();
    m.midiAccess = midi;

    haveAtLeastOneDevice=false;
    var inputDevices = m.midiAccess.inputs.values();
    for ( var input = inputDevices.next(); input && !input.done; input = inputDevices.next()) {
        m.inputs.push(input.value);
        haveAtLeastOneDevice = true;
    }
    
    m.output = m.midiAccess.outputs.values().next().value;
    
    if (!haveAtLeastOneDevice) {
        alert("No MIDI input devices present.  You're gonna have a bad time.");
    }

    module.exports.handler = m;    
}


module.exports.midiReject = function(midi) {
    console.log("NOPE");
}

MIDI.prototype.registerInputHandler = function(handler) {
    for (var i = 0; i < this.inputs.length; i++) {
        this.inputs[i].onmidimessage = handler;
    }
}

//sendMIDI(TEST_SYSEX_MESSAGE);

MIDI.prototype.sendMIDI = function (message) {
    output.send(message);
}

window.navigator.requestMIDIAccess({'sysex': true}).then(module.exports.midiAccept, module.exports.midiReject);

