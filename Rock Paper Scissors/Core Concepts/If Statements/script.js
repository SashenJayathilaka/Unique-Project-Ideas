var isMale = true;
var isTall = false;

if (isMale && isTall) {
    document.write("You are tall male");
}
else if (isMale && !isTall) {
    document.write("You are a short male");
}
else if (!isMale && isTall) {
    document.write("You are not male, but you are tall");
}
else{
    document.write("You are not tall and male");
}