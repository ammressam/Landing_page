const menu=document.querySelector('.menu');
const main=document.querySelector('#main');
const toop=document.querySelector('.t');
const mid=document.querySelector('.m');
const bot=document.querySelector('.b');
menu.addEventListener('click',function(){
main.classList.toggle('hide');
mid.classList.toggle('hide');
toop.classList.toggle('rotate');
bot.classList.toggle('rotate2');

});
 const home=document.querySelector('.home');
 const why=document.querySelector('.why');
 const art=document.querySelector('.art');
 const cont=document.querySelector('.cont');

 home.onclick=function scroll(){
     window.scrollTo(0,0);
     
 };
 why.onclick=function scroll(){
     window.scrollTo(0,800);
 };
 art.onclick=function scroll(){
     window.scrollTo(0,1600);
 };
 cont.onclick=function scroll(){
     window.scrollTo(0,3000);
 };

 window.onscroll=function() {scrolll()}
function scrolll(){
    
if(document.documentElement.scrollTop>200||(document.body.scrollTop>200)){
    arr.classList.remove('visa');
} 
else arr.classList.add('visa');
    if(document.documentElement.scrollTop>300||(document.body.scrollTop>300)){
        home.classList.remove('marked');
    }
    else{
        home.classList.add('marked');
    }
    if(document.documentElement.scrollTop>600||(document.body.scrollTop>600)){
        why.classList.add('marked');
    }
    else why.classList.remove('marked');

    if(document.documentElement.scrollTop>1550||(document.body.scrollTop>1550)){
        art.classList.add('marked');
        why.classList.remove('marked');
    }
    else art.classList.remove('marked');

    if(document.documentElement.scrollTop>1800||(document.body.scrollTop>1800)){
        cont.classList.add('marked');
         art.classList.remove('marked');
    }
    else cont.classList.remove('marked');
}
const arr=document.querySelector('.arrow');


arr.onclick=function scrollt(){
    window.scrollTo(0,0);
};

const homem=document.querySelector('.home-m');
 const whym=document.querySelector('.why-m');
 const artm=document.querySelector('.art-m');
 const contm=document.querySelector('.cont-m');

 homem.onclick=function scroll(){
    window.scrollTo(0,0);
    main.classList.toggle('hide');
mid.classList.toggle('hide');
toop.classList.toggle('rotate');
bot.classList.toggle('rotate2');
    
};
whym.onclick=function scroll(){
    window.scrollTo(0,900);
    main.classList.toggle('hide');
mid.classList.toggle('hide');
toop.classList.toggle('rotate');
bot.classList.toggle('rotate2');
};
artm.onclick=function scroll(){
    window.scrollTo(0,2450);
    main.classList.toggle('hide');
mid.classList.toggle('hide');
toop.classList.toggle('rotate');
bot.classList.toggle('rotate2');
};
contm.onclick=function scroll(){
    window.scrollTo(0,4400);
    main.classList.toggle('hide');
mid.classList.toggle('hide');
toop.classList.toggle('rotate');
bot.classList.toggle('rotate2');
};