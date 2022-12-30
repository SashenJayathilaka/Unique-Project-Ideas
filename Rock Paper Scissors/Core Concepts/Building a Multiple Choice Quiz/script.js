var questions = [
    {
          prompt: "What color are apples?\n(a) Red/Green\n\ (b) Purple\n(c) Orange",
          answer: "a"
    },
    {
         prompt: "What color are Bananas?\n(a) Teal\n\ (b) Magenta\n(c) Yellow",
         answer: "c"
    },
    {
         prompt: "What color are strawberries?\n(a) Yellow\n\ (b) Red\n(c) Blue",
         answer: "a"
    }
];
var score = 0;

for (var i = 0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if (response == questions[i].answer) {
        score++;
        alert("Correct!");
    }
    else{
        alert("Wrong!");
    }
}
alert("You got " + score + "/" + questions.length)