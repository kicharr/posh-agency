export const getBestFilms = (filmography) => {

    if (!filmography) return;

    let filterFilmography = filmography.filter((film) => film?.type === 'best');

    // if (!filterFilmography.length) return 'Нет данных';

    return filterFilmography.map(film => film?.name).join(', ');
}