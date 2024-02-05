# Express Local Library.
- following [MDN's Express course](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs).

That's A simple Local Library site built to learn ExpressJs and MongoDB.
- It allows the users to:
    - `GET`: (books, authors, bookInstances, genres).
    - `POST`: (books, authors, bookInstances, genres).
    - `PUT`: (books, authors, bookInstances, genres).
    - `DELETE`: (books, authors, bookInstances, genres).

## The App architecture
<img src="./docs/mvc_express.png">

## database schema
<img src="./docs/DB.png">

## Routes needed for the LocalLibrary
- catalog/ — The home/index page.
- catalog/`objects`/ — The list of all books, bookinstances, genres, or authors (e.g. /catalog/books/, /catalog/genres/, etc.)
- catalog/`object`/`id` — The detail page for a specific book, bookinstance, genre, or author with the given \_id field value (e.g. /catalog/book/584493c1f4887f06c0e67d37).
- catalog/`object`/create — The form to create a new book, bookinstance, genre, or author (e.g. /catalog/book/create).
- catalog/`object`/`id`/update — The form to update a specific book, bookinstance, genre, or author with the given \_id field value (e.g. /catalog/book/584493c1f4887f06c0e67d37/update).
- catalog/`object`/`id`/delete — The form to delete a specific book, bookinstance, genre, or author with the given \_id field value (e.g. /catalog/book/584493c1f4887f06c0e67d37/delete).

## What I learned.

- Express.js
- Mongoose
- pug.js
- express-validator
- how to deploy Node.js applications.

