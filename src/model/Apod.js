
export class Apod{
  constructor(data){
    
    this.imageUrl = data.hdurl 
    this.date = data.date
    this.title = data.title

  }
}