let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');

const scrollPosition = () => document.documentElement.scrollTop;
const containScroll = () => header.classList.contains('scroll');

window.addEventListener('scroll', () =>{
    if (scrollPosition() > lastScroll && !containScroll()){
        header.classList.add('scroll');
    }
    else if (scrollPosition() < defaultOffset){
        header.classList.remove('scroll');
    }

    lastScroll = scrollPosition();
})

document.querySelector('.burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('open');
});