import {computed} from "vue";

export const useArtistsStore = defineStore('artists', () => {
    const artistsList = ref([
        {
            id: 'slava-kopeykin',
            preview: "/slava-kopeykin/slava-kopeykin-preview.png",
            commonFeatures: {
                photo: "/artists/slava-kopeykin/slava-kopeykin.png",
                name: "Слава Копейкин",
                dateBirth: '24.03.1983',
                growth: 185,
                weight: 78,
                clothingSize: "42-44",
                shoeSize: 36,
                eyes: 'серо-голубой',
                foreignLanguages: ["английский, франзуский"],
                voice: "сопрано",
                type: "общий европейский",
                photos: [
                    'artists/slava-kopeykin/slava-kopeykin-1.png',
                    'artists/slava-kopeykin/slava-kopeykin-2.png',
                    'artists/slava-kopeykin/slava-kopeykin-3.png'
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
            id: 'philip-ershov',
            preview: "philip-ershov/philip-ershov-preview.png",
            commonFeatures: {
                photo: "artists/philip-ershov/philip-ershov.png",
                name: "Филипп Ершов",
                dateBirth: '04.09.1993',
                growth: 180,
                weight: 65,
                clothingSize: 'М',
                shoeSize: 38,
                eyes: 'серо-зеленый',
                foreignLanguages: ["английский (базовый)"],
                voice: null,
                dance: [
                    'общетеатральный (любительский)',
                ],
                hairColor: 'каштановый',
                type: "европейский",
                photos: [
                    '/artists/philip-ershov/philip-ershov-1.png',
                    '/artists/philip-ershov/philip-ershov-2.png',
                    '/artists/philip-ershov/philip-ershov-3.png'
                ],
                vizitingCard: null
            },
            additionalInformation: {
                nationality: "Россия",
                city: "Москва, Московская область, Россия",
                driving: 'Права категории В',
                tvWork: null,
                externalFeatures: null,
                moreInfo: [
                    'футбол (профессиональный)',
                    'плавание (профессиональный)',
                ],
                kinopoiskLink: 'https://www.kinopoisk.ru/name/1700503/',
                kinoteatrLink: 'https://www.kino-teatr.ru/kino/acter/m/ros/321091/works/'
            },
            filmography: [
                {
                    name: "Жыыызнь (в производстве)",
                    year: 2024,
                    type: 'default'
                },
                {
                    name: "Александр I (в производстве)",
                    year: 2024,
                    type: 'default'
                },
                {
                    name: "Тайна пропавшей деревни - Алексей Кудряь (главная роль)",
                    year: 2023,
                    type: 'best'
                },
                {
                    name: "Ольга-5 - Лёха Кукушкин (Пушкин)",
                    year: 2023,
                    type: 'default'
                },
                {
                    name: "Нюрнберг | Nyurnberg | Nürnberg (Великобритания, Германия, Россия, Чехия) Тарабуркин",
                    year: 2023,
                    type: 'default'
                },
                {
                    name: "Доктор Краснов - Роман Богачев",
                    year: 2023,
                    type: 'default'
                },
                {
                    name: "Художник - Дмитрий Мальчик, сотрудник милиции",
                    year: 2022,
                    type: 'default'
                },
                {
                    name: "Мафия - дело семейное",
                    year: 2022,
                    type: 'best'
                },
                {
                    name: "Грузчики - Боря (главная роль)",
                    year: 2022,
                    type: 'default'
                },
                {
                    name: "Зелёный мэр - Ярик Орлов (главная роль)",
                    year: 2021,
                    type: 'best'
                },
                {
                    name: "Бесит - Серёга (главная роль)",
                    year: 2021,
                    type: 'default'
                },
                {
                    name: "Стрельцов - футболист 'Торпедо'",
                    year: 2020,
                    type: 'default'
                },
                {
                    name: "Ольга-4 - Лёха Кукушкин (Пушкин), друг Андрея",
                    year: 2020,
                    type: 'default'
                },
                {
                    name: "Один вдох - Саня Гордеев, сын Марины",
                    year: 2020,
                    type: 'default'
                },
                {
                    name: "Дылды-2 - сын прокурора",
                    year: 2020,
                    type: 'default'
                },
                {
                    name: "Гости из прошлого - Вениамин Хатов",
                    year: 2020,
                    type: 'default'
                },
                {
                    name: "Лёд-2 | Ice 2",
                    year: 2019,
                    type: 'best'
                },
                {
                    name: "Кумир - Грюндик",
                    year: 2019,
                    type: 'default'
                },
                {
                    name: "90-е. Весело и громко - Паша (главная роль)",
                    year: 2018,
                    type: 'default'
                },
                {
                    name: "Красные браслеты - Олег (главная роль)",
                    year: 2015,
                    type: 'default'
                },
            ]
        },
        {
            id: 'arseny-weiss',
            preview: "arseny-weiss/arseny-weiss-preview.png",
            commonFeatures: {
                photo: "artists/arseny-weiss/arseny-weiss.png",
                name: "Арсений Вейс",
                dateBirth: '23.02.2005',
                growth: 184,
                weight: 74,
                clothingSize: 'XL',
                shoeSize: '44-45',
                eyes: 'голубой',
                foreignLanguages: ["английский (базовый)"],
                voice: 'тенор',
                dance: [
                    'балет (любительский высокий)',
                    'народные (любительский высокий)',
                    'джаз (любительский высокий)',
                    'модерн (любительский высокий)'
                ],
                vocal: [
                    'мюзикл (полупрофессиональный)',
                    'эстрадно-джазовый (полупрофессиональный)'
                ],
                hairColor: 'темно-русый',
                type: "европейский",
                photos: [
                    '/artists/arseny-weiss/arseny-weiss-1.png',
                    '/artists/arseny-weiss/arseny-weiss-2.png',
                    '/artists/arseny-weiss/arseny-weiss-3.png'
                ],
                vizitingCard: 'https://www.youtube.com/embed/Nap4eXNM_hY'
            },
            additionalInformation: {
                nationality: "Россия",
                city: "Москва, Московская область, Россия",
                driving: null,
                tvWork: null,
                externalFeatures: null,
                moreInfo: [
                    'плавание (полупрофессиональный)',
                    'баскетбол (любительский высокий)',
                    'футбол (любительский)'
                ],
                skills: ['пародия', 'пантомима', 'клоунада'],
                kinopoiskLink: 'https://www.kinopoisk.ru/name/6932344/',
                kinoteatrLink: 'https://www.kino-teatr.ru/kino/acter/c/ros/689012/bio/'
            },
            filmography: [
                {
                    name: "Cумма квадратов катетов (в производстве)",
                    year: 2024,
                    type: 'default'
                },
                {
                    name: "Лгунья (в производстве)",
                    year: 2024,
                    type: 'default'
                },
                {
                    name: "Витринный экземпляр (в производстве)",
                    year: 2024,
                    type: 'default'
                },
                {
                    name: "Ольга-5 - Лёха Кукушкин (Пушкин)",
                    year: 2023,
                    type: 'default'
                },
                {
                    name: "Закрытый уровень - Вик (главная роль)",
                    year: 2023,
                    type: 'best'
                },
                {
                    name: "Загадай любовь - Владимир Галушка (Вова)",
                    year: 2023,
                    type: 'best'
                },
            ]
        },
        {
            id: 'dmitry-zhuravlev',
            preview: "dmitry-zhuravlev/dmitry-zhuravlev-preview.png",
            commonFeatures: {
                photo: "artists/dmitry-zhuravlev/dmitry-zhuravlev.png",
                name: "Дмитрий Журавлев",
                dateBirth: '17.05.1992',
                growth: 176,
                weight: 50,
                clothingSize: 'L',
                shoeSize: 43,
                eyes: 'серо-зеленый',
                foreignLanguages: ["английский (базовый)", "немецкий (базовый)"],
                voice: 'драматический тенор',
                dance: 'любительский',
                hairColor: 'русый',
                type: "европейский",
                photos: [
                    '/artists/dmitry-zhuravlev/dmitry-zhuravlev-1.png',
                    '/artists/dmitry-zhuravlev/dmitry-zhuravlev-2.png',
                    '/artists/dmitry-zhuravlev/dmitry-zhuravlev-3.png'
                ],
                vizitingCard: 'https://www.youtube.com/embed/O8cSptxArpk'
            },
            additionalInformation: {
                nationality: "Россия",
                city: "Москва, Московская область, Россия",
                driving: 'права категория В,С',
                tvWork: null,
                externalFeatures: 'пирсинг - левое ухо',
                moreInfo: [
                    'самбо (любительский)', 'легкая атлетика (профессиональный)', 'футбол (любительский)', 'гитара (любительский)', 'балалайка (любительский)', 'гусли (любительский)',
                    'укулеле (любительский)'
                ],
                kinopoiskLink: 'https://www.kinopoisk.ru/name/6006006/',
                kinoteatrLink: 'https://www.kino-teatr.ru/kino/acter/m/ros/563032/works/'
            },
            filmography: [
                {
                    name: "Патриот 4 (в производстве) - Журавль",
                    year: 2024,
                    type: 'default'
                },
                {
                    name: "На работу",
                    year: 2024,
                    type: 'default'
                },
                {
                    name: "Патриот 3 - Журавль",
                    year: 2023,
                    type: 'best'
                },
                {
                    name: "Иванько 2 - Сеня",
                    year: 2023,
                    type: 'best'
                },
                {
                    name: "Госпожа - Рома",
                    year: 2023,
                    type: 'default'
                },
                {
                    name: "Стрим",
                    year: 2023,
                    type: 'default'
                },
                {
                    name: "И снова здравствуйте! 2 - Володя",
                    year: 2023,
                    type: 'best'
                },
                {
                    name: "СамоИрония судьбы - милиционер",
                    year: 2022,
                    type: 'best'
                },
                {
                    name: "И снова здравствуйте! - Володя",
                    year: 2022,
                    type: 'default'
                },
                {
                    name: "Патриот 2 - Журавль",
                    year: 2021,
                    type: 'best'
                },
                {
                    name: "Патриот - Журавль",
                    year: 2020,
                    type: 'best'
                },
            ]
        },
        {
            id: 'andrey-galchenko',
            preview: "andrey-galchenko/andrey-galchenko-preview.png",
            commonFeatures: {
                photo: "artists/andrey-galchenko/andrey-galchenko.png",
                name: "Андрей Гальченко",
                dateBirth: '22.11.1997',
                growth: 177,
                weight: null,
                clothingSize: 'М',
                shoeSize: 41,
                eyes: 'серо-зеленый-голубой',
                foreignLanguages: ["английский (базовый)"],
                voice: 'баритон',
                hairColor: 'русый',
                dance: [
                    'бальные (любительский)',
                    'народные (любительский)',
                ],
                vocal: ['академический (любительский)'],
                type: "европейский",
                photos: [
                    '/artists/andrey-galchenko/andrey-galchenko-1.png',
                    '/artists/andrey-galchenko/andrey-galchenko-2.png',
                    '/artists/andrey-galchenko/andrey-galchenko-3.png'
                ],
                vizitingCard: null
            },
            additionalInformation: {
                nationality: "Россия",
                city: "Москва, Московская область, Россия",
                driving: null,
                tvWork: null,
                externalFeatures: null,
                moreInfo: [
                    'плавание (любительский)',
                    'фехтование (любительский)'
                ],
                skills: ['жонглирование', 'озвучивание'],
                kinopoiskLink: 'https://www.kinopoisk.ru/name/6866348/',
                kinoteatrLink: 'https://www.kino-teatr.ru/kino/acter/m/ros/571944/bio/'
            },
            filmography: [
                {
                    name: "Дино (в производстве)",
                    year: 2024,
                    type: 'default'
                },
                {
                    name: "Бедные смеются, богаты плачут -  Даня",
                    year: 2024,
                    type: 'default'
                },
                {
                    name: "Тайны Карениной (в производстве) - Вронский",
                    year: 2024,
                    type: 'best'
                },
                {
                    name: "Разрешите обратиться-Гоша Котов (главная роль)",
                    year: 2023,
                    type: 'default'
                },
                {
                    name: "Сквозь розовые очки - Олег",
                    year: 2022,
                    type: 'best'
                },
            ]
        },
        {
            id: 'julia-sorokina',
            preview: "julia-sorokina/julia-sorokina-preview.png",
            commonFeatures: {
                photo: "artists/julia-sorokina/julia-sorokina.png",
                name: "Юлия Сорокина",
                dateBirth: '18.06.2000',
                growth: 170,
                weight: 50,
                clothingSize: "42",
                shoeSize: 39,
                eyes: 'зеленый',
                foreignLanguages: ["английский (базовый)"],
                voice: null,
                dance: [
                    'балет (профессиональный)',
                    'народные (профессиональный)',
                    'контемпорари'
                ],
                hairColor: 'темно-русый',
                type: "общий европейский",
                photos: [
                    'artists/julia-sorokina/julia-sorokina-1.png',
                    'artists/julia-sorokina/julia-sorokina-2.png',
                    'artists/julia-sorokina/julia-sorokina-3.png'
                ],
                vizitingCard: 'https://www.youtube.com/embed/8VksL9PZ40A'
            },
            additionalInformation: {
                nationality: "Россия",
                city:
                    "Москва, Московская область, Россия",
                driving:
                    null,
                tvWork:
                    [
                        'Карусель "Пора в космос" 2010-2015',
                        'Ведущая детской программы 2014-15',
                        '"Навигатор Апгрейт"(телеканал "Карусель")'
                    ],
                moreInfo: [
                    'C 3-х лет занималась балетом', 'плавание (любительский)'
                ],
                skills: ['Озвучивание'],
                kinopoiskLink: 'https://www.kinopoisk.ru/name/2435464/?utm_referrer=www.google.com',
                kinoteatrLink: 'https://www.kino-teatr.ru/kino/acter/w/ros/232428/bio/'
            },
            filmography: [
                {
                    name: "Спасти единственного сына",
                    year: 2023,
                    type: 'default'
                },
                {
                    name: "Ивановы-Ивановы. Новогодние каникулы",
                    year: 2023,
                    type: 'best'
                },
                {
                    name: "Легенды Орлёнка",
                    year: 2022,
                    type: 'default'
                },
                {
                    name: "Встречная полоса",
                    year: 2022,
                    type: 'default'
                },
                {
                    name: "Ивановы-Ивановы",
                    year: 2021,
                    type: 'best'
                },
                {
                    name: "Ищейка-4",
                    year: 2020,
                    type: 'default'
                },
                {
                    name: "Гештальт | GESTALT (короткометражный)",
                    year: 2020,
                    type: 'default'
                },
                {
                    name: "Входите! Закрыто!",
                    year: 2020,
                    type: 'default'
                },
                {
                    name: "Галка и Гамаюн",
                    year: 2019,
                    type: 'default'
                },
                {
                    name: "На краю (короткометражный)",
                    year: 2018,
                    type: 'default'
                },
                {
                    name: "Домашний арест",
                    year: 2018,
                    type: 'best'
                },
                {
                    name: "Чужая дочь",
                    year: 2016,
                    type: 'default'
                },
                {
                    name: "Вышибала",
                    year: 2016,
                    type: 'default'
                },
                {
                    name: "Семейный бизнес-2",
                    year: 2015,
                    type: 'default'
                },
                {
                    name: "Знать будущее. Жизнь после Ванги",
                    year: 2014,
                    type: 'default'
                },
                {
                    name: "Сердце звезды",
                    year: 2014,
                    type: 'default'
                },
                {
                    name: "Практика",
                    year: 2014,
                    type: 'default'
                },
                {
                    name: "Отмена всех ограничений",
                    year: 2014,
                    type: 'default'
                },
                {
                    name: "Женщины на грани",
                    year: 2014,
                    type: 'default'
                },
                {
                    name: "Анжелика",
                    year: 2014,
                    type: 'default'
                },
                {
                    name: "Найти мужа в большом городе",
                    year: 2013,
                    type: 'default'
                },
                {
                    name: "Любовь нежданная нагрянет",
                    year: 2013,
                    type: 'default'
                },
                {
                    name: "Любовь не делится на два",
                    year: 2012,
                    type: 'default'
                },
                {
                    name: "Я дождусь | I'll be waiting | J'attendrai (Беларусь, Россия, Франция)",
                    year: 2011,
                    type: 'default'
                },
                {
                    name: "У каждого своя война",
                    year: 2011,
                    type: 'default'
                },
                {
                    name: "Старинные часы",
                    year: 2011,
                    type: 'default'
                },
                {
                    name: "Жуков",
                    year: 2011,
                    type: 'default'
                },
                {
                    name: "Один день | One Day (Великобритания, США)",
                    year: 2011,
                    type: 'default'
                },
                {
                    name: "Ася",
                    year: 2011,
                    type: 'default'
                },
                {
                    name: "Жизнь и приключения Мишки Япончика",
                    year: 2011,
                    type: 'default'
                },
                {
                    name: "Варенька. Испытание любви",
                    year: 2009,
                    type: 'default'
                },
                {
                    name: "Две сестры",
                    year: 2008,
                    type: 'default'
                },
                {
                    name: "Огонь любви",
                    year: 2007,
                    type: 'default'
                },
            ]
        },
        {
            id: 'polina-denisova',
            preview: "polina-denisova/polina-denisova-preview.png",
            commonFeatures: {
                photo: "artists/polina-denisova/polina-denisova.png",
                name: "Полина Денисова",
                dateBirth: '24.02.2004',
                growth: 167,
                weight: 50,
                clothingSize: 42,
                shoeSize: 39,
                eyes: 'карий-зеленый',
                foreignLanguages: ["английский (разговорный)"],
                voice: 'альт',
                dance: [
                    'балет (профессиональный)',
                    'народные (профессиональный)',
                    'контемпорари'
                ],
                hairColor: 'каштановый',
                type: "общий европейский",
                photos: [
                    '/artists/polina-denisova/polina-denisova-1.png',
                    '/artists/polina-denisova/polina-denisova-2.png',
                    '/artists/polina-denisova/polina-denisova-3.png'
                ],
                vizitingCard: 'https://www.youtube.com/embed/TQS60BvRX4s'
            },
            additionalInformation:
                {
                    nationality: "Россия",
                    city: "Москва, Московская область, Россия",
                    driving: null,
                    tvWork: null,
                    moreInfo: [
                        'фортепиано (любительский), хореография (любительский), плавание (любительский), баскетбол (любительский)'
                    ],
                    kinopoiskLink: 'https://www.kinopoisk.ru/name/7093129/',
                    kinoteatrLink: 'https://www.kino-teatr.ru/kino/acter/w/ros/795366/bio/'
                },
            filmography: [
                {
                    name: "Последний урок (в производстве) - Аня (главная роль)",
                    year: 2024,
                    type: 'default'
                },
                {
                    name: "Папины дочки. Новые-2 (в производстве) - Соня (главная роль)",
                    year: 2024,
                    type: 'best'
                },
                {
                    name: "Бедные смеются, богатые плачут - Катя (главная роль)",
                    year: 2024,
                    type: 'default'
                },
                {
                    name: "Саша против! - Юля",
                    year: 2023,
                    type: 'default'
                },
                {
                    name: "Папины дочки. Новые - Соня (главная роль)",
                    year: 2023,
                    type: 'default'
                },
                {
                    name: "Все смотрят на тебя (короткометражный)",
                    year: 2021,
                    type: 'default'
                },
                {
                    name: "Два отца и два сына",
                    year: 2013,
                    type: 'best'
                },
            ]
        },
        {
            id: 'galya-denisenko',
            preview: "galya-denisenko/galya-denisenko-preview.png",
            commonFeatures: {
                photo: "artists/galya-denisenko/galya-denisenko.png",
                name: "Галя Денисенко",
                dateBirth: '17.05.2000',
                growth: 166,
                weight: 45,
                clothingSize: '40-42',
                shoeSize: 38,
                eyes: 'карий',
                foreignLanguages: ['английский (базовый)', 'казахский (базовый)'],
                voice: 'альт',
                dance: [
                    'хореография (профессиональный)',
                    'народные (профессиональный)',
                    'хип-хоп (профессиональный)',
                    'контемпорари (профессиональный)'
                ],
                hairColor: 'брюнетка',
                type: "европейский",
                photos: [
                    '/artists/galya-denisenko/galya-denisenko-1.png',
                    '/artists/galya-denisenko/galya-denisenko-2.png',
                    '/artists/galya-denisenko/galya-denisenko-3.png'
                ],
                vizitingCard: 'https://www.youtube.com/embed/rMnDmeOMHTM'
            },
            additionalInformation: {
                nationality: "Казахстан",
                city: "Москва, Московская область, Россия",
                driving: null,
                tvWork: null,
                externalFeatures: null,
                moreInfo: [
                    'фигурное катание (любительский)',
                    'лыжный (любительский)', 'Музыкальная школа',
                    'Окончила хореографическую школу'
                ],
                kinopoiskLink: 'https://www.kinopoisk.ru/name/7031370/',
                kinoteatrLink: 'https://www.kino-teatr.ru/kino/acter/bitpart/w/ros/29147/works/'
            },
            filmography: [
                {
                    name: "Что будет завтра - Алина",
                    year: 2023,
                    type: 'default'
                },
                {
                    name: "Надвое -Стефа",
                    year: 2022,
                    type: 'default'
                },
            ]
        },
        {
            id: 'rozovskaya-alexandra',
            preview: "rozovskaya-alexandra/rozovskaya-alexandra-preview.png",
            commonFeatures: {
                photo: "artists/rozovskaya-alexandra/rozovskaya-alexandra.png",
                name: "Александра Розовская",
                dateBirth: '27.01.1988',
                growth: 165,
                weight: 56,
                clothingSize: '42-44',
                shoeSize: 36,
                eyes: 'серо-голубой',
                foreignLanguages: ["английский (свободный)", "французский (базовый)"],
                voice: 'сопрано',
                hairColor: 'русый',
                dance: ['джаз-модерн (любительский)',],
                vocal: ['эстрадно-джазовый (профессиональный)'],
                type: "общий европейский",
                photos: [
                    '/artists/rozovskaya-alexandra/rozovskaya-alexandra-1.png',
                    '/artists/rozovskaya-alexandra/rozovskaya-alexandra-2.png',
                    '/artists/rozovskaya-alexandra/rozovskaya-alexandra-3.png'
                ],
                vizitingCard: 'https://www.youtube.com/embed/gSQoC3wJ9ec'
            },
            additionalInformation: {
                nationality: "Россия",
                city: "Москва, Московская область, Россия",
                driving: 'Права категории В',
                tvWork: null,
                externalFeatures: null,
                moreInfo: [
                    'Есть своя музыкальная группа “Meydeleh”',
                    'Музыкальная школа им. Дунаевского - фортепиано',
                    'большой теннис (любительский)',
                    'волейбол (любительский)', 'фехтование (любительский)', 'акробатика (любительский)'
                ],
                skills: ['жонглирование', 'озвучивание'],
                kinopoiskLink: 'https://www.kinopoisk.ru/name/6370840/',
                kinoteatrLink: 'https://www.kino-teatr.ru/kino/acter/w/ros/240352/bio/'
            },
            filmography: [
                {
                    name: "Богатые плачут, бедные смеются",
                    year: 2024,
                    type: 'best'
                },
                {
                    name: "Моя мама — шпион - Лариса Виноградова",
                    year: 2023,
                    type: 'default'
                },
                {
                    name: "Свадьбы и разводы - Лиля, невеста Виктора",
                    year: 2018,
                    type: 'best'
                },
                {
                    name: "Чехов-GALA (фильм-спектакль) барышня 'Свадьба'",
                    year: 2012,
                    type: 'default'
                },
                {
                    name: "Записки экспедитора Тайной канцелярии-2 - царевна Елизавета",
                    year: 2011,
                    type: 'default'
                },
                {
                    name: "Иван Грозный - Анна Колтовская",
                    year: 2009,
                    type: 'best'
                },
            ]
        },
        {
            id: 'tatiana-marakhonich',
            preview: "tatiana-marakhonich/tatiana-marakhonich-preview.png",
            commonFeatures: {
                photo: "artists/tatiana-marakhonich/tatiana-marakhonich.png",
                name: "Татьяна Марахонич",
                dateBirth: '27.05.1998',
                growth: 177,
                weight: 53,
                clothingSize: 42,
                shoeSize: 38,
                eyes: 'зеленый',
                foreignLanguages: ["английский (свободный)"],
                voice: 'сопрано',
                hairColor: 'шатенка',
                dance: [
                    'бальные (любительский)',
                    'джаз-модерн (любительский)',
                    'народные (любительский)'
                ],
                vocal: ['академический (любительский)'],
                type: "общий славянский европейский",
                photos: [
                    '/artists/tatiana-marakhonich/tatiana-marakhonich-1.png',
                    '/artists/tatiana-marakhonich/tatiana-marakhonich-2.png',
                    '/artists/tatiana-marakhonich/tatiana-marakhonich-3.png'
                ],
                vizitingCard: 'https://www.youtube.com/embed/8mvIlmxXOTM'
            },
            additionalInformation: {
                nationality: "Россия",
                city: "Москва, Московская область, Россия",
                driving: null,
                tvWork: null,
                externalFeatures: null,
                moreInfo: [
                    'волейбол (любительский)',
                    'конный (любительский)',
                    'страйкбол (любительский)',
                    'плавание (любительский)',
                    'прыжки в воду (любительский)',
                    'акробатика (любительский)'
                ],
                skills: ['жонглирование'],
                kinopoiskLink: 'https://www.kinopoisk.ru/name/6125190/',
                kinoteatrLink: 'https://www.kino-teatr.ru/kino/acter/w/ros/587167/bio/'
            },
            filmography: [
                {
                    name: "Натали и Александр- Кэти",
                    year: 2024,
                    type: 'default'
                },
                {
                    name: "Закрывай замок на два оборота (в производстве) - Есения (главная роль)",
                    year: 2024,
                    type: 'best'
                },
                {
                    name: "Эта любовь - Даша",
                    year: 2023,
                    type: 'best'
                },
                {
                    name: "Актрисы - Алла",
                    year: 2023,
                    type: 'default'
                },
                {
                    name: "Ёлки-иголки - Арина",
                    year: 2022,
                    type: 'best'
                },
                {
                    name: "Второе зрение-2 - Эля",
                    year: 2022,
                    type: 'default'
                },
                {
                    name: "Аврора - Нифонтова",
                    year: 2022,
                    type: 'default'
                },
                {
                    name: "Естественный отбор-2 - девушка в баре",
                    year: 2021,
                    type: 'default'
                },
                {
                    name: "Закаты и рассветы - Ольга",
                    year: 2020,
                    type: 'default'
                },
            ]
        },
        {
            id: 'alina-kolesnikova',
            preview: "alina-kolesnikova/alina-kolesnikova-preview.png",
            commonFeatures: {
                photo: "artists/alina-kolesnikova/alina-kolesnikova.png",
                name: "Алина Колесникова",
                dateBirth: '12.01.2000',
                growth: 175,
                weight: 54,
                clothingSize: 42,
                shoeSize: 38,
                eyes: 'зеленый',
                foreignLanguages: ["английский (базовый)"],
                voice: 'сопрано',
                hairColor: 'шатенка',
                dance: [
                    'джаз-модерн (профессиональный)',
                    'хип-хоп (профессиональный)',
                    'балет (профессиональный)',
                    'народные (профессиональный)'
                ],
                vocal: ['академический (любительский)'],
                type: "европейский",
                photos: [
                    '/artists/alina-kolesnikova/alina-kolesnikova-1.png',
                    '/artists/alina-kolesnikova/alina-kolesnikova-2.png',
                    '/artists/alina-kolesnikova/alina-kolesnikova-3.png'
                ],
                vizitingCard: 'https://www.youtube.com/embed/VNjMZSRzJKY'
            },
            additionalInformation: {
                nationality: "Россия",
                city: "Москва, Московская область, Россия",
                driving: null,
                tvWork: null,
                externalFeatures: null,
                skills: ['озвучивание', 'жонглирование', 'пантомима'],
                kinopoiskLink: 'https://www.kinopoisk.ru/name/6125190/',
                kinoteatrLink: 'https://www.kino-teatr.ru/kino/acter/w/ros/587167/bio/'
            },
            filmography: [
                {
                    name: "Мосгаз (в производстве) - Лидова",
                    year: 2024,
                    type: 'default'
                },
                {
                    name: "Райский (в производстве) - главная роль",
                    year: 2024,
                    type: 'best'
                },
                {
                    name: "Трудные подростки-4 - вебкамщица",
                    year: 2022,
                    type: 'default'
                },
                {
                    name: "Второе зрение-2 - Щербатова",
                    year: 2022,
                    type: 'default'
                },
                {
                    name: "Бедные смеются, богатые плачут",
                    year: 2024,
                    type: 'best'
                },
                {
                    name: "Спасская-3 - Карина Павлова",
                    year: 2023,
                    type: 'default'
                },
                {
                    name: "Женить нельзя рассорить - Юля",
                    year: 2022,
                    type: 'default'
                },
                {
                    name: "Естественный отбор-2",
                    year: 2021,
                    type: 'default'
                },
            ]
        },
        {
            id: 'kristina-orlyanskaya',
            preview: "kristina-orlyanskaya/kristina-orlyanskaya-preview.png",
            commonFeatures: {
                photo: "artists/kristina-orlyanskaya/kristina-orlyanskaya.png",
                name: "Екатерина Чаннова",
                dateBirth: '15.03.2001',
                growth: 170,
                weight: 52,
                clothingSize: 42,
                shoeSize: 38,
                eyes: 'зеленый',
                foreignLanguages: ["английский (разговорный)"],
                voice: 'меццо-сопрано',
                hairColor: 'блондинка',
                dance: [
                    'спортивные бальные (полупрофессиональный)',
                    'общетеатральный (любительский высокий)',
                ],
                vocal: ['академический (любительский)', 'эстрада (любительский)'],
                type: "общий словянский европейский",
                photos: [
                    '/artists/kristina-orlyanskaya/kristina-orlyanskaya-1.png',
                    '/artists/kristina-orlyanskaya/kristina-orlyanskaya-2.png',
                    '/artists/kristina-orlyanskaya/kristina-orlyanskaya-3.png'
                ],
                vizitingCard: 'https://www.youtube.com/embed/Rq-yFnXIelI'
            },
            additionalInformation: {
                nationality: "Россия",
                city: "Москва, Московская область, Россия",
                driving: null,
                tvWork: null,
                externalFeatures: null,
                moreInfo: ['Музыкальная школа по классу фортепиано (7 лет)', 'фортепиано (любительский высокий)', 'гитара (любительский)'],
                skills: ['озвучиваниe'],
                kinopoiskLink: 'https://www.kinopoisk.ru/name/6442653/',
                kinoteatrLink: 'https://www.kino-teatr.ru/kino/acter/w/ros/566137/bio/'
            },
            filmography: [
                {
                    name: "Уроки китайского (в производстве) - Яна",
                    year: 2024,
                    type: 'default'
                },
                {
                    name: "Подслушано в Рыбинске - Вика",
                    year: 2024,
                    type: 'best'
                },
                {
                    name: "Столыпин (в производстве) - Мария Столыпина",
                    year: 2024,
                    type: 'default'
                },
                {
                    name: "Старушки в бегах-3 (в производстве)",
                    year: 2024,
                    type: 'default'
                },
                {
                    name: "Министерство Всего Хорошего (в производстве) -  распределительница",
                    year: 2024,
                    type: 'default'
                },
                {
                    name: "Мама из прошлого (в производстве) - Ольга в детстве",
                    year: 2024,
                    type: 'default'
                },
                {
                    name: "Страсти по Матвею - студентка",
                    year: 2023,
                    type: 'default'
                },
                {
                    name: "Планета Максимус (фильм-спектакль) -Катя (главная роль)",
                    year: 2023,
                    type: 'best'
                },
                {
                    name: "Медиатор-3 - Ксюша",
                    year: 2023,
                    type: 'default'
                },
                {
                    name: "Эффект домино - Алина Терская",
                    year: 2023,
                    type: 'default'
                },
                {
                    name: "Голова-жестянка",
                    year: 2023,
                    type: 'default'
                },
                {
                    name: "Чикатило. Финальный сезон - Астафьева",
                    year: 2022,
                    type: 'default'
                },
                {
                    name: "Старое пианино - Катя (главная роль)",
                    year: 2022,
                    type: 'default'
                },
                {
                    name: "Солнце, море и любовь - Полина",
                    year: 2022,
                    type: 'default'
                },
            ]
        },
        {
            id: 'ekaterina-channova',
            preview: "ekaterina-channova/ekaterina-channova-preview.png",
            commonFeatures: {
                photo: "artists/ekaterina-channova/ekaterina-channova.png",
                name: "Кристина Орлянская",
                dateBirth: '15.03.2001',
                growth: 170,
                weight: 52,
                clothingSize: 42,
                shoeSize: 38,
                eyes: 'зеленый',
                foreignLanguages: ["английский (разговорный)"],
                voice: 'меццо-сопрано',
                hairColor: 'блондинка',
                dance: [
                    'спортивные бальные (полупрофессиональный)',
                    'общетеатральный (любительский высокий)',
                ],
                vocal: ['академический (любительский)', 'эстрада (любительский)'],
                type: "общий славянский европейский",
                photos: [
                    '/artists/ekaterina-channova/ekaterina-channova-1.png',
                    '/artists/ekaterina-channova/ekaterina-channova-2.png',
                    '/artists/ekaterina-channova/ekaterina-channova-3.png'
                ],
                vizitingCard: null
            },
            additionalInformation: {
                nationality: "Россия",
                city: "Москва, Московская область, Россия",
                driving: null,
                tvWork: null,
                externalFeatures: null,
                moreInfo: ['Музыкальная школа по классу фортепиано (7 лет)'],
                skills: ['дубляж', 'пантомима'],
                kinopoiskLink: 'https://www.kinopoisk.ru/name/4844224/',
                kinoteatrLink: 'https://www.kino-teatr.ru/kino/acter/w/ros/452996/works/'
            },
            filmography: [
                {
                    name: "Уроки китайского (в производстве) - Яна",
                    year: 2024,
                    type: 'default'
                },
                {
                    name: "Столыпин (в производстве) - Мария Столыпина",
                    year: 2024,
                    type: 'best'
                },
                {
                    name: "Министерство Всего Хорошего (в производстве) -  распределительница",
                    year: 2024,
                    type: 'default'
                },
                {
                    name: "Страсти по Матвею - студентка",
                    year: 2023,
                    type: 'default'
                },
                {
                    name: "Медиатор-3 - Ксюша",
                    year: 2023,
                    type: 'default'
                },
                {
                    name: "Голова-жестянка",
                    year: 2023,
                    type: 'default'
                },
                {
                    name: "Старое пианино - Катя (главная роль)",
                    year: 2022,
                    type: 'best'
                },
                {
                    name: "Подслушано в Рыбинске - Вика",
                    year: 2024,
                    type: 'best'
                },
                {
                    name: "Старушки в бегах-3 (в производстве)",
                    year: 2024,
                    type: 'default'
                },
                {
                    name: "Мама из прошлого (в производстве) - Ольга в детстве",
                    year: 2024,
                    type: 'default'
                },
                {
                    name: "Планета Максимус (фильм-спектакль) -Катя (главная роль)",
                    year: 2023,
                    type: 'best'
                },
                {
                    name: "Эффект домино - Алина Терская",
                    year: 2023,
                    type: 'default'
                },
                {
                    name: "Чикатило. Финальный сезон - Астафьева",
                    year: 2022,
                    type: 'default'
                },
                {
                    name: "Солнце, море и любовь - Полина",
                    year: 2022,
                    type: 'default'
                },
            ]
        },
    ])

    const getArtistData = (id) => {
        return artistsList.value.find((actor) => actor.id === id)
    }

    return {
        artistsList: computed(() => artistsList.value),
        getArtistData,
    }
})