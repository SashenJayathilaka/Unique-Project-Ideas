var books = [
    {
        title: "Harry Potter",
        author: "JK Rowling",
        pages: 300
    },
    {
        title: "Green Eggs & Ham",
        author: "Dr. Seuss",
        pages: 25
    }
]

var friends = ["Oscar", "Tom", "Kelvin"]

books.forEach( function(books) {
    document.write(books.title + "<br>")
    document.write(books.author + "<br>")
    document.write(books.pages + "<br><br>")
});

document.write("<br><br>");

friends.forEach( function(friends) {
    document.write(friends + "<br>")
});