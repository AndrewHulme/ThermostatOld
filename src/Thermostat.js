'strict mode';

class Thermostat {
  constructor(){
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.powerSavingMode = true;
  }

  up(number){
    this.temperature += number;
    this._checktemperature();
  }

  down(number){
    this.temperature -= number;

    this._checktemperature();
  }

  reset() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  togglePowerSavingMode() {
    this.powerSavingMode = !this.powerSavingMode;
    this._checktemperature();
  }

  currentEnergyUsage(){
    if (this.temperature < 18){
      return 'low-usage';
    } else if (this.temperature < 25){
      return 'medium-usage';
    } else {
      return 'high-usage';
    }

  }

  _checktemperature(){
    if(this.powerSavingMode && this.temperature > 25) {
      this.temperature = 25;
    }
    if(!this.powerSavingMode && this.temperature > 32) {
      this.temperature = 32;
    }
    if (this.temperature < 10){
      this.temperature = 10;
    }
  }

}
