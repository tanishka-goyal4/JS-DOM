var btn = document.querySelector('button')
var main = document.querySelector('main')

var arr = ['Keep learning', 'Good things take time','Today is the good day', 'I am a developer','Trust the process','Consistency is the key','JS is Love','Progress over perfection','Make it happen']

btn.addEventListener('click',function() { 

    var x = Math.random()*100
    var y = Math.random()*100
    var rot = Math.random()*360
    var scl = Math.random()*3

    var h2 = document.createElement('h2')
    var a  = Math.floor(Math.random()*arr.length)


    h2.innerHTML = arr[a]
    console.log(h2);
    h2.style.color = 'white'
    h2.style.position = 'absolute'

    h2.style.left  = x+'%'
    h2.style.top  = y+'%'
    h2.style.rotate = rot+'deg'
    h2.style.scale = scl

    main.appendChild(h2)

})