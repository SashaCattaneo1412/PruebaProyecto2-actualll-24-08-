import React from 'react'
import style from '../styles/compartimiento.module.css'
import Button from '../components/Buttons';
import Link from 'next/link';
function compartimiento() {
  return (

    <form>
    <h1 className={style.title}>Seleccione el compartimiento</h1>
    <div className={style.container}>
    <div className={style.containerimg}>
        <button className={style.botonComp1}>
        <Link href="/InicioSesion"/> 
        </button> <br />
        <button text="compartimiento2" className={style.botonComp2} onClick={() => turnOn()} /> <br />
    </div>

    <div className={style.containerimg}>
        <button text="compartmeinto3" className={style.botonComp3} onClick={() => turnOn()} /> <br />
        <button text="compartmeinto4" className={style.botonComp4} onClick={() => turnOn()} /> <br />
    </div>

    </div>
    </form>
   

  )
}

export default compartimiento
