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

    describe('power saving on', function() {
      it('cannot go above 25', function() {
        thermostat.up(6);
        expect(thermostat.temperature).toEqual(25);
      });
    });

    describe('power saving off', function() {
      it('cannot go above 32', function() {
        thermostat.togglePowerSavingMode();
        thermostat.up(13);
        expect(thermostat.temperature).toEqual(32);
      });
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

  describe('Reset', function() {
    it('resets the temperature to 20', function() {
      thermostat.up(3);
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('Power Saving Mode', function(){
    it('Checks PSM is on by default', function(){
      expect(thermostat.powerSavingMode).toBe(true);
    });
  });

  describe('togglePowerSavingMode', function() {
    it('toggles power saving mode', function() {
      thermostat.togglePowerSavingMode();
      expect(thermostat.powerSavingMode).toBe(false);
    });

    it('sets temperature to limit if toggled off', function() {
      thermostat.togglePowerSavingMode();
      thermostat.up(10);
      thermostat.togglePowerSavingMode();
      expect(thermostat.temperature).toEqual(25);
    })
  });

  describe('currentEnergyUsage', function(){
    it('Low-usage under 18 degrees', function(){
      thermostat.down(3);
      expect(thermostat.currentEnergyUsage()).toEqual('low-usage');
    });

    it('Returns medium-usage under 25 degrees', function(){
      expect(thermostat.currentEnergyUsage()).toEqual('medium-usage');
    });

    it('Returns high-usage over 25 degrees', function(){
      thermostat.up(300);
      expect(thermostat.currentEnergyUsage()).toEqual('high-usage');
    });

  });

});
