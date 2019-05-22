var img = document.querySelector('img')
img.onclick = function()
{
    var mySrc = img.getAttribute('src')
    if(mySrc === 'image/img1.png')
    {
        img.setAttribute('src', 'image/img2.png')
    }
    else {
        img.setAttribute('src','image/img1.png' ) 
    }   
}


var Button = document.querySelector('button')
var head = document.querySelector('h1')

function setUserName()
{
    var myname = prompt("Please Enter your name.")
    localStorage.setItem('name', myname)
    head.textContent = 'Great meeting you, ' + myname +'-san'
}

if(!localStorage.getItem('name'))
{
    setUserName();
}
else{
    var storedName = localStorage.getItem('name')
    head.textContent = 'Great meeting you, ' + storedName +'-san'
}

Button.onclick = function()
{
    setUserName();
}