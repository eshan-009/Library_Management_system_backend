const express = require("express");
const { postBook } = require("../controllers/postBook");
const { getBook } = require("../controllers/getbooks");
const { updateBook, updateStatus } = require("../controllers/updateBook");
const { deleteBook } = require("../controllers/deleteBook");
const router = express.Router();

router.post("/",postBook);
router.get("/",getBook);
router.put("/",updateBook);
router.patch("/",updateStatus);
router.delete("/",deleteBook)

module.exports = router