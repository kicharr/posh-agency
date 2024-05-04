import {computed} from "vue";

export const useProjectsStore = defineStore('projects', () => {
    const projectsList = ref([
        {
            id: 'anomaliya',
            type: 'movie',
            name: 'Аномалия',
            preview: 'anomaliya.png',
            videoPath: 'CPfIX5PXxAo',
            kinopoisk: 'https://www.kinopoisk.ru/film/5511466/',
        },
        {
            id: 'zam',
            name: 'Зам',
            type: 'movie',
            preview: 'zam.png',
            videoPath: null,
            kinopoisk: 'https://www.kinopoisk.ru/film/5435044/',
        },
        {
            id: 'mts',
            name: 'МТС "Главный офис',
            preview: 'project-test-preview.png',
            videoPath: null,
        },
        {
            id: 'monochrome',
            name: 'monochrome',
            preview: 'project-test-preview.png',
            videoPath: null,
        },
        {
            id: 'sberbank',
            name: 'сбербанк',
            preview: 'project-test-preview.png',
            videoPath: 'path',
        },
        {
            id: 'sportmaster',
            name: 'спортмастер',
            preview: 'project-test-preview.png',
            videoPath: null,
        },
        {
            id: 'yasno',
            name: 'ясно',
            preview: 'project-test-preview.png',
            videoPath: null,
        },
        {
            id: 'yandex',
            name: 'яндекс',
            preview: 'project-test-preview.png',
            videoPath: null,
        },
    ]);

    const getProjectData = (id) => {
        return projectsList.value.find((actor) => actor.id === id)
    }

    return {
        projectsList: computed(() => projectsList.value),
        getProjectData,
    }
})