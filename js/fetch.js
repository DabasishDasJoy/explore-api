/* 
    using fetch I can fetch data from website. 
    fetch returns a promise object. 
    To handle this promise object we can use call back function. But that is complex. To resolve this we can use .then() function to handle that promise object. 

    * .then(success, failed);
        both parameters are optional.

    *fetch cannot be use only in plain javascript. I should be use on browser. to load data.

    below is an example of fetching data using API
*/

//API url
const APIUrl = 'https://jsonplaceholder.typicode.com/todos/1';

function loadData(){
    fetch(APIUrl)
        .then(response => response.json()) //Converts the data to json close to .parse() function.
        .then(json => console.log(json));
}