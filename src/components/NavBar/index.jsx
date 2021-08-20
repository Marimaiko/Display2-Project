import style from './style.module.scss';

export function NavBar() {

  return (
    <div className={style.NavBar}>
      <img src="/img/miniLogo.svg" alt="Logo" />
      <div className={style.LinksGroup}>
        <a href="/">
          <img src="/img/btnHome.svg" alt="Home" />
        </a>
        <a href="/">          
          <img src="/img/btnMegaphone.svg" alt="Megaphone" />
        </a>
        <a href="/">          
          <img src="/img/btnUsers.svg" alt="Users" />
        </a>
        <a href="/">          
          <img src="/img/btnContact.svg" alt="Contact" />
        </a>
      </div>
        <a href="/">          
          <img src="/img/btnSignOut.svg" alt="SignOut" />
        </a>
    </div>
  )
}