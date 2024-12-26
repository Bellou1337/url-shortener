# Сервис сокращения ссылок

Простой сервис для сокращения длинных URL-адресов, построенный на Node.js, Express и MongoDB.

## Возможности

- Сокращение длинных URL
- Редирект на оригинальные URL
- Хранение в MongoDB
- Swagger документация
- Определение дубликатов URL

## Стек технологий

- Node.js
- Express
- MongoDB
- Swagger UI

## Установка

1. Клонировать репозиторий

```bash
git clone https://github.com/Bellou1337/url-shortener.git
cd url-shortener
```

2. Установить зависимости

```bash
npm install dotenv express mongodb mongoose nodemon swagger-jsdoc swagger-ui-express nodemon
```

3. Создать файл .env

4. Запустить сервер

## API Документация

После запуска сервера документация доступна по адресу: http://localhost:3000/api-docs

### Эндпоинты

#### `POST /api/shorten`

**Описание:** Создание короткого идентификатора для ссылки

**Запрос:**

```json
{
  "url": "https://example.com/very-long-url"
}
```

**Ответ:**

- `200` OK

```json
{
  "shortId": "string"
}
```

- `400` Bad request

```json
{
  "error": "string"
}
```

#### `GET /api/redirect/{shortId}`

**Описание:** Редирект на изначальный URL по короткому идентификатору

**Ответ:**

- `301` Редирект
  - Перенаправление на оригинальный URL
- `404` URL не найден

```json
{
  "error": "string"
}
```
