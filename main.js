const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
const navigation_overlay = document.querySelector('.navigation-overlay');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
    navigation.classList.toggle('open');
      navigation_overlay.classList.toggle('open');

});

