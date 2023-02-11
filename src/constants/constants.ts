import bookImg from "../assets/png/book-img.png";
import emptyBookImg from "../assets/png/empty-book-img.png";

export const menuList: string[] = [
  "Все книги",
  "Бизнес-книги",
  "Детективы",
  "Детские книги",
  "Зарубежная литература",
  "История",
  "Класическая литература",
  "Книги по психологии",
  "Компьютерная литература",
  "Культура и искусство",
  "Наука и образование",
  "Публицистическая литература",
  "Справочники",
  "Фантистика",
  "Юмористическая литература",
];
export const path: string[] = [
  "/",
  "/Бизнес-книги",
  "/Детективы",
  "/Детские книги",
  "/Зарубежная литература",
  "/История",
  "/Класическая литература",
  "/Книги по психологии",
  "/Компьютерная литература",
  "/Культура и искусство",
  "/Наука и образование",
  "/Публицистическая литература",
  "/Справочники",
  "/Фантистика",
  "/Юмористическая литература",
];

export const arrOfBooks = [
  {
    id: 1,
    img: bookImg,
    imgArr: [],
    rating: 0,
    name: "Грокаем алгоритмы. Иллюстрированное пособие для программирования",
    autor: "Адитья Бхаргава, 2019",
    status: "Забронировать",
    about: `Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты c доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?
        Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.`,
    comments: [
      {
        autor: "Иван Иванов",
        comment:
          "Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.",
        rating: 4,
        date: "08 февраля 2032",
      },
      {
        autor: "Иван Петров",
        comment: "",
        rating: 3,
        date: "08 февраля 2032",
      },
      {
        autor: "Колян Петров",
        comment: "Согласен с моим братом",
        rating: 3,
        date: "08 февраля 2032",
      },
    ],
  },
  {
    id: 2,
    img: bookImg,
    imgArr: [bookImg],
    rating: 4,
    name: "Грокаем алгоритмы. Иллюстрированное",
    autor: "Адитья Бхаргава, 2019",
    status: "Забронировать",
    about: `Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты c доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?
        Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.`,
    comments: [
      {
        autor: "Иван Иванов",
        comment:
          "Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.",
        rating: 4,
        date: "08 февраля 2032",
      },
      {
        autor: "Иван Петров",
        comment: "",
        rating: 3,
        date: "08 февраля 2032",
      },
      {
        autor: "Колян Петров",
        comment: "Согласен с моим братом",
        rating: 3,
        date: "08 февраля 2032",
      },
    ],
  },
  {
    id: 3,
    img: bookImg,
    imgArr: [bookImg, emptyBookImg, bookImg],
    rating: 4,
    name: "Грокаем алгоритмы.",
    autor: "Адитья Бхаргава, 2019",
    status: "занята до 03.05",
    about: `Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты c доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?
        Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.`,
    comments: [
      {
        autor: "Иван Иванов",
        comment:
          "Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.",
        rating: 4,
        date: "08 февраля 2032",
      },
      {
        autor: "Иван Петров",
        comment: "",
        rating: 3,
        date: "08 февраля 2032",
      },
      {
        autor: "Колян Петров",
        comment: "Согласен с моим братом",
        rating: 3,
        date: "08 февраля 2032",
      },
    ],
  },
  {
    id: 4,
    img: bookImg,
    imgArr: [bookImg, emptyBookImg, bookImg],
    rating: 4,
    name: "Грокаем алгоритмы. Иллюстрированное пособие для програ...",
    autor: "Адитья Бхаргава, 2019",
    status: "Забронировать",
    about: `Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты c доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?
        Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.`,
    comments: [
      {
        autor: "Иван Иванов",
        comment:
          "Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.",
        rating: 4,
        date: "08 февраля 2032",
      },
      {
        autor: "Иван Петров",
        comment: "",
        rating: 3,
        date: "08 февраля 2032",
      },
      {
        autor: "Колян Петров",
        comment: "Согласен с моим братом",
        rating: 3,
        date: "08 февраля 2032",
      },
    ],
  },
  {
    id: 5,
    img: bookImg,
    imgArr: [bookImg, emptyBookImg, bookImg],
    rating: 4,
    name: "Грокаем алгоритмы. Иллюстрированное пособие для програ...",
    autor: "Адитья Бхаргава, 2019, Патрик Нимейер, 2019",
    status: "Забронирована",
    about: `Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты c доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?
        Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.`,
    comments: [
      {
        autor: "Иван Иванов",
        comment:
          "Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.",
        rating: 4,
        date: "08 февраля 2032",
      },
      {
        autor: "Иван Петров",
        comment: "",
        rating: 3,
        date: "08 февраля 2032",
      },
      {
        autor: "Колян Петров",
        comment: "Согласен с моим братом",
        rating: 3,
        date: "08 февраля 2032",
      },
    ],
  },
  {
    id: 6,
    img: emptyBookImg,
    imgArr: [bookImg, emptyBookImg, bookImg],
    rating: 0,
    name: "Грокаем алгоритмы. Иллюстрированное",
    autor: "Адитья Бхаргава, 2019, Патрик Нимейер, 2019",
    status: "занята до 23.04",
    about: `Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты c доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?
        Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.`,
    comments: [
      {
        autor: "Иван Иванов",
        comment:
          "Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.",
        rating: 4,
        date: "08 февраля 2032",
      },
      {
        autor: "Иван Петров",
        comment: "",
        rating: 3,
        date: "08 февраля 2032",
      },
      {
        autor: "Колян Петров",
        comment: "Согласен с моим братом",
        rating: 3,
        date: "08 февраля 2032",
      },
    ],
  },
  {
    id: 7,
    img: bookImg,
    imgArr: [bookImg, emptyBookImg, bookImg],
    rating: 4,
    name: "Грокаем алгоритмы.",
    autor: "Адитья Бхаргава, 2019, Патрик Нимейер, 2019",
    status: "Забронировать",
    about: `Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты c доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?
        Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.`,
    comments: [
      {
        autor: "Иван Иванов",
        comment:
          "Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.",
        rating: 4,
        date: "08 февраля 2032",
      },
      {
        autor: "Иван Петров",
        comment: "",
        rating: 3,
        date: "08 февраля 2032",
      },
      {
        autor: "Колян Петров",
        comment: "Согласен с моим братом",
        rating: 3,
        date: "08 февраля 2032",
      },
    ],
  },
  {
    id: 8,
    img: bookImg,
    imgArr: [bookImg, emptyBookImg, bookImg],
    rating: 4,
    name: "Грокаем алгоритмы.  Иллюстрированное пособие для програ...",
    autor: "Адитья Бхаргава, 2019, Патрик Нимейер, 2019",
    status: "Забронировать",
    about: `Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты c доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?
        Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.`,
    comments: [
      {
        autor: "Иван Иванов",
        comment:
          "Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.",
        rating: 4,
        date: "08 февраля 2032",
      },
      {
        autor: "Иван Петров",
        comment: "",
        rating: 3,
        date: "08 февраля 2032",
      },
      {
        autor: "Колян Петров",
        comment: "Согласен с моим братом",
        rating: 3,
        date: "08 февраля 2032",
      },
    ],
  },
  {
    id: 9,
    img: bookImg,
    imgArr: [bookImg, emptyBookImg, bookImg],
    rating: 4,
    name: "Грокаем алгоритмы. Иллюстрированное пособие для програ...",
    autor: "Адитья Бхаргава, 2019",
    status: "Забронировать",
    about: `Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты c доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?
        Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.`,
    comments: [
      {
        autor: "Иван Иванов",
        comment:
          "Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.",
        rating: 4,
        date: "08 февраля 2032",
      },
      {
        autor: "Иван Петров",
        comment: "",
        rating: 3,
        date: "08 февраля 2032",
      },
      {
        autor: "Колян Петров",
        comment: "Согласен с моим братом",
        rating: 3,
        date: "08 февраля 2032",
      },
    ],
  },
  {
    id: 10,
    img: emptyBookImg,
    imgArr: [bookImg, emptyBookImg, bookImg],
    rating: 4,
    name: "Грокаем алгоритмы. Иллюстрированное пособие для програ...",
    autor: "Адитья Бхаргава, 2019",
    status: "Забронировать",
    about: `Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты c доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?
        Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.`,
    comments: [
      {
        autor: "Иван Иванов",
        comment:
          "Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.",
        rating: 4,
        date: "08 февраля 2032",
      },
      {
        autor: "Иван Петров",
        comment: "",
        rating: 3,
        date: "08 февраля 2032",
      },
      {
        autor: "Колян Петров",
        comment: "Согласен с моим братом",
        rating: 3,
        date: "08 февраля 2032",
      },
    ],
  },
];
