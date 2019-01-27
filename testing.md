## Testing

User scenarios:

1. Search Location and Autocomplete:
    1. Go to the Map section.
    2. Enter query into search and verify that autocomplete show suggested querys.
    3. Click on a suggested query and verify that the map centers on that location.

2. Display all nearby Restaurants:
    1. Go to the Map section.
    2. Enter query into search, let the map center on that location.
    3. select "Resturants" from the places menu.
    4. Click anywhere on the map and verify that the Places API returns all nearby Restaurants in that location with markers displayed on the map.

3. Markers Info window: 
    1. Go to the Map section.
    2. Enter query into search, let the map center on that location.
    3. select "Resturants" from the places menu.
    4. Click anywhere on the map and verify that the Places API returns all nearby Restaurants in that location with markers displayed on the map.
    5. Click on any of the markers and verify that a info window appears displaying the establishment's name, adress, contact number and website.

#### Responsiveness
- I have tested the website extensively on all screen sizes in vertical and portrait mode:
    - Extra small (I phone 6).
    - Small (Samsung s8).
    - Medium (I pad, I pad pro).
    - Large (Laptop, Desktop).
    - Extra large (TV).
    - Google Chrome's developer tools to see how the website functioned and looked across all the different device screen sizes.

#### Browser Support
- I tested the website on Chrome, Microsoft Edge and Firefox. There were no issues.

#### Validation
- I have validated the HTML using **[W3C Markup Validation Service](https://validator.w3.org/)**.
- I have validated the css using **[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)**.

#### Real World Testing
Once the main functionality of the website was in place I asked Friends, family, colleagues and fellow Code Institute students try out the website on their own
devices and to gain feedback from them.

Overall I had some really good feedback. But a few of them mentioned that they thought it would be better if, after the map had centered on 
a location a user has entered into the search input, it should fire the search establishments functionality automatically because it wasn't clear enough
that you had to tap or click on the map to search for establishments. Following up on this I created messages that displayed over the map
that would prompt the user to select an establishment type first then to click on the map to search. I also created the user guide images section 
to walking the user thorugh a visual step by step guide on how to use the functionality.


I used this click on map to search functionality because it makes the search for establishments far more flexible and gives a much better user experience.
For instance if a user entered New York into the search box and the markers displayed, these markers would have been based on the vicinity of the maps center.
What if the user wanted to scroll south a bit and then search establishments, they wouldn't have been able to do so. 
They would have to be very specific when entering that location in to the search box just to get the map to center in the exact place they 
wanted to search for establishments.