/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=   Book Class   =%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
class Book {
    #name = 'Gabriel Gwapo';
    #title;
    #author;
    #isbn;
    #isAvailable;

    constructor(title, author, isbn, isAvailable = true) {
        this.#title = title;             // String value
        this.#author = author;           // String value
        this.#isbn = isbn;               // String value
        this.#isAvailable = isAvailable; // boolean value
    }

    /* ---------------------------------------------------------------------------------- -- /
    *                                  Getters                                              *
    * --------------------------------------------------------------------------------------*/
    get name() {
        return this.#name;
    }

    get title() {
        return this.#title;
    }

    get author() {
        return this.#author;
    }

    get isbn() {
        return this.#isbn;
    }

    get isAvailable() {
        return this.#isAvailable;
    }



    /* ---------------------------------------------------------------------------------- -- /
    *                                  Setters                                              *
    * --------------------------------------------------------------------------------------*/
    set title(newTitle) {
        if (typeof newTitle !== 'string' || newTitle.length <= 0) {
            throw new Error(`${newTitle} is not a valid new title!`);
        }
        this.#title = newTitle;
    }

    set author(newAuthor) {
        if (typeof newAuthor !== 'string' || newAuthor.length <= 0) {
            throw new Error(`${newAuthor} is not a valid new title!`);
        }
        this.#author = newAuthor;
    }

    set isbn(newIsbn) {
        if (typeof newIsbn !== 'string' || newIsbn.length <= 0) {
            throw new Error(`${newIsbn} is not a valid new title!`);
        }
        this.#isbn = newIsbn;
    }

    set isAvailable(UpdateAvailability) {
        if (typeof UpdateAvailability !== 'string' || UpdateAvailability.length <= 0) {
            throw new Error(`${UpdateAvailability} is not a valid new title!`);
        }
        this.#isAvailable = UpdateAvailability;
    }
}

export { Book };