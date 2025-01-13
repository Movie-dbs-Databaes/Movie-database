
### Movie Database Project 🎬
### Overview
This project is a Movie Database built with React that allows users to search for movies by title and filter by genre. Users can also view detailed information about each movie, including trailers, posters, release date, and ratings. The project utilizes The Movie Database (TMDB) API to fetch movie data and display it dynamically.

### Features
🔍 Search Functionality: Users can search for movies by title.
🎥 Movie Trailers: Hover over a movie poster to play the trailer automatically.
🎬 Movie Details: Click on a movie to view detailed information including the poster, overview, release date, and rating.
📋 Category Filtering: Filter movies by genre.
📱 Responsive Design: Works on all screen sizes.

### Tech Stack
React: Frontend framework
TMDB API: For fetching movie data
React Router: For navigation between movie list and movie details
CSS: For styling and responsive design 

### Installation and Setup Instructions
To get started with the project, follow these steps:

1. Clone the repository
bash
Copy code
git clone https://github.com/Movie-dbs-Databaes/Movie-database.git
cd movie-database
2. Install dependencies
Make sure you have Node.js installed on your machine. Then, install the required dependencies:

bash
Copy code
npm install
3. Obtain an API key
Sign up on The Movie Database (TMDB) and generate an API key.

4. Set up environment variables
Create a .env file in the root of the project and add your TMDB API key:

bash
Copy code
REACT_APP_TMDB_API_KEY=your_api_key_here
5. Run the application
After setting up the API key, start the application:

bash
Copy code
npm start
The app should be running at http://localhost:3000.

### Project Structure

.
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Movie.js
│   │   ├── MovieDetails.js
│   │   ├── MovieList.js
│   │   └── SearchBar.js
│   ├── App.js
│   └── index.js
├── README.md
└── package.json

Movie.js: The main component that handles search and fetching movies.
MovieList.js: Renders the list of movies and handles hover interactions to display trailers.
MovieDetails.js: Displays detailed information about a specific movie.
SearchBar.js: Contains the search input and genre filter.

### How it Works
Search: The user can type a movie title in the search bar, which triggers a request to TMDB's search API.
Movie Hover: When a user hovers over a movie poster, the trailer automatically plays in an embedded iframe.
Movie Details: Clicking on a movie takes the user to a detailed view of the movie.
API Usage
This project uses The Movie Database (TMDB) API to fetch movies, trailers, and other information. You can explore more about their API here.

### Future Enhancements
Add a pagination feature for searching through more movies.
Implement user ratings and the ability to save favorite movies.
Add related movies suggestions on the movie details page.
