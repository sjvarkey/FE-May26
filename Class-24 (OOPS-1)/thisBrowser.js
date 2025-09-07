
var obj2 = {
    name: "Adam",
    age: 26,
  
    fn: function () {
        
        let nestedFn = function(){
          console.log(this.name)
        }
        return nestedFn
    },



  };
  
  let fn2 = obj2.fn(); // nestedFn
  
  console.log(fn2.name);
  
  //fn2();