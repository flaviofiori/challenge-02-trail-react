import { MovieCard } from './MovieCard';

interface ContentProps {
    selectedGenre: {
        id: number;
        name: string;
        title: string;
    };
    movies: Array<{
        Title: string;
        Poster: string;
        Runtime: string;
        Ratings: Array<{
            Value: string;
        }>;
    }>
}

export function Content({ selectedGenre, movies }: ContentProps) {

    return(

        <div className="container">
            <header>
                <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
            </header>

            <main>
                <div className="movies-list">

                    {

                        movies.map(movie => (

                            <MovieCard
                                key={ movie.Title } 
                                title={ movie.Title } 
                                poster={ movie.Poster } 
                                runtime={ movie.Runtime } 
                                rating={ movie.Ratings[0].Value } />

                        ))

                    }

                </div>
            </main>

        </div>

    )
}