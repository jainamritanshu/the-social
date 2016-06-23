A boilerplate for building social web applications using express, passport and mongodb.

## Usage

    $ git clone https://github.com/jainamritanshu/the-social
    $ cd the-social
    $ npm install
    $ cp .env.example .env
    $ npm start

# API
	requests used:
		1.**POST**
		2.**GET**
		3.**PUT**
		4.**DELETE**

'POST' request at 
	1.'/post' - Publishes a new post taking the parameters **Post Name**, **Content**, and **Author Name**.

	2.'/user'	- Makes a new **User**	    

	3.'/comment' - Publishes a new **comment**

'GET' request at 
	1.'/post' - Displays all the **Posts**

	2.'/post/:id' - Displays the **Post** corresponding to its **id**

	3.'/post/:id/comments' - Displays all the **comments** of the particular **Post**

	4.'/comment/:id' - Displays the **Comment** corresponding to its id.

'PUT' request at
	1.'/post/:id' - Edits the **Post** corresponding to its id.
	2.'comment/:id' - Edits the **Comment** corresponding to its id.

'DELETE' request at
	1.'user/:id' - Deletes the **User** corresponding to its id
	2.'post/:id' - Deletes the **Post** corresponding to its id	
	3.'comment/:id' - Deletes the **comment** corresponding to its id
