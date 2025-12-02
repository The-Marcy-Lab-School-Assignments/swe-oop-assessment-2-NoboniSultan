class Phone {
  #password;

  constructor(brand, model, password) {
    this.brand = brand;
    this.model = model;
    this.#password = password;
    this.batteryLevel = 100;
  }

  makeCall(number) {
    if (this.batteryLevel >= 5) {
      this.batteryLevel -= 5;
      return `Calling ${number}`;
    }
    return `Battery too low to make a call`;
  }

  charge() {
    this.batteryLevel = 100;
    return `Phone fully charged`;
  }

  unlock(password) {
    if (password === this.#password) {
      return true;
    }
    return false;
  }
}

class iPhone extends Phone {
  constructor(model, password, numberOfCameras) {
    super('Apple', model, password);
    this.numberOfCameras = numberOfCameras;
  }

  makeCall(number) {
    if (this.batteryLevel >= 5) {
      this.batteryLevel -= 5;
      return `Calling ${number} using FaceTime audio`;
    }
    return `Battery too low to make a call`;
  }

  faceTime(name) {
    if (this.batteryLevel >= 10) {
      this.batteryLevel -= 10;
      return `Facetiming ${name}`;
    }
    return `Battery too low to FaceTime`;
  }
}

// TEST YOUR CODE HERE
const flipPhone = new Phone('Nokia', 'Flip', 'TimeToLearn882');
console.log(flipPhone); // Phone { brand: "Nokia", model: "Flip", batteryLevel: 100 }

// 1. Making a call and checking battery
console.log(flipPhone.makeCall('123-456-7890')); // Calling 123-456-7890
console.log(flipPhone.batteryLevel); // 95

// 2. Charging and checking battery
console.log(flipPhone.charge()); // Phone fully charged
console.log(flipPhone.batteryLevel); // 100

// 3. Unlocking the phone
console.log(flipPhone.unlock('TimeToLearn882')); // true
console.log(flipPhone.unlock('TimeToLearn883')); // false

// DO NOT REMOVE
module.exports = { Phone, iPhone };
