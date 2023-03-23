let container=document.createElement("div");
container.setAttribute("class","container");
let row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);

let res=fetch("https://restcountries.com/v2/all");
res.then((data1)=>data1.json())//packets of data
.then((data2)=>foo(data2))
.catch((error)=>console.log(error));



function foo(ele){
    // console.log(ele)
    // console.log(ele[0].latlng[0])
for(let i=0;i<ele.length;i++){

 //the "+" symbol is very importent
    row.innerHTML+=`
    <div class="col-lg-4 col-sm-12">
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;" id="card${i+1}">
    <h5 class="card-title">${ele[i].name}</h5>
  <img src=${ele[i].flag} class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Capital: ${ele[i].capital}</p>
    <p class="card-text">Region: ${ele[i].region}</p>
    <p class="card-text">Country Code: ${ele[i].alpha3Code}</p>
    <a href="#" class="btn " style="border:1px solid white; color:white;" onclick="weather(event,${ele[i].latlng},${i+1})" id="btn">Click for Weather</a>
  </div>
</div>
    </div>
    `
    
}
document.body.append(container);
}
function weather(event,lat,lang,cardid){
  console.log(`card id: ${cardid}`);
  event.preventDefault();//****it is used to prevent the default behavior of the button which is to submit a form or reload the page when clicked. 
  console.log(`lat: ${lat} lang: ${lang}`);
  let res1=fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=fe406ad9c6e7ec45ce2006c65ba7eb3f`);
res1.then((data1)=>data1.json())//packets of data
.then((data2)=>foo1(data2,cardid))
.catch((error)=>console.log(error));

}
let bottomdiv=document.createElement("div");
function foo1(ele,cardid){
  // bottomdiv.innerText="";
  let card=document.getElementById(`card${cardid}`);
card.append(bottomdiv);
console.log(`card id: ${cardid}`);
console.log(ele.main.temp);

let div=document.createElement("div");

div.innerText=`Temperature: ${ele.main.temp}`;
div.style.border="1px solid white";
div.style.padding="0.5rem";
div.style.backgroundColor="red";
bottomdiv.append(div);



}
