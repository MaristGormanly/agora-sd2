/**
 * Agora - Close the loop
 * © 2021-2022 Brian Gormanly
 * BSD 3-Clause License
 * see included LICENSE or https://opensource.org/licenses/BSD-3-Clause 
 */

 const express = require( 'express' );
 const router = express.Router( );
  
 // import controllers
 const topicController = require( '../../controller/apis/topicController' );
  
 /*
  * Topics can be requested the following ways
  * / <- all visible Topics for the auth user (all Topics a user can see, owned, shared with user, or set to public visibility)
  * /user <- all Topics for the user (does not include additional shared or visible ones)
  * /shared <- all Topics that are shared with the user but not their own
  * /visible <- all Topics that are publicly visible
  * /sharedAndVisible <- all Topics that are shared or visible to the user but are not their own
  */ 
 
 
 router.route( '/' )
     .get(async function ( req, res ) {
         topicController.getAllVisibleTopics( req, res );
     })    
     .post( ( req, res ) => { 
         topicController.saveTopic( req, res );
     }
 )
 
 /**
  * Returns all active Topics owned by the user
  */
 router.route( '/user/:id' )
     .get( async ( req, res ) => {
         topicController.getAllActiveTopicsForUser( req, res );
     }
 )
 
 router.route( '/shared' )
     .get( async ( req, res ) => {
         topicController.getAllSharedTopicsForUser( req, res );
     })
 
 // Topics /api/v1/auth/topics/:id
 router.route( '/:id' )
     .get( async function ( req, res ) {
         topicController.getTopicById( req, res );
     
     })
     .delete( async ( req, res ) => {
         topicController.deleteTopicById( req, res );
     }
 );
 
 
 
  
 router.route( '/topic/completed' )
     .post( async ( req, res ) => {
         topicController.saveCompletedTopic( req, res );
     }
 );
  
  
 module.exports = router;