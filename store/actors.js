import {computed} from "vue";

export const useActorsStore = defineStore('actors', () => {
    const actorsList = ref([
        {
            id: 'slava-kopeykin',
            preview: "/assets/...",
            commonFeatures: {
                photo: "slava-preview.png",
                name: "Слава Копейкин",
                dateBirth: '24.03.1983',
                growth: 185,
                weight: 78,
                clothingSize: "42-44",
                shoeSize: 36,
                eyes: 'серо-голубой',
                foreignLanguages: "английский, франзуский",
                voice: "сопрано",
                type: "общий европейский",
                photos: [
                    'slava-1.png',
                    'slava-2.png',
                    'slava-3.png'
                ],
                vizitingCard: 'https://www.youtube.com/embed/CxhIyXpG9xk'
            },
            additionalInformation: {
                nationality: "Россия",
                city: "Москва, Московская область, Россия",
                driving: "Права категории В",
                moreInfo: [
                    'Есть своя музыкальная группа “Meydeleh”',
                    'Музыкальная школа им. Дунаевского - фортепиано'
                ],
                kinopoiskLink: 'https://www.kinopoisk.ru/name/7089008/?utm_referrer=www.google.com',
                kinoteatrLink: 'https://www.kino-teatr.ru/kino/acter/m/ros/865287/works/'
            },
            filmography: [
                {
                    name: "Трудные подростки",
                    year: "2019",
                    type: 'best'
                },
                {
                    name: "Васнецова",
                    year: "2022",
                    type: 'default'
                },
                {
                    name: "Стрим",
                    year: "2022",
                    type: 'default'
                },
                {
                    name: "Слово пацана. Кровь на асфальте",
                    year: "2023",
                    type: 'best'
                },
                {
                    name: "На автомате (в производстве)",
                    year: "2024",
                    type: 'default'
                }
            ]
        },
        {
            id: 'slava-kopeykin123',
            preview: "/assets/...",
            commonFeatures: {
                photo: "/assets/...",
                name: "Слава Копейкин",
                growth: 185,
                clothingSize: "42-44",
                shoeSize: 36,
                eyes: 'серо-голубой',
                foreignLanguages: "английский, франзуский",
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
                    type: 'best'
                },
                {
                    name: "Каменщик | реж. Ренни Харлин | роль — Тритон",
                    year: "2018",
                    type: 'best'
                },
                {
                    name: "Каменщик | реж. Ренни Харлин | роль — Тритон",
                    year: "2018",
                    type: 'best'
                }
            ]
        },
        {
            id: 'slava-kopeyki124n',
            preview: "/assets/...",
            commonFeatures: {
                photo: "/assets/...",
                name: "Слава Копейкин",
                growth: 185,
                clothingSize: "42-44",
                shoeSize: 36,
                eyes: 'серо-голубой',
                foreignLanguages: "английский, франзуский",
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
                    type: 'best'
                },
                {
                    name: "Каменщик | реж. Ренни Харлин | роль — Тритон",
                    year: "2018",
                    type: 'best'
                },
                {
                    name: "Каменщик | реж. Ренни Харлин | роль — Тритон",
                    year: "2018",
                    type: 'best'
                }
            ]
        },
        {
            id: 'slava-kopey1243124kin',
            preview: "/assets/...",
            commonFeatures: {
                photo: "/assets/...",
                name: "Слава Копейкин",
                growth: 185,
                clothingSize: "42-44",
                shoeSize: 36,
                eyes: 'серо-голубой',
                foreignLanguages: "английский, франзуский",
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
                    type: 'best'
                },
                {
                    name: "Каменщик | реж. Ренни Харлин | роль — Тритон",
                    year: "2018",
                    type: 'best'
                },
                {
                    name: "Каменщик | реж. Ренни Харлин | роль — Тритон",
                    year: "2018",
                    type: 'best'
                }
            ]
        },
        {
            id: 'slav124124a-kopeykin',
            preview: "/assets/...",
            commonFeatures: {
                photo: "/assets/...",
                name: "Слава Копейкин",
                growth: 185,
                clothingSize: "42-44",
                shoeSize: 36,
                eyes: 'серо-голубой',
                foreignLanguages: "английский, франзуский",
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
                    type: 'best'
                },
                {
                    name: "Каменщик | реж. Ренни Харлин | роль — Тритон",
                    year: "2018",
                    type: 'best'
                },
                {
                    name: "Каменщик | реж. Ренни Харлин | роль — Тритон",
                    year: "2018",
                    type: 'best'
                }
            ]
        },
        {
            id: 'slava-kop1254124eykin',
            preview: "/assets/...",
            commonFeatures: {
                photo: "/assets/...",
                name: "Слава Копейкин",
                growth: 185,
                clothingSize: "42-44",
                shoeSize: 36,
                eyes: 'серо-голубой',
                foreignLanguages: "английский, франзуский",
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
                    type: 'best'
                },
                {
                    name: "Каменщик | реж. Ренни Харлин | роль — Тритон",
                    year: "2018",
                    type: 'best'
                },
                {
                    name: "Каменщик | реж. Ренни Харлин | роль — Тритон",
                    year: "2018",
                    type: 'best'
                }
            ]
        },
        {
            id: '123123slava-kopeykin',
            preview: "/assets/...",
            commonFeatures: {
                photo: "/assets/...",
                name: "Слава Копейкин",
                growth: 185,
                clothingSize: "42-44",
                shoeSize: 36,
                eyes: 'серо-голубой',
                foreignLanguages: "английский, франзуский",
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
                    type: 'best'
                },
                {
                    name: "Каменщик | реж. Ренни Харлин | роль — Тритон",
                    year: "2018",
                    type: 'best'
                },
                {
                    name: "Каменщик | реж. Ренни Харлин | роль — Тритон",
                    year: "2018",
                    type: 'best'
                }
            ]
        },
        {
            id: 'sl124124ava-kopeykin',
            preview: "/assets/...",
            commonFeatures: {
                photo: "/assets/...",
                name: "Слава Копейкин",
                growth: 185,
                clothingSize: "42-44",
                shoeSize: 36,
                eyes: 'серо-голубой',
                foreignLanguages: "английский, франзуский",
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
                    type: 'best'
                },
                {
                    name: "Каменщик | реж. Ренни Харлин | роль — Тритон",
                    year: "2018",
                    type: 'best'
                },
                {
                    name: "Каменщик | реж. Ренни Харлин | роль — Тритон",
                    year: "2018",
                    type: 'best'
                }
            ]
        },
    ])

    const getActorData = (id) => {
        return actorsList.value.find((actor) => actor.id === id)
    }

    return {
        actorsList: computed(() => actorsList.value),
        getActorData,
    }
})