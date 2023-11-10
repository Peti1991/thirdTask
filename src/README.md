## SITEBUILD

https://www.frontendpractice.com/projects/oh-studio

## Algorithmic thinking

You have a lot of data of writers in the following scheme:

```json
{
  "id": 1,
  "name": "J. K. Rowling",
}
```
You also have a lot of data of books in the next scheme:

```json
{
  "writerId": 1,
  "title": "Harry Potter and the order of the phoenix",
  "type": "fantasy",
  "numberOfWords": 122350
}
```

Fill the function (getAmountPublishedInFantasy), which takes an array with writers and an other array with books and a name. The function should return the sum of words in the given writer's "fantasy" genre books.

## REACT

All api calls in this exercise are mocked! Do not try to test them with postman, they only work in this environment.

Create a header in `<App />`: "Veterinarian admin - clients"

Create an input field, and a search button.
The button should be disabled, while the input field does not contain at least 3 characters.

Clicking a button should trigger a request to /api/vet/clients?search=WHAT-THE-USER-WROTE.
While a response is not yet present, do not show any clients - not even from previous searches.

When the response arrives, render every client to the screen with their pets.
Every client shoul have its own `<Client />` component.

For every pet there should be a button (toggle), and upon clicking it, it should toggle its "vaccianted" status.
Not only in the browser, but on the server too.
Send a POST request to /api/vet/pets/ with the following body:

```ts
{
  name: "Bodri", // the name of the pet
  isVaccinated: true // the opposite of its current status
}
```

While the response for the toggle is not arrived, do not show neither true, nor false, only 3 dots (...).

## SETUP

```bash
npm i miragejs
```

```ts
// root
import { makeServer } from './api/mockserver'
makeServer({ environment: 'development' })
```