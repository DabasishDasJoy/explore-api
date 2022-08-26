/* 
    JSON - JavaScript Object Notation. 
    JSON can be in two forms either an object or just a plain string. 
*/

const obj = {
    owner: 'Alia', 
    address: {
        streed: 'PC lane', 
        city: 'Mumbai', 
        country: 'India'
    }, 

    products: ['laptop', 'mic', 'keyboard'], 
    revenue: 45000, 
    isOpen: true,
    isNew: false
}

/* 
    An object can be converted into string using java's built in method JSON.stringify();
*/

const stringifiedObj = JSON.stringify(obj);
console.log(stringifiedObj);

/* 
    Again an string object can be converted into object using java's built in method JSON.parse();
*/

const objetAgain = JSON.parse(stringifiedObj);
console.log(objetAgain);
