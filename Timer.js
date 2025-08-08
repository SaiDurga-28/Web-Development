var time=60;
const intervalname=setInterval(function(){
    time=time-1;
    document.getElementsByClassName("minutes")[0].innerHTML=parseInt(time/60);
     document.getElementsByClassName("seconds")[0].innerHTML=time%60;
     if(time==0){
        clearInterval(intervalname)
     }
},1000)