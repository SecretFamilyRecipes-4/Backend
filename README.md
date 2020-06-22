# Backend Endpoints

## Register / Login Endpoints

| Request | URL                 | Description             |
| ------- | ------------------- | ----------------------- |
| POST    | /api/users/register | register a new users    |
| POST    | /api/users/login    | login with the new user |

## Create / Edit Recipe

| Request | URL             | Description                         |
| ------- | --------------- | ----------------------------------- |
| POST    | /api/recipe/new | adds a new recipe to the database   |
| PUT     | /api/recipe/id  | edit recipe already in database     |
| DELETE  | /api/recipe/id  | delete the recipe from the database |

## GETs

| Request | URL             | Description                                       |
| ------- | --------------- | ------------------------------------------------- |
| GET     | /api/users      | gets all the created users and their recipes      |
| GET     | /api/users/id   | gets one user individually and only their recipes |
| GET     | /api/recipes    | gets all of the recipes that have been created    |
| GET     | /api/recipes/id | gets recipe by its id                             |

# Requirements

## Users

| Request Type | Requirements                          |
| ------------ | ------------------------------------- |
| Register     | needs a **username** and **password** |
| Login        | needs a **username** and **password** |

POST

New user - required
New recipe - required
Title - required
Source - required
Ingredients - required
Instructions - required
Category - required

GET

1. All users
   1. Recipes
2. All recipes

PUT

1. User
2. Recipe
   1. Title
   2. Source
   3. Ingredients
   4. Instructions
   5. Category

DELETE

1. User
2. Recipe

# Register / Login Endpoints

| Request | URL                        | Description                 |
| ------- | -------------------------- | --------------------------- |
| POST    | /api/owners/auth/register  | register as a new owner     |
| POST    | /api/owners/auth/login     | login as an existing owner  |
| POST    | /api/renters/auth/register | register as a new renter    |
| POST    | /api/renters/auth/login    | login as an existing renter |

# Tech Endpoints

| Request | URL                 | Description                                         |
| ------- | ------------------- | --------------------------------------------------- |
| GET     | api/tech            | get all tech for all owners (needs to be logged in) |
| GET     | api/tech/:id        | get tech with specific id                           |
| GET     | api/tech/owners/:id | get all tech from specific owner id                 |
| POST    | api/tech            | add tech from owner                                 |
| PUT     | api/tech/:id        | edit specific tech for owner                        |
| DELETE  | api/tech/:id        | delete specific tech for owner                      |
