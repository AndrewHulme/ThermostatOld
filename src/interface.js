// javascript code goes here
$(document).ready(function(){
  thermostat = new Thermostat();
  //jQuery code goes here
  $('#temperature-up').on('click', function() {
    thermostat.up(1);
    $('#temperature').text(thermostat.temperature);
  });

  $('#temperature-down').on('click', function() {
    thermostat.down(1);
    $('#temperature').text(thermostat.temperature);
  });

  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    $('#temperature').text(thermostat.temperature);
  });

  $('#temperature').text(thermostat.temperature);

  $('#powersaving-toggle').on('click', function(){
    thermostat.togglePowerSavingMode();

    if (thermostat.powerSavingMode === true){
      $('#power-saving-status').text('on');
    } else {
      $('#power-saving-status').text('off');
    }

    $('#temperature').text(thermostat.temperature);
  });

  // $('window').click(function(){
  //   $('#temperature').text(thermostat.temperature);
  // });

});
