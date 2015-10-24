var Deck = require("./deck.js");
var MIDI = require("./midi.js");
var yt = require("./yt.js");
var ohmrgb = require("ohmrgb");

var Mixer = function() {
    this.decks = [];
}

var m;

global.onYouTubeIframeAPIReady = function() {
    m = new Mixer();
    
    m.decks.push(new Deck("deck1", 'lFPUcnbVMT4'));
    m.decks.push(new Deck("deck2", '3KL9mRus19o'));

    // Register all ohmrgb specific events for the mixer
    ohmrgb.controls.registerCallback(
        ohmrgb.controls.LEFT_PLAY_CONTROL_CODE,
        function() {
            m.decks[0].togglePlayback();
        }
    );

    ohmrgb.controls.registerCallback(
        ohmrgb.controls.RIGHT_PLAY_CONTROL_CODE,
        function() {
            m.decks[1].togglePlayback();
        }
    );

    for(var i = 0; i < 8; i++) {
        for (var j = 0; j < 4; j++) {
            var midiButton = ohmrgb.controls.controlID(i + (8 * j), ohmrgb.midi.NOTE);            
            ohmrgb.controls.registerCallback(
                midiButton,
                (function(column, row) {
                    return function(event) {
                        m.decks[0].seek(column + (row * 4));
                    };
                })(j, i)
            );
        }
    }
    
    for(var i = 0; i < 8; i++) {
        for (var j = 4; j < 8; j++) {    
            var midiButton = ohmrgb.controls.controlID(i + (8 * j), ohmrgb.midi.NOTE);
            ohmrgb.controls.registerCallback(
                midiButton,
                (function(column, row) {
                    return function(event) {
                        m.decks[1].seek(column + (row * 4));
                    };
                })(j - 4, i)
            );
        }
    }

    ohmrgb.controls.registerCallback(
        ohmrgb.controls.CROSSFADER_CONTROL_CODE,
        function(event) {
            var vol = event.data[2] > 100 ? 100 : event.data[2];
            m.decks[0].setVolume(100-vol);
            m.decks[1].setVolume(vol);
        }
    );

    MIDI.handler.registerInputHandler(ohmrgb.controls.MIDIMessageEventHandler);
}

module.exports = m;
