


const asd = (aray) =>{
    for(var i=0;i>aray.length-1;i--){
        var j = Math.floor(Math.random()*(i+1));
        [aray[i],aray[j]] = [aray[j],aray[i]];
    }
}
const aray=[1,2,3,4,5,6,7,8,9,0];

const sufled =(arr)=>{
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
const otuput =[];
tostring(aray,otuput);
console.log(otuput);
const aris=[1];
console.log(aris);
function pushA(key){
    aris.push(key);
    console.log(aris);
}
pushA(23);
const dominan =(ou)=>{
    otuput.push(ou);
    console.log(otuput);
    pushA(ou);
    aris.push(ou);
 
}
async function sasa(){
    await new Promise((resolve => {
        dominan(29)
        resolve()
    }))
    await new Promise((resolve =>{
        
    }))
    console.log('selesai')
}
var ee = [2,3,4,5,4];
const e2 =[ee,ee,ee]
console.log(e2)
const fs = require('fs');
fs.readFile('./routes//score.json',(err,data)=>{
    if(err)throw err;
    var word = JSON.parse(data);
    console.log(word);
});
const dat={
    name:'samp',
    score:'33'
};
var data =JSON.stringify(dat,null,2);

async function fect(){
    await new Promise(()=>{
        fs.readFile('./routes//score.json',(err,data)=>{
            if(err)throw err;
            var word = JSON.parse(data);
            console.log(word);
        });
    })
    fs.writeFile('./routes/score.json',data,(err)=>{if(err)throw err});
    console.log('data masuk');

}