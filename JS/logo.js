
const logoHeader= document.querySelector(".logoHeader--Logo");
const titleHeader= document.querySelector(".logoHeader--Title");
logoHeader.style.display="none";
titleHeader.style.display="none"
const logoPage=document.querySelector('.logoHome');

let positionLogoPage= logoPage.getBoundingClientRect();
let logoY=positionLogoPage.bottom;
console.log=logoY;

let positionScroll = 0;

/*----------------------FONCTIONS---------------------------*/


function logoMvmnt(){
    positionScroll=window.scrollY;
    if(logoY>positionScroll){
        logoHeader.style.display="none";
        titleHeader.style.display="none"
        logoPage.style.display="flex";

    }
    else if(logoY<positionScroll){
        logoHeader.style.display="flex";
        titleHeader.style.display="block"
        logoPage.style.display="none";
    }
}


window.addEventListener('scroll',logoMvmnt);//transition du logo HomePage vers Logo bannière
