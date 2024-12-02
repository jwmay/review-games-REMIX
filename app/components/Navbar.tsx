import { Link } from '@remix-run/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

export default function Navbar({ title }: { title: string }) {
  return (
    <div className='navbar bg-base-100 mb-8'>
      <div className='navbar-start'>
        <Link to='/'>
          <button className='btn btn-ghost text-xl'>
            <FontAwesomeIcon icon={faHouse} />
          </button>
        </Link>
      </div>
      <div className='navbar-center'>{title}</div>
      <div className='navbar-end'>
        <button className='btn btn-square btn-ghost'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block h-5 w-5 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
