
$('.objects__slyder').slick({
  centerMode: true,
  arrows: false,
  dots: true,
  centerPadding: '20px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        dots: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    },

  ]
});

$('.letters__slyder').slick({
  // centerMode: true,
  arrows: true,
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,

  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    },

  ]

});



// ================================================== 
let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__block-nav');


burger.addEventListener('click', rotateBurger); 

function rotateBurger() {
  
  burger.classList.toggle('burger-active');

  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }

}

// =================================================


import cardList from './CardData.js';


// var cardList = "";
// Список карточек

// var cardList = [
//   {
//     num: '01',
//     text: 'Оставляете нам заявку на сайте или звоните'
//   },
//   {
//     num: '02',
//     text: 'Наш специалист выезжает к вам на замер'
//   },
//   {
//     num: '03',
//     text: 'Мы составляем смету, учитывая все ваши пожелания'
//   },
//   {
//     num: '04',
//     text: 'Согласовываем сроки, стоимость и заключаем договор'
//   },
//   {
//     num: '05',
//     text: 'Приступаем к работе'
//   },
//   {
//     num: '06',
//     text: 'По завершении работы - ее прием и оплата'
//   },
//   {
//     num: '0055',
//     text: 'Какой то текст лалаала '
//   }
// ]

// Формирование карточки по входным параметрам
function createCard (num, text) {
  // return '<div class="objects__box-item"><div class="objects__grup"><div class="objects__grup-number">' + num + '</div><hr class="objects__hr"></div><p class="objects__text">' + text + '</p></div>';

return '<div class="objects__box-item">' + 
          '<div class="objects__grup">' + 
            '<div class="objects__grup-number">' + num + '</div>' + 
            '<hr class="objects__hr">' + 
          '</div>' + 
          '<p class="objects__text --text">' + text + '</p>' + 
        '</div>';
}




// Объект в который отрисовываются карточки
let workScheme = document.getElementsByClassName('objects__box')[0];

// Отрисовка карточек на странице
for (let i = 0; i < cardList.length; i++) {
  workScheme.innerHTML += createCard(cardList[i].num, cardList[i].text);
}