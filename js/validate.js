function checkSname(e)
{
    var element = e.target;
    if(/[^a-zA-z ]/.test(element.value))
        {
            alert("Name is invalid!Only char from a-z and A-Z are allowed");
            element.value = "";
            return false;
        }
    else if(element.value.length < 3)
    {
        alert("Name is too short");
        element.value = "";
        return false;
    }
    
    return true;
}

function checkRollNo(e)
{
    var element = e.target;
    if(/[^a-zA-z0-9]/.test(element.value))
        {
            alert("invalid roll no");
        }
    if(!/[0-9]/.test(element.value))
        {
           alert("Invalid Roll No you must use a-z or A-z  characters and number")
           element.value="";
            return false;    
        }
    if(!/[a-zA-z]/.test(element.value))
        {
            alert("Invalid Roll No you must use a-z or A-z  characters")
           element.value="";
            return false;   
        }
    if(element.value.length > 8 || element.value.length < 6)
        {
            alert("Roll No is too short")
            element.value="";
        }

}

function checkAddress(e)
{
    var element = e.target;
    
    if(element.value.length < 50)
    {
        alert("Address is too short");
        element.value = "";
        return false;
    }
    return true;
}

function checkemail(e){
    var element=e.target;
    
    if(element.value!="@")
       {
       alert("wrong emailid");
           return false;
       }
    return true;
}

var rollno = document.getElementById('rollno');
var sname = document.getElementById('sname');
var address = document.getElementById('address');
var email=document.getElementById('email');

rollno.addEventListener('blur',checkRollNo,false);
sname.addEventListener('blur',checkSname,false);
address.addEventListener('blur',checkAddress,false);
email.addEventListener('blur',checkemail,false);