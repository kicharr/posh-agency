import {computed} from "vue";

export const useProjectsStore = defineStore('projects', () => {
    const projectsList = ref([
        {
            id: 'nazvanie-proekta',
            name: 'Название проекта',
            preview: 'project-test-preview.png',
            videoPath: 'path',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 'mts',
            name: 'МТС "Главный офис"',
            preview: 'project-test-preview.png',
            videoPath: 'path',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 'nazvanie-proekta',
            name: 'Название проекта',
            preview: 'project-test-preview.png',
            videoPath: 'path',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 'nazvanie-proekta',
            name: 'Название проекта',
            preview: 'project-test-preview.png',
            videoPath: 'path',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 'nazvanie-proekta',
            name: 'Название проекта',
            preview: 'project-test-preview.png',
            videoPath: 'path',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 'nazvanie-proekta',
            name: 'Название проекта',
            preview: 'project-test-preview.png',
            videoPath: 'path',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
    ]);

    const getProjectData = (id) => {

    }

    return {
        projectsList: computed(() => projectsList.value),
        getProjectData,
    }
})