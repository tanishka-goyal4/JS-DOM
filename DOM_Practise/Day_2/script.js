var arr = [

{
    team:'CSK',
    primary:'yellow',
    secndary:'blue'
},

{
    team:'RCB',
    primary:'red',
    secndary:'white'

},

{
    team:'KKR',
    primary:'blue',
    secndary:'gold'

},

{
    team:'MI',
    primary:'purple',
    secndary:'pink'

}

]



var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var main = document.querySelector('main')

btn.addEventListener('click', function(){
    var  a = arr[Math.floor(Math.random()*arr.length)]

    h1.innerHTML = a.team
    h1.style.backgroundColor = a.secndary
    main.style.backgroundColor = a.primary

    console.log(a.team, a.primary, a.secndary);


})