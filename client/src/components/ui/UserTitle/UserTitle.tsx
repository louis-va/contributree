import './UserTitle.css'

interface UserTitleProps {
  username: string;
  avatar: string;
}

const UserTitle = ({ username, avatar }: UserTitleProps) => {
  return (
    <section className='title'>
      <a href={`https://github.com/${username}`}>
        <img src={avatar} alt={username} />
        <h1>{username}</h1>
      </a>
    </section>
  )
}

export default UserTitle;