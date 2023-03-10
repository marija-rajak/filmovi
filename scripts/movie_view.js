const movieImg = document.getElementById('image');
const movieTitle = document.getElementById('title');
const movieProdYear = document.getElementById('year');
const movieDuration = document.getElementById('duration');
const movieRating = document.getElementById('rating');
const movieDescription = document.getElementById('description');
const movieDirector = document.getElementById('director');
const editBtn = document.getElementById('editButton');
const deleteBtn = document.getElementById('deleteButton');

const movieId = getQueryStringParameterByName('id');

function presentMovie() {
	fetch('http://localhost:3000' + '/films/' + movieId)
		.then(function (resp) {
			return resp.json();
		}).then(function (movie) {
			movieImg.src = movie.logo;
			movieImg.alt = movie.title + ' poster';
			movieTitle.innerText = movie.title;
			movieProdYear.innerText = movie.year;
			movieDuration.innerText = movie.duration + ' min';
			movieRating.innerText = movie.rating;
			movieDescription.innerText = movie.description;
			movieDirector.innerText = movie.director;
		});
}

presentMovie();

editBtn.addEventListener('click', function () {
	window.location.href = 'movie_edit.html?id=' + movieId;
})

deleteBtn.addEventListener('click', function () {
	window.location.href = 'movie_delete.html?id=' + movieId;
})