import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import './styles/ColorPalette.css'
import GeneralHeader from '../components/HomePage/GeneralHeader'
import './styles/PokemonPage.css'

const PokemonPage = () => {

  const { id } = useParams()
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [pokemon, getPokemon] = useFetch(url)


  useEffect(() => {
    getPokemon()
  }, [])

  console.log(pokemon)

  return (
    <div className='pokemonPage__container'>
      <GeneralHeader/>
      <article className='pokamenPage__sheet'>

          <section className='pokemonPage__section'>
            <header className={`pokemonPage__header ${pokemon?.types[0].type.name}`}>
              <img className='pokemonPage__img' src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
            </header>
            <p className='pokemonPage__id'>#{pokemon?.id}</p>
            <div className='pokemonPage__info'>
              <div className='pokemonPage__title'>
                <hr className='pokemonPage__hr' />
                <h2 className='pokemonPage__name'>{pokemon?.name}</h2>
                <hr className='pokemonPage__hr' />
              </div>
              <div className='pokemonPage__pyshic'>
                <p className='pokemonPage__pyshic__item'><span className='pokemonPage__label'>Weight</span><span className='pokemonPage__value'>{pokemon?.weight}</span></p>
                <p className='pokemonPage__pyshic__item'><span className='pokemonPage__label'>Height</span><span className='pokemonPage__value'>{pokemon?.height}</span></p>
              </div>
              <div className='pokemonPage__category'>
                <div className='pokemonPage__category__block'>
                  <p className='pokemonPage__category__text'>Type</p>
                  <div className='pokemonPage__category__block__item'>
                    <p className={`pokemonPage__category__type ${pokemon?.types[0].type.name}`}>{pokemon?.types[0].type.name}</p>
                  </div>
                </div>
                <div className='pokemonPage__category__block'>
                  <p className='pokemonPage__category__text'>Abilities</p>
                  <div className='pokemonPage__category__block__item'>
                    <button className='pokemonPage__category__ability'>{pokemon?.abilities[0].ability.name}</button>
                    <button className='pokemonPage__category__ability'>{pokemon?.abilities[1].ability.name}</button>
                  </div>
                </div>
              </div>

            </div>

          </section>

          <section className='stats__container'>
            <div className='stats__header'>
            <h3 className='stats__title'>Stats</h3>
            <hr className='stat__hr' />
            <img className='pokeball__img' src="/pokeball.png" alt="" />
            </div>
            <ul className='container__stats__info'>
              {
                pokemon?.stats.map(statInfo => 
                  <li className='stats__info__item'>
                    <div className='header__stat__info'>
                      <span className='header__stat__label'>{statInfo.stat.name}</span>
                      <span>{statInfo.base_stat}/255</span>
                    </div>
                    <progress className={`progress__stats ${pokemon?.types[0].type.name}`} max='255' value={`${statInfo.base_stat}`}></progress>
                  </li>
                  
                  )
              }
            </ul>
          </section>
      </article>
      <section className='movements__container'>
        <div className='movements__header'>
          <h3 className='movements__title'>Movements</h3>
          <hr  className='move__hr'/>
          <img className='movements__icon' src="/pokeball.png" alt="" />

        </div>
        <ul className='movements__list'>
          {
            pokemon?.moves.map(movesInfo => 
                <li className='movement__name' key={movesInfo.move.url}>
                  {movesInfo.move.name}
                </li>
                
              )
          }
        </ul>
      </section>
    </div>
  )
}

export default PokemonPage