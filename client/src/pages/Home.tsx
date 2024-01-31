import Container from '@/components/layout/Container/Container';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import Main from '@/components/layout/Main/Main';
import Hero from '@/components/home/Hero/Hero';
import PopularUsers from '@/components/home/PopularUsers/PopularUsers';

const Home = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Hero />
        <PopularUsers />
      </Main>
      <Footer />
    </Container>
  )
}

export default Home;