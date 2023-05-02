//This is an algorithem for the Pearsons correlation formula based on data.

export default function corelate({data}){

//const data = require('./charts/pokedex');


let xSqr = [];
let ySqr = [];
let xDif = [];
let yDif = [];
let difs = [];

let Data = {
	"xLabel":"",
	"yLabel":"",
	"x":[],
	"y":[]
};


data.forEach(d => {
	Data.x.push(d.base.Attack);
	Data.y.push(d.base.Speed);
});


const avg = (v,size) => {

	let sum = 0;
	v.forEach(n =>{
		sum += n;
	});
	return sum / size;
}

if (data.x.length != data.y.length){
	return false;
}

let xAvg = avg(Data.x,Data.x.length);
let yAvg = avg(Data.y,Data.y.length);

//console.log(xAvg);
//console.log(yAvg);


Data.x.forEach(n => {
	let dif = n - xAvg;
	let sqr = dif * dif;
	xDif.push(dif);
	xSqr.push(sqr);
});

Data.y.forEach(n => {
	let dif = n - xAvg;
	let sqr = dif * dif;
	yDif.push(dif);
	ySqr.push(sqr);
});

const sze = Data.x.length;

for(let l = 0 ; l < sze; l++){
	difs.push(xDif[l] * yDif[l])
}

let tDif = 0;

difs.forEach(n => {tDif += n});

let yTdif = 0;

yDif.forEach(n => {yTdif += n;});

let yTsqr = 0;

ySqr.forEach(n => {yTsqr += n});

//console.log(tDif);
//console.log(yTdif);
//console.log(yTsqr);

const mult = yTdif * yTsqr;
const sqr = Math.sqrt(mult);
//console.log(mult);

//console.log(tDif / mult);

return tDif / Math.sqrt(yTdif * yTsqr);

}
