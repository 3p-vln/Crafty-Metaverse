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
    document.querySelectorAll('.menu__item a').forEach(item => {
        item.addEventListener('click', function () {
            document.querySelector('.burger').classList.remove('active');
            document.querySelector('.header__menu').classList.remove('open');
        })
    })
    if (document.querySelector('.header__menu').classList.contains('open')) {
        document.querySelector('body').style = "overflow: hidden";
    }
    else {
        document.querySelector('body').style = "overflow: auto";
    }
});

const swiperAbout = new Swiper('.about-us__swiper', {
    spaceBetween: 15,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"> </span>' +
                ' Chapter' +
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

const members = document.querySelectorAll('.member');
members.forEach(item => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('active')) {
            item.classList.add('active');
        }
        else {
            item.classList.remove('active');
        }
    })
})

const fqa = document.querySelectorAll('.faq__question');
fqa.forEach(item => {
    item.addEventListener('click', () => {
        fqa.forEach(a => {
            a.classList.remove('active')
        })
        item.classList.add('active');
    })
})

const swiperSocial = new Swiper('.social__swiper', {
    slidesPerView: 'auto',
    breakpoints: {
        684: {
            enabled: false,
        },
    },
})