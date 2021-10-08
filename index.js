function display(value)
{
    document.getElementById("textarea").value+=value;
}
function calculate()
{
    var num= document.getElementById("textarea").value;
    var ans=eval(num);
    document.getElementById("textarea").value=ans;
}
function clr()
{
    document.getElementById("textarea").value='';
}