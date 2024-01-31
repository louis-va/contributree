import './Hero.css';
import Search from '@/components/layout/Search/Search';

const Hero = () => {
  return (
    <section className='hero'>
      <h1>Contributree</h1>
      <p>Make your tree grow by contributing to GitHub projects</p>
      <Search />
    </section>
  );
}

export default Hero;
