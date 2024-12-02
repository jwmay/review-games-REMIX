import { Link } from '@remix-run/react'

export default function GameTile({
  comingSoon,
  description,
  imageSrc,
  title,
}: {
  comingSoon: boolean
  description: string
  imageSrc: string
  title: string
}) {
  if (comingSoon) {
    return <div></div>
  } else {
    return (
      <Link to={`/${title.toLowerCase()}`}>
        <div className='card glass w-96'>
          <figure>
            <img src={imageSrc} alt={title} />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>{title}</h2>
            <p>{description}</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Play</button>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
