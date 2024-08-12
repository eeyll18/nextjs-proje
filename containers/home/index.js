import FeatureMovie from "@/components/feature-movie";
import React from "react";

import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
import Categories from "@/components/categories";
import MovieSection from "@/components/movie-section";

export default function HomeContainer({ selectedCategory }) {
  return (
    <div>
      <FeatureMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MovieSection
          movies={selectedCategory.movies}
          title={
            Genres.genres.find((genre) => `${genre.id}` === selectedCategory.id)
              .name
          }
        />
      )}
      <MovieSection movies={Movies.results.slice(1, 7)} title="Popular Films" />
      <MovieSection
        movies={Movies.results.slice(7, 13)}
        title="Your Favorites"
      />
    </div>
  );
}
