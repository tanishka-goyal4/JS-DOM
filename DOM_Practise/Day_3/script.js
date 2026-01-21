var btn = document.querySelector('button')
var h = document.querySelector('h1')
var num = 0;
var inner = document.querySelector('#inner')

btn.addEventListener('click', function(){


    btn.style.pointerEvents = 'none'

    var n = 50+Math.floor(Math.random()*50)


    
    var int = setInterval(() =>{
        num++;
        h.innerHTML = num +'%';
        inner.style.width = num +'%';
    },n);

    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = "Downloaded"
        btn.style.opacity = "0.5"
    }, n*100);

})

