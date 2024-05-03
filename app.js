import React, { useState } from 'react';

const MainController = () => {
  const [searchInput, setSearchInput] = useState('');
  const [shows, setShows] = useState([
    {
      title: 'Life of Pi',
      author: 'Davan',
      year: 2024
    },
    {
      title: 'Học code today',
      author: 'Fpt',
      year: 2022
    },
    {
      title: 'Learn Angular by example',
      author: 'Fpt-Aptech',
      year: 2023
    },
    {
      title: 'Họ nhà trai',
      author: 'Nguyễn Anh Tú',
      year: 2021
    },
    {
      title: 'Đôi mắt có lửa',
      author: 'Nguyễn Hùng Sơn',
      year: 2020
    }
  ]);
  const [orders] = useState([
    {
      id: 1,
      title: 'Author Ascending',
      key: 'author',
      reverse: false
    },
    {
      id: 2,
      title: 'Author Descending',
      key: 'author',
      reverse: true
    },
    {
      id: 3,
      title: 'Title Ascending',
      key: 'title',
      reverse: false
    },
    {
      id: 4,
      title: 'Title Descending',
      key: 'title',
      reverse: true
    }
  ]);
  const [order, setOrder] = useState(orders[0]);
  const [newShow, setNewShow] = useState({});

  const addShow = () => {
    if (newShow.title && newShow.author && newShow.year) {
      setShows([...shows, newShow]);
      setNewShow({});
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div>
      <h1>AngularJS Practical Examples</h1>
      <input 
        type="text" 
        className="form-control" 
        value={searchInput} 
        onChange={(e) => setSearchInput(e.target.value)} 
      />
      <h3>A list of Books</h3>
      <ul className="list-group">
        {shows.map((show, index) => (
          <li key={index} className="list-group-item">
            {show.title} <span className="badge">{show.author}</span>
          </li>
        ))}
      </ul>
      <select 
        className="form-control pull-right" 
        value={order.title}
        onChange={(e) => setOrder(orders.find(o => o.title === e.target.value))}
      >
        {orders.map((o) => (
          <option key={o.id} value={o.title}>{o.title}</option>
        ))}
      </select>
      <h3>Add a new Book</h3>
      <div className="form-group">
        <label>Title</label>
        <input 
          type="text" 
          className="form-control" 
          value={newShow.title || ''} 
          onChange={(e) => setNewShow({ ...newShow, title: e.target.value })} 
          required 
        />
      </div>
      <div className="form-group">
        <label>Author</label>
        <input 
          type="text" 
          className="form-control" 
          value={newShow.author || ''} 
          onChange={(e) => setNewShow({ ...newShow, author: e.target.value })} 
          required 
        />
      </div>
      <div className="form-group">
        <label>Year</label>
        <input 
          type="number" 
          className="form-control" 
          value={newShow.year || ''} 
          onChange={(e) => setNewShow({ ...newShow, year: parseInt(e.target.value) || '' })} 
          required 
        />
      </div>
      <button 
        className="btn btn-success pull-right" 
        onClick={addShow}
      >
        <span className="glyphicon glyphicon-plus-sign"></span> Add
      </button>
    </div>
  );
};

export default MainController;
