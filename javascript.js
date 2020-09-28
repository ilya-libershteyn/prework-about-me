//var max_dimension = {height: window.innerHeight, width: window.innerWidth};
//var dimension = {height: document.getElementById("box").style.height, width: document.getElementById("box").style.width};
//var original = {height: document.getElementById("box").style.height, width: document.getElementById("box").style.width, 
 //               color: document.getElementById("box").style.backgroundColor, opacity: document.getElementById("box").style.opacity, 
   //             filter: document.ElementById("box").style.filter};

document.getElementById("button1").addEventListener("click", function()
{    
    document.getElementById("box").style.height = "250px";
    document.getElementById("box").style.width = "250px";
})

document.getElementById("button2").addEventListener("click", function()
{
    document.getElementById("box").style.backgroundColor = "blue";
})

document.getElementById("button3").addEventListener("click", function()
{
    var op = 1;  // initial opacity
    var timer = setInterval(function()
    {
        if (op <= 0.1)
        {
            clearInterval(timer);
            //document.getElementById("box").style.display = 'none';
        }
        document.getElementById("box").style.opacity = op;
        document.getElementById("box").style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    });
})

document.getElementById("button4").addEventListener("click", function()
{
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";
    //document.getElementById("box").style.filter = original.filter;
})