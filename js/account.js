var username={"ali","sultan","khan"};
function check{
    var textbox = document.getElementById('name');
    var v1=textbox.value;
    textbox.addEventListener('blur',check,false);
    alert("v1");
}

function setactive(e){
    
    var element = e.target
    var prev = document.getElementsByClassName('active');
    if(prev.length == 1)
        prev[0].setAttribute('class','form-acontrol'); 
    
    element.setAttribute('class','form-control active');
    
}

var elements = document.getElementsByTagName("input");
for(var i=0;elements.length;i++)
{
    if(elements[i].type!="submit" && elements[i].type!="reset")
        {
       elements[i].addEventListener('focus',setactive,false)
        }
}