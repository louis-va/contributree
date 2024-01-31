import './NotFound.css';

interface NotFoundProps {
  query: string;
}

const NotFound = ({ query }: NotFoundProps) => {
  return (
    <div className="not-found">
      <div className='not-found-icon'>
        ¯\(o_o)/¯
      </div>
      <div>
        The user<span className='username'>&nbsp;{query}&nbsp;</span>doesn't exist.
      </div>
    </div>
  );
};

export default NotFound;