# check out [this updated app](https://name-this-dog.web.app/) to see new updates and features! 2022
## Application Overview
This application implements a RESTFUL backend API for securely storing and retrieving data in a NoSQL database via AJAX calls. The purpose of creating this app was to examine the techniques used in multimedia applications to communicate with back-end data and information services, and to create applications with run-time access to data, information, and media assets. This is a CRUD SPA featuring a form on a styled, responsive website built with React, Bootstrap, and Firebase. SVGs designed for this application were created using adobe illustrator, procreate, svgsprit.es, and SVGR. 
>
Application form creates an object ("dog") from user input data and stores the information in a database (Firebase). All objects are updated and displayed on the page ("cards")
<ul>
<li><strong>Create Object:</strong> User input consists of text, color, and submit. Color selector updates "preview" dog color as user selects colors. Submitting the form ("Add to list") sends the name property (text input) and color property (color input) to Firebase database along with the property "somewhere" set to its default value.</li>
 <li><strong>Display (Read):</strong> Objects are displayed styled with bootstrap cards. The "color" property sets the card SVG ("dog") color and also displays as hexidecimal value on the card.</li>
 <li><strong>Update Object Background: </strong>
The "somewhere" property determines the background image for the dog "card." Default value displays no background image. User can update the somewhere property by using the "Go Somewhere" selector. </li>
 <li><strong>Delete Object: </strong> Setting the somewhere property to "Go Home!" will delete the object from the database  </li>
 </ul>



>
Click [here](https://arh-final.web.app) to see the original name-this-dog site
*Please note that some features were not up to personal preference and were used in order to follow the design requirements of this application*
