var test = document.getElementById('p');
var x = '';
function showScreen (id)
{
    x += document.getElementById(id).innerHTML ;
    test.innerHTML = x ;
}
function result()
{
    var result = eval(x);
    test.innerHTML = result ;
}
function cls()
{
    x = '';
    test.innerHTML = x ;
}