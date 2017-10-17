export class FeedIt {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.waterLevel = 15;
    this.playLevel = 20;
    this.counter = 5;
  }

setTime() {
  setInterval(() => {
    this.foodLevel--;
    this.waterLevel--;
    this.playLevel--;
    if (this.waterLevel === 10 || this.foodLevel === 5 || this.playLevel === 15) {
      this.timer();
    }
  }, (1000));
}

  areYouSad() {
    if (this.playLevel > 12) {
      return false;
    } else {
      return true;
    }
  }

  takeCare() {
    this.waterLevel = 15;
    this.foodLevel = 10;
    this.playLevel = 20;
    this.counter = 5;
  }

  timer() {
    setInterval(() => {
      this.counter--;
    }, (1000));
  }
}
