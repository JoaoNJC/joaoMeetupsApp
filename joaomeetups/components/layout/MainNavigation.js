import Link from 'next/link'
import classes from './MainNavigation.module.css';

const MainNavigation = () => {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Joao's Meetings</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All My Meetups</Link>
          </li>
          <li>
            <Link href='/'>Schedule a Meeting</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation