<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

### Task 7

📖 Blog API ([NestJS](https://github.com/nestjs/nest) + Prisma + SQLite)

A simple RESTful Blog API built with [Nest](https://github.com/nestjs/nest),, TypeScript, Prisma ORM, and SQLite.
This API provides CRUD (Create, Read, Update, Delete) operations for managing blog articles.

## 🚀 Features

- Create, read, update, and delete blog articles

- SQLite database with Prisma ORM

- Interactive API documentation with Swagger (/api/docs)

- Works with Postman, cURL, or Swagger UI



## 📂 Project Setup
1️⃣ Clone the repository

```bash
$ git clone https://github.com/your-username/blog-api.git
cd blog-api
```
2️⃣ Install dependencies

```bash
$ npm install
```
3️⃣ Configure Prisma

Initialize Prisma and generate the client:

```bash
$ npx prisma migrate dev --name init
$ npx prisma generate
```
4️⃣ Start the application. Compile and run the project.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

Server runs on:
👉 http://localhost:3000

Swagger docs:
👉 http://localhost:3000/docs
```

## 📌 API Endpoints

| Method |      Endpoint      |     Description        |
|:-------|:------------------:|-----------------------:|
| POST   |   `/articles`      |   Create a new article |
| GET    |   `/articles`      |   Get all articles     |
| GET    |   `/articles/:id`  |   Get a single article |
| PUT    |   `/articles/:id`  |   Update an article    |
| DELETE |   `/articles/:id`  |   Delete an article    |


## 🛠 Example Requests
✅ Create an Article
```
curl -X POST http://localhost:3000/articles ^
  -H "Content-Type: application/json" ^
  -d "{\"title\": \"My First Blog\", \"content\": \"This is my first article.\"}"
```
📖 Get All Articles
```
curl -X GET http://localhost:3000/articles

```

🔍 Get Article by ID
```
curl -X GET http://localhost:3000/articles/1

```
✏️ Update an Article

```
curl -X PUT http://localhost:3000/articles/1 ^
  -H "Content-Type: application/json" ^
  -d "{\"title\": \"Updated Title\", \"content\": \"Updated content here.\"}"

```
❌ Delete an Article

```
curl -X DELETE http://localhost:3000/articles/1

```

🔥 Postman Test Values

When testing with Postman, use these sample values:

Create Article (POST /articles)

```
{
  "title": "Updated Blog Title",
  "content": "This is the updated blog content."
}
```
Update Article (PUT /articles/:id)
```
{
  "title": "Updated Blog Title",
  "content": "This is the updated blog content."
}
```

📖 Swagger Documentation

Swagger UI is available at:
👉 http://localhost:3000/docs
```
{
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post."
}
```
🗄 Database

This project uses SQLite for simplicity. The schema is defined in prisma/schema.prisma:
```
model Article {
  id      Int     @id @default(autoincrement())
  title   String
  content String
}
```

```
## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Author 
- Imole


## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
