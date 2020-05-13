// Thermostat starts at 20 degrees
// You can increase the temperature with an up function
// You can decrease the temperature with a down function

// 'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('Thermostat starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  describe('Up', function(){
    it('Can increase the temperature', function(){
      thermostat.up(5)
      expect(thermostat.temperature).toEqual(25);
    });
  });

  describe('Down', function(){
    it('Can decrease the temperature', function(){
      thermostat.down(5)
      expect(thermostat.temperature).toEqual(15);
    });

    it('Stops the minimum temperature going below 10', function(){
      thermostat.down(11)
      expect(thermostat.temperature).toEqual(10);
    });
  });

  describe('Power Saving Mode', function(){
    it('Checks PSM is on by default', function(){
      expect(thermostat.powerSavingMode).toBe(true);
    });
  });


});
