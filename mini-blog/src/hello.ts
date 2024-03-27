
{
let name:string = 'park chan-wook'
const body = document.querySelector('.first');
console.log('first: ', body)
if(body){
body.innerHTML=`<h1>${name}</h1>`
}
}
