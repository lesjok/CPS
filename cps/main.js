//slider
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
//модальное окно меню
const menuButton = document.getElementById('btn');
const popup = document.getElementById('popup');
const btnClose = document.getElementById('btn-close');
const overlayMenu = document.querySelector('.overlay');


menuButton.onclick = function () {
  popup.style.display = 'block';
  overlayMenu.style.opacity = 0.1;
  overlayMenu.classList.add('fixed');
}
btnClose.onclick = function () {
  popup.style.display = 'none';
  overlayMenu.style.opacity = 1;
  overlayMenu.classList.remove('fixed');
}

// модальное окно заказать звонок

const btnsCall = document.querySelectorAll('.order-call');
const overlayCall = document.querySelector('.popup__ordercall');
const cancelOrdercall = document.getElementById('cancel__ordercall');


for (let i = 0; i < btnsCall.length; i++) {
btnsCall[i].onclick = function () {
  overlayCall.style.display = 'block';
  overlayMenu.style.opacity = 0.1;
  overlayMenu.classList.add('fixed');
}

  cancelOrdercall.onclick = function () {
  overlayCall.style.display = 'none';
  overlayMenu.style.opacity = 1;
  overlayMenu.classList.remove('fixed');

}
}

// модальное окно обратная связь

const overlayCallBack = document.querySelector('.popup__callback');
const btnsCallback = document.querySelectorAll('.callback');
const cancelCallBack = document.getElementById('cancel__callback');

for (let i = 0; i < btnsCallback.length; i++) {
  btnsCallback[i].onclick = function (e) {
    e.preventDefault();
    overlayCallBack.style.display = 'block';
    overlayMenu.style.opacity = 0.1;
    overlayMenu.classList.add('fixed');
  }

  cancelCallBack.onclick = function () {
  overlayCallBack.style.display = 'none';
  overlayMenu.style.opacity = 1;
  overlayMenu.classList.remove('fixed');
}
}

// показать все карточки брендов
  const btnShowCards = document.querySelector('.show-more');
  const cards = document.querySelectorAll('.card');
  btnShowCards.onclick = function() {
  for (let i = 8; i < cards.length; i++) {     
      if(cards[i].style.display == 'none') {
        cards[i].style.display = 'block';
        this.innerHTML = 'Показать все';
    } else {
        cards[i].style.display = 'none';
        this.innerHTML = 'Скрыть';
    }
    }   
}

//показать все блоки видов техники
  const btnShowBlocks = document.querySelector('.read-more__blocks');
  const blocks = document.querySelectorAll('.types-of-service__block');
btnShowBlocks.onclick = function () {
for (let i = 4; i < blocks.length; i++) {
  if(blocks[i].style.display == 'none') {
    blocks[i].style.display = 'flex';
    this.innerHTML = 'Показать все';
  } else {
    blocks[i].style.display = 'none';
    this.innerHTML = 'Скрыть';
  }
}
}
