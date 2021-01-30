const ghpages = require("gh-pages");

ghpages.publish("build", {
    branch: "master",
    message: "Auto-generated commit: Push built app from dev branch to master branch",
    add: true, // only add and never remove existing files
});
