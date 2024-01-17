import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Container from '@/components/layout/Container/Container';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import Main from '@/components/layout/Main/Main';
import UserTitle from '@/components/ui/UserTitle/UserTitle';
import Tree from '@/components/ui/Tree/Tree';
import UserDetails from '@/components/ui/UserDetails/UserDetails';
import { userContributions, fetchUserContributions } from '@/services/user.service';

const User = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contributions, setContributions] = useState<userContributions | null | undefined>(undefined)

  useEffect(() => {
    const fetchData = async () => {
      const contributions = await fetchUserContributions(id!)
      setContributions(contributions)
    };
  
    fetchData();
  }, [id]);

  if (contributions === undefined) return <>Loading...</>; // TODO : Add Loading component
  if (contributions === null) navigate('/');

  return (
    <Container>
      <Header />
      <Main>
        <UserTitle username={id!} avatar={contributions!.avatar} />
        <Tree seed={id!} size={contributions!.total} />
        <UserDetails user={id!} contributions={contributions!} />
      </Main>
      <Footer />
    </Container>
  )
}

export default User;