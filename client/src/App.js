import { useState, useEffect } from "react";

import axios from "axios";
import Books from './components/books';

import './App.css';

const API_URL = "http://localhost:3000/api/v1/books";

const getAPIData = () => {
  return axios.get(API_URL).then((response) => response.data);
};

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then(items => {
      if (mounted) {
        setBooks(items);
      };
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1>testing</h1>
      <Books books={books} />
    </div>
  );
}

export default App;
