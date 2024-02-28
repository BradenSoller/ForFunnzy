const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  const SqlText = `
    SELECT * FROM "anime";
    `;

  pool
    .query(SqlText)
    .then((result) => {
      res.send(result.rows);
      console.log("result", result.rows);
    })
    .catch((err) => {
      console.log("error in GET query", err);
      res.sendStatus(500);
    });
});


router.put('/status/:id', (req, res) => {
  
  const sqlText = `
  UPDATE "anime"
   SET "is_liked" = NOT "is_liked"
   WHERE "id" = ${req.params.id};
    `

  pool.query(sqlText)
  .then((dbResult) =>{
      res.sendStatus(200);
  })
  .catch((dbError)=>{
      console.log('PUT /status:id failed', dbError)
      res.sendStatus(500);
  })
});


/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
