import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/news')
      .then(response => response.json())
      .then(data => setNewsData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className="title">
      <h1>news works!</h1>
      <h2>News</h2>
      </div>

      <div className="card">
        {newsData.map(item => (
          <div key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Author: {item.author}</p>
            <p>Published at: {item.publishedAt}</p>
            <img src={item.urlToImage} alt="News Image" width="200" />
            <p>Content: {item.content}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
            <hr />
          </div>
        ))}
      
      </div>
      </div>
  );
}

export default App;
