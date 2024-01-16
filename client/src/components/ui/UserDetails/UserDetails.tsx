import './UserDetails.css'

interface UserDetailsProps {
  user: string;
  total: number;
  lastYear: number;
  followers: number;
  activeSince: number;
}

const UserDetails = ({ user, total, lastYear, followers, activeSince }: UserDetailsProps) => {
  return (
    <section className='about'>
      <div className='row row-head'>
        <div className='th'>
          About <span className='bold'>{user}</span>
        </div>
        <a href={`https://github.com/${user}`} className='github-link'>
          Github
          <svg className='link-icon' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 12.5V87.5H87.5V50H79.1667V79.1667H20.8333V20.8333H50V12.5H12.5ZM58.3334 12.5V20.8333H73.2748L34.5541 59.5541L40.446 65.446L79.1667 26.7253V41.6667H87.5V12.5H58.3334Z" fill="currentColor"/>
          </svg>
        </a>
      </div>
      <div className='row'>
        <div className='head'>
          Total contributions
        </div>
        <div className='value'>
          {total}
        </div>
      </div>
      <div className='row'>
        <div className='head'>
          Contributions in the last year
        </div>
        <div className='value'>
          {lastYear}
        </div>
      </div>
      <div className='row'>
        <div className='head'>
          Number of followers
        </div>
        <div className='value'>
          {followers}
        </div>
      </div>
      <div className='row'>
        <div className='head'>
          Active on Github since
        </div>
        <div className='value'>
          {activeSince}
        </div>
      </div>
    </section>
  )
}

export default UserDetails;