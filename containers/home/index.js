import FeatureMovie from '@/components/feature-movie'
import React from 'react'

import Movies from '@/mocks/movies.json'
import Genres from '@/mocks/genres.json'
import Categories from '@/components/categories'

export default function HomeContainer() {
  return (
    <div>
      <FeatureMovie movie={Movies.results[0]}/>
      <Categories categories={Genres.genres.slice(0,5)}/>
    </div>
  )
}
