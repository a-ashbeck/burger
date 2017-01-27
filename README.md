# burger

This is homework 12 for the Northwestern Coding Boot Camp.

This application allows you to add and then devour burgers, but not really. It's pretty useless, but demonstrates my ability to use MySQL, ORMs, and the MVC model.

Click [**here**](https://infinite-thicket-80556.herokuapp.com/) to see the app in production on Heroku.

## Setup

First clone this repo to your local directory.

Next, navigate to your repo in your command terminal, and enter:

`npm install`

This will ensure you have all the necessary NPM packages installed to run this generator.

Next, you will need to run the `schema.sql` file in your SQL IDE of choice. Be sure to have your SQL server of choice running, such as MySQL. The SQL files used in this application are in the MySQL dialect.

You will likely be prompted for your credentials. Assuming you know your password for the connection, enter them now with `host` set to `localhost` or `127.0.0.1`, `password` set to your password, and `port` set to `3306` or `3307`.

Open or paste the contents of the `schema.sql` file in the IDE, and run the script, preferably function by function in order to check possible errors as you go along. If you would like some starter data, you can also run the `seeds.sql` file.

Next, navigate to the `connection.js` file, and in the `connection variable` (defined at the top of these files), enter in your password in the `password` property of the object in the `''`.

## Overview

This is a single page application.

Add a burger by typing into the text box and clicking submit. This will add a burger to the list on the left side of the screen, along with a `devour` button. Clicking the `devour` button will then move the burger to the right side of the screen, where devoured burgers live, AKA your digital stomach.

On the backend, these actions translate into creations and updates to data in the SQL database.
