let lastScroll = 0;
const defaultOffset = 50;
const header = document.querySelector('.header');

const scrollPosition = () => document.documentElement.scrollTop;
const containScroll = () => header.classList.contains('scroll');

window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containScroll()) {
        header.classList.add('scroll');
    }
    else if (scrollPosition() < defaultOffset) {
        header.classList.remove('scroll');
    }

    lastScroll = scrollPosition();
})

document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('open');
    document.querySelectorAll('.menu__item').forEach(item => {
        item.addEventListener('click', function () {
            document.querySelector('.burger').classList.remove('active');
            document.querySelector('.header__menu').classList.remove('open');
        })
    })
});

const swiperAbout = new Swiper('.about-us__swiper', {
    spaceBetween: 15,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return (number + ' Chapter').slice(-120);
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                ' ' +
                '<span class="' + totalClass + '"></span>';
        },
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});

const accordionMore = document.querySelectorAll('.point-text__more');
const accordionMoreInfo = document.querySelectorAll('.accordion__more');

accordionMore.forEach(item => {
    item.addEventListener('click', () => {
        const currentMore = item;
        const moreInfoId = currentMore.getAttribute("data-more");
        const currentMoreInfo = document.getElementById(moreInfoId);

        if (!currentMore.classList.contains('active')) {
            currentMore.classList.add('active');
            currentMoreInfo.classList.add('active');
        }
        else {
            currentMore.classList.remove('active');
            currentMoreInfo.classList.remove('active');
        }
    })
})