    var x = 0 ;
    var r = 0 ;
    var f = 0 ;
    var s = 0 ;

    function start()
    {
        alert('bein shir ya khat entekhab kon !!');
        x = Math.floor(Math.random()*100);
        console.log(x);
    }
    function risaltS() 
    {
        if (x%2 == 0)
        {
            alert('to bordi !!');
            r++ ;
            document.getElementById('dorost').innerHTML = r ;
        }
        else
        {
            alert ('to bakhti !!') ;
            f++ ; 
            document.getElementById('ghalat').innerHTML = f ;
        }
        s = r - f ; 
        document.getElementById('scor').innerHTML = 'scor : '+s ;

    }
    function risaltK()
    {
        if (x%2 != 0)
        {
            alert('to bordi !!');
            r++ ;
            document.getElementById('dorost').innerHTML = r ;
        }
        else
        {
            alert ('to bakhti !!') ;
            f++ ; 
            document.getElementById('ghalat').innerHTML = f ;
        }
        s = r - f ; 
        document.getElementById('scor').innerHTML = 'scor : '+s ;
    }