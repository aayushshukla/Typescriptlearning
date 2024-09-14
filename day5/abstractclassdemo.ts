// abstract class are incomplete classes 
// we can not create object for abstract classes
// They may or may not have abstract method
// abstract method : method have declaration no defination

abstract class Shape
  {
      side: number

      constructor(side:number)
        {
            this.side =side
        }
   // abstract method 
    abstract area():void

  }
// Cannot create an instance of an abstract class
//let s : Shape = new Shape(10)
class Circle extends Shape
  {
      radius : number
    
      constructor(r:number)
        {
            // 'super' must be called before accessing 'this' in the constructor of a derived class.
            super(r)
            this.radius =r 

        }

        area(): void {
            console.log(Math.PI*this.radius*this.radius)
        }
  }
  class Square extends Shape
    {
        side : number
    
      constructor(s:number)
        {
            // 'super' must be called before accessing 'this' in the constructor of a derived class.
            super(s)
            this.side =s

        }

        area(): void {
            console.log(this.side*this.side)
        }
    }

  let c  = new Circle(5)
c.area()

let sq = new Square(10)
console.log('Area of sq')
sq.area()
  