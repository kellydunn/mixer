all:
	browserify app/js/yt.js app/js/midi.js app/js/deck.js app/js/mixer.js -o app/js/build/mixer.bundle.js
