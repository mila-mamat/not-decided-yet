// Import dependencies
const db = require("../models");
const passport = require("../config/passport");

module.exports = app => {
  // Route to authenticate passport and send user to home page
  app.post("/api/login", passport.authenticate("local"), async (req, res) => {
    /* Test */
    console.log(req.user);
    
    res.json(req.user);
  });

  // Route to log user out
  app.get("/logout", async (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route to create user on signup/login page
  app.post("/api/users", async (req, res) => {
    /* Test */
    console.log(req.body);

    try {
      let newUserInstance = await db.User.create({
        username: req.body.username,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name
      })
      res.status(201).json(newUserInstance)
    } catch (err) {
      console.log(err)
      res.status(400).json(err.message);
    }
  });

  // TODO: Route to display user info on profile page
  app.get("/api/users/:user-id", async (req, res) => {
    try {
     
    } catch (err) {

    }   
  });

  // TODO: Route to edit user info on profile page
  app.patch("/api/users/:user-id", async (req, res) => {
    try {

    } catch (err) {

    }
  });

  // TODO: Route to create post on main page
  app.post("/api/posts", async (req, res) => {
    try {
      
    } catch (err) {

    }
  });

  // TODO: Route to display posts on main page
  app.get("/api/posts", async (req, res) => {
    try {
      
    } catch (err) {

    }
  });

  // TODO: Route to display single post on post page
  app.get("/api/posts/:post-id", async (req, res) => {
    try {
      
    } catch (err) {

    }
  });

  // TODO: Route to delete post
  app.delete("/api/posts/:post-id", async (req, res) => {
    try {
      
    } catch (err) {

    }
  });

  // TODO: Route to edit post
  app.patch("/api/posts/:post-id", async (req, res) => {
    try {
      
    } catch (err) {

    }
  });

  // TODO: Route to create comment
  app.post("/api/comments", async (req, res) => {
    try {
      
    } catch (err) {

    }
  });
    
  // TODO: Route to create like
  app.post("/api/likes", async (req, res) => {
    try {
      
    } catch (err) {

    }
  });

  // TODO: Route to delete like
  app.delete("/api/likes/:like-id", async (req, res) => {
    try {
      
    } catch (err) {

    }
  });
};
