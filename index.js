let n=0;

function slide(number){
    let slidelist=document.getElementsByClassName("slideCover");
    n+=number;
    if(n>slidelist.length-1){
        n=0;
    }else if(n<0){
        n=slidelist.length-1;
    }

    for(let i=0; i<slidelist.length;i++){
        slidelist[i].style.display="none";
    }
    slidelist[n].style.display="block";

    }
