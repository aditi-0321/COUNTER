
var count=0;

var value=document.querySelector('.value');
var btn=document.querySelectorAll('.btn');
btn.forEach(function(btn){
    btn.addEventListener('click',function(e){
        var Class=e.target.classList;
        if(Class.contains('decrease'))
        {
            count--;
        }
        else if(Class.contains('increase'))
        {
            count++;
        }
        else{
            count=0;
        }
        if (count>0)
        {
            value.style.color="green";
        }
        else if (count<0)
        {
            value.style.color="red";
        }
        else if (count==0)
        {
            value.style.color="blue";
        }
        value.textContent=count;
    })
})