# NFL 2020 schedule API

This is an API that will return 2020 NFL schedule. 

This is mainly built to showcase CRUD operations using `node.js` , `MongoDB`. Also this is deployed to `Heroku`.

### Local testing

dotenv package was not used in this app to take advantage of the .env files for DB URL. Instead, heroku cli was installed and local testing was done using the following command.

`heroku local web`

You will need to rename .env-sample file to .env and replace the MONGODB_URL with the mongodb url for your database connection.

