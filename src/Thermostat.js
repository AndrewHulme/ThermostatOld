class Thermostat {
  constructor(){
    this.temperature = 20;
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

  togglePowerSavingMode() {
    this.powerSavingMode = !this.powerSavingMode;
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
