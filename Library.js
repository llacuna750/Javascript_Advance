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

    // Show current checkbox state
    // document.getElementById('currentStatus').innerHTML = status.checked;

    // Debugging: log values
    console.log({ title, author, isbn, status: status.checked });

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



// var a = [], b = {};
// a.push(b);
// console.log(a[0] === b);




// Make it globally available
window.addBook = addBook;