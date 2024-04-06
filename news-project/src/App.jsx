



import React, { useEffect, useState } from 'react';
import NewsComponent from './newsComponent';
import axios from 'axios';
import './App.css';
import Header from './header';
import Footer from './footer';
import SlidingComponent from './SlidingComponent';

function App() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  async function getCall(pageNo = 1) { 
    try {
      const res = await axios.get(`http://localhost:3000/news?page=${pageNo}`);
      setOriginalData(res.data);
      setFilteredData(res.data);
    } catch (error) {
      console.error('Error fetching news:', error); 
    }
  }

  useEffect(() => {
    getCall(); 
  }, []);

  const filterByCategory = (selectedCategory) => {
    if (selectedCategory === 'all') {
      setFilteredData(originalData);
    } else {
      const filteredData = originalData.filter(news => news.category === selectedCategory);
      setFilteredData(filteredData);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      getCall(currentPage + 1); 
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      getCall(currentPage - 1); 
    }
  };

  return (
    <>
      <Header filterByCategory={filterByCategory} />
      <h3>Top Stories</h3>
      <SlidingComponent />
      <h3>Discover More</h3>
      {currentItems.map(({ title, description, urlToImage, publishedAt, url }, index) => (
        <NewsComponent key={index} title={title} description={description} urlToImage={urlToImage} publishedAt={publishedAt} url={url} />
      ))}
      <footer>
        <div className="pagination">
          <button className='Prev' onClick={prevPage} disabled={currentPage === 1}>PREV</button>
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
          <button className='next' onClick={nextPage} disabled={currentPage === totalPages}>NEXT</button>
        </div>
      </footer>
      <Footer/>
    </>
  );
}

export default App;