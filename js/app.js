/* 
    we declare the requestURL variable to store the GitHub URL
    we use the URL to initialize a new Request object.
    we make the network request using the fetch() function, and this returns a Response object
    we retrieve the response as JSON using the json() function of the Response object.

*/


function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => userNames(data))
}

// function displayData(data){
//     console.log(data);
// }

/* 
    By retrieving data from a website using API show them in you browser.
*/

function userNames(data) {
    const userListTable = document.getElementById('users-list-table');
    
    for (const user of data) {      
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.username}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
        `;
        userListTable.appendChild(tr);
    }
}