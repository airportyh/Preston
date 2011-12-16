Preston
=======

Preston is a simple presentation tool that is run in the browser - in that sense it
is like [S5](http://meyerweb.com/eric/tools/s5/), or the [HTML5 slides template](http://code.google.com/p/html5slides/). Where it differs is

1. You write in a simple text format that's based on markdown.
2. There are two windows running during the presentation, one for the slides, and the other for your notes. The two windows are always synchronized.
3. Preston is more geared towards [Takahashi style](http://presentationzen.blogs.com/presentationzen/2005/09/living_large_ta.html) presentations (big text, big graphics).

Usage
-----

To create your first presentation using Preston, first, you need to clone the code
from github:

    git clone https://github.com/airportyh/preston
    
Then crack open the code and edit `presentation.md` to start writing the presentation.

To run the presentation, open `index.html`, and press the "Start" button.

Presentation File Format
------------------------

The format of `presentation.md` is based on [Markdown](http://daringfireball.net/projects/markdown/syntax), but is not exactly
Markdown. The big difference is that, I have stolen the indentation feature of markdown
and used it to denote notes for a slide.

### Example

    Slide 1
    
        (these are the notes) Hello, this is slide 1 where I will
        talk about topic one for about 10 seconds.
        
    Slide 2
    
        Now I will talk about slide 2 for a few seconds as well.
        
Here we have two slides. The first slide will consist of the text "Slide 1" and the second
"Slide 2". The indented text below each of them are the notes for that slide, which
will be on your second screen and invisible to the audience during the presentation.

Browser Support
---------------

The browser support is fairly limited at the moment. Only the latest versions of
***Safari*** and ***Firefox*** have been tested to work. Chrome has a restriction against
using XHR for local files, which causes Preston to break.

Credits & Thanks
----------------

This tool depends on the following software

- [Showdown](https://github.com/coreyti/showdown)
- [jQuery](http://jquery.com)
- [CSS3 Button Design from Red Team Design](http://www.red-team-design.com/wp-content/uploads/2011/09/awesome-css3-buttons.html)