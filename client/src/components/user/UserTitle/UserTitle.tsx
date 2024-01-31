import './UserTitle.css'

interface UserTitleProps {
  username: string;
  avatar: string;
}

const UserTitle = ({ username, avatar }: UserTitleProps) => {
  return (
    <section className='title'>
      <img src={avatar} alt={username} />
      <h1>{username}</h1>
    </section>
  )
}

export default UserTitle;