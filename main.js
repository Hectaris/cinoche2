const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
    navigation.classList.toggle('open');

});

