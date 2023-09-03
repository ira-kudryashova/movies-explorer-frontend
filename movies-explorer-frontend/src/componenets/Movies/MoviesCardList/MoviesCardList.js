import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard.js'

function MoviesCardList({ card, cards }) {
  return (
    <section className='moviescardlist'>
      <div className='moviescardlist__list'>
        {cards.map((card, index) => (<MoviesCard key={index} />))}
      </div>
    </section>
  )
}

export default MoviesCardList
