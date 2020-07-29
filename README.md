# project-3

This MERN application is a roadtrip planner where the user can enter their desired trips name, origin, destination, and stopover points which the google maps Directions API will use to calculate and display your road trip. We also used the google maps distance matrix API to calculate the distance and duration of the users trip.

Based off your journey's desired stopover points, we utilize the YELP API to show you the highest rated restaurants at the area of your stop that fit your budget.

Our App uses socket.io to notify you when another user has planned a trip to your destination so you can hitch a ride.

The Google Places API is used to give the user access to all address and cities in the google library.

Home Page:

![](roadtrip1.gif)

Trip-Plan page:

![](roadtrip2.gif)

Once your trip is submitted, it is saved in your "Saved Trips" tab where you can view,edit, or delete your previous trips. 

![](roadtrip3.gif)