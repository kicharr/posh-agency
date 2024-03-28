import {computed} from "vue";

export const useProjectsStore = defineStore('projects', () => {
    const projectsList = ref([
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
            id: 'сбербанк',
            name: 'сбербанк',
            preview: 'project-test-preview.png',
            videoPath: 'path',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper odio nisi, et eleifend leo pulvinar ut. Praesent orci nibh, blandit sit amet blandit vitae, venenatis et ante. Nullam mi tellus, lacinia eget vestibulum eget, rutrum a tellus. Phasellus pharetra felis ante, a fermentum elit pharetra eu. Sed tincidunt eleifend ullamcorper. Nullam at commodo ipsum. '
        },
        {
            id: 'спортмастер',
            name: 'спортмастер',
            preview: 'project-test-preview.png',
            videoPath: 'path',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper odio nisi, et eleifend leo pulvinar ut. Praesent orci nibh, blandit sit amet blandit vitae, venenatis et ante. Nullam mi tellus, lacinia eget vestibulum eget, rutrum a tellus. Phasellus pharetra felis ante, a fermentum elit pharetra eu. Sed tincidunt eleifend ullamcorper. Nullam at commodo ipsum. '
        },
        {
            id: 'ясно',
            name: 'ясно',
            preview: 'project-test-preview.png',
            videoPath: 'path',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper odio nisi, et eleifend leo pulvinar ut. Praesent orci nibh, blandit sit amet blandit vitae, venenatis et ante. Nullam mi tellus, lacinia eget vestibulum eget, rutrum a tellus. Phasellus pharetra felis ante, a fermentum elit pharetra eu. Sed tincidunt eleifend ullamcorper. Nullam at commodo ipsum. '
        },
        {
            id: 'яндекс',
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