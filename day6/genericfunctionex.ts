function show(msg : any) : any
  {
     return true
  }

  show('hello')

  function show1<T> (msg : T) :T
    {
           
            return  msg
    }

   function showDetail<T,U> (brandName:T , price : U): any
      {
          let obj = 
             {
                  brand : brandName,
                  value : price
             }
           return obj
      }
  
    console.log(showDetail('H2O',500))
    console.log(showDetail('Adidas','2000INR'))
    console.log(showDetail(123,100.56))
   let res = show1<string>('hello')
   console.log(res)

   console.log(show1<number>(100))

   const marks : Array<number> =[]
   const names : Array<string> =[]

   function productDetails<T>(val:T) :T
     {
          return val
     }

   interface Product
     {
        productName :string
        price : number
     }

     console.log(productDetails<Product>({
        productName:'Maggie',
        price:10
     }))

     console.log(productDetails({name:'parle',price:5}))
     console.log(productDetails('Myproduct'))

     interface DbConnection
       {
           url : string ,
           user : string ,
           password : string | number 
       }

    function getDbConnection<T , U extends DbConnection >(v1:T,v2:U)
      {
          return v2
      }
    let db : DbConnection=
       {
         url : 'jdbc:mysql//localhost:3306',
         user : 'root',
         password : 1235
       } 
      console.log(getDbConnection('MyDb',db))