import {computed} from "vue";

export const useProjectsStore = defineStore('projects', () => {
    const projectsList = ref([
        {
            id: 'anomaliya',
            type: 'movie',
            name: 'Аномалия',
            preview: 'anomaliya.png',
            videoPath: 'path',
            description: '30 лет своей жизни уфолог Герман Павлович посвятил изучению Юшкинской аномальной зоны, где были обнаружены таинственные статуэтки внеземного происхождения. Но однажды к уфологу приходит загадочный посетитель, утверждающий, что происхождение этих статуэток несколько иное, нежели тот полагал.'
        },
        {
            id: 'zam',
            name: 'Зам',
            type: 'movie',
            preview: 'zam.png',
            videoPath: 'https://www.kinopoisk.ru/film/5435044/',
            description: 'Непримечательный заместитель главного редактора журнала «Садовод», в связи с неожиданной болезнью начальника, оказывается во главе издания. Но справиться с долгожданной властью не так-то просто.'
        },
        {
            id: 'mts',
            name: 'МТС "Главный офис',
            preview: 'project-test-preview.png',
            videoPath: 'path',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper odio nisi, et eleifend leo pulvinar ut. Praesent orci nibh, blandit sit amet blandit vitae, venenatis et ante. Nullam mi tellus, lacinia eget vestibulum eget, rutrum a tellus. Phasellus pharetra felis ante, a fermentum elit pharetra eu. Sed tincidunt eleifend ullamcorper. Nullam at commodo ipsum. '
        },
        {
            id: 'monochrome',
            name: 'monochrome',
            preview: 'project-test-preview.png',
            videoPath: 'path',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper odio nisi, et eleifend leo pulvinar ut. Praesent orci nibh, blandit sit amet blandit vitae, venenatis et ante. Nullam mi tellus, lacinia eget vestibulum eget, rutrum a tellus. Phasellus pharetra felis ante, a fermentum elit pharetra eu. Sed tincidunt eleifend ullamcorper. Nullam at commodo ipsum. '
        },
        {
            id: 'sberbank',
            name: 'сбербанк',
            preview: 'project-test-preview.png',
            videoPath: 'path',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper odio nisi, et eleifend leo pulvinar ut. Praesent orci nibh, blandit sit amet blandit vitae, venenatis et ante. Nullam mi tellus, lacinia eget vestibulum eget, rutrum a tellus. Phasellus pharetra felis ante, a fermentum elit pharetra eu. Sed tincidunt eleifend ullamcorper. Nullam at commodo ipsum. '
        },
        {
            id: 'sportmaster',
            name: 'спортмастер',
            preview: 'project-test-preview.png',
            videoPath: 'path',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper odio nisi, et eleifend leo pulvinar ut. Praesent orci nibh, blandit sit amet blandit vitae, venenatis et ante. Nullam mi tellus, lacinia eget vestibulum eget, rutrum a tellus. Phasellus pharetra felis ante, a fermentum elit pharetra eu. Sed tincidunt eleifend ullamcorper. Nullam at commodo ipsum. '
        },
        {
            id: 'yasno',
            name: 'ясно',
            preview: 'project-test-preview.png',
            videoPath: 'path',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper odio nisi, et eleifend leo pulvinar ut. Praesent orci nibh, blandit sit amet blandit vitae, venenatis et ante. Nullam mi tellus, lacinia eget vestibulum eget, rutrum a tellus. Phasellus pharetra felis ante, a fermentum elit pharetra eu. Sed tincidunt eleifend ullamcorper. Nullam at commodo ipsum. '
        },
        {
            id: 'yandex',
            name: 'яндекс',
            preview: 'project-test-preview.png',
            videoPath: 'path',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper odio nisi, et eleifend leo pulvinar ut. Praesent orci nibh, blandit sit amet blandit vitae, venenatis et ante. Nullam mi tellus, lacinia eget vestibulum eget, rutrum a tellus. Phasellus pharetra felis ante, a fermentum elit pharetra eu. Sed tincidunt eleifend ullamcorper. Nullam at commodo ipsum. '
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