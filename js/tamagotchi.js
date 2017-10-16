export class FeedIt {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.waterLevel = 15;
    this.playLevel = 20;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, (1000));
  }

  setThirst() {
    setInterval(() => {
     this.waterLevel--;
   }, (1000));
  }

  setPlay() {
    setInterval(() => {
      this.playLevel--;
    }, (1000));
  }

  areYouSad() {
    if (this.playLevel > 12) {
      return false;
    } else {
      return true;
    }
  }

  water() {
    this.waterLevel = 15;
  }



}
