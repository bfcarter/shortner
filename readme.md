In order to make the application work, you need to modify config.js with information about your database, like login, password, host etc.

To install application use command:
npm install

Usage:
To run the application with DEBUG mode on use command:
DEBUG=true npm run start

To run the application without the DEBUG mode use command:
npm run start

The debug mode shows all logs output in the terminal.

To run the tests use command:
npm run test

For tests you can change the additional dynamic routes in config file(config.js)

Your IDE must support the latest ESLint plugin. Atom (https://atom.io) is the recommended IDE. Install Atom’s linter-eslint package ( https://github.com/AtomLinter/linter-eslint ) and you will be able to lint each file. For sublime or any other IDE you will need to research and implement the corresponding eslint plugin.
Make sure you installed the app, before editing it, otherwise eslint won't work.

To create a shortened url:
POST /api/v1/urls/ (include the "url" parameter in x-www-form-urlencoded format)
Retrieves an object with generated shortened url

Endpoints:
CRUD for URLs
POST /api/v1/urls
Create a shortened URL, include the "url" parameter in x-www-form-urlencoded format
GET /api/v1/urls
Display all URLS
GET /api/v1/urls/:id
Display URL based upon id
POST /api/v1/urls/:id
Update URL based upon id, include the "url" parameter in x-www-form-urlencoded format
DELETE /api/v1/urls/:id
Delete url based upon id

Routes:
/go/:shortURL
Redirects to the destination url

To test the app with Postman, import the Postman collection that is in the tests/postman directory.
