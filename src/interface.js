// javascript code goes here
$(document).ready(function(){
  thermostat = new Thermostat();
  //jQuery code goes here
  $('#temperature-up').on('click', function() {
    thermostat.up(1);
    console.log(thermostat.temperature);
  });

  $('#temperature-down').on('click', function() {
    thermostat.down(1);
    console.log(thermostat.temperature);
  });

  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    console.log(thermostat.temperature);
  });
});
