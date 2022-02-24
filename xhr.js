// 1.How to compare two JSON have the same properties without order?
     // var obj1 = { name: "Person 1", age:5 };
     // var obj2 = { age:5, name: "Person 1" };


const _ = require('lodash');
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
console.log(_.isEqual(obj1, obj2));//output=>true


// 2.Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console

//set up http request
var xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();


//Set up a listner where server listen to our request 
xhr.onload=function(){
    //process the request and server will return the data in response
    if(xhr.status>=200 && xhr.status<300){
       //convert raw into js notation format 
         var data=JSON.parse(xhr.response);
            // console.log(data);
            for(var i=0; i<data.length; i++){
                console.log(data[i].flags.png);
            }
    }else{
        //you should print the error 
        console.log("Data is not available");
    }
}
//output=>can be seen in console(browser js)


// 3.Use the same rest countries and print all countries name, region, sub region and population

var xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();


//Set up a listner where server listen to our request 
xhr.onload=function(){
    //process the request and server will return the data in response
    if(xhr.status>=200 && xhr.status<300){
       //convert raw into js notation format 
         var data=JSON.parse(xhr.response);
            // console.log(data);
            for(var i=0; i<data.length; i++){
                console.log(data[i].name.official);
                console.log(data[i].region);
                console.log(data[i].subregion);
                console.log(data[i].population);
            }
    }else{
        //you should print the error 
        console.log("Data is not available");
    }
}
//output=>can be seen in console(browser js)