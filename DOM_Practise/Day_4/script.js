var btn = document.querySelector('button')
var main = document.querySelector('main')

btn.addEventListener('click',function() {
    var div = document.createElement('div')

    var x = Math.random()*100
    var y = Math.random()*100

    var r = Math.floor(Math.random()*256)
    var g = Math.floor(Math.random()*256)
    var b = Math.floor(Math.random()*256)



    div.style.width = '100px'
    div.style.height = '100px'
    div.style.backgroundColor = `rgb(${r},${g},${b})`
    div.style.position = 'absolute'
    div.style.left  = x+'%'
    div.style.top  = y+'%'




    main.appendChild(div)
    
})