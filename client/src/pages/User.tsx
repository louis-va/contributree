import { useParams } from 'react-router-dom';
import Container from '@/components/layout/Container/Container';
import Header from '@/components/layout/Header/Header';
import Main from '@/components/layout/Main/Main';
import UserTitle from '@/components/ui/UserTitle/UserTitle';
import Tree from '@/components/ui/Tree/Tree';

const User = () => {
  const { id } = useParams();

  return (
    <Container>
      <Header />
      <Main>
        <UserTitle username={id!} avatar='https://avatars.githubusercontent.com/u/40118360?v=4' />
        <Tree seed={id!} size={30} />
      </Main>
    </Container>
  )
}

export default User;