import React from "react";

import MovieContainer from "@/containers/movie";
import Movies from "@/mocks/movies.json";
import { notFound } from "next/navigation";

export default function MoviePage({ params,searchParams }) {
  // console.log('params',params)

  const movieDetail = Movies.results.find((movie)=>movie.id.toString()===params.id)
  
  console.log(movieDetail);

  if(!movieDetail){
    notFound();
  }

  if(!searchParams.error === 'true'){
    throw new Error("Error Happened");
  }

  return <MovieContainer movie={movieDetail} />;
}
