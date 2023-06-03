import classes from './MainNavigation.module.css';

const MainNavigation = () => {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Joao's Meetings</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All My Meetups</Link>
          </li>
          <li>
            <Link to='/'>Schedule a Meeting</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation