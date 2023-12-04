/**
 * Agora - Close the loop
 * © 2021-2023 Brian Gormanly
 * BSD 3-Clause License
 * see included LICENSE or https://opensource.org/licenses/BSD-3-Clause 
 */

// import uuid generator
const { v4: uuidv4 } = require( "uuid" );

class User {
    constructor( email, username, profileFilename, emailValidated, desktopFirstVisit, editorFirstVisit, firstName, lastName, hashedPassword, roleId, subscriptionActive, stripeId, availableAccessTokens ) {

        this.userId = uuidv4();
        this.email = email;
        this.username = username;
        this.profileFilename = profileFilename;
        this.emailValidated = emailValidated;
        this.desktopFirstVisit = desktopFirstVisit;
        this.editorFirstVisit = editorFirstVisit;
        this.firstName = firstName;
        this.lastName = lastName;
        this.hashedPassword = hashedPassword;
        this.roleId = roleId;
        this.subscriptionActive = subscriptionActive;
        this.stripeId = stripeId;
        this.availableAccessTokens = availableAccessTokens;

        // populate with user_role
        this.roles = [];

        // populate with enrolled workspace paths
        this.enrollments = [];

        // populate with enrolled Topics
        this.topicEnrollments = [];
    }
}
  
exports.emptyUser = () => {
    return new User();
};

exports.createUser = function( email, username, profileFilename, emailValidated, desktopFirstVisit, editorFirstVisit, firstName, lastName, hashedPassword, roleId, subscriptionActive, stripeId, availableAccessTokens ) {
    let newUser = new User( email, username, profileFilename, emailValidated, desktopFirstVisit, editorFirstVisit, firstName, lastName, hashedPassword, roleId, subscriptionActive, stripeId, availableAccessTokens );
    return newUser;
};


  

exports.ormUser = function( userRow ) {
    let user = exports.emptyUser();
    user.userId = userRow.user_id;
    user.email = userRow.email;
    user.username = userRow.username;
    user.profileFilename = userRow.profile_filename;
    user.emailValidated = userRow.email_validated;
    console.log( "desktop first visit: " + userRow.desktop_first_visit );
    console.log( "editor first visit: " + userRow.editor_first_visit );
    user.desktopFirstVisit = userRow.desktop_first_visit;
    user.editorFirstVisit = userRow.editor_first_visit;
    user.roleId = userRow.role_id;
    user.firstName = userRow.first_name;
    user.lastName = userRow.last_name;
    user.subscriptionActive = userRow.subscription_active;
    user.stripeId = userRow.stripe_id;
    user.availableAccessTokens = userRow.available_access_tokens;
    return user;
};