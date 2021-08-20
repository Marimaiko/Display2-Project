import { useContext } from 'react';
import { Header } from '../Header';
import { NavBar } from '../NavBar';
import { BankCard } from '../BankCard';
import { BanksContext } from '../../contexts/BanksContext';
import style from './style.module.scss';

export function BankList() {
  const BankData = useContext(BanksContext)

  return (
    <>
    <div className={style.BankListPage}>
      <NavBar />
      <div className={style.BankListContent}>
        <Header />    

        <div className={style.BankList}>
          <div className={style.BankListTitle}>
            <h1>Bancos</h1>
            <h3>{BankData.length} bancos</h3>
            <form className={style.BankNameSearch}>
              <input 
                type="search" 
                name='BankName' 
                placeholder='Digite o nome do banco' 
              />
              <input 
                type="image" 
                src='/img/MagnifyingGlass.svg' 
                alt='Submit' 
              />
            </form>
          </div>
          <div className={style.BanksCard}>
            {BankData.map((Banks, key) => {
              return (
                <BankCard
                  key={Banks.ispb}
                  name={Banks.name}
                  code={Banks.code}
                  ispb={Banks.ispb}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}