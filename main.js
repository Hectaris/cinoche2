const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
const navigation_overlay = document.querySelector('.navigation-overlay');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
    navigation.classList.toggle('open');
      navigation_overlay.classList.toggle('open');

});

function initMap() {
  const cine = { lat: 44.813307, lng: -0.563752 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: cine,
  });
  const marker = new google.maps.Marker({
    position: cine,
    map: map,
  });
}