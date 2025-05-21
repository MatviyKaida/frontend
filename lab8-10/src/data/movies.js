const movies = [
  {
    id: 1,
    title: "Інтерстеллар",
    description: "Космічна експедиція заради порятунку людства.",
    genre: "Фантастика",
    date: "2025-05-20",
    time: "18:30",
    image: "https://upload.wikimedia.org/wikipedia/uk/2/29/Interstellar_film_poster2.jpg"
  },
  {
    id: 2,
    title: "Матриця",
    description: "Не все, що ми бачимо — реально.",
    genre: "Бойовик",
    date: "2025-05-21",
    time: "20:00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS530tChTweGZ5S4L171ePfubDbNVL4zu13zg&s"
  },
  {
    id: 3,
    title: "Великий Гетсбі",
    description: "Історія кохання і трагедії на фоні золотої епохи.",
    genre: "Драма",
    date: "2025-05-22",
    time: "17:00",
    image: "https://upload.wikimedia.org/wikipedia/uk/thumb/2/26/TheGreatGatsby2012Poster.jpg/250px-TheGreatGatsby2012Poster.jpg"
  },
  {
    id: 4,
    title: "Темний лицар",
    description: "Бетмен бореться з Джокером, ризикуючи всім.",
    genre: "Екшн",
    date: "2025-05-22",
    time: "20:30",
    image: "https://upload.wikimedia.org/wikipedia/uk/8/8a/Dark_Knight.jpg"
  },
  {
    id: 5,
    title: "Дюна",
    description: "Битва за контроль над пустельною планетою.",
    genre: "Фантастика",
    date: "2025-05-23",
    time: "19:00",
    image: "https://upload.wikimedia.org/wikipedia/ru/5/5f/%D0%94%D1%8E%D0%BD%D0%B0_%D0%9F%D1%80%D0%BE%D1%80%D0%BE%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%BE.jpg"
  },
  {
    id: 6,
    title: "Опенгеймер",
    description: "Історія створення атомної бомби.",
    genre: "Біографія",
    date: "2025-05-23",
    time: "21:00",
    image: "https://upload.wikimedia.org/wikipedia/uk/9/9f/%D0%9E%D0%BF%D0%BF%D0%B5%D0%BD%D0%B3%D0%B5%D0%B9%D0%BC%D0%B5%D1%80_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png"
  },
  {
    id: 7,
    title: "Скажений Макс: Дорога гніву",
    description: "Постапокаліптична погоня за свободою.",
    genre: "Бойовик",
    date: "2025-05-24",
    time: "18:00",
    image: "https://uakino.me/uploads/posts/2022-07/1656965315_11.jpg"
  },
  {
    id: 8,
    title: "Джокер",
    description: "Трагічна історія про народження антагоніста.",
    genre: "Драма",
    date: "2025-05-24",
    time: "20:15",
    image: "https://uakino.me/uploads/posts/2019-10/157147479435_joker.jpg"
  },
  {
    id: 9,
    title: "Втеча з Шоушенка",
    description: "Неймовірна історія про надію і волю.",
    genre: "Драма",
    date: "2025-05-25",
    time: "19:30",
    image: "https://uaserials.pro/posters/2037.webp"
  },
  {
    id: 10,
    title: "Аватар",
    description: "Конфлікт на планеті Пандора між людьми і наві.",
    genre: "Фантастика",
    date: "2025-05-25",
    time: "21:00",
    image: "https://cdn-ksvod.kyivstar.ua/content/HLS/VOD/IMAGE4/641201612b347c3c90c55c06/IMAGE_2_3_XL.jpg"
  },
  {
    id: 11,
    title: "Початок",
    description: "Занурення у сни з метою зміни підсвідомості.",
    genre: "Фантастика",
    date: "2025-05-26",
    time: "20:00",
    image: "https://upload.wikimedia.org/wikipedia/uk/thumb/e/e1/%D0%9F%D0%BE%D1%87%D0%B0%D1%82%D0%BE%D0%BA_%D1%84%D1%96%D0%BB%D1%8C%D0%BC%2C_2010.jpg/250px-%D0%9F%D0%BE%D1%87%D0%B0%D1%82%D0%BE%D0%BA_%D1%84%D1%96%D0%BB%D1%8C%D0%BC%2C_2010.jpg"
  },
  {
    id: 12,
    title: "Гаррі Поттер і філософський камінь",
    description: "Історія хлопчика-чарівника, який відкриває Гоґвортс.",
    genre: "Фентезі",
    date: "2025-05-26",
    time: "16:30",
    image: "https://upload.wikimedia.org/wikipedia/uk/c/c5/%D0%93%D0%9F%D0%A4%D0%9A%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg"
  }
];

export default movies;
