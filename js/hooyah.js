const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick(setColor) {
    h1.innerText = "this is clicked!";
    h1.style.color = setColor;
    }
    function handleMouseEnter(setColor) {
    h1.innerText = "mouse is here";
    h1.style.color = setColor;
    }
    function handleMouseOut(setColor) {
    h1.innerText = "mouse is out";
    h1.style.color = setColor;
    }

    function handleWindlowResize(){
        document.body.style.backgroundColor = "tomato";
    }

    function handleWindowCopy(){
        alert("COPY!");
    }
    
    function handleWidowOffline(){
        alert("SOS no WIFI");
    }

    function handleWidowOnline(){
        alert("I'm SAFE!");
    }


    h1.addEventListener("click", function(){handleTitleClick("red")});
    h1.addEventListener("mouseenter", function(){handleMouseEnter("blue")});
    h1.addEventListener("mouseout", function(){handleMouseOut("purple")});

    window.addEventListener("resize", handleWindlowResize);
    window.addEventListener("copy", handleWindowCopy);
    window.addEventListener("offline", handleWidowOffline);
    window.addEventListener("online", handleWidowOnline);