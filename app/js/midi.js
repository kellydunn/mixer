var CROSSFADER = 24;
var DECK1_PLAYBACK = 64;
var DECK2_PLAYBACK = 72;

var callbacks = {};

callbacks[DECK1_PLAYBACK] = function() {
    togglePlayback("deck1");
}

callbacks[DECK2_PLAYBACK] = function() {
    togglePlayback("deck2");
}

for(var i = 0; i < 32; i++) {
    callbacks[i] = (function(index) {
        return function() {
            seek("deck1", i);
        };
    })(i);
}

for(var i = 32; i < 64; i++) {
    callbacks[i] = (function(index) {
        return function() {
            seek("deck2", index)
        };
    })(i);
}

window.navigator.requestMIDIAccess().then(midiAccept, midiReject);

function midiAccept(midi) {
    console.log(midi);
    var midiAccess = midi;
    
    var haveAtLeastOneDevice=false;
    var inputs = midiAccess.inputs.values();
    for ( var input = inputs.next(); input && !input.done; input = inputs.next()) {
        input.value.onmidimessage = MIDIMessageEventHandler;
        haveAtLeastOneDevice = true;
    }
    
    if (!haveAtLeastOneDevice) {
        alert("No MIDI input devices present.  You're gonna have a bad time.");
    }
}


function midiReject(midi) {
    console.log("NOPE");
}

function MIDIMessageEventHandler(event) {
    switch(event.data[0]) {
    case 0xB0:
        console.log(event.data[0]);
        var cc = event.data[1];
        if(cc == CROSSFADER){
            console.log(event.data[2]);
            var vol = event.data[2] > 100 ? 100 : event.data[2];
            setDeckVolume("deck1", 100-vol);
            setDeckVolume("deck2", vol);
        }
    case 0x90: 
        console.log(event.data[0]);
        console.log(event.data[1]);
        var button = event.data[1];
        var v = event.data[2];        
        if(v == 0x40) { // button press down 
            var f = callbacks[button];
            f();
        }
    }
}
