# mixer

A Web Audio / Web MIDI powered DJ mixing station.

## why

Felt like the major DJ solutions weren't cutting it for me anymore, so I made my own thing, why not.

Had to come up with something relatively quick for a set, thought I'd just slap some basic functionality together.  Turned out it worked better than I anticipated.

*note* This is the most basic implementation of a project I could throw together.  It's not an example of amazing, industry standard Javascript, just something I'd like to use across my DJ laptops.  Maybe I'll refactor it into something proper.  For now, it's just enough to get my stuff moving. 

## Supported Devices
   - Livid Instrument's [OhmRGB](http://lividinstruments.com/products/ohm-rgb/).

## Supported Platforms
   - Youtube.
   
## Features
   - Crossfading between two decks.
   - Play / Pause per deck.
   - 32 points of Ad-hoc Sample Chopping per deck.
   - Search for more Youtube Videos.

## Roadmap
  - [ ] Add Videos to decks.
    - Click a search video to add to the corresponding deck.
  - [ ] Cue mode.
  - Tactile feedback.
    - [x] OhmRGB should light up when play / pause / sample chopping
    - [ ] OhmRGB should light up along with playback
    - [ ] OhmRGB should light up with loop select
  - Loops
    - [ ] Be able to identify a range of samples and have them loop
  - Bandpass Filter
    - [ ] Simple Bandpass filter implementation per deck
      - [ ] Frequency control
      - [ ] Resonance control
  - Rubberband Pitch and Tempo strech (needs additional research)
    - [ ] Stretch Pitch independently
    - [ ] Stretch Tempo independently
      - Note that Youtube currently has static sets of playback speeds, so we may need to buffer audio and store it temporarily in order for this to work.

## Inspirations

  - rove
  - Grid Pie
  - Duplex
  - Traktor / Ableton / Virtual DJ