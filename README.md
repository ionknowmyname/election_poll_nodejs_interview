Polling Interview Project

1. npm i to install dependencies, then install nodemon as Dev dependency
2. create mysql db and use sql file to import to db
3. npm start command starts the project using nodemon

FYI:

1. GET http://localhost:5000/polls/ --> pick which lga you want to view results of

2. GET http://localhost:5000/polls/get-result --> displays the results of selected LGA

3. GET http://localhost:5000/polls/results --> Get election result from a single polling unit

4. GET http://localhost:5000/polls/locations --> Get all polling locations

TODO:

1. Cleanup the date entered in polling unit results

2. Didn't attempt question 3, I didn't get the question
