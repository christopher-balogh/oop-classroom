class Marker {
  constructor (size, color, remainingInk){
    this.size = size;
    this.color = color;
    this.remainingInk = remainingInk;
  }
  write (string){
    // let n = string.length - (string.split(" ").length-1);
    let stringArray=[];
    for (let i=0; i<string.length; i++){
      if (this.remainingInk || string[i]===" "){
        stringArray.push(string[i]);
        if (string[i] !== " "){
          this.remainingInk--;
        }
      }
    }
    let printedString = stringArray.join('');
    return printedString;
  }
}

module.exports = Marker
