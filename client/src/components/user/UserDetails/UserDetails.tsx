import './UserDetails.css'
import { userContributions, yearContributions } from '@/services/user.service';

interface UserDetailsProps {
  user: string;
  contributions: userContributions;
}

const findHighestValue = (array: yearContributions[], valueToCheck: 'total' | 'max' ): number => {
  let highestValue = array[0][valueToCheck]
  for (let i = 1; i<array.length; i++) {
    if (array[i][valueToCheck] > highestValue) 
      highestValue = array[i][valueToCheck];
  }
  return highestValue;
}

const UserDetails = ({ user, contributions }: UserDetailsProps) => {
  const highestYearlyContributions = findHighestValue(contributions.years, 'total');
  const highestMaxContributions = findHighestValue(contributions.years, 'max');

  return (
    <section className='about'>
      <div className='head'>
        <div className='head-title'>
          <span className='bold'>{user}</span> contributions
        </div>
        <a href={`https://github.com/${user}`} className='head-link'>
          Github
          <svg className='link-icon' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 12.5V87.5H87.5V50H79.1667V79.1667H20.8333V20.8333H50V12.5H12.5ZM58.3334 12.5V20.8333H73.2748L34.5541 59.5541L40.446 65.446L79.1667 26.7253V41.6667H87.5V12.5H58.3334Z" fill="currentColor"/>
          </svg>
        </a>
      </div>

      <table>
        <thead>
          <tr>
            <th className='year'>Year</th>
            <th className='max'>Max. in a day</th>
            <th className='contribs'>Contributions</th>
          </tr>
        </thead>
        
        <tbody>
          {contributions.years.map((year) => (
            <tr key={year.year}>
              <td className='year'>{year.year}</td>
              <td className={`max ${(year.max==highestMaxContributions) ? 'highest' : ''}`}>{year.max}</td>
              <td className={`contribs ${(year.total==highestYearlyContributions) ? 'highest' : ''}`}>{year.total}</td>
            </tr>
          ))}
        </tbody>
        
        <tfoot>
          <tr>
            <td className='year total'>Total</td>
            <td className='max total'></td>
            <td className='contribs total'>{contributions.total}</td>
          </tr>
        </tfoot>
      </table>
    </section>
  )
}

export default UserDetails;