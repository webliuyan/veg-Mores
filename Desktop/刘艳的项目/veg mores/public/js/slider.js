(function(){
    var viewbox=document.getElementsByClassName("rslides")[0]
    var img=viewbox.getElementsByTagName("li")
    var prev=document.getElementsByClassName("prev")[0]
    var next=document.getElementsByClassName("next")[0]
    var index=0
    var slide=function(){
        for (var i = 0; i < img.length; i++) {
            img[i].style.display="block"
            img[i].style.opacity=0
            img[i].style.zIndex=1
            img[i].style.float="none"
            img[i].style.position="absolute"
            img[i].style.transition="opacity 900ms ease-in-out 0s"
        }
        img[index].style.display="block"
        img[index].style.opacity=1 
        img[index].style.zIndex=2
        img[index].style.float="left"
        img[index].style.position="relative"
        img[index].style.transition="opacity 900ms ease-in-out 0s" 
    }
    var click=next.onclick=function(){
        index++
        if(index>1){
            index=0
        }
        slide();
    }
   prev.onclick=function(){
        index--
        if(index<0){
            index=1
        }
        slide();
    }
    slide();
    var timer=setInterval(click,4000);
    viewbox.onmouseover=function(){
        clearInterval(timer);
    }   
    viewbox.onmouseout=function(){
        clearInterval(timer);
        timer=setInterval(click,4000);
    }
})() 