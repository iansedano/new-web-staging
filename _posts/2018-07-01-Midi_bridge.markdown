---
layout: post
title: MIDI for the bridge
description: Programming MIDI for the Music Machine
img: https://www.dropbox.com/s/k5ci3r4m2psezka/midi_plug.jpg?raw=1
date: 2018-07-01
tags: music hardware midi programming
---

This post will be an overview of the MIDI system I used for The Bridge. It is part of a series. See presentation post [here](/music/2018-12-15-time_machine/).


<br>
### Objective
<br>
- To be able to externalize all controls so that the laptop would only have to be touched in case of emergency.

<br>
### Challenges
<br>
- Numerous Midi devices
- Some of these devices were midi USB and were unreliable.
- Designing and programming the complex system without requiring changes down the line.
- Overcoming software limitations when programming.

<br>
### Harware
<br>
- perc pad - our bass instrument
- keyboard
- synth - for some sounds
- foot-pedal - to control the looper
- Midi-mix - as a master mixer
- NanoKontrol - as an additional mixer for the looper and global effects

All of these devices apart from the synth were inputs to the interface. The only devices that received MIDI outputs were the synth and the Midi-mix.
The Midi-mix and NanoKontrol were USB MIDI.

<br>
### Connections
<br>

<img src="https://www.dropbox.com/s/h8mm3qtqjm5nga8/midisix4pix.jpg?raw=1" class="post-img">

<img src="https://www.dropbox.com/s/kalq9f9l4cdoon1/uhmr.jpg?raw=1" class="post-img">

These three devices were the cheapest way I could get everything to work smoothly. They are, a midi splitter, a merger, and a usb to midi host. 

This was how I laid it out in the rack:
<img src="https://www.dropbox.com/s/bmhr5ylg66hdg0p/midi_connections_annotated.jpg?raw=1" class="post-img">

I made custom midi cables to length so that any interference would be cut down to a minimum, thats why you can see such perfectly lengthed MIDI Cables!

All MIDI ins eventually needed to go to the interface, and all devices that needed to receive MIDI, the MIDI message had to come from the interface. This was all managed by assigning channels to the midi devices (MIDI has 16 channels).

<img src="https://www.dropbox.com/s/gjaq29zel9an4m5/200522_120128_EXCEL.png?raw=1" class="post-img">

This is the excel in which I kept planned out all the mappings and channels.

<br>
### The DAW
<br>
The design in the DAW went through various iterations, starting out in Reaper and ending up in Ableton Live.
The first iteration looked like this:
<img src="https://www.dropbox.com/s/ndq0o4qdskyuhl6/Annotation%202020-05-22%20101219.jpg?raw=1" class="post-img">

It was a mess. The main problem I had was that I ended up with too many tracks to manage, to many sub mixes. This was solved by moving into ableton where Instrument Racks effectively allow you to have as many tracks as you want, but they all live within one track. It just makes everything much easier to manage. I probably had more fine grain control in Reaper, but for live performance, Ableton Live was much better.

<img src="https://www.dropbox.com/s/s9ssdmitzjrk8n5/Annotation%202020-05-22%20101907.jpg?raw=1" class="post-img">

Everything just looked cleaner, easier to understand and control.

<br>
### The control panel
<br>
Here is an image of the controls that I programmed in for the MidiMix.
<img src="https://www.dropbox.com/s/0uxf26uv7rqhuso/2018-11-19%2019.26.32.jpg?raw=1" class="post-img">

Along the bottom were almost always the master volume for each track. The knobs along the top were for FX controls. In the case of the pad, it was also to control the key and scale it was using. The buttons were used to enable specific sends and configured to light up when they were active. Later in this post I will go into more detail about how exactly I managed to program this with the aid of much research and Bome Midi Translator.

<br>
### Keys
<br>
<img src="https://www.dropbox.com/s/o1owicjxj0r2ipe/Key%20instrument.png?raw=1" class="post-img">

This was easy, just a simple instrument selector. I had organ sounds, piano sounds, I could route to the hardware synth, and pad like sounds for atmosphere.

<br>
### The Bass Pads
<br>
<iframe class='insta-iframe' src="//www.instagram.com/p/BlgGenznyRm/embed/" width="612" height="710" frameborder="0" scrolling="no" allowtransparency="true"></iframe>

<img src="https://www.dropbox.com/s/c9qe4awl7qskf2e/pad%20instrument.png?raw=1" class="post-img">

This was how it was set up. First the MIDI stream ran through a scale converter. When I say scale I say selection of 5 notes. It rode the line between a chord arpegio and a pentatonic scale. The root note was always on the foot pedal of the percpad, and the 4 other notes were complementary, the 3rd, the 5th etc.

Then it ran through a transposer that modified the key. I designed it so it would switch in 5ths going up and in 4ths going down, like the circle of fifths. This allowed us to implement some simple chord changes on the fly.

Finally a transposer to adjust the octave.

The spreadsheet I used to map out / compose the bass notes is below:

<img src="https://www.dropbox.com/s/3jciensp2g5xcb5/200522_120152_EXCEL.png?raw=1" class="post-img">

In general the I always had a note that was the 4th, then another sub-dominant functioning scale degree. Almost always the flat 7th, and for the dominant wither a 5th degree, an octave of the root, a 2nd degree or a tritone. Once I had everything in Ableton Live, it was much easier to adjust.

I also had some instruments at the end of the chain, but we mainly used the pad to control the hardware synth as that had many more tone shaping possibilities.

<br>
### Programming the MIDImix
<br>
Video coming soon.