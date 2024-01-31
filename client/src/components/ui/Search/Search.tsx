import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css'

const Search = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState<string | null>(null)

  const handleInputChange = async (event: any) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (query) {
      navigate(`/${query}`)
    }
  }

  return (
    <search className='search'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          <svg className='search-icon' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.3333 10C24.9633 10 10 24.9633 10 43.3333C10 61.7033 24.9633 76.6666 43.3333 76.6666C51.3217 76.6666 58.6579 73.8299 64.4075 69.1211L84.3099 89.0234C85.1459 89.8942 86.3874 90.245 87.5556 89.9405C88.7237 89.6359 89.6359 88.7237 89.9405 87.5556C90.245 86.3874 89.8942 85.1459 89.0234 84.3099L69.1211 64.4075C73.8299 58.6579 76.6666 51.3217 76.6666 43.3333C76.6666 24.9633 61.7033 10 43.3333 10ZM43.3333 16.6667C58.1004 16.6667 70 28.5663 70 43.3333C70 58.1004 58.1004 70 43.3333 70C28.5663 70 16.6667 58.1004 16.6667 43.3333C16.6667 28.5663 28.5663 16.6667 43.3333 16.6667Z" fill="currentColor"/>
          </svg>
          <input 
            name='search' 
            id='search' 
            placeholder='Search a Github user'
            onChange={handleInputChange}
          />
        </label>
      </form>
    </search>
  )
}

export default Search;