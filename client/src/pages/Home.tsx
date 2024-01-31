import Container from '@/components/layout/Container/Container';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import Main from '@/components/layout/Main/Main';
import Hero from '@/components/home/Hero/Hero';

const Home = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Hero />
      </Main>
      <Footer />
    </Container>
  )
}

export default Home;