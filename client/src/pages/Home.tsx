import Container from '@/components/layout/Container/Container';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import Main from '@/components/layout/Main/Main';

const Home = () => {
  return (
    <Container>
      <Header />
      <Main>
        Home
      </Main>
      <Footer />
    </Container>
  )
}

export default Home;