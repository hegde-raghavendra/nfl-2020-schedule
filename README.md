# NFL 2020 schedule API

This is an API that will return 2020 NFL schedule. 

This is mainly built to showcase CRUD operations using `node.js` , `MongoDB`. Also this is deployed to `Heroku`.

### Endpoints

1. Get all schedules -> /schedules 
1. Get weekly schedules -> /schedules/week/:week
1. Insert schedule -> POST /schedules
1. Update schedule -> PUT /schedules/:id
1. Delete schedule -> DELETE /schedules/:id
1. Insert multiple games schedule -> /schedules/insertMany


### Local testing

dotenv package was not used in this app to take advantage of the .env files for DB URL. Instead, heroku cli was installed and local testing was done using the following command.

`heroku local web`

You will need to rename .env-sample file to .env and replace the MONGODB_URL with the mongodb url for your database connection.

