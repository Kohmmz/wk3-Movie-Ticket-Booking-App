document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:3000/films')
        .then(resp => resp.json()) // Convert HTTP response to JSON
        .then(films => {
            console.log(films);

            const flimlist = document.querySelector("#flimlist"); // Find <ul> to display list

            const placeHolder = document.querySelector("#placeHolder"); //  Find placeholder

            placeHolder.remove(); // Remove the placeholder

            // Loop through and create a list item for each film
            films.forEach(film => {
                const new_li_flim = document.createElement("li"); // Create new list item
                new_li_flim.textContent = film.title; // Set the movie title as text
                flimlist.appendChild(new_li_flim); // Append <li> to <ul>
                new_li_flim.addEventListener("click", () => { // displayflimdetails when clicked
                    displayFilmDetails(film)
                })
            });
        })
        .catch(error => console.error("Error fetching films:", error)); // Handle fetch errors
});

// Function to display selected film's details
function displayFilmDetails(film) {
    const detailsSection = document.querySelector("#movie-details");
    const poster = detailsSection.querySelector("#movie-poster");
    const title = detailsSection.querySelector("#movie-title");
    const runtime = detailsSection.querySelector("#movie-runtime");
    const showtime = detailsSection.querySelector("#movie-showtime");
    const tickets = detailsSection.querySelector("#available-tickets");
    const capacity = detailsSection.querySelector("#capacity")
    const buyButton = detailsSection.querySelector("#buy-ticket");
    // update display
    poster.src = film.poster;
    title.textContent = film.title;
    runtime.textContent = `Runtime: ${film.runtime} minutes`;
    showtime.textContent = `Showtime: ${film.showtime}`;
    const availableTickets = film.capacity - film.tickets_sold;
    capacity.textContent = `capacity: ${film.capacity}`
    tickets.textContent = `Tickets available: ${availableTickets}`;
    buyButton.disabled = availableTickets === 0;//Disable button if no tickets are available

    //Buy Ticket function
    buyButton.addEventListener("click", () => {
        if (availableTickets > 0) {
            film.tickets_sold += 1; // Update tickets sold for the selected film
            const updatedAvailableTickets = film.capacity - film.tickets_sold;
            tickets.textContent = `Tickets available: ${updatedAvailableTickets}`; // Update the displayed available tickets
            buyButton.disabled = updatedAvailableTickets === 0; // Disable the button if no tickets left

            // Optionally update the film list to reflect the change
            updateFilmList(films);
        }
    });
}