const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

const translations = {
    uk: {
        'dropdown-button': 'Оберіть мову',
        'section1-title': 'CSSM Group',
        'section1-subtitle': 'Ми створюємо унікальні бренди для ваших Minecraft‐проєктів',
        'section1-button': 'Дізнатися більше',
        'section2-title': 'Про нас',
        'section2-content': 'CSSM Group — це креативна брендингова агенція, яка спеціалізується на розробці унікальних ідентичностей для Minecraft‐проєктів. Наша команда складається з досвідчених дизайнерів, розробників та геймерів, які поєднують свою пристрасть до Minecraft з професійним підходом до брендингу.',
        'section3-title': 'Наші послуги',
        'section3-item1': 'Дизайн логотипів та айдентики',
        'section3-item2': 'Розробка вебсайтів для Minecraft‐серверів',
        'section3-item3': 'Створення унікальних ресурспаків',
        'section3-item4': 'Дизайн інтерфейсу користувача для плагінів',
        'section3-item5': 'Маркетингові матеріали для соціальних мереж',
        'section3-button': 'Замовити послугу',
        'section4-title': 'Наше портфоліо',
        'toggle-portfolio-view': 'Переглянути все портфоліо',
        'toggle-portfolio-collapse': 'Згорнути портфоліо',
        'section5-title': 'Зв'яжіться з нами',
        'section5-content': 'Готові перетворити свій Minecraft‐проєкт на справжній бренд? Давайте поговоримо!',
        'section5-button': 'Написати нам',
        'footer-description': 'Креативна брендингова агенція для Minecraft‐проєктів',
        'footer-contacts': 'Контакти',
        'footer-email': 'Електронна пошта: questions@cssm.pp.ua',
        'footer-phone': 'Телефон: +380 96 393 6694',
        'footer-follow': 'Слідкуйте за нами',
        'cookie-notice': 'ΜИ ВИКОРИСТОВУЄМО COOKIE. ПРИЙМАЄТЕ?',
        'cookie-accept': 'ТАК'
    },
    en: {
        'dropdown-button': 'Select Language',
        'section1-title': 'CSSM Group',
        'section1-subtitle': 'We create unique brands for your Minecraft projects',
        'section1-button': 'Learn more',
        'section2-title': 'About Us',
        'section2-content': 'CSSM Group is a creative branding agency specializing in developing unique identities for Minecraft projects. Our team consists of experienced designers, developers, and gamers who combine their passion for Minecraft with a professional approach to branding.',
        'section3-title': 'Our Services',
        'section3-item1': 'Logo and identity design',
        'section3-item2': 'Website development for Minecraft servers',
        'section3-item3': 'Creation of unique resource packs',
        'section3-item4': 'User interface design for plugins',
        'section3-item5': 'Marketing materials for social media',
        'section3-button': 'Order a service',
        'section4-title': 'Our Portfolio',
        'toggle-portfolio-view': 'View full portfolio',
        'toggle-portfolio-collapse': 'Collapse portfolio',
        'section5-title': 'Contact Us',
        'section5-content': 'Ready to turn your Minecraft project into a real brand? Let\'s talk!',
        'section5-button': 'Write to us',
        'footer-description': 'Creative branding agency for Minecraft projects',
        'footer-contacts': 'Contacts',
        'footer-email': 'Email: questions@cssm.pp.ua',
        'footer-phone': 'Phone: +380 96 393 6694',
        'footer-follow': 'Follow us',
        'cookie-notice': 'WE USE COOKIES. DO YOU ACCEPT?',
        'cookie-accept': 'YES'
    }
};

app.get('/', (req, res) => {
    const lang = req.cookies.language || 'uk';
    res.render('index', { translations: translations[lang], lang });
});

app.get('/set-language/:lang', (req, res) => {
    const lang = req.params.lang;
    res.cookie('language', lang, { maxAge: 365 * 24 * 60 * 60 * 1000 });
    res.redirect('back');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});