//well here goes some tests
var work = function (){
  console.log("i love my job");

};

//work();

var doWork = function(f){

  console.log("starting..");

  try{
    f();
  }
  catch(ex){
    console.log(ex);
  }

  console.log("end");
};

doWork(work);
