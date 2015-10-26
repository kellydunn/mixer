all: 
	browserify app/js/*.js -t [ envify --YOTUBE_KEY $(YOUTUBE_KEY)] -t hbsfy > app/js/build/mixer.bundle.js
