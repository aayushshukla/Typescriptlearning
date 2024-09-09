// all primitive data type are in  lower case 
// number and string  are different from Number , String 
function add(n1:number,n2 :number, displayres : boolean | number )
 {
      let res = n1+n2
      if(displayres || displayres==1)
      {
         console.log(`${n1}+${n2} = ${n1+n2}`)
      }
      else 
        {
            return res
        }
 }

 let sum = add(10,20,false)
 add(100,200,1)
 console.log(sum)

 //add(30,'hello',false)
 