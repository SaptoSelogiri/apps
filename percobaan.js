/*


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
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const value = values.filter((elemen) => elemen % 2 === 0);

console.log(value); // [ 2, 4, 6, 8 ] */

const algo =( column,list)=>{
    //var column = 3;
    //var list = [1,2,3,1,2,3,4,5,6,73,2,5,66];
    const x = list.length % column;
    const row = ((list.length - x)/column) +1;
    const listcolumn = ['a','b','c','d']
    const column_row =[];
    var listrow = [];
    for(var i=0;i<column;i++){
        if(i<x){
            listrow[i]=row;
        }else{
            listrow[i]= row -1;
        }
    }
    if(listrow.some){
        console.log(listrow)
        for(var i =0;i<listrow.length;i++){
            var m = listrow[i];
            var apend = [{key:''}];
            for(var o =0; o<m; o++){
                apend[o] = {key:(o + listcolumn[i]),value:true}
            }
            column_row.push(apend)
        }
    }
    console.log(column_row)
}

var ou = [];
const Algo_pengkotakan =(column, list, output=[])=>{
    //column = prop.column    || 2
    //list = prop.list
    var length = list //.length

    const column_row = [] //list final
    var x = length % column
    var row = ((length - x )/column) + 1
    const L_row =['a','b','c','d','e','f']
    var listRow =[] //jumlah row tiap column
    for(var i=0;i<column;i++){
        if(i<x){
            listRow[i]=row
        }else{
            listRow[i]=row-1
        }
    }
    if(listRow.some){
        for(var i =0; i<listRow.length;i++){
            var r = listRow[i]
            const apend =[]
            for(var o = 0; o<r; o++){
                apend[o] = {key:(o+L_row[i]),value:true}
            }
            column_row.push(apend)
        }
    }
    if(column_row.length = listRow.length){}
    ou = column_row
    //console.log(output)
}

Algo_pengkotakan(3,15);
console.log(ou);


////###### function yang tak terpakai lagi, tapi bisa digunakan. logikanya bisa, hanya tak ddigunakan...

/* const aturKey =(id)=>{
    const preview = keys.find((key)=>{return key.id == id})     //cari item ,buat variable baru
    preview.value = !preview.value                              //ganti value
    setkey((prev)=>(prev.filter((key=> key.id != id))))         //hapus item dari list
    setkey((prev)=>([...prev,preview]))                         //masukan variable baru kedalam list
    
}  

 const prom = new Promise(solve =>{
                for(var i=0;i<ar.length;i++){
                    var varia =ar[i] //array
                    if(varia != undefined){
                      for(var o=1; o<varia.length;o++){
                        var kunci=varia[o]
                        if(kunci.key == id){
                            kunci.value = !kunci.value
                            warn == kunci
                        }
                      }
                    }
                }
            })
*/