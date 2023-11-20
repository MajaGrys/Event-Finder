# Event Finder
### About the project

EventFinder allows users to search for interesting events in the vicinity of the chosen city.

The project has been developed using React, Redux, Bootstrap and [Discovery API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/). Design has been inspired by the [Append](https://bootstrapmade.com/append-bootstrap-website-template/) template. Additionally, [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner) and [react-zoom-pan-pinch](https://www.npmjs.com/package/react-zoom-pan-pinch) packages have been used to implement the loading spinner and the world map. Testing have been conducted using Jest and Cypress.

The project has been deployed on [GitHub](https://majagrys.github.io/Event-Finder/).

### Running the code locally

1. Create a [Discovery API account](https://developer-acct.ticketmaster.com/user/login) to obtain the API key.
2. Clone the repository using ```git clone https://github.com/MajaGrys/Event-Finder.git```.
3. Move into the repository ```cd Event-Finder``` and install the packages ```npm install```.
4. Provide your API key in the EventFinder component.

To run the local server use ```npm start```.

To run the Jest tests use ```npm test```.

To run Cypress tests use ```npx cypress open``` and choose E2E testing.
