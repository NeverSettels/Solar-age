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
});