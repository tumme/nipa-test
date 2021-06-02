
#### Setup

- Installing the project dependencies
  > Run the command below
  ```shell
  $ npm install
  ```
- Start your node server
  > run the command below
  ```shell
  $ npm run dev
  ```
- Use `http://localhost:8000` as base url for endpoints

## API Endpoints

| METHOD | DESCRIPTION                             | ENDPOINTS                 |
| ------ | --------------------------------------- | ------------------------- |
| POST   | Add a book                              | `/api/v1/books`           |
| GET    | Get all the book                        | `/api/v1/books`           |
| PUT    | Update the details of a book            | `/api/v1/books/:bookId`   |
| GET    | Get a book particular book              | `/api/v1/books/:bookId`   |
| DELETE | Remove a book                           | `/api/v1/books/:bookId`   |


## Tests

- Run test for all endpoints
  > run the command below
  ```shell
  $ npm run test
  ```

npx sequelize-cli db:migrate


#Ticket
npx sequelize-cli model:generate --name ticket --attributes ticket_code:string,ticket_title:string,contract_name:string,contract_email:string,status:string
npx sequelize-cli model:generate --name ticket_status --attributes status_name:string