// Thermostat starts at 20 degrees
// You can increase the temperature with an up function

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
});
