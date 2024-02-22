Description
--------------------------------------------

This is a UI designed for book retrieval application.

Project Structure
------------------------------------------

The Front end is developed with two components.

1.login.jsx : This component is used for users to login to the application. 
2.book.jsx : This component is used to add/edit the search criteria and see the title , description and author in a tabular form.
3.input.jsx : This component is used to customise the <input> tag 

There are 3 services namely
1. loginService : To handle all the login details. It also retrieves the JWT from local storage
2. bookService: To call the /book api and retreive the book details
3. httpService: Used to intercept the axios library. This class is created so that if in future we get a better library than axios
		then we can change the code only at one place


Points to improve
------------------------------------------------

The code can be refactored and common elements can be made and reused
Proper error messages retrieved from the API can be shown in the screen. Currently not implemented
Validation of Fields : Not implemented 
The Happy path will show the data else it will not show any user friendly messages

NOTE: The frontend project can be improved and it is just an initial MVP to showcase the API output.