import { useEffect, useState } from 'react'
import './App.css'

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import EnquiryForm from './components/EnquiryForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <section id="products">
          <h1>Our Products</h1>
          <ProductList />
        </section>
        <section id="enquiry">
          <h2>Send an Enquiry</h2>
          <EnquiryForm />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
