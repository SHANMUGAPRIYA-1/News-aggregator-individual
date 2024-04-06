import React from "react";

const Header = ({ filterByCategory }) => {
  return (
    <nav className='header'>
      <img src="https://media.istockphoto.com/id/929047972/vector/world-news-flat-vector-icon-news-symbol-logo-illustration-business-concept-simple-flat.jpg?s=612x612&w=0&k=20&c=5jpcJ7xejjFa2qKCzeOXKJGeUl7KZi9qoojZj1Kq_po=" alt="news-image"/>
      <button onClick={() => filterByCategory('all')}>All</button>
      <button onClick={() => filterByCategory('science')}>Science</button>
      <button onClick={() => filterByCategory('technology')}>Technology</button>
      <button onClick={() => filterByCategory('Sports')}>Sports</button>
      <button onClick={() => filterByCategory('health')}>Health</button>
      <button onClick={() => filterByCategory('entertainment')}>Entertainment</button>
      <button onClick={() => filterByCategory('business')}>Business</button>
   
    </nav>
  );
};

export default Header;
