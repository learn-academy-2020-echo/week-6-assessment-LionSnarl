# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: The name of the foreign key would be Animal.Goose, Animal.Duck and so on because in two different models - Animal and Sightings, inside Sightings there could be and probably is multiple "Sightings" of one animal, so having the foreign key be apart of the Animal allows for a database of Sightings containing many sightings of many animals. 

  Researched answer: Okay, so I think with a bit of research, that the foreign key would be called animal_id on the Sightings model because there can be many sightings related to one animal. So inside Animal model it would be has_many :sightings and inside Sightings model it would be belongs_to :animal.



2. Which RESTful routes must always be passed params? Why?

  Your answer: Update, Delete, and... Show. I sorta cheated and looked for the last one in my written notes, but these are the specific RESTful routes that need some sort of :id aka params.

  Researched answer: Update, Delete, Show, and Edit would all need to be passed Params because they need to identify exactly what instance variable they are trying to do something to.



3. Name three rails generator commands. What is created by each?

  Your answer: At first, I was writing RESTful routes, however, Rails generator commands in the terminal: 

  rails generate model: Generates a database and corresponding files to create a model we can use CRUD actions on.

  rails generate controller: Generates all files needed to start creating all the methods needed by the View to call upon.

  rails generate resource: Generates a database that you can refer to like a model, but it also creates a file inside your controller directory

  Researched answer:

 rails generate model: This command generates a model with anything after it being the Table of the database, so the name of the columns and type of data that will be stored. Naming convention should be Pascal Case for Model's Name, and snake_cased for the columns: so column_name:datatype 

  rails generate controller: This command generates a controller for our rails application that will house all our methods for the View to be processed. So it is for routing external requests to internal actions and it can manage caching. Its also Pascal Cased and can be called Index , Main , HomeController.
  
  rails generate resource: This command generates a resource for our rails application that is like a databse table which you can just type in the column names like: $rails generate resource Student name cohort 
  and it will actually auto populate the column data types as strings.


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /users        user#index | Displays all users, with all ids

method="GET"    /users/1      user#show | Displays a single user, with id 1

method="GET"    /users/new    user#new | Generates a proposed new user into database

method="GET"    /users/edit/1   user#edit | Ability to change/edit user id 1

method="POST"   /users/       user#create | Generates a new user into database

method="PUT"    /users/1      user#update | Generates an edit to existing user id 1

method="DELETE" /users/1      user#destroy | Deletes user id 1



5. As a developer, you want to make an application that will help you manage your to do list. For the MVP, you want to create just the user's view. Create 10 user stories that will help you get your application started. 

1 As a user, I can create a To Do List
2 As a user, your Tasks must contain name, date, and mark if its done
3 As a user, I can see a New Task form
4 As a user, I can add more New Tasks
5 As a user, I can see all My Tasks
6 As a user, I can see an Edit Task form
7 As a user, I can see a Task that I've edited
8 As a user, I can navigate between my individual Tasks
9 As a user, I can find a specific Task
10 As a user, I can delete Tasks 

