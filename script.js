$("#search-field").on("keyup", function(){
    $("#movie-list").html("");

    if ($(this).val().length >= 3) {
        $.ajax({
            url: "http://www.omdbapi.com/",
            data: {
                apikey: "149e2152",
                s: $(this).val()
            }
        }).done(function(data) {
            if (data.Response === "True") {
                const movies = data.Search;
                
                movies.forEach(movie => {
                    $("#movie-list").append(`
                    <li>
                        <img src="${movie.Poster}" alt="${movie.Title} - Poster">
                        ${movie.Title}
                        <span>${movie.Year}</span>
                    </li>
                    `);
                });
            }
        });
    }
});