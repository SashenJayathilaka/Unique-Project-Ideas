var myMovie = {
    title: "The Social Network",
    realeaseYear: "2010",
    duration: 2.0,
    actors: [
        {
            name: "Jessie Eisenberg",
            birthday: new Date("October 5, 1983"),
            hometown: "New York, New York"
        },
        {
            name: "Rooney Mara",
            birthday: new Date("April 17 1985"),
            hometown: "Bedford New York"
        },
    ]
}

document.write(myMovie.title);
document.write("<br>");
document.write(myMovie.realeaseYear);
document.write("<br>")
document.write(myMovie.duration);
document.write("<br>");
document.write(myMovie.actors[0].name);
document.write("<br>")
document.write(myMovie.actors[0].hometown);
document.write("<br>");
document.write(myMovie.actors[1].name);
document.write("<br>");
document.write(myMovie.actors[1].hometown);