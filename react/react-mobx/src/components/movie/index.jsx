import React, { useEffect } from 'react';
// import movieStore from '../../store/movieStore';
// import { observer } from "mobx-react-lite";
import { useStore, observer } from '../../store/index';

const MovieList = () => {
    const { movieStore, counterStore } = useStore()

    useEffect(() => {
        movieStore.setMovieList()
    }, [])

    return (
        <div>
            {
                movieStore.movieList.map(item => (
                    <li key={item.id}>{item.nm} -- {item.star}</li>
                ))
            }
        </div>
    );
};

export default observer(MovieList);