# React Components Project

## Описание

Этот проект включает в себя разработку двух компонентов на React с использованием TypeScript без сторонних UI библиотек:

1. **Counter** - компонент счетчика.
2. **Button** - кнопка, внутри которой используется компонент Counter.

Вместо рекомендованного использование Stylus для стилизации компонентов был использован препроцессор SASS.

## Технические детали

- **React + TypeScript**: Основа проекта.
- **SASS**: Для стилизации.
- **Compound Components**: Использование подхода разбития большого кода на подскрипты.
- **Тестирование**: Написание тестов для компонентов.

## Задание

### Counter

Компонент счетчика, который должен уметь увеличивать и уменьшать свое значение.

### Button

Кнопка, которая включает в себя компонент Counter.

## Разработка

Для начала работы склонируйте репозиторий и установите зависимости, после запустите проект:

```bash
git clone <ссылка-на-репозиторий>
npm install
npm start
```

## Тестирование

Для запуска тестов используйте следующую команду:

```bash
npm test
```

Тесты написаны с использованием библиотеки `@testing-library/react` для проверки корректности работы компонентов. Включают проверки:

- Рендеринг компонентов без ошибок.
- Корректное изменение состояния компонента `Counter` при нажатии на кнопки увеличения и уменьшения.
- Отображение компонента `Button` с внутренним компонентом `Counter` и его взаимодействие.

Убедитесь, что все тесты проходят успешно, чтобы гарантировать корректную работу компонентов.