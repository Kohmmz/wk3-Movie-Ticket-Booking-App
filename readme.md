# Flatdango - Movie Ticket Booking App

## Overview
Flatdango is a web application that allows users to view movies showing at the Flatiron Movie Theater and purchase tickets for the available showtimes. The app fetches movie data from a local JSON server and displays movie details such as title, poster, runtime, and available tickets. Users can also buy tickets for a movie, with the number of available tickets decreasing upon each purchase.

## Features
- View details of the first movie in the list upon page load (including title, poster, runtime, showtime, and available tickets).
- View a list of all movies available at the theater, displayed in the left sidebar.
- Buy tickets for a movie, with the number of available tickets updating in real-time.
- Prevent ticket purchases if the movie is sold out (i.e., when no tickets are available).
- Click on a movie in the sidebar to display its details.
- Optional: Update the UI to indicate sold-out films in the movie list.

## Technologies Used
- **HTML**: Markup for the structure of the app.
- **CSS**: Styles for the layout and design.
- **JavaScript**: DOM manipulation, event handling, and communication with the local server.
- **JSON Server**: A mock server running a JSON database to simulate backend communication.

## Project Setup

### Prerequisites
To run this project locally, you need:
- **Node.js** and **npm** installed on your machine.
- **JSON Server** to serve the movie data.

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Kohmmz/wk3-Movie-Ticket-Booking-App.git
   ```

2. Navigate to the project folder:
   ```bash
   cd flatdango
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the JSON Server to serve the movie data (assuming you have `json-server` installed):
   ```bash
   json-server --watch db.json --port 3000
   ```

5. Open the `index.html` file in your browser to view the app.

### Folder Structure
```
/flatdango
|-- index.html        # Main HTML file
|-- style.css         # Styles for the app
|-- script.js         # JavaScript for handling DOM manipulation, events, and server communication
|-- db.json           # JSON file for storing movie data (used by JSON server)
|-- README.md         # This file
```

### API Endpoints
- **GET /films**: Retrieves a list of all movies at the theater.
- **GET /films/:id**: Retrieves the details of a specific movie (by `id`).
- **PATCH /films/:id**: Updates the number of tickets sold for a specific movie.
- **DELETE /films/:id**: Deletes a specific movie from the list.

## How to Use
1. Upon loading the page, the first movie's details will be displayed automatically.
2. The list of available movies will be shown in the left sidebar. Click on any movie title to update the displayed movie's details.
3. If you want to buy a ticket for a movie, click the "Buy Ticket" button. The number of available tickets will decrease by one.
4. If a movie has no available tickets, the "Buy Ticket" button will be disabled.
5. Movies that are sold out will be indicated in the list with a `Sold Out` label.

## Bonus Features (Optional)
- When a movie is sold out, the "Buy Ticket" button text changes to "Sold Out."
- Sold-out films in the list are styled with a special `sold-out` class.
- Additional functionality includes the ability to delete films from the list.

## Known Issues
- No persistence of ticket sales across page reloads (currently only updated on the front end).
- The "Buy Ticket" button can still be clicked without persistence on the backend (currently a mock feature).

## Contributing
If you'd like to contribute to this project, you can fix the repository and create a pull request with your improvements.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---



