Preston
=======

Preston is a simple presentation tool that is run in the browser - in that sense it
is like [S5](http://meyerweb.com/eric/tools/s5/), or the [HTML5 slides template](http://code.google.com/p/html5slides/). Where it differs is

1. You write in a simple text format that's based on markdown.
2. There are two windows running during the presentation, one for the slides, and the other for your notes. The two windows are always synchronized.
3. Preston is more geared towards [Takahashi style](http://presentationzen.blogs.com/presentationzen/2005/09/living_large_ta.html) presentations (big text, big graphics), although it should work with more tradition styles.

# Demo

Check out the ***[live demo](http://airportyh.github.com/Preston/)***.

# Usage

To create your first presentation using Preston, first, you need to clone the code
from github:

    git clone https://github.com/airportyh/Preston
    
Then edit `presentation.md` to start writing the presentation.

To run the presentation, open `index.html`, and press the "Start Presentation" button.

# Presentation File Format

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

### Markdown

Both the content for the slides and the notes are run through Markdown,
so you can use things like links and images and basically anything in Markdown.

***That is, except for code blocks***

So, by using indentation for notes (effectively breaking Markdown compatibility)
I introduced a problem - now you can't use indentation for code blocks.

    <pre>
        YOUR CODE HERE
    </pre>

The solution is to use the pre tag to wrap your code blocks. It's not great,
but it's the best I could think of and I think it's adequate. And it's still
valid markdown.

Browser Support
---------------

The browser support is fairly limited at the moment. Only the latest versions of
***Safari*** and ***Firefox*** have been tested to work. Chrome has a restriction against
using XHR for local files, which causes Preston to break when opened locally - although it
works when served via HTTP.

Styling
-------

If you don't like the default styling of the slides - which I can totally understand -
simply edit `style.css` and you are off. `index.html` is the page with the slides and the
notes side-by-side, and `slide.html` is the page with only the slides.

Credits & Thanks
----------------

This tool depends on the following software

- [Showdown](https://github.com/coreyti/showdown)
- [jQuery](http://jquery.com)
- [CSS3 Button Design from Red Team Design](http://www.red-team-design.com/wp-content/uploads/2011/09/awesome-css3-buttons.html)

License
-------

(The MIT License)

Copyright (c) 2011 Toby Ho &lt;airportyh@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
