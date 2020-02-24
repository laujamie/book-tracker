const router = require("express").Router();
const bookRoutes = require("./books");
const path = require("path");

router.use("/api/books", bookRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html "));
});

module.exports = router;
