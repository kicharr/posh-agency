import {computed} from "vue";

export const useArtistsStore = defineStore('artists', () => {
    const artistsList = ref([
        {
            "id": "slava-kopeykin",
            "category": "actor",
            "preview": "/slava-kopeykin/slava-kopeykin-preview.webp",
            "commonFeatures": {
                "photo": "/artists/slava-kopeykin/slava-kopeykin.webp",
                "name": "Слава Копейкин",
                "dateBirth": "15.06.1998",
                "growth": 183,
                "weight": 82,
                "clothingSize": 50,
                "shoeSize": 46,
                "eyes": "серо-зеленый",
                "hairColor": "русый",
                "dance": [
                    "Джаз-модерн"
                ],
                "foreignLanguages": [
                    "английский"
                ],
                "voice": null,
                "type": null,
                "photos": [
                    "/artists/slava-kopeykin/slava-kopeykin-1.webp",
                    "/artists/slava-kopeykin/slava-kopeykin-2.webp",
                    "/artists/slava-kopeykin/slava-kopeykin-3.webp"
                ],
                "vizitingCard": "https://www.youtube.com/embed/CxhIyXpG9xk"
            },
            "additionalInformation": {
                "nationality": "Россия",
                "city": "Москва, Московская область, Россия",
                "driving": null,
                "moreInfo": null,
                "kinopoiskLink": "https://www.kinopoisk.ru/name/7089008/?utm_referrer=www.google.com",
                "kinoteatrLink": "https://www.kino-teatr.ru/kino/acter/m/ros/865287/works/"
            },
            "filmography": [
                {
                    "name": "Трудные подростки",
                    "year": "2019",
                    "type": "best"
                },
                {
                    "name": "Васнецова",
                    "year": "2022",
                    "type": "default"
                },
                {
                    "name": "Стрим",
                    "year": "2022",
                    "type": "default"
                },
                {
                    "name": "Слово пацана. Кровь на асфальте",
                    "year": "2023",
                    "type": "best"
                },
                {
                    "name": "На автомате (в производстве)",
                    "year": "2024",
                    "type": "default"
                }
            ]
        },
        {
            "id": "gleb-shevnin",
            "preview": "/gleb-shevnin/gleb-shevnin-preview.webp",
            "category": "actor",
            "commonFeatures": {
                "photo": "/artists/gleb-shevnin/gleb-shevnin.webp",
                "name": "Глеб Шевнин",
                "dateBirth": "07.08.1999",
                "growth": 190,
                "weight": 60,
                "clothingSize": "XL",
                "shoeSize": 45,
                "eyes": "зеленый",
                "foreignLanguages": [
                    "английский (свободный-разговорный)"
                ],
                "voice": "баритон",
                "hairColor": "брюнет",
                "dance": [
                    "общетеатральный (любительский)"
                ],
                "vocal": [
                    "драматический (любительский)"
                ],
                "type": "общий",
                "photos": [
                    "/artists/gleb-shevnin/gleb-shevnin-1.webp",
                    "/artists/gleb-shevnin/gleb-shevnin-2.webp",
                    "/artists/gleb-shevnin/gleb-shevnin-3.webp"
                ],
                "vizitingCard": "https://www.youtube.com/embed/PQWHXo-a3uY"
            },
            "additionalInformation": {
                "nationality": "Россия",
                "city": "Москва, Московская область, Россия",
                "driving": "Права категории В, A",
                "tvWork": null,
                "externalFeatures": "пирсинг",
                "moreInfo": [
                    "Британский акцент, обучение в гимназии Лондона",
                    "баскетбол (профессиональный)",
                    "футбол (любительский)",
                    "фехтование (любительский)"
                ],
                "skills": [
                    "жонглирование",
                    "клоунада",
                    "озвучивание"
                ],
                "kinopoiskLink": "https://www.kinopoisk.ru/name/6432509/",
                "kinoteatrLink": "https://www.kino-teatr.ru/kino/acter/m/ros/574087/bio/"
            },
            "filmography": [
                {
                    "name": "Мама из прошлого (в производстве) -  Мерцалов",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Белая полоса (в производстве) -  Антон",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Френдзона-2",
                    "year": 2024,
                    "type": "best"
                },
                {
                    "name": "Теория больших денег - Илья (главная роль)",
                    "year": 2023,
                    "type": "best"
                },
                {
                    "name": "Наводнение - Спиридонов",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Контейнер-2 - Макс",
                    "year": 2022,
                    "type": "default"
                },
                {
                    "name": "Психология преступления. Дуэль - Артём",
                    "year": 2021,
                    "type": "default"
                },
                {
                    "name": "Динозавр-3 - Ганс",
                    "year": 2021,
                    "type": "default"
                }
            ]
        },
        {
            "id": "danya-kiselyov",
            "preview": "/danya-kiselyov/danya-kiselyov-preview.webp",
            "category": "actor",
            "commonFeatures": {
                "photo": "/artists/danya-kiselyov/danya-kiselyov.webp",
                "name": "Даня Киселёв",
                "dateBirth": "18.02.2000",
                "growth": 180,
                "weight": 70,
                "clothingSize": "M",
                "shoeSize": "44-45",
                "eyes": "карий",
                "foreignLanguages": [
                    "украинский (разговорный)",
                    "английский (базовый)"
                ],
                "voice": "баритон",
                "hairColor": "шатен",
                "dance": [
                    "общетеатральный (любительский)"
                ],
                "vocal": [
                    "академический (любительский)"
                ],
                "type": "европейский",
                "photos": [
                    "/artists/danya-kiselyov/danya-kiselyov-1.webp",
                    "/artists/danya-kiselyov/danya-kiselyov-2.webp",
                    "/artists/danya-kiselyov/danya-kiselyov-3.webp"
                ],
                "vizitingCard": null
            },
            "additionalInformation": {
                "nationality": "Россия",
                "city": "Москва, Московская область, Россия",
                "driving": "Права категории В, А",
                "tvWork": null,
                "externalFeatures": null,
                "moreInfo": [
                    "плавание (полупрофессиональный)",
                    "горные лыжи (любительский)",
                    "акробатика (любительский)",
                    "фехтование (любительский)"
                ],
                "skills": null,
                "kinopoiskLink": "https://www.kinopoisk.ru/name/2454700/",
                "kinoteatrLink": "https://www.kino-teatr.ru/kino/acter/m/ros/338299/bio/"
            },
            "filmography": [
                {
                    "name": "Лихие (в производстве) - Витя Шпак",
                    "year": 2025,
                    "type": "default"
                },
                {
                    "name": "Тайны Карениной - Левин",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Сумма квадратов катетов - Марк (главная роль)",
                    "year": 2024,
                    "type": "best"
                },
                {
                    "name": "Слово пацана. Кровь на асфальте - Цыган",
                    "year": 2023,
                    "type": "best"
                },
                {
                    "name": "Закрытый уровень - Хрыч (главная роль)",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Разрешите обратиться - Дэн (главная роль)",
                    "year": 2023,
                    "type": "best"
                },
                {
                    "name": "Ангел мести (в производстве) - Андрей Корсаков",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Жена Олигарха - Никита Гуров",
                    "year": 2022,
                    "type": "best"
                },
                {
                    "name": "Молодёжка. Студенты (в производстве) - Олег Валенцов",
                    "year": 2024,
                    "type": "best"
                },
                {
                    "name": "Трудные подростки-5 - Тима",
                    "year": 2024,
                    "type": "best"
                },
                {
                    "name": "Елки 10 - Кирилл",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Переговорщик -  Слава/Слоу",
                    "year": 2022,
                    "type": "default"
                },
                {
                    "name": "Смешная история - Даниель",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Райцентр - Антон в молодости",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Здоровый человек - Рожа",
                    "year": 2022,
                    "type": "default"
                }
            ]
        },
        {
            "id": "philip-ershov",
            "preview": "/philip-ershov/philip-ershov-preview.webp",
            "category": "actor",
            "commonFeatures": {
                "photo": "/artists/philip-ershov/philip-ershov.webp",
                "name": "Филипп Ершов",
                "dateBirth": "04.09.1993",
                "growth": 180,
                "weight": 65,
                "clothingSize": "М",
                "shoeSize": 38,
                "eyes": "серо-зеленый",
                "foreignLanguages": [
                    "английский (базовый)"
                ],
                "voice": null,
                "dance": [
                    "общетеатральный (любительский)"
                ],
                "hairColor": "каштановый",
                "type": "европейский",
                "photos": [
                    "/artists/philip-ershov/philip-ershov-1.webp",
                    "/artists/philip-ershov/philip-ershov-2.webp",
                    "/artists/philip-ershov/philip-ershov-3.webp"
                ],
                "vizitingCard": null
            },
            "additionalInformation": {
                "nationality": "Россия",
                "city": "Москва, Московская область, Россия",
                "driving": "Права категории В",
                "tvWork": null,
                "externalFeatures": null,
                "moreInfo": [
                    "футбол (профессиональный)",
                    "плавание (профессиональный)"
                ],
                "kinopoiskLink": "https://www.kinopoisk.ru/name/1700503/",
                "kinoteatrLink": "https://www.kino-teatr.ru/kino/acter/m/ros/321091/works/"
            },
            "filmography": [
                {
                    "name": "Жыыызнь (в производстве)",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Александр I (в производстве)",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Тайна пропавшей деревни - Алексей Кудряь (главная роль)",
                    "year": 2023,
                    "type": "best"
                },
                {
                    "name": "Ольга-5 - Лёха Кукушкин (Пушкин)",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Нюрнберг | Nyurnberg | Nürnberg (Великобритания, Германия, Россия, Чехия) Тарабуркин",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Доктор Краснов - Роман Богачев",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Художник - Дмитрий Мальчик, сотрудник милиции",
                    "year": 2022,
                    "type": "default"
                },
                {
                    "name": "Мафия - дело семейное",
                    "year": 2022,
                    "type": "best"
                },
                {
                    "name": "Грузчики - Боря (главная роль)",
                    "year": 2022,
                    "type": "default"
                },
                {
                    "name": "Зелёный мэр - Ярик Орлов (главная роль)",
                    "year": 2021,
                    "type": "best"
                },
                {
                    "name": "Бесит - Серёга (главная роль)",
                    "year": 2021,
                    "type": "default"
                },
                {
                    "name": "Стрельцов - футболист 'Торпедо'",
                    "year": 2020,
                    "type": "default"
                },
                {
                    "name": "Ольга-4 - Лёха Кукушкин (Пушкин), друг Андрея",
                    "year": 2020,
                    "type": "default"
                },
                {
                    "name": "Один вдох - Саня Гордеев, сын Марины",
                    "year": 2020,
                    "type": "default"
                },
                {
                    "name": "Дылды-2 - сын прокурора",
                    "year": 2020,
                    "type": "default"
                },
                {
                    "name": "Гости из прошлого - Вениамин Хатов",
                    "year": 2020,
                    "type": "default"
                },
                {
                    "name": "Лёд-2 | Ice 2",
                    "year": 2019,
                    "type": "best"
                },
                {
                    "name": "Кумир - Грюндик",
                    "year": 2019,
                    "type": "default"
                },
                {
                    "name": "90-е. Весело и громко - Паша (главная роль)",
                    "year": 2018,
                    "type": "default"
                },
                {
                    "name": "Красные браслеты - Олег (главная роль)",
                    "year": 2015,
                    "type": "default"
                }
            ]
        },
        {
            "id": "sasha-yugov",
            "preview": "/sasha-yugov/sasha-yugov-preview.webp",
            "category": "actor",
            "commonFeatures": {
                "photo": "/artists/sasha-yugov/sasha-yugov.webp",
                "name": "Саша Югов",
                "dateBirth": "14.08.1997",
                "growth": 178,
                "weight": 60,
                "clothingSize": "44-46",
                "shoeSize": 41,
                "eyes": "серо-зеленый",
                "foreignLanguages": null,
                "voice": "баритон",
                "hairColor": "брюнет",
                "dance": [
                    "народные (полупрофессиональный)",
                    "брейк (полупрофессиональный)",
                    "хип-хоп (полупрофессиональный)",
                    "хореография (полупрофессиональный)"
                ],
                "vocal": [
                    "драматический (любительский)"
                ],
                "type": "европейский",
                "photos": [
                    "/artists/sasha-yugov/sasha-yugov-1.webp",
                    "/artists/sasha-yugov/sasha-yugov-2.webp",
                    "/artists/sasha-yugov/sasha-yugov-3.webp"
                ],
                "vizitingCard": "https://www.youtube.com/embed/aCx0gQS7Qvc"
            },
            "additionalInformation": {
                "nationality": "Россия",
                "city": "Москва, Московская область, Россия",
                "driving": "Права категории В, А",
                "tvWork": null,
                "externalFeatures": null,
                "moreInfo": [
                    "Занимался в хореографическом коллективе (9 лет)"
                ],
                "skills": [
                    "жонглирование"
                ],
                "kinopoiskLink": "https://www.kinopoisk.ru/name/6370841/",
                "kinoteatrLink": "https://www.kino-teatr.ru/kino/acter/m/ros/525117/bio/"
            },
            "filmography": [
                {
                    "name": "Тур с Иванушками",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Юг (в производстве) - полицейский",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Выжившие 2 - Петрусик",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "В парке Чаир (в производстве) - Ося",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Мафия - дело семейное - лейтенант Кустицкий",
                    "year": 2024,
                    "type": "best"
                },
                {
                    "name": "Я делаю шаг - Генка",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Немодельное агентство - Ваня, оператор",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Лада Голд - Кот",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Загадай любовь -  Коля",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Стая - Лерой",
                    "year": 2022,
                    "type": "best"
                },
                {
                    "name": "Салют, Начальник - Витёк",
                    "year": 2022,
                    "type": "default"
                },
                {
                    "name": "Предпоследняя инстанция-2 - Арсений Иванович",
                    "year": 2022,
                    "type": "default"
                },
                {
                    "name": "Переговорщик -  Слава/Слоу",
                    "year": 2022,
                    "type": "default"
                },
                {
                    "name": "Ловец снов - Саша, дежурный",
                    "year": 2022,
                    "type": "best"
                },
                {
                    "name": "Эпидемия-2 - Шнур",
                    "year": 2022,
                    "type": "default"
                },
                {
                    "name": "Светлячок - хулиган",
                    "year": 2021,
                    "type": "default"
                }
            ]
        },
        {
            "id": "yana-enzhaeva",
            "preview": "/yana-enzhaeva/yana-enzhaeva-preview.webp",
            "category": "actresses",
            "commonFeatures": {
                "photo": "/artists/yana-enzhaeva/yana-enzhaeva.webp",
                "name": "Яна Енжаева",
                "dateBirth": "26.09.1994",
                "growth": 170,
                "weight": null,
                "clothingSize": null,
                "shoeSize": null,
                "eyes": "Карие",
                "foreignLanguages": null,
                "voice": null,
                "hairColor": "Каштановые",
                "dance": null,
                "vocal": null,
                "type": "Европейский",
                "photos": [
                    "/artists/yana-enzhaeva/yana-enzhaeva-1.webp",
                    "/artists/yana-enzhaeva/yana-enzhaeva-2.webp",
                    "/artists/yana-enzhaeva/yana-enzhaeva-3.webp"
                ],
                "vizitingCard": null
            },
            "additionalInformation": {
                "nationality": "Россия",
                "city": "Москва, Московская область, Россия",
                "driving": null,
                "tvWork": null,
                "externalFeatures": null,
                "moreInfo": null,
                "skills": null,
                "kinopoiskLink": "https://www.kinopoisk.ru/name/3672503/",
                "kinoteatrLink": "https://www.kino-teatr.ru/kino/acter/w/ros/405422/foto/1456469/"
            },
            "filmography": [
                {
                    "name": "Праздники-2 (в производстве) Юля — главная роль",
                    "year": 2024,
                    "type": "best"
                },
                {
                    "name": "Праздники Юля Пыжова — главная роль  дочь Натальи и Виктора",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Стражник - Юлия Борисоглебская — главная роль",
                    "year": 2022,
                    "type": "best"
                },
                {
                    "name": "Приворот. Чёрное венчание - Женя — главная роль",
                    "year": 2021,
                    "type": "best"
                },
                {
                    "name": "Дура - Катя - главная роль",
                    "year": 2021,
                    "type": "best"
                },
                {
                    "name": "Ищейка-4 - Вера Василенко",
                    "year": 2020,
                    "type": "default"
                },
                {
                    "name": "ИП Пирогова-2",
                    "year": 2019,
                    "type": "default"
                },
                {
                    "name": "Молодёжка",
                    "year": 2018,
                    "type": "best"
                },
                {
                    "name": "Бесстыдники - Юлия Сундукова",
                    "year": 2017,
                    "type": "default"
                },
                {
                    "name": "Отель Элеон (все сезоны) - дочь Колесниченко",
                    "year": 2016,
                    "type": "best"
                },
                {
                    "name": "Вы все меня бесите - Алиса",
                    "year": 2016,
                    "type": "default"
                },
                {
                    "name": "Sпарта - Анна Мелкова",
                    "year": 2016,
                    "type": "default"
                },
                {
                    "name": "Метод",
                    "year": 2015,
                    "type": "best"
                },
                {
                    "name": "Легко ли быть молодым? - Света (Главная роль)",
                    "year": 2015,
                    "type": "default"
                },
                {
                    "name": "Эти глаза напротив - Анжела",
                    "year": 2015,
                    "type": "default"
                },
                {
                    "name": "Кухня в Париже - девушка",
                    "year": 2014,
                    "type": "default"
                },
                {
                    "name": "Выпускной - Маша Шалаева",
                    "year": 2014,
                    "type": "default"
                }
            ]
        },
        {
            "id": "arseny-weiss",
            "preview": "/arseny-weiss/arseny-weiss-preview.webp",
            "category": "actor",
            "commonFeatures": {
                "photo": "/artists/arseny-weiss/arseny-weiss.webp",
                "name": "Арсений Вейс",
                "dateBirth": "23.02.2005",
                "growth": 184,
                "weight": 74,
                "clothingSize": "XL",
                "shoeSize": "44-45",
                "eyes": "голубой",
                "foreignLanguages": [
                    "английский (базовый)"
                ],
                "voice": "тенор",
                "dance": [
                    "балет (любительский высокий)",
                    "народные (любительский высокий)",
                    "джаз (любительский высокий)",
                    "модерн (любительский высокий)"
                ],
                "vocal": [
                    "мюзикл (полупрофессиональный)",
                    "эстрадно-джазовый (полупрофессиональный)"
                ],
                "hairColor": "темно-русый",
                "type": "европейский",
                "photos": [
                    "/artists/arseny-weiss/arseny-weiss-1.webp",
                    "/artists/arseny-weiss/arseny-weiss-2.webp",
                    "/artists/arseny-weiss/arseny-weiss-3.webp"
                ],
                "vizitingCard": "https://www.youtube.com/embed/Nap4eXNM_hY"
            },
            "additionalInformation": {
                "nationality": "Россия",
                "city": "Москва, Московская область, Россия",
                "driving": null,
                "tvWork": null,
                "externalFeatures": null,
                "moreInfo": [
                    "плавание (полупрофессиональный)",
                    "баскетбол (любительский высокий)",
                    "футбол (любительский)"
                ],
                "skills": [
                    "пародия",
                    "пантомима",
                    "клоунада"
                ],
                "kinopoiskLink": "https://www.kinopoisk.ru/name/6932344/",
                "kinoteatrLink": "https://www.kino-teatr.ru/kino/acter/c/ros/689012/bio/"
            },
            "filmography": [
                {
                    "name": "Cумма квадратов катетов (в производстве)",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Лгунья (в производстве)",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Витринный экземпляр (в производстве)",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Ольга-5 - Лёха Кукушкин (Пушкин)",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Закрытый уровень - Вик (главная роль)",
                    "year": 2023,
                    "type": "best"
                },
                {
                    "name": "Загадай любовь - Владимир Галушка (Вова)",
                    "year": 2023,
                    "type": "best"
                }
            ]
        },
        {
            "id": "tatiana-marakhonich",
            "preview": "/tatiana-marakhonich/tatiana-marakhonich-preview.webp",
            "category": "actresses",
            "commonFeatures": {
                "photo": "/artists/tatiana-marakhonich/tatiana-marakhonich.webp",
                "name": "Татьяна Марахонич",
                "dateBirth": "27.05.1998",
                "growth": 177,
                "weight": 53,
                "clothingSize": 42,
                "shoeSize": 38,
                "eyes": "зеленый",
                "foreignLanguages": [
                    "английский (свободный)"
                ],
                "voice": "сопрано",
                "hairColor": "шатенка",
                "dance": [
                    "бальные (любительский)",
                    "джаз-модерн (любительский)",
                    "народные (любительский)"
                ],
                "vocal": [
                    "академический (любительский)"
                ],
                "type": "общий славянский европейский",
                "photos": [
                    "/artists/tatiana-marakhonich/tatiana-marakhonich-1.webp",
                    "/artists/tatiana-marakhonich/tatiana-marakhonich-2.webp",
                    "/artists/tatiana-marakhonich/tatiana-marakhonich-3.webp"
                ],
                "vizitingCard": "https://www.youtube.com/embed/8mvIlmxXOTM"
            },
            "additionalInformation": {
                "nationality": "Россия",
                "city": "Москва, Московская область, Россия",
                "driving": null,
                "tvWork": null,
                "externalFeatures": null,
                "moreInfo": [
                    "волейбол (любительский)",
                    "конный (любительский)",
                    "страйкбол (любительский)",
                    "плавание (любительский)",
                    "прыжки в воду (любительский)",
                    "акробатика (любительский)"
                ],
                "skills": [
                    "жонглирование"
                ],
                "kinopoiskLink": "https://www.kinopoisk.ru/name/6125190/",
                "kinoteatrLink": "https://www.kino-teatr.ru/kino/acter/w/ros/587167/bio/"
            },
            "filmography": [
                {
                    "name": "Натали и Александр- Кэти",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Закрывай замок на два оборота (в производстве) - Есения (главная роль)",
                    "year": 2024,
                    "type": "best"
                },
                {
                    "name": "Эта любовь - Даша",
                    "year": 2023,
                    "type": "best"
                },
                {
                    "name": "Актрисы - Алла",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Ёлки-иголки - Арина",
                    "year": 2022,
                    "type": "best"
                },
                {
                    "name": "Второе зрение-2 - Эля",
                    "year": 2022,
                    "type": "default"
                },
                {
                    "name": "Аврора - Нифонтова",
                    "year": 2022,
                    "type": "default"
                },
                {
                    "name": "Естественный отбор-2 - девушка в баре",
                    "year": 2021,
                    "type": "default"
                },
                {
                    "name": "Закаты и рассветы - Ольга",
                    "year": 2020,
                    "type": "default"
                }
            ]
        },
        {
            "id": "andrey-galchenko",
            "preview": "/andrey-galchenko/andrey-galchenko-preview.webp",
            "category": "actor",
            "commonFeatures": {
                "photo": "/artists/andrey-galchenko/andrey-galchenko.webp",
                "name": "Андрей Гальченко",
                "dateBirth": "22.11.1997",
                "growth": 177,
                "weight": null,
                "clothingSize": "М",
                "shoeSize": 41,
                "eyes": "серо-зеленый-голубой",
                "foreignLanguages": [
                    "английский (базовый)"
                ],
                "voice": "баритон",
                "hairColor": "русый",
                "dance": [
                    "бальные (любительский)",
                    "народные (любительский)"
                ],
                "vocal": [
                    "академический (любительский)"
                ],
                "type": "европейский",
                "photos": [
                    "/artists/andrey-galchenko/andrey-galchenko-1.webp",
                    "/artists/andrey-galchenko/andrey-galchenko-2.webp",
                    "/artists/andrey-galchenko/andrey-galchenko-3.webp"
                ],
                "vizitingCard": null
            },
            "additionalInformation": {
                "nationality": "Россия",
                "city": "Москва, Московская область, Россия",
                "driving": null,
                "tvWork": null,
                "externalFeatures": null,
                "moreInfo": [
                    "плавание (любительский)",
                    "фехтование (любительский)"
                ],
                "skills": [
                    "жонглирование",
                    "озвучивание"
                ],
                "kinopoiskLink": "https://www.kinopoisk.ru/name/6866348/",
                "kinoteatrLink": "https://www.kino-teatr.ru/kino/acter/m/ros/571944/bio/"
            },
            "filmography": [
                {
                    "name": "Дино (в производстве)",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Бедные смеются, богаты плачут -  Даня",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Тайны Карениной (в производстве) - Вронский",
                    "year": 2024,
                    "type": "best"
                },
                {
                    "name": "Разрешите обратиться-Гоша Котов (главная роль)",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Сквозь розовые очки - Олег",
                    "year": 2022,
                    "type": "best"
                }
            ]
        },
        {
            "id": "alina-kolesnikova",
            "preview": "/alina-kolesnikova/alina-kolesnikova-preview.webp",
            "category": "actresses",
            "commonFeatures": {
                "photo": "/artists/alina-kolesnikova/alina-kolesnikova.webp",
                "name": "Алина Колесникова",
                "dateBirth": "12.01.2000",
                "growth": 175,
                "weight": 54,
                "clothingSize": 42,
                "shoeSize": 38,
                "eyes": "зеленый",
                "foreignLanguages": [
                    "английский (базовый)"
                ],
                "voice": "сопрано",
                "hairColor": "шатенка",
                "dance": [
                    "джаз-модерн (профессиональный)",
                    "хип-хоп (профессиональный)",
                    "балет (профессиональный)",
                    "народные (профессиональный)"
                ],
                "vocal": [
                    "академический (любительский)"
                ],
                "type": "европейский",
                "photos": [
                    "/artists/alina-kolesnikova/alina-kolesnikova-1.webp",
                    "/artists/alina-kolesnikova/alina-kolesnikova-2.webp",
                    "/artists/alina-kolesnikova/alina-kolesnikova-3.webp"
                ],
                "vizitingCard": "https://www.youtube.com/embed/VNjMZSRzJKY"
            },
            "additionalInformation": {
                "nationality": "Россия",
                "city": "Москва, Московская область, Россия",
                "driving": null,
                "tvWork": null,
                "externalFeatures": null,
                "skills": [
                    "озвучивание",
                    "жонглирование",
                    "пантомима"
                ],
                "kinopoiskLink": "https://www.kinopoisk.ru/name/6125190/",
                "kinoteatrLink": "https://www.kino-teatr.ru/kino/acter/w/ros/587167/bio/"
            },
            "filmography": [
                {
                    "name": "Мосгаз (в производстве) - Лидова",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Райский (в производстве) - главная роль",
                    "year": 2024,
                    "type": "best"
                },
                {
                    "name": "Трудные подростки-4 - вебкамщица",
                    "year": 2022,
                    "type": "default"
                },
                {
                    "name": "Второе зрение-2 - Щербатова",
                    "year": 2022,
                    "type": "default"
                },
                {
                    "name": "Бедные смеются, богатые плачут",
                    "year": 2024,
                    "type": "best"
                },
                {
                    "name": "Спасская-3 - Карина Павлова",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Женить нельзя рассорить - Юля",
                    "year": 2022,
                    "type": "default"
                },
                {
                    "name": "Естественный отбор-2",
                    "year": 2021,
                    "type": "default"
                }
            ]
        },
        {
            "id": "julia-sorokina",
            "preview": "/julia-sorokina/julia-sorokina-preview.webp",
            "category": "actresses",
            "commonFeatures": {
                "photo": "/artists/julia-sorokina/julia-sorokina.webp",
                "name": "Юлия Сорокина",
                "dateBirth": "18.06.2000",
                "growth": 170,
                "weight": 50,
                "clothingSize": "42",
                "shoeSize": 39,
                "eyes": "зеленый",
                "foreignLanguages": [
                    "английский (базовый)"
                ],
                "voice": null,
                "dance": [
                    "балет (профессиональный)",
                    "народные (профессиональный)",
                    "контемпорари"
                ],
                "hairColor": "темно-русый",
                "type": "общий европейский",
                "photos": [
                    "/artists/julia-sorokina/julia-sorokina-1.webp",
                    "/artists/julia-sorokina/julia-sorokina-2.webp",
                    "/artists/julia-sorokina/julia-sorokina-3.webp"
                ],
                "vizitingCard": "https://www.youtube.com/embed/8VksL9PZ40A"
            },
            "additionalInformation": {
                "nationality": "Россия",
                "city": "Москва, Московская область, Россия",
                "driving": null,
                "tvWork": [
                    "Карусель \"Пора в космос\" 2010-2015",
                    "Ведущая детской программы 2014-15",
                    "\"Навигатор Апгрейт\"(телеканал \"Карусель\")"
                ],
                "moreInfo": [
                    "C 3-х лет занималась балетом",
                    "плавание (любительский)"
                ],
                "skills": [
                    "Озвучивание"
                ],
                "kinopoiskLink": "https://www.kinopoisk.ru/name/2435464/?utm_referrer=www.google.com",
                "kinoteatrLink": "https://www.kino-teatr.ru/kino/acter/w/ros/232428/bio/"
            },
            "filmography": [
                {
                    "name": "Спасти единственного сына",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Ивановы-Ивановы. Новогодние каникулы",
                    "year": 2023,
                    "type": "best"
                },
                {
                    "name": "Легенды Орлёнка",
                    "year": 2022,
                    "type": "default"
                },
                {
                    "name": "Встречная полоса",
                    "year": 2022,
                    "type": "default"
                },
                {
                    "name": "Ивановы-Ивановы",
                    "year": 2021,
                    "type": "best"
                },
                {
                    "name": "Ищейка-4",
                    "year": 2020,
                    "type": "default"
                },
                {
                    "name": "Гештальт | GESTALT (короткометражный)",
                    "year": 2020,
                    "type": "default"
                },
                {
                    "name": "Входите! Закрыто!",
                    "year": 2020,
                    "type": "default"
                },
                {
                    "name": "Галка и Гамаюн",
                    "year": 2019,
                    "type": "default"
                },
                {
                    "name": "На краю (короткометражный)",
                    "year": 2018,
                    "type": "default"
                },
                {
                    "name": "Домашний арест",
                    "year": 2018,
                    "type": "best"
                },
                {
                    "name": "Чужая дочь",
                    "year": 2016,
                    "type": "default"
                },
                {
                    "name": "Вышибала",
                    "year": 2016,
                    "type": "default"
                },
                {
                    "name": "Семейный бизнес-2",
                    "year": 2015,
                    "type": "default"
                },
                {
                    "name": "Знать будущее. Жизнь после Ванги",
                    "year": 2014,
                    "type": "default"
                },
                {
                    "name": "Сердце звезды",
                    "year": 2014,
                    "type": "default"
                },
                {
                    "name": "Практика",
                    "year": 2014,
                    "type": "default"
                },
                {
                    "name": "Отмена всех ограничений",
                    "year": 2014,
                    "type": "default"
                },
                {
                    "name": "Женщины на грани",
                    "year": 2014,
                    "type": "default"
                },
                {
                    "name": "Анжелика",
                    "year": 2014,
                    "type": "default"
                },
                {
                    "name": "Найти мужа в большом городе",
                    "year": 2013,
                    "type": "default"
                },
                {
                    "name": "Любовь нежданная нагрянет",
                    "year": 2013,
                    "type": "default"
                },
                {
                    "name": "Любовь не делится на два",
                    "year": 2012,
                    "type": "default"
                },
                {
                    "name": "Я дождусь | I'll be waiting | J'attendrai (Беларусь, Россия, Франция)",
                    "year": 2011,
                    "type": "default"
                },
                {
                    "name": "У каждого своя война",
                    "year": 2011,
                    "type": "default"
                },
                {
                    "name": "Старинные часы",
                    "year": 2011,
                    "type": "default"
                },
                {
                    "name": "Жуков",
                    "year": 2011,
                    "type": "default"
                },
                {
                    "name": "Один день | One Day (Великобритания, США)",
                    "year": 2011,
                    "type": "default"
                },
                {
                    "name": "Ася",
                    "year": 2011,
                    "type": "default"
                },
                {
                    "name": "Жизнь и приключения Мишки Япончика",
                    "year": 2011,
                    "type": "default"
                },
                {
                    "name": "Варенька. Испытание любви",
                    "year": 2009,
                    "type": "default"
                },
                {
                    "name": "Две сестры",
                    "year": 2008,
                    "type": "default"
                },
                {
                    "name": "Огонь любви",
                    "year": 2007,
                    "type": "default"
                }
            ]
        },
        {
            "id": "kirill-rusin",
            "preview": "/kirill-rusin/kirill-rusin-preview.webp",
            "category": "actor",
            "commonFeatures": {
                "photo": "/artists/kirill-rusin/kirill-rusin.webp",
                "name": "Кирилл Русин",
                "dateBirth": "20.09.1999",
                "growth": 181,
                "weight": 60,
                "clothingSize": "L",
                "shoeSize": 43,
                "eyes": "зеленый",
                "foreignLanguages": [
                    "английский (разговорный)"
                ],
                "voice": "тенор",
                "hairColor": "русый",
                "dance": [
                    "хип-хоп (любительский)",
                    "народные (любительский)"
                ],
                "vocal": [
                    "драматический (любительский)"
                ],
                "type": "европейский",
                "photos": [
                    "/artists/kirill-rusin/kirill-rusin-1.webp",
                    "/artists/kirill-rusin/kirill-rusin-2.webp",
                    "/artists/kirill-rusin/kirill-rusin-3.webp"
                ],
                "vizitingCard": "https://www.youtube.com/embed/WHK8aP8WT4E"
            },
            "additionalInformation": {
                "nationality": "Россия",
                "city": "Москва, Московская область, Россия",
                "driving": "Права категории В",
                "tvWork": null,
                "externalFeatures": null,
                "moreInfo": [
                    "баскетбол (любительский)",
                    "бег (любительский)",
                    "борьба (любительский)",
                    "волейбол (любительский)",
                    "плавание (любительский)",
                    "регби (любительский)",
                    "футбол (любительский)"
                ],
                "skills": [
                    "пантомима",
                    "озвучивание"
                ],
                "kinopoiskLink": "https://www.kinopoisk.ru/name/6413669/",
                "kinoteatrLink": "https://www.kino-teatr.ru/kino/acter/m/ros/534014/bio/"
            },
            "filmography": [
                {
                    "name": "Наш папа — Дед Мороз! (в производстве) - главная роль",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Шёпот - Кевин",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Саша против! - Кирилл",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Мёрзлая земля | Frozen Land",
                    "year": 2023,
                    "type": "best"
                },
                {
                    "name": "Отчаянная невеста - зевака",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Сказки Пушкина. Для взрослых",
                    "year": 2021,
                    "type": "default"
                },
                {
                    "name": "Система - Иван (главная роль)",
                    "year": 2021,
                    "type": "best"
                },
                {
                    "name": "Рождение эволюционера (короткометражный)",
                    "year": 2021,
                    "type": "default"
                },
                {
                    "name": "Вампиры средней полосы - Вова",
                    "year": 2021,
                    "type": "default"
                },
                {
                    "name": "Авако (короткометражный) - Лев",
                    "year": 2021,
                    "type": "default"
                }
            ]
        },
        {
            "id": "galya-denisenko",
            "preview": "/galya-denisenko/galya-denisenko-preview.webp",
            "category": "actresses",
            "commonFeatures": {
                "photo": "/artists/galya-denisenko/galya-denisenko.webp",
                "name": "Галя Денисенко",
                "dateBirth": "17.05.2000",
                "growth": 166,
                "weight": 45,
                "clothingSize": "40-42",
                "shoeSize": 38,
                "eyes": "карий",
                "foreignLanguages": [
                    "английский (базовый)",
                    "казахский (базовый)"
                ],
                "voice": "альт",
                "dance": [
                    "хореография (профессиональный)",
                    "народные (профессиональный)",
                    "хип-хоп (профессиональный)",
                    "контемпорари (профессиональный)"
                ],
                "hairColor": "брюнетка",
                "type": "европейский",
                "photos": [
                    "/artists/galya-denisenko/galya-denisenko-1.webp",
                    "/artists/galya-denisenko/galya-denisenko-2.webp",
                    "/artists/galya-denisenko/galya-denisenko-3.webp"
                ],
                "vizitingCard": null
            },
            "additionalInformation": {
                "nationality": "Казахстан",
                "city": "Москва, Московская область, Россия",
                "driving": null,
                "tvWork": null,
                "externalFeatures": null,
                "moreInfo": [
                    "фигурное катание (любительский)",
                    "лыжный (любительский)",
                    "Музыкальная школа",
                    "Окончила хореографическую школу"
                ],
                "kinopoiskLink": "https://www.kinopoisk.ru/name/7031370/",
                "kinoteatrLink": "https://www.kino-teatr.ru/kino/acter/bitpart/w/ros/29147/works/"
            },
            "filmography": [
                {
                    "name": "Что будет завтра - Алина",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Надвое -Стефа",
                    "year": 2022,
                    "type": "default"
                }
            ]
        },
        {
            "id": "ekaterina-channova",
            "preview": "/kristina-orlyanskaya/kristina-orlyanskaya-preview.webp",
            "category": "actresses",
            "commonFeatures": {
                "photo": "/artists/kristina-orlyanskaya/kristina-orlyanskaya.webp",
                "name": "Кристина Орлянская",
                "dateBirth": "15.03.2001",
                "growth": 170,
                "weight": 52,
                "clothingSize": 42,
                "shoeSize": 38,
                "eyes": "зеленый",
                "foreignLanguages": [
                    "английский (разговорный)"
                ],
                "voice": "меццо-сопрано",
                "hairColor": "блондинка",
                "dance": [
                    "спортивные бальные (полупрофессиональный)",
                    "общетеатральный (любительский высокий)"
                ],
                "vocal": [
                    "академический (любительский)",
                    "эстрада (любительский)"
                ],
                "type": "общий славянский европейский",
                "photos": [
                    "/artists/kristina-orlyanskaya/kristina-orlyanskaya-1.webp",
                    "/artists/kristina-orlyanskaya/kristina-orlyanskaya-2.webp",
                    "/artists/kristina-orlyanskaya/kristina-orlyanskaya-3.webp"
                ],
                "vizitingCard": null
            },
            "additionalInformation": {
                "nationality": "Россия",
                "city": "Москва, Московская область, Россия",
                "driving": null,
                "tvWork": null,
                "externalFeatures": null,
                "moreInfo": [
                    "Музыкальная школа по классу фортепиано (7 лет)"
                ],
                "skills": [
                    "дубляж",
                    "пантомима"
                ],
                "kinopoiskLink": "https://www.kinopoisk.ru/name/4844224/",
                "kinoteatrLink": "https://www.kino-teatr.ru/kino/acter/w/ros/452996/works/"
            },
            "filmography": [
                {
                    "name": "Уроки китайского (в производстве) - Яна",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Столыпин (в производстве) - Мария Столыпина",
                    "year": 2024,
                    "type": "best"
                },
                {
                    "name": "Министерство Всего Хорошего (в производстве) -  распределительница",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Страсти по Матвею - студентка",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Медиатор-3 - Ксюша",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Голова-жестянка",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Старое пианино - Катя (главная роль)",
                    "year": 2022,
                    "type": "best"
                },
                {
                    "name": "Подслушано в Рыбинске - Вика",
                    "year": 2024,
                    "type": "best"
                },
                {
                    "name": "Старушки в бегах-3 (в производстве)",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Мама из прошлого (в производстве) - Ольга в детстве",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Планета Максимус (фильм-спектакль) -Катя (главная роль)",
                    "year": 2023,
                    "type": "best"
                },
                {
                    "name": "Эффект домино - Алина Терская",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Чикатило. Финальный сезон - Астафьева",
                    "year": 2022,
                    "type": "default"
                },
                {
                    "name": "Солнце, море и любовь - Полина",
                    "year": 2022,
                    "type": "default"
                }
            ]
        },
        {
            "id": "ruslan-chagilov",
            "preview": "/ruslan-chagilov/ruslan-chagilov-preview.webp",
            "category": "actor",
            "commonFeatures": {
                "photo": "/artists/ruslan-chagilov/ruslan-chagilov.webp",
                "name": "Руслан Чагилов",
                "dateBirth": "19.09.2003",
                "growth": 178,
                "weight": null,
                "clothingSize": 46,
                "shoeSize": 40,
                "eyes": "голубой",
                "foreignLanguages": [
                    "английский (свсвободный)"
                ],
                "voice": "баритон",
                "hairColor": "русый",
                "dance": [
                    "народный (любительский)",
                    "Чарльстон (любительский)",
                    "современный (любительский)",
                    "хип-хоп (любительский)"
                ],
                "vocal": [
                    "драматический (любительский)"
                ],
                "type": "общий",
                "photos": [
                    "/artists/ruslan-chagilov/ruslan-chagilov-1.webp",
                    "/artists/ruslan-chagilov/ruslan-chagilov-2.webp",
                    "/artists/ruslan-chagilov/ruslan-chagilov-3.webp"
                ],
                "vizitingCard": "https://www.youtube.com/embed/ov4cdoEbjwA"
            },
            "additionalInformation": {
                "nationality": "Россия",
                "city": "Москва, Московская область, Россия",
                "driving": "Права категории В",
                "tvWork": null,
                "externalFeatures": "пирсинг",
                "moreInfo": [
                    "плавание (профессиональный)",
                    "тайский бокс (любительский)",
                    "верховая езда (любительский)",
                    "футбол (любительский)",
                    "хоккей (любительский)"
                ],
                "skills": [
                    "озвучивание"
                ],
                "kinopoiskLink": null,
                "kinoteatrLink": "https://www.kino-teatr.ru/kino/acter/m/ros/893266/bio/"
            },
            "filmography": [
                {
                    "name": "Екатерина. Фавориты - Александр",
                    "year": 2023,
                    "type": "best"
                }
            ]
        },
        {
            "id": "kristina-orlyanskaya",
            "preview": "/ekaterina-channova/ekaterina-channova-preview.webp",
            "category": "actresses",
            "commonFeatures": {
                "photo": "/artists/ekaterina-channova/ekaterina-channova.webp",
                "name": "Екатерина Чаннова",
                "dateBirth": "15.03.2001",
                "growth": 170,
                "weight": 52,
                "clothingSize": 42,
                "shoeSize": 38,
                "eyes": "зеленый",
                "foreignLanguages": [
                    "английский (разговорный)"
                ],
                "voice": "меццо-сопрано",
                "hairColor": "блондинка",
                "dance": [
                    "спортивные бальные (полупрофессиональный)",
                    "общетеатральный (любительский высокий)"
                ],
                "vocal": [
                    "академический (любительский)",
                    "эстрада (любительский)"
                ],
                "type": "общий словянский европейский",
                "photos": [
                    "/artists/ekaterina-channova/ekaterina-channova-1.webp",
                    "/artists/ekaterina-channova/ekaterina-channova-2.webp",
                    "/artists/ekaterina-channova/ekaterina-channova-3.webp"
                ],
                "vizitingCard": "https://www.youtube.com/embed/Rq-yFnXIelI"
            },
            "additionalInformation": {
                "nationality": "Россия",
                "city": "Москва, Московская область, Россия",
                "driving": null,
                "tvWork": null,
                "externalFeatures": null,
                "moreInfo": [
                    "Музыкальная школа по классу фортепиано (7 лет)",
                    "фортепиано (любительский высокий)",
                    "гитара (любительский)"
                ],
                "skills": [
                    "озвучиваниe"
                ],
                "kinopoiskLink": "https://www.kinopoisk.ru/name/6442653/",
                "kinoteatrLink": "https://www.kino-teatr.ru/kino/acter/w/ros/566137/bio/"
            },
            "filmography": [
                {
                    "name": "Уроки китайского (в производстве) - Яна",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Подслушано в Рыбинске - Вика",
                    "year": 2024,
                    "type": "best"
                },
                {
                    "name": "Столыпин (в производстве) - Мария Столыпина",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Старушки в бегах-3 (в производстве)",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Министерство Всего Хорошего (в производстве) -  распределительница",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Мама из прошлого (в производстве) - Ольга в детстве",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Страсти по Матвею - студентка",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Планета Максимус (фильм-спектакль) -Катя (главная роль)",
                    "year": 2023,
                    "type": "best"
                },
                {
                    "name": "Медиатор-3 - Ксюша",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Эффект домино - Алина Терская",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Голова-жестянка",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Чикатило. Финальный сезон - Астафьева",
                    "year": 2022,
                    "type": "default"
                },
                {
                    "name": "Старое пианино - Катя (главная роль)",
                    "year": 2022,
                    "type": "default"
                },
                {
                    "name": "Солнце, море и любовь - Полина",
                    "year": 2022,
                    "type": "default"
                }
            ]
        },
        {
            "id": "andrey-zamyatin",
            "preview": "/andrey-zamyatin/andrey-zamyatin-preview.webp",
            "category": "actor",
            "commonFeatures": {
                "photo": "/artists/andrey-zamyatin/andrey-zamyatin.webp",
                "name": "Андрей Замятин",
                "dateBirth": "08.05.2003",
                "growth": 188,
                "weight": null,
                "clothingSize": 52,
                "shoeSize": 44,
                "eyes": "зеленый",
                "foreignLanguages": [
                    "английский (свободный)",
                    "украинский (свободный)",
                    "немецкий (базовый)"
                ],
                "voice": "баритон",
                "hairColor": "русый",
                "dance": [
                    "общетеатральный (любительский)"
                ],
                "vocal": null,
                "type": "Европейский",
                "photos": [
                    "/artists/andrey-zamyatin/andrey-zamyatin-1.webp",
                    "/artists/andrey-zamyatin/andrey-zamyatin-2.webp",
                    "/artists/andrey-zamyatin/andrey-zamyatin-3.webp"
                ],
                "vizitingCard": null
            },
            "additionalInformation": {
                "nationality": "Россия",
                "city": "Москва, Московская область, Россия",
                "driving": null,
                "tvWork": null,
                "externalFeatures": null,
                "moreInfo": [
                    "фортепиано (любительский высокий)",
                    "гитара (любительский высокий)",
                    "бас-гитара (любительский высокий)",
                    "саксофон (любительский)",
                    "ударные (любительский)",
                    "аккордеон (любительский)",
                    "скрипка (любительский)"
                ],
                "skills": null,
                "kinopoiskLink": null,
                "kinoteatrLink": "https://www.kino-teatr.ru/kino/acter/m/post/448666/bio/"
            },
            "filmography": [
                {
                    "name": "Тайная любовь | Таємне кохання (Украина) - Юрий Браницкий в молодости",
                    "year": 2019,
                    "type": "best"
                },
                {
                    "name": "Забудь меня, мама! (Россия, Украина)",
                    "year": 2016,
                    "type": "default"
                }
            ]
        },
        {
            "id": "alexandra-rozovskaya",
            "preview": "/alexandra-rozovskaya/alexandra-rozovskaya-preview.webp",
            "category": "actresses",
            "commonFeatures": {
                "photo": "/artists/alexandra-rozovskaya/alexandra-rozovskaya.webp",
                "name": "Александра Розовская",
                "dateBirth": "27.01.1988",
                "growth": 165,
                "weight": 56,
                "clothingSize": "42-44",
                "shoeSize": 36,
                "eyes": "серо-голубой",
                "foreignLanguages": [
                    "английский (свободный)",
                    "французский (базовый)"
                ],
                "voice": "сопрано",
                "hairColor": "русый",
                "dance": [
                    "джаз-модерн (любительский)"
                ],
                "vocal": [
                    "эстрадно-джазовый (профессиональный)"
                ],
                "type": "общий европейский",
                "photos": [
                    "/artists/alexandra-rozovskaya/alexandra-rozovskaya-1.webp",
                    "/artists/alexandra-rozovskaya/alexandra-rozovskaya-2.webp",
                    "/artists/alexandra-rozovskaya/alexandra-rozovskaya-3.webp"
                ],
                "vizitingCard": "https://www.youtube.com/embed/gSQoC3wJ9ec"
            },
            "additionalInformation": {
                "nationality": "Россия",
                "city": "Москва, Московская область, Россия",
                "driving": "Права категории В",
                "tvWork": null,
                "externalFeatures": null,
                "moreInfo": [
                    "Есть своя музыкальная группа “Meydeleh”",
                    "Музыкальная школа им. Дунаевского - фортепиано",
                    "большой теннис (любительский)",
                    "волейбол (любительский)",
                    "фехтование (любительский)",
                    "акробатика (любительский)"
                ],
                "skills": [
                    "жонглирование",
                    "озвучивание"
                ],
                "kinopoiskLink": "https://www.kinopoisk.ru/name/6370840/",
                "kinoteatrLink": "https://www.kino-teatr.ru/kino/acter/w/ros/240352/bio/"
            },
            "filmography": [
                {
                    "name": "Богатые плачут, бедные смеются",
                    "year": 2024,
                    "type": "best"
                },
                {
                    "name": "Моя мама — шпион - Лариса Виноградова",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Свадьбы и разводы - Лиля, невеста Виктора",
                    "year": 2018,
                    "type": "best"
                },
                {
                    "name": "Чехов-GALA (фильм-спектакль) барышня 'Свадьба'",
                    "year": 2012,
                    "type": "default"
                },
                {
                    "name": "Записки экспедитора Тайной канцелярии-2 - царевна Елизавета",
                    "year": 2011,
                    "type": "default"
                },
                {
                    "name": "Иван Грозный - Анна Колтовская",
                    "year": 2009,
                    "type": "best"
                }
            ]
        },
        {
            "id": "maxim-saprykin",
            "preview": "/maxim-saprykin/maxim-saprykin-preview.webp",
            "category": "actor",
            "commonFeatures": {
                "photo": "/artists/maxim-saprykin/maxim-saprykin.webp",
                "name": "Максим Сапрыкин",
                "dateBirth": "30.06.2002",
                "growth": 176,
                "weight": null,
                "clothingSize": null,
                "shoeSize": 44,
                "eyes": null,
                "foreignLanguages": [
                    "английский (базовый)"
                ],
                "voice": null,
                "hairColor": "русый",
                "dance": null,
                "vocal": null,
                "type": "Европейский",
                "photos": [
                    "/artists/maxim-saprykin/maxim-saprykin-1.webp",
                    "/artists/maxim-saprykin/maxim-saprykin-2.webp",
                    "/artists/maxim-saprykin/maxim-saprykin-3.webp"
                ],
                "vizitingCard": null
            },
            "additionalInformation": {
                "nationality": "Россия",
                "city": "Москва, Московская область, Россия",
                "driving": "Права категории В",
                "tvWork": null,
                "externalFeatures": null,
                "moreInfo": [
                    "Чемпион Москвы по кикбоксингу",
                    "чемпион СНГ по Таэквон-до",
                    "баскетбол (любительский)",
                    "бег (любительский)",
                    "борьба (любительский)",
                    "волейбол (любительский)",
                    "плавание (любительский)",
                    "регби (любительский)",
                    "футбол (любительский)"
                ],
                "skills": [
                    "озвучивание"
                ],
                "kinopoiskLink": "https://www.kinopoisk.ru/name/3017082/",
                "kinoteatrLink": "https://www.kino-teatr.ru/kino/acter/m/ros/361910/bio/"
            },
            "filmography": [
                {
                    "name": "Приставы (в производстве) - Виктор",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Наследники. Дар крови (в производстве) - Лёша",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Десять дней до весны (в производстве) - Гриша",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Блиндаж (в производстве)",
                    "year": 2024,
                    "type": "default"
                },
                {
                    "name": "Хоккейные папы",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Папины дочки. Новые - Роман Рощин",
                    "year": 2023,
                    "type": "best"
                },
                {
                    "name": "Кино про бандитов - Жека",
                    "year": 2023,
                    "type": "default"
                },
                {
                    "name": "Училки в законе-3 - Никита",
                    "year": 2022,
                    "type": "default"
                },
                {
                    "name": "Красная шапочка - Рок",
                    "year": 2022,
                    "type": "default"
                },
                {
                    "name": "Жиза - Якут (главная роль)",
                    "year": 2022,
                    "type": "best"
                },
                {
                    "name": "Дикие предки - Гриша",
                    "year": 2022,
                    "type": "best"
                },
                {
                    "name": "Валюша - Арсений",
                    "year": 2022,
                    "type": "default"
                },
                {
                    "name": "Французы под Москвой - Вася",
                    "year": 2021,
                    "type": "default"
                },
                {
                    "name": "Сеструха",
                    "year": 2021,
                    "type": "default"
                },
                {
                    "name": "Сеструха",
                    "year": 2021,
                    "type": "default"
                },
                {
                    "name": "Молодые и сильные. проклятие выживших - Питон",
                    "year": 2021,
                    "type": "default"
                },
                {
                    "name": "Ле.Ген.Да - Лёня, 15 лет",
                    "year": 2021,
                    "type": "default"
                },
                {
                    "name": "Крюк - Ярослав Соколов, хоккеист, сын Лады",
                    "year": 2021,
                    "type": "default"
                }
            ]
        },
    ]);

    const getArtistData = (id) => {
        return artistsList.value.find((actor) => actor.id === id)
    }

    return {
        artistsList: computed(() => artistsList.value),
        getArtistData
    }
})