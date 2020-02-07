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
  });
  $('.planets').on('click', 'img', event => {
    let planet = event.target.alt;
    $('.planets').addClass('no-display');
    if (planet === 'mercury') {
      $('#info').removeClass('no-display')
      $("#img").attr("src", "https://nineplanets.org/wp-content/uploads/2019/09/mercury.png");
      $('#title').text(planet);
      $('#fact').text('Mercury is the closest planet to the Sun and is also the smallest of the eight planets in our solar system. For every 2 orbits of the Sun, which takes around 88 Earth days, Mercury completes three rotations of its axis. It is gravitationally locked and this rotation is unique to the solar system.');
      $('#age-span').text(clacMercuryYears(age))
      $('#expectancy-span').text(clacMercuryYears(getLifeExpectancy(selectedCountry)))
    }
  })
});