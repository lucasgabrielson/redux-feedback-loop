const express = require( 'express' );
const router = express.Router();
const pool = require( '../modules/pool');

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

module.exports = router;