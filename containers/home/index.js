import FeatureMovie from '@/components/feature-movie'
import React from 'react'

import Movies from '@/mocks/movies.json'
import Genres from '@/mocks/genres.json'
import Categories from '@/components/categories'
import MovieSection from '@/components/movie-section'

export default function HomeContainer() {
  return (
    <div>
      <FeatureMovie movie={Movies.results[0]}/>
      <Categories categories={Genres.genres.slice(0,5)}/>
      <MovieSection movies={Movies.results.slice(1,7)} title="Popular Films"/>
      <MovieSection movies={Movies.results.slice(7,13)} title="Your Favorites"/>
    </div>
  )
}
