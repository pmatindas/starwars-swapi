# starwars-swapi

This simple app will show the data from https://swapi.co on node.js .

To start and install dependencies run:

--> npm start

It will install the dependencies including bower, and several package for unit testing into local directory.

npm start will also install bower component into directory inside app folder based on bower.json configuration.

to run on local computer, please change the http server configuration inside package.json into:

"start": "http-server -a localhost -p 8000 -c-1 ./app"

to run on heroku, please change the http server configuration into:

"start": "http-server -p ${PORT:=8000} -c-1 ./app"

to run the unit test, please make sure several packages below are installed globally:
- karma 
- karma-chrome-launcher
- karma-firefox-launcher
- karma-jasmine
- karma-junit-reporter

npm install -g {packagename}

the test can be run by running:
karma start

This app demo can be seen in: 
https://pingkan-starwars.herokuapp.com/