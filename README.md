# Social Network | Data | Dynamic filtering
This is a network graph that shows the group affiliations, interests and social connections of Vtubers. This is aimed at the EN indie scene predominantly but some the EN and ID Hololive folks are included to help flesh things out.

## Disclaimer
This is not intended to be an objective map of relationships but only to serve as a "neighborhood map" of folks who know or collab with each other. No malice, ill will or foul intent is ment by this. The friends/collab view is of only some use if for no other reason that how interconnected the folks currently in the graph are. The interests and collab views are open for discussion, I created them by just pulling when I know about folks out of my head.

## Instructions:
Click and drag to pan, mouse wheel to zoom in and out.
Click on a node to get youtube/twitch links where possible. While selected the name can be clicked on to go to any availble wiki entry for the person/group.
Buttons swap display per label. There's a bug where reloading the page isn't resetting the button to group so just select the group button and then switch back to whichever view you want.

## How it was built
the whole thing was originally built on the viz.js library and the basic structure came from my taking one of their examples and swapping in my information.
my original can be found at https://codepen.io/TurboTodd2k/pen/RNGevLK, it's a very basic implimentation using viz.js but if you want something simple to mess around with it's not a bad starting point. If it seems like it's just one of the examples from the viz.js site with the node data swapped out you'd be correct
ultimatly I made the decision to switch to the D3 library as I was running into issues with how viz.js was handling certain aspects of group colors
Vibe coding disclaimer....
	the majority of this was built in a "I assemble something from example code that throws errors and then feed it to chat gpt and ask it to clarify" style
	the exception to this is the D3 refactor where I just threw the code base at chat gpt and asked it to do the rewrite, then worked through the errors introduced by the rewrite
	the parser that converts the output from google sheets to the D3 data format is all mine aside from having to look up how to do the file write with Node. 3rd language I've learned how to write a basic for loop in, go me

## Features
Google sheet based backend, data can be edited without having to fiddle with code so many folks can contribute
D3 is complex to setup but provides lots of control so more possibility of customization in the future
nodes can be selected to highlight immediate connections
info panel that provides links to youtube, twitch and wiki entries for the selected node
3 views, groups, interests and collab partners/friends
graph has physics so nodes can be moved to help understand the links

## How it works
welcome to my Ted talk, "Byzantine bullshit and how to code with it".
currently the data for the graph is managed from a google sheet, the sheet info is exported with an app script to your google drive, downloaded locally and then run through a parser to combine the output and transliterate it into the format that the D3 script expects.
from there I'm hosting on a github page but you can host it where ever you'd like
like I said, Byzantine...
on the upside the split means that you can review the output of the app script and sort out any issues there apart from the conversion to D3 format, downside is more steps
https://observablehq.com/@ben-tanen/a-tutorial-to-using-d3-force-from-someone-who-just-learned-ho excellent explination of how D3 forces work

## Things to look out for
There are a couple of things to be aware of if you're going to edit data
	the drop downs to select collab partners are pretty clunky and run off of a look up to columns on collab support 1 & collab support 2
	the references are static so sorting or moving rows won't cause issues but adding people will cause people to fall out of the range of the lookup, see To do for the fix item
	in general if you do a bunch of edits to the data it's best to export all of the sheets as it's easy to forget what you've edits. If you only export part of the data and any of the id's for talent have changed you get an error when you try to load the page

## To do
add more commenting to D3 code to help clarify
add formatting for graduated folks

(?)combine local parser with app script to cut number of steps?