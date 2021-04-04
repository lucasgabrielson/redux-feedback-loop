const express = require( 'express' );
const router = express.Router();
const pool = require( '../modules/pool');

/**
 * GET http://localhost:300/api/feedback
 * Returns an array of feedback objects:
 * {
 *  "feeling": 3
 *  "understanding": 4
 *  "support": 5
 *  "comments": Lorem ipsum
 *  "flagged": DEFAULT false
 *  "date": DEFAULT CURRENT_DATE
 * }
 */
router.get( '/', ( req, res ) => {
    console.log( 'GET /api/feedback' );
    let sqlText = 'SELECT * FROM feedback';
    pool.query( sqlText )
        .then( results => {
            console.log( results.rows );
            res.send( results.rows );
        }).catch( err => {
            console.log( 'Error connecting with database', sqlText);
            res.sendStatus( 500 );
        })
})

/**
 * POST http://localhost:300/api/feedback
 * Sends a feedback object
 * Returns 200 OK if successful;
 * Else, 500 status
 * {
 *  "feeling": 3
 *  "understanding": 4
 *  "support": 5
 *  "comments": Lorem ipsum
 * }
 */
router.post( '/', ( req, res ) => {
    console.log( 'POST /api/feedback', req.body, req.body.feeling );
    let sqlText = 'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4)';
    pool.query( sqlText, [ Number(req.body.feeling), Number(req.body.understanding), Number(req.body.support), req.body.comments])
        .then( results => {
            res.sendStatus( 200 );
        }).catch( err => {
            console.log( 'Error inserting into database,', sqlText);
            res.sendStatus( 500 );
        })
})

module.exports = router;