# Ovomaltino - API-MongoDB template

Store your Ovomaltino data using an API with MongoDB

### Sumary
1. [Description](https://github.com/Ovomaltino/api-mongodb-ovomaltino#description "Description")
2. [Structure](https://github.com/Ovomaltino/api-mongodb-ovomaltino#structure "Structure")
3. [Language and tools](https://github.com/Ovomaltino/api-mongodb-ovomaltino#langauge-and-tools "Language and tools")
4. [Requirements](https://github.com/Ovomaltino/api-mongodb-ovomaltino#requirements "Requirements")
5. [Usage](https://github.com/Ovomaltino/api-mongodb-ovomaltino#usage "Usage")

------------
### Description
This is a microservice to provide a RESTFul API to save and get ovomaltino package data.

### Structure
This template use clean archicture.

### Language and Tools
* Typescript
* NodeJS
* Express
* Dotenv
* Tsyringe
* Mongoose
* Jest

### Requirements
* Mongo
* Yarn
* NodeJS

### Usage

##### Local (Yarn)
1. install project dependencies
```bash
yarn
```
2. Change environment variables (.env file)
3. run start script
```bash
yarn serve
```

##### Docker
```bash
docker run -e PORT=3005 \ 
-e DATABASE_CONNECTION_STRING=mongodb://localhost:27017/ovomaltino \
-p 3005:3005 -d ovomaltino/api-mongo
``` 
