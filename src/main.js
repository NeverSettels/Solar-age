import { checkIfNumber, clacMercuryYears, calcVenusYears, calcMarsYears, calcJupiterYears, getLifeExpectancy, leftToLive } from './age.logic.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


console.log('pls')
$(document).ready(() => {
  let selectedCountry = '';
  let age = 0;
  $('#age-form').submit(event => {
    event.preventDefault();
    selectedCountry = $("#country").children("option:selected").val();
    age = $('#age').val();
    $('#age-form').addClass('no-display');
    $('.planets').removeClass('no-display');
    $('#click-on-planet').removeClass('no-display');
  });
  $('.planets').on('click', 'img', event => {
    let planet = event.target.alt;
    $('.planets').addClass('no-display');
    $('#click-on-planet').addClass('no-display');
    if (planet === 'Mercury') {
      $('#info').removeClass('no-display')
      $("#img").attr("src", "https://nineplanets.org/wp-content/uploads/2019/09/mercury.png");
      $('#title').text(planet);
      $('#fact').text('Mercury is the closest planet to the Sun and is also the smallest of the eight planets in our solar system. For every 2 orbits of the Sun, which takes around 88 Earth days, Mercury completes three rotations of its axis. It is gravitationally locked and this rotation is unique to the solar system.');
      $('#age-span').text(clacMercuryYears(age));
      $('#expectancy-span').text(clacMercuryYears(getLifeExpectancy(selectedCountry)));
      let lefttoliveArr = leftToLive(clacMercuryYears(age), clacMercuryYears(getLifeExpectancy(selectedCountry)));
      if (lefttoliveArr[1] === 'left') {
        $('#left-to-live').text(`You have on avarge ${lefttoliveArr[0]} years to live`);
      } else if (lefttoliveArr[1] === 'past') {
        $('#left-to-live').text(`Congatulations you're ${lefttoliveArr[0]} years past the avarge life expectancy`);
      } else if (lefttoliveArr[1] === 'soon') {
        $('#left-to-live').text(`Careful you're at the avarage life expectancy as people from your country`);
      }

    } else if (planet === 'Mars') {
      $('#info').removeClass('no-display');
      $("#img").attr("src", "https://i.pinimg.com/originals/40/25/d8/4025d8936c88b454a95b857beac7eaec.png");
      $('#title').text(planet);
      $('#fact').text('Mars is the fourth planet from the Sun and last of the terrestrial planets. Like the rest of the planets in the solar system (except Earth), Mars is named after a mythological figure - the Roman god of war. In addition to its official name, Mars is sometimes called the Red Planet because of the brownish-red color of its surface. Mars is the second smallest planet in the solar system behind Mercury.');
      $('#age-span').text(calcMarsYears(age));
      $('#expectancy-span').text(calcMarsYears(getLifeExpectancy(selectedCountry)));

      let lefttoliveArr = leftToLive(calcMarsYears(age), calcMarsYears(getLifeExpectancy(selectedCountry)));
      if (lefttoliveArr[1] === 'left') {
        $('#left-to-live').text(`You have on avarge ${lefttoliveArr[0]} years to live`);
      } else if (lefttoliveArr[1] === 'past') {
        $('#left-to-live').text(`Congatulations you're ${lefttoliveArr[0]} years past the avarge life expectancy`);
      } else if (lefttoliveArr[1] === 'soon') {
        $('#left-to-live').text(`Careful you're at the avarage life expectancy as people from your country`);
      }
    } else if (planet === 'Venus') {
      $('#info').removeClass('no-display');
      $("#img").attr("src", "https://vignette.wikia.nocookie.net/thesolarsystem6361/images/6/6e/Venus_surface_spacepedia.png/revision/latest/scale-to-width-down/340?cb=20180322151813");
      $('#title').text(planet);
      $('#fact').text("Venus is the second planet from the Sun and the third brightest object in Earth's sky after the Sun and Moon. It is sometimes referred to as the sister planet to Earth, because their size and mass are so similar. Venus is also the closest planet to Earth. The surface of Venus is hidden by an opaque layer of clouds which are formed from sulphuric acid. The planet is named for Venus, the Roman goddess of love and beauty and is the second largest terrestrial planet.");
      $('#age-span').text(calcVenusYears(age));
      $('#expectancy-span').text(calcVenusYears(getLifeExpectancy(selectedCountry)));

      let lefttoliveArr = leftToLive(calcVenusYears(age), calcVenusYears(getLifeExpectancy(selectedCountry)));
      if (lefttoliveArr[1] === 'left') {
        $('#left-to-live').text(`You have on avarge ${lefttoliveArr[0]} years to live`);
      } else if (lefttoliveArr[1] === 'past') {
        $('#left-to-live').text(`Congatulations you're ${lefttoliveArr[0]} years past the avarge life expectancy`);
      } else if (lefttoliveArr[1] === 'soon') {
        $('#left-to-live').text(`Careful you're at the avarage life expectancy as people from your country`);
      }
    } else if (planet === 'Jupiter') {
      $('#info').removeClass('no-display');
      $("#img").attr("src", "https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/04/planet-jupiter-1.png?fit=800%2C800");
      $('#title').text(planet);
      $('#fact').text("Named after the Roman king of the gods, Jupiter is fitting of its name. With a mass of 1.90 x 1027 kg and a mean diameter of 139,822 km, Jupiter is easily the largest and most massive planet in the Solar System. To put this in perspective, it would take 11 Earths lined up next to each other to stretch from one side of Jupiter to the other and it would take 317 Earths to equal the mass of Jupiter.");
      $('#age-span').text(calcJupiterYears(age));
      $('#expectancy-span').text(calcJupiterYears(getLifeExpectancy(selectedCountry)));

      let lefttoliveArr = leftToLive(calcJupiterYears(age), calcJupiterYears(getLifeExpectancy(selectedCountry)));
      if (lefttoliveArr[1] === 'left') {
        $('#left-to-live').text(`You have on avarge ${lefttoliveArr[0]} years to live`);
      } else if (lefttoliveArr[1] === 'past') {
        $('#left-to-live').text(`Congatulations you're ${lefttoliveArr[0]} years past the avarge life expectancy`);
      } else if (lefttoliveArr[1] === 'soon') {
        $('#left-to-live').text(`Careful you're at the avarage life expectancy as people from your country`);
      }
    }
  });

  $('#back').click(event => {
    event.preventDefault();
    $('#info').addClass('no-display');
    $('.planets').removeClass('no-display');
    $('#click-on-planet').removeClass('no-display');


  })
});