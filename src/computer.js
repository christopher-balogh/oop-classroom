class Computer {
  constructor(name, operatingSystem, processor, memory, graphics){
    const {name, operatingSystem, processor, memory, graphics} = this;
    this.on = false;
  }
  power() {
    if (this.on === false){
      this.on = true;
    } else {
      this.on = false
    }
  }
}

module.exports = Computer
