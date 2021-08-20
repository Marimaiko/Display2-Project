
import style from './style.module.scss';

export function MainPage() {

  return(
    <div className={style.MainPageContainer}>

      <div className={style.LeftLoginPart}>
        <div className={style.LoginPart}>
          {/* <h1>Lado Esquerdo</h1> */}
          <img src="/img/logo.svg" alt="Logo" />
          <h2>Dispare mensagens quando e para quem você quiser.</h2>

          <form className={style.FormLogin}>
            <label for='Email'>E-mail</label>
            <input type='text' name='Email' placeholder='Placeholder' />
            <label for='Password'>Senha</label>
            <input type='text' name='Password' placeholder='Placeholder' />
          </form>
            <button type='submit' href='/'>Entrar</button>
            <p>Não tem uma conta?<a href='/'> Cadastre-se</a></p>
        </div>

        <footer>
          <p>Copyright © 2010-2021 - Informem-se Company S.L. All rights reserved.</p>
        </footer>
      </div>

          {/* Lado direito */}
      <div className={style.RightInfoPart}>
        <img src="/img/infoMainPage.svg" alt="Imagem da Main page" />
        <div className={style.TextRightPage}>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien mi, commodo ut pellentesque non, fermentum at risus. Sed eu augue sit amet leo scelerisque cursus vitae ac dolor</p>
        </div>
      </div>
    </div>
  )
}