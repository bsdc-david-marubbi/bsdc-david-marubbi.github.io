const cars = [
    {type:"Fiat", model:"500", color:"white"},
    {type:"BMW", model:"316", color:"silver"},
    {type:"BMW", model:"316", color:"blue"},
    {type:"BMW", model:"320", color:"white"},
    {type:"Ford", model:"Focus", color:"black"},
    {type:"Ford", model:"Focus", color:"red"},
    {type:"Ford", model:"Ka", color:"white"},
    {type:"Audi", model:"A4", color:"red"},
    {type:"Renault", model:"Clio", color:"red"},
    {type:"Peugeot", model:"Expert", color:"blue"},
];

// carContainer = document.getElementsByTagName('carContainer');
carContainer = document.querySelector('#carContainer');

car = document.createElement('h2')
car.innerText=`Type:${cars[0].type}   Model:${cars[0].model}`;

carContainer.appendChild(car);
console.log(car)