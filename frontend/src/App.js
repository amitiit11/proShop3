import React from 'react'
import Header from './component/Header';
import Footer from './component/Footer';
import { Container} from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <h1>Welcome To ProShop</h1>
      </main>
      <Footer />
    </>

  )
}

export default App