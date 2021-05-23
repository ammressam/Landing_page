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
