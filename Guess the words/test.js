var arra = ["salam","rod","ali","dar"];
var arrb = ["maals","ord","ila","adr"];
var x , y ;
var em = 0;


function start ()
{
    var adad = Math.floor(Math.random()*4) ;
    x = arrb[adad];
    y = arra[adad];
    console.log(y);
    document.getElementById('calame').innerHTML = x ;
    document.getElementById('str').style.display = "none";
    document.querySelector('.dinon').style.display = "inline-block";
}
function cheker()
{
    var inp = document.getElementById('inp');
        
    if(inp.value === y)
    {
        em++ ;
        document.getElementById('risalt').innerHTML = "You win !!! <br>in "+em +" try "; 
        finish();
    }
    else
    {
        em++ ; 
        document.getElementById('risalt').innerHTML = "wrong !! <br>pls test agine"; 
        inp.value = "" ;
    }
}
function finish()
{
    document.querySelector('.dinon').style.display = "none";
    document.getElementById('resetb').style.display = "inline-block";
        
        
}
function scek()
{
    document.getElementById('str').style.display = "inline-block";
    document.querySelector('.dinon').style.display = "none";
    document.getElementById('resetb').style.display = "none";
    document.getElementById('risalt').innerHTML = "";
    inp.value = "" ; 
}

