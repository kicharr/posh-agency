import {computed} from "vue";

export const useActorsStore = defineStore('actors', () => {
    const actorsList = ref([
        {
            preview: "/assets/...",
            commonFeatures: {
                photo: "/assets/...",
                name: "Слава Копейкин",
                growth: 185,
                clothingSize: "42-44",
                shoeSize: 36,
                eyes: 'серо-голубой',
                foreignLanguages: {
                    "английский": "свободный",
                    "франзуский": "базовый",
                },
                voice: "сопрано",
                type: "общий европейский",
            },
            additionalInformation: {
                nationality: "Россия",
                city: "Москва, Московская область, Россия",
                driving: "Права категории В",
                moreInfo: [
                    'Есть своя музыкальная группа “Meydeleh”',
                    'Музыкальная школа им. Дунаевского - фортепиано'
                ]
            },
            filmography: [
                {
                    name: "Проект «Прометей» | реж. Максим Свешников | роль",
                    year: "2020",
                    type: 'best'
                },
                {
                    name: "Каменщик | реж. Ренни Харлин | роль — Тритон",
                    year: "2018",
                    type: 'default'
                }
            ]
        },
        {
            preview: "/assets/...",
            commonFeatures: {
                photo: "/assets/...",
                name: "Слава Копейкин",
                growth: 185,
                clothingSize: "42-44",
                shoeSize: 36,
                eyes: 'серо-голубой',
                foreignLanguages: {
                    "английский": "свободный",
                    "франзуский": "базовый",
                },
                voice: "сопрано",
                type: "общий европейский",
            },
            additionalInformation: {
                nationality: "Россия",
                city: "Москва, Московская область, Россия",
                driving: "Права категории В",
                moreInfo: [
                    'Есть своя музыкальная группа “Meydeleh”',
                    'Музыкальная школа им. Дунаевского - фортепиано'
                ]
            },
            filmography: [
                {
                    name: "Проект «Прометей» | реж. Максим Свешников | роль",
                    year: "2020",
                    type: 'best'
                },
                {
                    name: "Каменщик | реж. Ренни Харлин | роль — Тритон",
                    year: "2018",
                    type: 'default'
                }
            ]
        }
    ])


    return {
        actorsList: computed(() => actorsList.value),
    }
})