
function parsePreston(text){
    var lines = text.split('\n')
      , ret = []
      , curr = null
      , state = 'notes' // possible states: text, notes, code
    lines.forEach(function(line){
        if (state === 'code' || line.trim()){
            var indent = line.match(/^[ \t]*/)[0]
            if (state === 'notes' && !indent){
                if (curr)
                    ret.push(curr)
                if (line.match(/^<pre>.*<\/pre>[ \t]*$/)){
                    curr = {text: '', notes: '', code: line}
                    state = 'text'
                }else if (line.match(/^<pre>/)){
                    curr = {text: '', notes: '', code: line + '\n'}
                    state = 'code'
                }else{
                    curr = {text: line + '\n', notes: '', code: ''}
                    state = 'text'
                }
            }else if (state === 'notes' && indent){
                curr.notes += line.substring(indent.length) + '\n'
            }else if (state === 'text' && !indent){
                curr.text += line + '\n'
            }else if (state === 'text' && indent){
                curr.notes += line.substring(indent.length) + '\n'
                state = 'notes'
            }else if (state === 'code'){
                curr.code += line + '\n'
                if (line.match(/<\/pre>[ \t]*$/))
                    state = 'text'
            }
        }
    })
    if (curr && (curr.text || curr.code))
        ret.push(curr)
    return ret
}

function markdown(text){
    return (new (Showdown.converter)).makeHtml(text)
}

var index = -1, win, slides

function nextSlide(){
    var slide = slides[++index]
    if (!slide){
        index--
        return
    }
    showSlide(slide)
}
function prevSlide(){
    var slide = slides[--index]
    if (!slide){
        index++
        return
    }
    showSlide(slide)
}
function showSlide(slide){
    var content = win.document.getElementById('content')
      , localContent = document.getElementById('slide')
      , notes = document.getElementById('notes')
    slideText = slide.text || slide.code
    content.innerHTML = localContent.innerHTML = markdown(slideText)
    notes.innerHTML = markdown(slide.notes)
    win.$('a').attr('target', '_blank')
    win.fit()
}

function runSlides(slides){
    $('#prevBtn').click(prevSlide)
    $('#nextBtn').click(nextSlide)
    index = -1
    win = window.open('slide.html', 'slides', 
            'width=' + window.outerWidth + ',height=' + 
            window.outerHeight)
    win.moveTo(0, 0)
    
    setTimeout(function(){
        win.nextSlide = nextSlide
        win.prevSlide = prevSlide
        nextSlide()
    }, 500)
}

function resize(){
    var height = $(window).height()
    $('#layout').css({height: height + 'px'})
}

$(function(){
    $(window).resize(resize)
    resize()
    $('#prevBtn, #nextBtn').hide()
    $.ajax({
        url: 'presentation.md',
        dataType: 'text',
        success: function(data){
            $(document).keyup(function(e){
                var code = e.keyCode
        		if (code == 39)
        			nextSlide()
        		if (code == 37)
        			prevSlide()
            })
            $('#startBtn').click(function(){
                slides = parsePreston(data)
                runSlides(slides)
                $('.begin').removeClass('begin')
                $('#info').html('The slides are in a separate window. Use &larr; and &rarr; to flip slides')
                resize()
            })
        }
    })
})