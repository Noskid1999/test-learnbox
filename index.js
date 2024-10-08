const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const UserModel = require("./userModel.js");

const url = "mongodb://localhost:27017/learnboxdb";

mongoose.connect(url);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database connected");
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: "secret-key",
  resave: false,
  saveUninitialized: false
}));


app.get("/login", (req, res) => {
  res.sendFile("./login.html", { root: __dirname });
});

app.get("/assignment-submission", (req, res) => {
  res.sendFile("./assignment-submission.html", { root: __dirname });
});

app.post("/get-chatgpt-response", async (req, res) => {
  // Get the question from the request.
  // Get the answer that the user had written.
  const { grade, question, answer } = req.body;

  const userPrompt = `Grade: ${grade}. Assignment Question: ${question}. Assignment Answer: ${answer}. Give a detailed feedback on the answer based on the grade and the assignment question.`;

  const messages = {
    messages: [
      {
        role: "system",
        content: [
          {
            type: "text",
            text: "You are an expert teacher who has deep knowledge on grading assignments based on what grade the student is. You are able to grade the assignments and give critical feedbacks and reviews on what they can do to improve their assignments. Once ready, enter your assignment and I can give feedbacks for that.",
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: userPrompt,
          },
        ],
      },
    ],
  };

  const response = await fetch(
    "https://beena-azure-oai.openai.azure.com/openai/deployments/beena-gpt-35/chat/completions?api-version=2024-02-15-preview",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": "9de2e486660e460aaac8824ed83cc379",
      },
      body: JSON.stringify(messages),
    }
  );

  const data = await response.json();

  const apiResponseText = data["choices"][0]["message"]["content"];

  // Save the grade, question, answer and the API response to the database

  const test = {
    question,
    answer,
    grade,
    response: apiResponseText,
  };

  res.send(apiResponseText);
});

app.post("/login", async function (req, res) {
  // Parse the values i.e., email and password from the request
  console.log(req.body);
  const { email, password } = req.body;
  // Check if the email is availabe in the DB
  const user = await UserModel.findOne({ email: email }).exec();
  if (user) {
    if (user.password == password) {
      req.session.isLoggedIn = true;
      console.log("Login successful");
      req.session.userEmail = email;
      res.redirect("/dashboard")
    } else {
      console.log("Incorrect password");
    }
  } else {
    console.log("User not found");
  }
  // console.log(await UserModel.find().exec());
  // Send an error saying user is not avaialbe if no user found
  // if request password == db password, login successful
  // else send error Incorrect password
});
app.get("/dashboard", (req, res) => {
  if (req.session.isLoggedIn) {
    res.send("Welcome to the dashboard, "+ req.session.userEmail)
  } else {
    res.send("Please login first")
  }
})
// app.put
// app.delete

app.listen(5000, function () {
  console.log("Server is running in port 5000");
});
