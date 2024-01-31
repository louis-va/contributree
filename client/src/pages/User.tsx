import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@/components/layout/Container/Container';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import Main from '@/components/layout/Main/Main';
import UserTitle from '@/components/ui/UserTitle/UserTitle';
import Tree from '@/components/ui/Tree/Tree';
import UserDetails from '@/components/ui/UserDetails/UserDetails';
import Loading from '@/components/ui/Loading/Loading';
import NotFound from '@/components/ui/NotFound/NotFound';
import { userContributions, fetchUserContributions } from '@/services/user.service';

const User = () => {
  const { id } = useParams();
  const [contributions, setContributions] = useState<userContributions | null | undefined>(undefined)

  useEffect(() => {
    setContributions(undefined)
    const fetchData = async () => {
      const contributions = await fetchUserContributions(id!)
      setContributions(contributions)
    };
  
    fetchData();
  }, [id]);

  let content: JSX.Element;
  if (contributions === undefined) content = <Loading />;
  else if (contributions === null) content = <NotFound query={id!} />;
  else content = (
    <>
      <UserTitle username={id!} avatar={contributions!.avatar} />
      <Tree seed={id!} size={contributions!.total} />
      <UserDetails user={id!} contributions={contributions!} />
    </>
  )

  return (
    <Container>
      <Header />
      <Main>
        {content}
      </Main>
      <Footer />
    </Container>
  )
}

export default User;