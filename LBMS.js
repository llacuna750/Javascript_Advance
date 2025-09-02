class Book {
    #title;
    #author;
    #isbn;
    #isAvailable;

    constructor(title, author, isbn, isAvailable) {
        this.#title = title;             // String value
        this.#author = author;           // String value
        this.#isbn = isbn;               // String value
        this.#isAvailable = isAvailable; // boolean value
    }

    /* ---------------------------------------------------------------------------------- -- /
    *                                  Getters                                              *
    * --------------------------------------------------------------------------------------*/
    get title() {
        return this.#title;
    }
    get author() {
        return this.#title;
    }
    get isbn() {
        return this.#title;
    }
    get isAvailable() {
        return this.#title;
    }





    /* ---------------------------------------------------------------------------------- -- /
    *                                  Setters                                              *
    * --------------------------------------------------------------------------------------*/
    set title(newTitle) {
        if(typeof newTitle !== 'string' || newTitle.length <= 0 ) {
            throw new Error(`${newTitle} is not a valid new title!`);
        }
        this.#title = newTitle;
    }

    set author(newAuthor) {
        if(typeof newTitle !== 'string' || newTitle.length <= 0 ) {
            throw new Error(`${newTitle} is not a valid new title!`);
        }
        this.#title = newAuthor;
    }

    set isbn(newIsbn) {
        if(typeof newTitle !== 'string' || newTitle.length <= 0 ) {
            throw new Error(`${newTitle} is not a valid new title!`);
        }
        this.#title = newIsbn;``
    }

    set isAvailable(UpdateAvailability) {
        if(typeof newTitle !== 'string' || newTitle.length <= 0 ) {
            throw new Error(`${newTitle} is not a valid new title!`);
        }
        this.#title = UpdateAvailability;
    }
}