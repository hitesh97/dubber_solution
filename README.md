## This is a solution repository for [the problem statement](./problem.md)

## There are two folders in this repository.

1. Lottery Server : A siple .net Core (C#) server which serves as an API for generating random lottery numbers.
2. Lottery Client : A simple NextJs UI application which calls the api on home page and displays the numbers as per the requirements.

# To run both the applications and see the working solution:

    Clone the repository to local folder

# To see the working solution: you must run the Server application and then start the client application.

## To Run the server application locally

       1. Open a terminal window and navigate to `lottery-server` folder

       2. Run `dotnet run` to start the server

       3. This should start the API server on `http://localhost:5000`

       4. To verify that server is working, Open a browser and navigate to `http://localhost:5000/api/lottery/generate`

       5. You should see the generated lottery numbers in following JSON format.

`{"mainNumbers":[6,16,17,25,40,42],"bonusNumber":10}`

## To Run the client application locally

    1. Open a terminal window and navigate to `lottery-client` folder
    2. run `npm install` to install the dependencies
    3. run `npm run dev` to start the client application
    4. This should start the client application on `http://localhost:3000`
    5. Open a browser and navigate to `http://localhost:3000`
       1. You shoud see `Lottery Number Generator` with ` Generate Numbers` Button in the center of the page
    6. Click on `Generate Numbers`
    7. You should see 5 random numbers and 1 Bonus number displayed
