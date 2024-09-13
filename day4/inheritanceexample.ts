// two types of relationships is -a  and has -a
//  is- a  : inheritance and has- a : agrregation
//  c1________c2   
// animal ___________ mammal
// tyre _______ panel
// why inheritance : reusebility of code , overriding of method

// overriding single copy will be maintained
// it is run time polymorphism : because object will decide which method will be invoked
// objects are always created in runtime 
// overriding method signature should be same 
class Movie
  {
   private  year = 1886
   // constructor are not inherited they are invoked by super()
   constructor(msg:string)
      {
         console.log('Movies world......',msg)
      }
     public welcomeMsg(){
         console.log('Welcome in world of movies')
      }
  }
  // class Childclassname extends ParentName
class Hollywood extends Movie {
    constructor()
      {
         super('Welcome in hollywood movies')
      }
     action()
       {
        console.log('Action scenes make viewer excited')
       }
}
class Bollwood extends Movie  
   {
      constructor()
         {
            // typescript super() constructor is required in child class constructor
            super('Welcome in bollywood movies') // super() constructor invokes immediate  parent class constructor
          }
      songs()
        {
             console.log('Songs are musical to ears ')
        }
        // overriding welcomeMsg
        public welcomeMsg(): void {
            console.log('Bollywood Movies Era....')
        }
   }

const johnwick :Hollywood = new Hollywood()
//console.log('Movies starting year',johnwick.year) private  members can not be inherited
johnwick.welcomeMsg()
johnwick.action()

const kgf = new Bollwood()
kgf.welcomeMsg()
kgf.songs()

const movie = new Movie('My Movie world')
movie.welcomeMsg()
