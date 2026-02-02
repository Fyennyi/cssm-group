const articles = [
  {
    id: 'morf-editorial',
    title: 'Morf Editorial: унікальна айдентика для машиніматорів',
    shortTitle: 'Morf Editorial',
    description: { key: 'portfolio-morf' },
    isDraft: true,
    hidden: false,
    date: '19 травня 2024',
    author: 'Команда CSSM Group',
    categories: ['Айдентика', 'Брендинг', 'Minecraft', 'Машиніматографія'],
    relatedProjects: [
      { title: 'NewLand Games', description: 'Розробка логотипа, графічного дизайну та слогана для мультиплеєрного серверного проєкту для Minecraft.', image: 'newland_games.webp' },
      { title: 'Hesk', description: 'Переклад українською мовою програмного забезпечення для ведення документації та технічної підтримки.', image: 'hesk.webp' },
      { title: 'Fyennyi Journal', description: 'Повний ребрендинг медіа, що передбачає розробку бізнес‐стратегії, логотипа та фірмового стилю для оглядача мобільної версії Minecraft.', image: 'fyennyi.webp' }
    ]
  },
  {
    id: 'newland-games',
    title: 'NewLand Games: нова ідентичність для спільноти Minecraft',
    shortTitle: 'NewLand Games',
    description: { key: 'portfolio-newland' },
    hidden: false,
    date: '29 серпня 2024',
    author: 'Команда CSSM Group',
    categories: ['Айдентика', 'Брендинг', 'Minecraft', 'Багатомовність'],
    relatedProjects: [
      { title: 'Morf Editorial', description: 'Розробка унікальної айдентики для спільноти машиніматорів Minecraft.', image: 'morf_editorial.webp' },
      { title: 'Hesk', description: 'Переклад українською мовою програмного забезпечення для ведення документації та технічної підтримки.', image: 'hesk.webp' },
      { title: 'Fyennyi Journal', description: 'Повний ребрендинг медіа, що передбачає розробку бізнес‐стратегії, логотипа та фірмового стилю для оглядача мобільної версії Minecraft.', image: 'fyennyi.webp' }
    ]
  }
];

module.exports = articles;
