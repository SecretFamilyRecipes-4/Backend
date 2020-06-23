# Backend

## Base URL

**https://secret-recipe-store.herokuapp.com**

#### You must be authenticated first before accessing the data. I have examples below on how to complete authentication.

- [ ] Register a new user.
- [ ] Login with those credentials.
- [ ] Use the token you get back from logging as an authorization header in order to sign in and access the data.

## Register / Login Endpoints

### Users

| Name     | Type   | Required | Unique | Notes          |
| -------- | ------ | -------- | ------ | -------------- |
| username | string | yes      | yes    | users username |
| password | string | yes      | no     | users password |

| Request | URL                 | Description             | Required Fields            |
| ------- | ------------------- | ----------------------- | -------------------------- |
| POST    | /api/users/register | register a new user     | _"username"_, _"password"_ |
| POST    | /api/users/login    | login with the new user | _"username"_, _"password"_ |

## Create / Edit Recipe

| Request | URL             | Description                         | Required Fields                                                                     |
| ------- | --------------- | ----------------------------------- | ----------------------------------------------------------------------------------- |
| POST    | /api/recipe/new | adds a new recipe to the database   | _"title"_, _"source"_, _"ingredients"_, _"instructions"_, _"category"_ , _"userId"_ |
| PUT     | /api/recipe/id  | edit recipe already in database     | Edit whatever you would like on the recipe                                          |
| DELETE  | /api/recipe/id  | delete the recipe from the database | NA                                                                                  |

## GETs

| Request | URL            | Description                                       |
| ------- | -------------- | ------------------------------------------------- |
| GET     | /api/users     | gets all the created users and their recipes      |
| GET     | /api/users/id  | gets one user individually and only their recipes |
| GET     | /api/recipe    | gets all of the recipes that have been created    |
| GET     | /api/recipe/id | gets recipe by its id                             |

# Examples of using the API:

### Registering a new user

    POST to /api/users/register

    {
    "username": "cody",
    "password": "password"
    }

### Login with newly created user

    POST to /api/users/login

    {
    "username": "cody",
    "password": "password"
    }

### Posting a new recipe

    POST to /api/recipe/new

    {
    "title": "new recipe",
    "source": "back of the box",
    "ingredients": "salt and pepper",
    "instructions": "follow 1 through 3",
    "category": "soul food"
    }

### Editing a already created recipe

    POST to /api/recipe/id

    {
    "source": "grocery store",
    "category": "fresh greens"
    }
