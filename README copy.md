# Unit 10 Skill Builder - Databases 
## Hunting the Hunter: A Star Wars Adventure

## Summary 

In this skill builder, you will use the powers of the Force (*okay,it's a database*) to track down a vicious bounty hunter intent on capturing Han Solo.

## Learning goals

* Establish an understanding of what databases are, how they are used and how we can interact with them to extract data.
    * Create an empty database in the cloud using ElephantSQL (a hosting service for Postgres databases)
    * Build and populate the tables in your new database by running a provided script from your command line.  
    * Use [SQL](https://www.w3schools.com/sql/sql_intro.asp) keywords like `SELECT` and `WHERE` to extract data from tables and `INNER JOIN` to pull data from multiple tables.

## What is PostgreSQL?
PostgreSQL (pronounced "post-gress-Q-L" or just "post-gress") is an open source relational database management system ( DBMS ) developed by a worldwide team of volunteers. PostgreSQL is not controlled by any corporation or other private entity and the source code is available free of charge.  This commitment to open source means that PostgreSQL is highly extensible while the commitment to best practices ensures that it remains a leader in data consistency and reliability.

PostgreSQL is used by tens of thousands of businesses across the globe including Apple, Red Hat, Cisco, Bloomberg, Nokia, BMW, the United Nations, just to name a few.

<hr />

## Skill Builder

### Setup

#### Fork and clone this repo

1. [ ] Open a terminal session and `cd` to the directory where you cloned this repo.

#### Install PostgreSQL

Follow this [link](https://www.postgresql.org/download/) to download the PostgreSQL installer on your machine:

* Select your OS.
  * Mac (with Homebrew): run the command `brew install postgresql`. (recommended)
  * Mac (w/o Homebrew) & Windows: Use the Interactive installer by EnterpriseDB. You can skip the 'Stack Builder' add-on.
  * Linux: Follow the instructions for your specific linux distro (Ubuntu/Redhat/etc). 

* Go to your terminal and verify that you can run the psql command: `psql --version`

* If the psql command isn't recognized, you'll need to add it to your PATH.
  * Linux and Mac: add the line `export PATH=$PATH:/Library/PostgreSQL/latest/bin` to your `~/.bashrc` or `~/.bash_profile`, respectively, and restart your terminal. The exact path may vary so be sure to confirm the location of the postgresql binaries.
  * Windows: go to the advanced system settings to modify the PATH environmental variable to include the `bin` directory within the postgresql install directory.

#### Create an account on ElephantSQL

1. [ ] Go to [https://www.elephantsql.com/](https://www.elephantsql.com/), create an account, and create a new database instance.  Make sure to select the free 'Tiny Turtle' plan.  Name your new database 'starwars'.

![Create db gif](./docs/images/create-sw-db.gif)

1. [ ] Grab the url of your new database so you can access it from the command line in your terminal.

![Copy url gif](./docs/images/get-db-url.gif)

#### Create the tables and populate them with data

1. [ ] From the command line in your terminal, make sure your `pwd` (present working directory) is the top level of this repo.  

1. [ ] Invoke `psql -d <url from elephantSQL> -f starwars_postgres_create.sql`.  This will open the connection to your database and execute the SQL statements that will create tables in your database and populate them with rows of data.  Make sure you let the script run all the way through.  It will take a minute or two.

1. [ ] Here is the ER diagram of your database.  The tables with purple headers are your core data tables, pulled down from the Star Wars API that you worked with in the Node unit.  The tables in gray are associative entity (or 'join') tables that facilitate many-to-many relationships.  

![Database Schema](./docs/images/schema.png)

Use this schema as a reference as you work through this skill builder.

#### Log in to your database

1. [ ] There are a few different options to access your database:

    1. Using the `Browser` on your database ui on the ElephantSQL website.

    1. The [`pgAdmin` tool](https://www.pgadmin.org/docs/pgadmin4/development/query_tool.html) that was included in the EnterpriseDB install to enter queries.  You can find your host, database, and login credentials on the Details page on ElephantSQL.  

        * _Note: If you use pgAdmin with an ElephantSQL database, you'll see a **very** long list of servers in the left hand panel.  Make note of your server name and scroll down until you can select it.  You should have access to the data from there._

    1. Log in to the database from the command line in your terminal.  Just type `psql` and paste the url from the ElephantDB site.  You'll find yourself at different command prompt.  That means you're in the database and you can start writing SQL queries.  

        * Try typing `\d` to see a list of the different tables.

        * Then try seeing what a specific table looks like by typing `\d TABLE_NAME`

        * We can always quit out of here by typing `\q`.

        * We can type `\?` to get help on other commands and querys too

        * Make sure you finish each query with a semicolon`;`

 You may also find this [SQL cheat sheet](http://www.cheat-sheets.org/saved-copy/sqlcheetsheet.gif) useful as you...


#### Use ~~your Jedi powers~~ SQL to help save Han Solo

1. [ ] Open the [Hunting the Hunter](https://hunting-the-hunter.herokuapp.com/) application.  Read each clue carefully.  Then reference your database schema to parse it out into an SQL statement.  Run that SQL to extract your answer from the database and enter it in the application to proceed to the next clue.

**Good luck, and may the Force be with you!**

## Extension

1. [ ] [Create the database](https://www.tutorialspoint.com/postgresql/postgresql_create_database.htm) locally on your machine.
