function checkname()
{
    {
    var name=document.getElementById("name").value;
    
    
    if(name.length == 0)
        {
            alert ("enter the username");
        }
    else
        {
            alert ("hello ",+name);
        }
    
    }

    function checkrollno()
    {
    var rollno=document.getElementById("rollno");
    
    if(rollno == 0)
        {
            alert ("enter roll no");
        }
       
    }
    
    function checkemail()
    {
        var email=document.getElementById("email")
        
        if(email == 0)
            {
                alert ("enter email id");
                
            }
           
        }
    
name.addEventListener('blur',checkname,false);
email.addEventListener('blur',checkemail,false);
rollno.addEventListener('blur',checkrollno,false);
    



}
    