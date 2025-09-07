document.title = 'Library Book Management System';
console.log('Library Book Management System');

import { Book as Libro } from './Book.js';

const b1 = new Libro();




/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=   Library Class   =%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
class Library {
    #books = [];

    addBook(books) {

    }

    removeBook() {

    }

    findBook() {

    }

    listBooks() {

    }

    borrowBook(isbn) {

    }

    returnBook(isbn) {

    }
}

const book = [];

function addBook(event) {
    event.preventDefault();

    // console.log(b1.name);
    
    console.log(`You clicked submit!`);

    // Show success message
    document.getElementById(`isSuccessfullAdd`).innerHTML = ' You successfully added! ✔';
    // document.getElementById("registerBtn").addEventListener("click", Registration.register);

    let stop = setTimeout(() => {
        // Remove success message after 3s
        document.getElementById(`isSuccessfullAdd`).innerHTML = '';
    }, 2000);

    // Get input values
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let isbn = document.getElementById('isbn').value;
    let status = document.getElementById('status');

    book.push(new Libro(title, author, isbn));

    document.getElementById('table').innerHTML += `
        <tbody>
            <tr>
                <td>${title} </td>
                <td>${author} </td>
                <td>${isbn} </td>
                <td>${status.checked} </td>
            </tr>
        </tbody>
    `;

    // Show current checkbox state
    // document.getElementById('currentStatus').innerHTML = status.checked;

    // Debugging: log values
    console.log({ title, author, isbn, status: status.checked });

    let cellElement = document.getElementById('myCell');
    let colSpanValue = cellElement.colSpan = 2;
    console.log(colSpanValue); // Outputs the value of aria-colspan


    let timeStop = 3;
    
    let stopInterval = setInterval(() => {
        console.log(timeStop);

        timeStop--;
    }, 1000);



    // log after 5s
    setTimeout(() => {
        clearInterval(stopInterval);

        for (let bk of book) {
            console.log(bk);
        }
    }, 4000);


    // Update whenever checkbox changes
    // status.addEventListener("change", () => {
    //     document.getElementById('currentStatus').innerHTML = status.checked;
    // });
}

console.log(window.localStorage);

// let cellElement = document.getElementById('colspanth');
// cellElement.ariaColSpan = '2';

// var a = [], b = {};
// a.push(b);
// console.log(a[0] === b);

const jsonString = '{"name": "Alice", "age": 30, "city": "New York"}';

console.log(jsonString.name);

const javascriptObject = JSON.parse(jsonString);

console.log(jsonString);

console.log(javascriptObject.name); // Output: Alice
console.log(javascriptObject.age);  // Output: 30



    


window.onSearch = () => {
    const input = document.querySelector("#search");
    const filter = input.value.toUpperCase();

    const list = document.querySelectorAll("#list li");

    list.forEach(el => {
        const text = el.textContent.toUpperCase();
        el.style.display = text.includes(filter) ? "" : "none";
    });
}

// Make it globally available
window.addBook = addBook;