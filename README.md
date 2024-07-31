# Тестовое      
      
Реализовать сервис одноразовых ссылок:      
      
Необходимо реализовать сервис, который будет состоять из 2х эндпойнтов:      
      
 1. Создать одноразовую ссылку      
принимает строку, запоминает её и возвращает ссылку, по которой можно получить строку, одноразовая ссылка должна быть уникальна, т.е. в один момент времени, в сервисе не может быть 2х одинаковых активных одноразовых ссылок.      
      
 2. Получение значения по одноразовой ссылке, сгенерированной в 1-м эндпойнте.      
При получении значения по одноразовой ссылке необходимо проверять, активна ли она. Если ссылка уже использована, то следует вернуть сообщение об ошибке.      
      
После выполнения, код должен быть выложен в публичный репозитория GitHub, Gitlab, BitBucket.      
Можно использовать любой способ хранения данных.


## Запуск

Установка зависимостей
```bash
yarn install
```

Заполнение .env
```bash
cp .env.example .env
```

Запуск
```bash
yarn start
```

### Endpoints

**Create a One-Time Link**
- URL: `/link/create`
- Method: POST
- Content-Type: application/json
- Body:
```json
{
  "value": "Your string value"
}
```
- Response:
```json
{
  "link": "http://localhost:3000/link/xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
}
```

Example:
```bash
curl -X POST http://localhost:3000/link/create -H "Content-Type: application/json" -d '{"value":"Hello, World!"}'
```


**Retrieve the Value from a One-Time Link**
- URL: `/link/:id`
- Method: GET
- Response:
```json
{
  "value": "Hello, World!"
}
```

Example:
```bash
curl -X POST http://localhost:3000/link/xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
```
