# Interactive Front End Milestone Project

Welcome to my Interactive front end project "Let's Explore". I have created a web based travel application that calls on the Google Maps and Google Places API.
This allows users to search their next destination or current location. Once a user has selected a location on the map,
the user will be able to select an establishment type from the "Places menu" e.g., Bars, Restaurants, Accomodation and more. Once the user has
selected an establishment type they can either click or tap anywhere on the map (depending on which device they are using) and this will display
all of the establishments of the specified type on the map with icons. Also the user can click on any of these icons and it will display the
name, address, contact number, a link to the establishments website and the establishments photos.

## UX

This web based application will be used by people who want to find out what establishments are in the area of their next holiday destination
or current location.

### User Stories

- As a traveller, I want to find a hotel nearby, so that I can have somewhere to stay.
- As a traveller, I want to find out what different bars are nearby, so I can choose one to visit.
- As a traveller, I want to see what attractions are in my next holiday destination, so I can decide what to do before I get there.
- As a traveller, I want to see if there is a Trainstation near the hotel I am staying at, so I can see how far I have to travel to get to it.
- As a traveller, I want to check out the website of the bar near the hotel I will be staying at, so i can decide if i will visit it or not.
- As a traveller, I want to see if there are any shops and what type of shops are in the town I am currently in, so I can decide which one to visit. 

### Wireframes

################################

## Features

### Existing Features

- Introduction screen - This section introduces the user to the application. At the top is the application's logo and slogan which is followed
by a paragraph that explains the main functionality of app and gives the user instructions on how to use it.

- The "Let's go" button - This allows users to automatically scroll to the map section of the application, by clicking on the button.
 
- User guide images section - This section gives users the opportunity to understand further on how to use the application, by walking the user thorugh a
visual step by step guide.

- The Map interface - This is where the map and it's components are displayed.
 
- The Map interface header - In this section of the map interface the app's logo is displayed along with the "Search" and "Places" buttons.
 
- The "Search" button - This button toggles the search box from being displayed over the top section of the map with a smooth slide up or down animation.

- The "Search" box - This is a section that is displayed over the top section of the map and gives the user the ability to search any location. The Google
places API, auto completes the user's search query for a much better user experience. Once the user has entered a search query, the map will center on that location
and the search box will smoothly slide up and disappear.

- The "Places" button - This button toggles the Places menu from being displayed over the map with a smooth slide up or down animation.

- The "Places" menu - This is a section that is displayed over the map and gives the user the ability to select a specific establishment type to search.
Once the user has selected an establishment type the places menu will smoothly slide up and disappear.

- Click or tap to search feature - This allows users to search for their selected type of establishment, by either clicking or tapping anywhere on the map.

- The icon information window - This is a small window that appears when a user clicks on one of the markers that the map displays. It gives the user the ability to find out
more about the establishment, by displaying the establishment's name, address, contact number, an external link to their website and up to 4 photos of the establishment.

- The image carousel - This displays all the images returned by the establishment, this displays when a user clicks on one of the images in an establishment's info window.

- Map message popups - These are messages that appear in the center of the map that insturct the user to select an establishment type if they try to search without selecting one.
A message will also appear showing the user how many establishments the search returned, or that the search didn't return any establishments.

- The Map interface footer - This displays the credits and copyright.

### Features Left to Implement

- Directions feature - This will allow users to get directions to an establishment they have clicked on, 
by clicking a "directions" button in the icon information window.
- GPS button - This will allow users to center the map on their GPS location, with one click of a button.
- Social media sharing - This will allow users to share their search results via social media.


## Technologies Used

- **[HTML](https://en.wikipedia.org/wiki/HTML)**
    - This project uses **HTML** to build the foundation of the website and including links to CSS and JavaScript scripts.
- **[CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)**
    - This project uses **CSS** to style the whole website.
- **[JavaScript](https://www.javascript.com/)**
    - This project uses **JavaScript** to call on the Google Maps and Places API to render the map and implement all of it's functionalies into the site.
- **[JQuery js](https://jquery.com/)**
    - This project uses the **JQuery** JavaScript library for the all of the drop down menus, map message popup windows, the "Let's go" button, and it is used in many of functions in maps.js and filters.js.
- **[Bootstrap CSS and JS 4.1.3](https://getbootstrap.com/)**
    - This project uses the **Bootstrap** CSS and JavaScript library for it's grid system and image carousel.
- **[Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial)**
    - This project uses the Google Maps JavaScript API to render the map.
- **[Google Places API](https://developers.google.com/places/web-service/intro)**
    - This project uses the Google Places API to allow users to search a location of their choice, auto complete their search queries, search for different establishment
types and get establishment names, addresses, contact numbers and the establishment's websites.
- **[Microsoft Paint](https://en.wikipedia.org/wiki/Microsoft_Paint)**
    - I used Microsoft paint to resize and draw on the screenshots in the user guide images section.

## Testing
[**Testing documentation Here...**](testing.md)

## Deployment

This project has been deployed to **GitHub**, and can be viewed via **GitHub Pages** here **[Let's Explore](https://dan360z.github.io/Interactive-Front-End-Project/)**.
To run this website locally, clone or download this repository and then open the index.html in a browser of your choice. 

## Credits

### Media
The background image in this site was obtained from a google images search. Here is the address to the website where the image is from https://www.hiusa.org/images.

### Acknowledgements
I have had alot of help writing the maps.js script.
Here is a list of some of the sources that helped me along the way:
- Google Maps JavaScript API [documentation](https://developers.google.com/maps/documentation/javascript/tutorial). - Help With rendering the map.
- Google Places API [documentation](https://developers.google.com/places/web-service/intro). - Help with some of the **Places API** functionality.
- Kim Pearton's project Limitless [maps.js script](https://github.com/kimpea/limitless/blob/master/assets/js/map.js). - Help with understanding some functions, the overall structure of the script and the inspiration for the drop markers one by one effect, when the map returns results. 
- [LearnToProgram: Become a Web or Mobile Developer's](https://www.youtube.com/user/LearnToProgramDotTV?pbjreload=10) Youtube video [Google Places API: Coffee Shop Locator App](https://www.youtube.com/watch?v=eLGtNm4dSxc&t=54s). - Help
with the click or tap to search establishments functionality.
- [Stack OverFlow](https://stackoverflow.com/). Help with various code related problems.

### Designer/Developer
Let's Explore was designed and developed by **Daniel Field**.



