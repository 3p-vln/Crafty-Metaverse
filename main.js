let lastScroll = 0;
const defaultOffset = 200;
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
});

const swiperAbout = new Swiper('.about-us__swiper', {
    spaceBetween: 15,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return (number + ' Chapter').slice(-120);
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                    ' '+
                   '<span class="' + totalClass + '"></span>';
        },
    },
    scrollbar: {
        el: '.swiper-scrollbar',
      },
});

// const chaptaer = document.querySelectorAll('.chaptaer-current');
// const slide = document.querySelectorAll('.swiper-slide');

// chaptaer.forEach(item => {
//     const currentChaptaer = item;
//     const currentSlideId = currentChaptaer.getAttribute('data-slide');
//     const currentSlide = document.querySelector(currentSlideId);
//     console.log(currentSlide);
//     if (!currentChaptaer.classList.contains('active')) {
//         chaptaer.forEach(function (item) {
//             item.classList.remove('active');
//         });

//         slide.forEach(function (item) {
//             item.classList.remove('active');
//         });

//         currentChaptaer.classList.add('active');
//         currentSlide.classList.add('active');
//     }
// })
// // if (document.querySelector('.slide-first').classList.contains('swiper-slide-active')) {
// //     console.log('1');
// //     chaptaer.forEach(item => {
// //         item.classList.remove('active');
// //     })
// //     chaptaer[0].classList.add('active');
// // }
// // else if (document.querySelector('.slede-second').classList.contains('swiper-slide-active')) {
// //     console.log('2');
// //     chaptaer.forEach(item => {
// //         item.classList.remove('active');
// //     })
// //     chaptaer[1].classList.add('active');
// // }
// // else if (document.querySelector('.slede-third').classList.contains('swiper-slide-active')) {
// //     console.log('3');
// //     chaptaer.forEach(item => {
// //         item.classList.remove('active');
// //     })    
// //     chaptaer[2].classList.add('active');
// // }