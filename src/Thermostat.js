class Thermostat {
  constructor(){
    this.temperature = 20;
  }

  up(number){
    this.temperature += number;
  }

  down(number){
    this.temperature -= number;

    this._checktemperature();
  }

  _checktemperature(){
    if (this.temperature < 10){
      this.temperature = 10;
    }
  }

}
