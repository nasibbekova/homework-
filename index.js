// 1
let cars = [
    {
    mark:'Mercedes',
    price: 5646,
    },
    {
    mark:'BMW',
    price:35000,
    },
    {
    mark:'Audi',
    price:12581,
    },
    {
    mark:'KIA',
    price:64567,
    },
    {
    markFive: 'Hyundai',
    price:35000
    }
]

let cheap = []
let other = []

cars.filter (car =>{
    if (car.price  === 35000) {
     cheap.push(car)
        
} else {
    other ++
}
})

console.log (
   cheap,
   other
)

// 2
let index = prompt()

let names = ['Aleksey', 'Kartoshka', 'Margarita' , 'Morgenshtern', 'Monica']

let longestName =names.reduce((a,b)=> a.length > b.length ? a:b)

names.filter (name => {
    if 
}

console.log (longestName)

// 3
let total = 0

let arr = [[[{a:{price: 20}}], [{a:{price: 35}}], [{a:{price: 44}}]]]

if (arr[1])arr[1].price += arr.shift().price.push(total)

    console.log(total);

