import { useParams } from 'react-router-dom';
import Container from '@/components/layout/Container/Container';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import Main from '@/components/layout/Main/Main';
import UserTitle from '@/components/ui/UserTitle/UserTitle';
import Tree from '@/components/ui/Tree/Tree';
import UserDetails from '@/components/ui/UserDetails/UserDetails';

const User = () => {
  const { id } = useParams();

  return (
    <Container>
      <Header />
      <Main>
        <UserTitle username={id!} avatar='https://avatars.githubusercontent.com/u/40118360?v=4' />
        <Tree seed={id!} size={1240} />
        <UserDetails total={1240} lastYear={324} followers={41} activeSince={2017} />
      </Main>
      <Footer />
    </Container>
  )
}

export default User;