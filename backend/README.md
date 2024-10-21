# User Management System

A simple user management system built with Node.js, Express, TypeScript, and MongoDB. This application provides user registration, login functionality, and admin features to manage users.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **MongoDB** (running locally or accessible remotely)

## Getting Started

Follow these steps to set up and run the project on your local machine.

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone <repository-url>
cd backend

## Example `.env` File  setup

Create a `.env` file with the following content:

```plaintext
APP_HOST= set per your requirent(e.g http://localhost)
APP_PORT=set port number as per your requiremnt(e.g 3000)
API_VERSION=set version as per your requiremnt(e.g v1)
JWT_SECRET=set secrete as per your requirement(e.g xyz)
DATABASE=set DB as per your requiremnt(e.g mongodb://localhost:27017/xyz)

## Running Project
npm i (required dependency)
npm run dev (run in development mode)
npm run start (run in production mode)
for more script prefer package.json

## API end points with curl command
        _user-register_

curl --location 'http://localhost:3000/api/v1/users/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"Manish",
    "email":"manish1@gmail.com",
    "password":"Manish@123"
}'

        _user-login_

curl --location 'http://localhost:3000/api/v1/users/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"Manish",
    "email":"manish1@gmail.com",
    "password":"Manish@123"
}'

        _usr-getprofile_

curl --location 'http://localhost:3000/api/v1/users/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"Manish",
    "email":"manish1@gmail.com",
    "password":"Manish@123"
}'

        _admin-register_

curl --location 'http://localhost:3000/api/v1/users/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"Manish",
    "email":"manish1@gmail.com",
    "password":"Manish@123"
}'

        _admin-getAllUser-withFilter

curl --location 'http://localhost:3000/api/v1/users/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"Manish",
    "email":"manish1@gmail.com",
    "password":"Manish@123"
}'

        _admin-update_

curl --location 'http://localhost:3000/api/v1/users/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"Manish",
    "email":"manish1@gmail.com",
    "password":"Manish@123"
}'

        _admin-delete_

curl --location --request DELETE 'http://localhost:3000/api/v1/admin/671631e79fa161565489b167'

Note:- I have add some extra thing just leave that part(e.g  chai,mocha, and so on). This will help me in future scaling  the project