import './PopularUsers.css';
import torvalds from '@/assets/images/popular-users-avatars/torvalds.jpeg'
import yyx990803 from '@/assets/images/popular-users-avatars/yyx990803.jpeg'
import gaearon from '@/assets/images/popular-users-avatars/gaearon.jpeg'
import taylototwell from '@/assets/images/popular-users-avatars/taylototwell.jpeg'
import codediodeio from '@/assets/images/popular-users-avatars/codediodeio.png'
import shiffman from '@/assets/images/popular-users-avatars/shiffman.png'
import RichHarris from '@/assets/images/popular-users-avatars/Rich-Harris.jpeg'
import ry from '@/assets/images/popular-users-avatars/ry.jpeg'

interface User {
  name: string;
  username: string;
  description: string;
  avatar: string;
}

const POPULAR_USERS: User[] = [
  {
    "name": "Linus Torvalds",
    "username": "torvalds",
    "description": "Creator of Linux",
    "avatar": torvalds
  },
  {
    "name": "Evan You",
    "username": "yyx990803",
    "description": "Creator of Vue and Vite",
    "avatar": yyx990803
  },
  {
    "name": "Dan Abramov",
    "username": "gaearon",
    "description": "Coauthor of Create React App and Redux",
    "avatar": gaearon
  },
  {
    "name": "Taylor Otwell",
    "username": "taylorotwell",
    "description": "Creator of Laravel",
    "avatar": taylototwell
  },
  {
    "name": "Ryan Dahl",
    "username": "ry",
    "description": "Creator of Node and Deno",
    "avatar": ry
  },
  {
    "name": "Rich Harris",
    "username": "Rich-Harris",
    "description": "Creator of Svelte",
    "avatar": RichHarris
  },
  {
    "name": "Jeff Delaney",
    "username": "codediodeio",
    "description": "Creator of Fireship Youtube channel",
    "avatar": codediodeio
  },
  {
    "name": "Daniel Shiffman",
    "username": "shiffman",
    "description": "Teacher at Coding Train",
    "avatar": shiffman
  }
]

const PopularUsers = () => {
  return (
    <section className='popular-users'>
      <h2>Popular Github users</h2>
      <div className='user-grid'>
        {POPULAR_USERS.map((user, index)=>(
          <UserCard
            key={index}
            user={user}
          />
        ))}
      </div>
    </section>
  );
}

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <a href={`/${user.username}`} className='user-card'>
      <div>
        <img src={user.avatar} alt={user.name} />
      </div>
      <div>
        <h3>{user.name}</h3>
        <p className='username'>{user.username}</p>
        <p className='description'>{user.description}</p>
      </div>
    </a>
  )
}

export default PopularUsers;
