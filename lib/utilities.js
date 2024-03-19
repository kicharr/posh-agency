export const getBestFilms = (filmography) => {
    let filterFilmography = filmography.filter((film) => film?.type === 'best');

    return filterFilmography.map(film => film?.name).join(', ')
}