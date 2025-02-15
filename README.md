# React Router v6 Wildcard Route Conflict

This repository demonstrates a subtle bug in React Router v6 related to wildcard routes (`/*`) and their interaction with other routes, particularly nested routes.  The issue arises when a wildcard route is defined in a way that it unintentionally intercepts navigation intended for other routes. 

The problem is detailed in `Contact.js` and `App.js`.  The solution, which addresses the conflict by being more specific with routing, is also presented.