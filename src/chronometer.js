
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if (typeof printTimeCallback === 'function') {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        printTimeCallback(this.currentTime);
      }, 1000);
    // } else {
      this.intervalId = setInterval(() => {
        this.currentTime++;
      }, 1000);
    }
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60); 
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60; 
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here

    if (value < 10) {
      return "0" + value.toString(); 
     } else {
      return value.toString(); 
     }
    }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId); 
  }

  reset() {
     // ... your code goes here
     this.currentTime = 0; 
    }

  split() {
    // ... your code goes here
    let minutes = this.getMinutes();
    let seconds = this.getSeconds(); 

    return `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}`;

  }
}
