var phrase = "String are cool ";
var text = "and best";


//document.write(phrase);
document.write(phrase.length);
document.write("<br>");
document.write(phrase.toUpperCase());
document.write("<br>");
document.write(phrase.toLowerCase());
document.write("<br>");
document.write(phrase.charAt(2));
document.write("<br>");
document.write(phrase.indexOf("t"));
document.write("<br>");
document.write(phrase.lastIndexOf("o"));  
document.write("<br>");
document.write(phrase.substring(phrase.indexOf("a"), phrase.length) );
document.write("<br>");
document.write(phrase.endsWith("cools"));
document.write("<br>");
document.write(phrase.includes(text));
document.write("<br>");
document.write(phrase + " " + text);