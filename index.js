const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
let users = [{ username: "nikhil", password: "nikhil1@" }];
app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/login", async (req, res, next) => {
  try {
    let { username, password } = req.body;
    console.log(req.body);
    console.log(username);
    console.log(password);
    let user = users.find(
      (u) => u.username === username && u.password === password
    );
    console.log(user);
    if (!user) res.send("invalid login");
    else res.send("welcome");
  } catch (error) {
    next(error);
  }
});

// app.get("/redirect", (req, res) => {
//   res.send("welcome bro");
// });
// app.get("/add", (req, res, next) => {
//   res.send(
//     `<form action="/add" method="post">
//       <input type="text" name="username" placeholder="user" />
//       <input type="text" placeholder="password" />
//       <button>submit</button>
//     </form>`
//   );
//   next();
//   res.send("<h1>" + welcome + "</h>");
// });
// app.post("/add/details", (req, res, next) => {
//   res.send("<h1>" + welcome + "</h1>");
// });
app.listen(3005, () => console.log("server runnig on 3005"));
