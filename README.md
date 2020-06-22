# Backend

## Base URL

**https://secret-recipe-store.herokuapp.com**

## Register / Login Endpoints

### Users

| Name     | Type   | Required | Unique | Notes          |
| -------- | ------ | -------- | ------ | -------------- |
| username | string | yes      | yes    | users username |
| password | string | yes      | no     | users password |

| Request | URL                 | Description             | Required Fields            | Unique       |
| ------- | ------------------- | ----------------------- | -------------------------- | ------------ |
| POST    | /api/users/register | register a new user     | _"username"_, _"password"_ | _"username"_ |
| POST    | /api/users/login    | login with the new user | _"username"_, _"password"_ | na           |

## Create / Edit Recipe

| Request | URL             | Description                         | Required Fields                                                                     |
| ------- | --------------- | ----------------------------------- | ----------------------------------------------------------------------------------- |
| POST    | /api/recipe/new | adds a new recipe to the database   | _"title"_, _"source"_, _"ingredients"_, _"instructions"_, _"category"_ , _"userId"_ |
| PUT     | /api/recipe/id  | edit recipe already in database     | Edit whatever you would like on the recipe                                          |
| DELETE  | /api/recipe/id  | delete the recipe from the database | NA                                                                                  |

## GETs

| Request | URL             | Description                                       |
| ------- | --------------- | ------------------------------------------------- |
| GET     | /api/users      | gets all the created users and their recipes      |
| GET     | /api/users/id   | gets one user individually and only their recipes |
| GET     | /api/recipe/all | gets all of the recipes that have been created    |
| GET     | /api/recipe/id  | gets recipe by its id                             |
| GET     | /api/users/all  | gets all users and recipes                        |
