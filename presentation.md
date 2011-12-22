Preston

    (open `index.html` in Safari or Firefox to see this presentation.)
    Hello all, welcome to the presentation. 
    I am going to talk about a presentation tool called Preston.
    
Why?

    Why did I write yet another presentation tool?
    
In Browser
    
    So, I have like for a long time the simplicity of running a presentation
    inside of a web browser 

S5    
    
    and have been using a modified version of S5
    that supported Markdown for a while.
    
Takahashi Style

    I tend to do presentations in the Takahashi style, where
    most of the slides are simply a couple of words that are centered 
    on the screen.
    
Problem

    But the problem I run across is that I find I have to write out my
    monologue and 
    
Memorization
    
    memorize it by practicing it over and over again.
    
Time Consuming

    This is very time consuming.
    
Notes!

    While practicing one day I had the idea that if you had your
    notes in front of you, then you ***don't have to memorize***.
    If you forget what to say, simply let your notes jug your memory
    enough to keep going.
    
Preston

    The result is Preston.
    
File Format

    The file format is inspired both by
    
Markdown

    markdown
    
Pitchography

    and a past Node Knockout entry called Pitchograph, which is a
    presentation tool in its own right - a very awesome one, in fact.
    
<pre>Slide 1
    
    notes notes notes notes
    notes notes notes
    
Slide 2

    notes notes notes notes
</pre>

    So a Preston presentation looks like this. You start with the words
    you want to put on a slide, then underneath it you indent the notes
    for this slide.
    
Markdown

    Both the content for the slides and the notes are run through Markdown,
    so you can use
    
[Links](http://google.com)
    
    links
    
![Images](images.png)

    Images
    
Markdown

    And anything else that Markdown provides.
    
Code Blocks?

    Well, almost everything.
    So, I did introduce a problem: I stole the indentation
    syntax from Markdown which is normally used for code blocks.
    So now you can't write code blocks in the Markdown way in your slides.
    
&lt;pre&gt;

    The solution is to use the pre tag to wrap your code blocks. It's not great,
    but it's the best I could think of and I think it's adequate. And it's still
    valid markdown.
    
Browser Support

    So, you'd expect this to work on all browsers, right?
    
✔Safari  
✔Firebox

    No. Right now Preston has only been tested succesfully on the latest Safari
    and Firefox.
    
Chrome  
- HTTP only

    Notably, it doesn't work on Chrome with local files, although it works if you
    serves the files using HTTP

    
