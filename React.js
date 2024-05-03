import React, { useState } from 'react';

const MainComponent = () => {
// State for managing input values and list of books
const [searchInput, setSearchInput] = useState('');
const [newBook, setNewBook] = useState({ title: '', author: '', year: '' });
const [books, setBooks] = useState([]);
const [order, setOrder] = useState({ key: 'title', reverse: false });

// Function to add a new book
const addBook = () => {
if (newBook.title && newBook.author && newBook.year) {
setBooks([...books, newBook]);
setNewBook({ title: '', author: '', year: '' });
} else {
// It's better to handle form validation within the form submit event
// alert('Please fill in all fields');
}
};

// Function to handle form submission
const handleFormSubmit = (event) => {
event.preventDefault(); // Prevent the default form submit action
addBook();
};

return (
<div className="container">
    <h1>Book List</h1>
    <div className="input-group">
        <span className="input-group-addon">
            <i className="glyphicon glyphicon-search"></i>
        </span>
        <input type="text" className="form-control" placeholder="Search for a book..." // Added a placeholder for better
            UX value={searchInput} onChange={(e)=> setSearchInput(e.target.value)}
        />
    </div>
    <h3>A list of Books</h3>
    <ul className="list-group">
        {books
        .filter(book => book.title.toLowerCase().includes(searchInput.toLowerCase())) // Added search functionality
        .map((book, index) => (
        <li key={index} className="list-group-item">
            {book.title} <span className="badge">{book.author}</span>
        </li>
        ))}
    </ul>
    <select className="form-control" value={order.key} onChange={(e)=> setOrder({ ...order, key: e.target.value })}
        >
        <option value="title">Title</option>
        <option value="author">Author</option>
    </select>
    <h3>Add a new Book</h3>
    <form onSubmit={handleFormSubmit}>
        <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" value={newBook.title} onChange={(e)=> setNewBook({ ...newBook,
            title: e.target.value })}
            required
            />
        </div>
        <div className="form-group">
            <label>Author</label>
            <input type="text" className="form-control" value={newBook.author} onChange={(e)=> setNewBook({ ...newBook,
            author: e.target.value })}
            required
            />
        </div>
        <div className="form-group">
            <label>Year</label>
            <input type="number" className="form-control" value={newBook.year} min="0" // Added min attribute for
                validation onChange={(e)=> setNewBook({ ...newBook, year: e.target.value })}
            required
            />
        </div>
        <button type="submit" className="btn btn-success">
            Add
        </button>
    </form>
</div>
);
};

export default MainComponent;