all:
	browserify app/js/*.js -t [ envify --YOTUBE_KEY $(YOUTUBE_KEY)] > app/js/build/mixer.bundle.js
