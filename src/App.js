import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar'
import BookDetails from './components/BookDetails';
function App() {
  return (
    <div className="App">
    <BookContextProvider>
      <Navbar />
      <BookDetails />
    </BookContextProvider>
    </div>
  );
}

export default App;
