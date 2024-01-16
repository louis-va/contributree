import './UserDetails.css'

interface UserDetailsProps {
  total: number;
  lastYear: number;
  followers: number;
  activeSince: number;
}

const UserDetails = ({ total, lastYear, followers, activeSince }: UserDetailsProps) => {
  return (
    <section className='about'>
      <div className='row row-title'>
        Statistics
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