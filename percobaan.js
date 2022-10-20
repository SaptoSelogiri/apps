const asd = (aray) =>{
    for(var i=0;i>aray.length-1;i--){
        var j = Math.floor(Math.random()*(i+1));
        var temp = aray[i];
        [aray[i],aray[j]] = [aray[j],aray[i]];
    }
}
const aray=[1,2,3,4,5,6,7,8,9,0];
asd(aray);


var ars=[]
function sufled(arr){
    var curren =arr.length , rand;
     while(curren !=0){
        rand=Math.floor(Math.random()*curren);
        curren--;

        [arr[curren],arr[rand]] = [arr[rand],arr[curren]]
     }
}
sufled(aray);
function tostring(input,output){
    var long = input.length ,i=0;
    for(i ;i<long;i++){
        output[i]=input[i] + '';
    }
}
var otuput =[];
tostring(aray,otuput);
console.log(otuput);
function pushA(key){
    ars.push(key)
}
pushA(23)
const dominan =(ou)=>{
    console.log(otuput);
    pushA(ou)
}
dominan(10);