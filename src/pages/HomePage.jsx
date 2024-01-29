import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerG } from '../store/states/trainer-state'
import GeneralHeader from '../components/HomePage/GeneralHeader'
import './styles/HomePage.css'

const HomePage = () => {

  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerG(inputTrainer.current.value.trim())) // Preguntar que hace el dispatch
    navigate('/pokedex')
  }


  return (


    <div className='container__home'>
      <div className='homePage__info'>

        <img className='homePage__img' src="/logop.png" alt="" />
        <h2 className='homePage__title'>Hi Trainer!</h2>
        <p className='homePage__text'>To start this app, give me your trainer name</p>

        <form className='homePage__form' onSubmit={handleSubmit}>
          <input className='homePage__input' ref={inputTrainer} type="text" />
          <button className='homePage__btn'>Catch them all</button>
        </form>
      </div>

      <img className='homePage__footer' src="/footer.png" alt="" />
    </div>

  )
}

export default HomePage