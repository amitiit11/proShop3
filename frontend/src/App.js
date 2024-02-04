import React from 'react'
import Header from './component/Header';
import Footer from './component/Footer';
import { Container} from 'react-bootstrap';
import HomeScreen from './screen/HomeScreen';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <HomeScreen/>
        </Container>
      </main>
      <Footer />
    </>

  )
}

export default App