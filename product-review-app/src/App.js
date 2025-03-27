import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/fixes.css';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import AddProduct from './components/AddProduct';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ProductProvider } from './context/ProductContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [showAddProductForm, setShowAddProductForm] = useState(false);

  const handleAddProductClick = () => {
    setShowAddProductForm(!showAddProductForm);
  };

  return (
    <ThemeProvider>
      <ProductProvider>
        <Router>
          <div className="App">
            <Navbar onAddProductClick={handleAddProductClick} />
            <main className="container">
              <Routes>
                <Route path="/" element={<HomePage showForm={showAddProductForm} setShowForm={setShowAddProductForm} />} />
                <Route path="/product/:id" element={<ProductDetailPage showForm={showAddProductForm} setShowForm={setShowAddProductForm} />} />
                <Route path="/add-product" element={<AddProduct />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ProductProvider>
    </ThemeProvider>
  );
}

export default App;
