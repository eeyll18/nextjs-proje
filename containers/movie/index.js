import FeatureMovie from '@/components/feature-movie'
import React from 'react'

export default function MovieContainer({movie}) {
  return (
    <FeatureMovie movie={movie} isCompact={false}/>
  )
}
