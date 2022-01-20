class Desk {
  constructor(length, width, height, isWhiteboard){
    this.length = length;
    this.width = width;
    this.height = height;
    this.isWhiteboard = isWhiteboard;
    this.content="";
  }
  write(string){
    if (this.content !== ""){
      this.content= this.content + string;
    } else {
      this.content=string;
    }
  }
  wipe(){
    if (this.isWhiteboard === true){
      this.content="";
    }
  }
}

module.exports = Desk
