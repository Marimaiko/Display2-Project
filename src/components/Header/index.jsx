import style from './style.module.scss';

export function Header() {

  return (
    <header className={style.Header}>
      <h1>Bancos</h1>

      <div className={style.NavbarRight}>
        <button className={style.CriarBancoBtn}>+Criar Banco</button>
        <img src="/img/Bell.svg" alt="Sininho" />

        <div className={style.DropdownBtn}>
          <button> Olá,<span>Beleza Rara </span> 
            <img src="/img/setaBaixo.svg" alt="Seta" />
          </button>
          
          <div className={style.DropdownContent}>
            <a href="/">Link</a>
            <a href="/">Link</a>
          </div>
        </div>
      </div>
    </header>
  )
}