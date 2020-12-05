/**
 * Tasks endpoint route definitions.
 */

"use strict";
module.exports = function (app) {
  const tweetController = require("../controllers/tweet-controller");

  // Task Routes for creating task
  app.route("/v1/tweets").post(tweetController.createTweets);

  // // Task Routes for Marking a Task as complete
  // app.route("/v1/tasks/:taskId").put(taskController.updateTask);
  
  // // Task routes for getting all available tasks
  // app.route("/v1/tasks")
  //   .get(taskController.getTasks);

  //  // Task Routes for clearing all tasks
  //  app.route("/v1/tasks").delete(taskController.deleteTasks);
};
