import { ReactNode } from 'react';
import './Main.css'

interface ContainerProps {
  children?: ReactNode;
}

const Main = ({ children }: ContainerProps) => {
  return (
    <main>
      {children}
    </main>
  )
}

export default Main;