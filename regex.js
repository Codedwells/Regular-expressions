//---------------------------REGULAR EXPRESSIONS---------------------------------------
// In this module we will learn most basics of regular expressions also known as regex
// We will go all the way to learn regex you could possibly use for input validation
// Let's get started
const log = (value) => {
	console.log(value);
};
// Regular expressions are ussualy written inside /---/ as shown below
// The g and i flags are helpful in that. i flag ignores case while the
// g flag enables geting matches from  anywhere in the string

myString = "This is my test string I will be using .";
let regex = /tes./gi;

// WE START HERE...............

// .test() method
// It returns true or false on a given regex

let str = "Regular Expressions";
let ourRegex = /expression/;
ourRegex.test(str); // true

// .match() method
// It returns an array of the string that matched with our regex

let str2 = "Regular Expressions";
let ourRegex2 = /expression/;
str.match(ourRegex); // ["expression"]

// The WildCard period .
// It returns true or false  and matches anything with that pattern
// global flag 'g' it finds more than one repeat of the regex
// 'i' this flag ignores all case sensitivity

let humString = "I'll hum a song";
let hugString = "Bears hug a lot";
let ourRegex3 = /hu./gi;

ourRegex3.test(humString); // true
ourRegex3.test(hugString); // true

// Matching strings with multiple possibilities
// A regex like /b[aiu]g/ can be used

let bigStr = "Big";
let bugStr = "Bug";
let bagStr = "Bag";
let bogStr = "Bog";
let ourRegex4 = /b[iua]g/gi;

bigStr.match(ourRegex4); // ["big"]
bugStr.match(ourRegex4); // ["bug"]
bagStr.match(ourRegex4); // ["bag"]
bogStr.match(ourRegex4); // null

// Matching letters of the alphabe
// The example regex here would be  /b[a-e]g/gi
// Numbers can also be matched by using  /[0-9]/

let ourRegex5 = /b[a-i]g/gi;
bigStr.match(ourRegex5); // ["big"]
bugStr.match(ourRegex5); // null
bagStr.match(ourRegex5); // ["bag"]
bogStr.match(ourRegex5); // null

// Matching using caret "^" symbol
// It indicates a match must occur at the beggining of
// the searched text
// The multi-line 'm' modifier causes ^ and $ to match beginning/end of each line
// Using ^ in a character set causes us to escape characters we do not want to match

let ourRegex6 = /^a/gim;
let escapeReg = /[^a]/gim;
let inStartStr = "Angle";
let inMidStr = "Mango";
inStartStr.match(escapeReg); // ['n', 'g', 'l', 'e']
inStartStr.match(ourRegex6); // ['A']
inMidStr.match(ourRegex6); // null

//To match end we use the anchor character $

let endReg = /ory$/gim;
let endStr = "The only story";
endStr.match(endReg); // ['ory']

// To match characters which would occur more than one time we use +

let ourRegex7 = /a+/gim;
let testStr = "Manga";
let testStr2 = "Man";
testStr.match(ourRegex7); // ['a','a']
testStr2.match(ourRegex7); // ['a']

// To match characters occuring Zero or more than two times asterisc *

let goRegex = /go*/gi; // it checks for a word starting with 'g'
// and zero or more 'o' following it

let soccerWorld = "goooooalis gooo ";
let gPhrase = "gut with";
let oPhrase = "Over the moon";
soccerWorld.match(goRegex); //['gooooo','gooo']
gPhrase.match(goRegex); //['g']
oPhrase.match(goRegex); // null

// -----LAZY MATCH------ It finds the smallest part that satisfies the
// regex pattern

let greedyReg = /t[a-z]*i/gi;
let lazyReg = /t[a-z]*?i/g;
let lazyStr = "Taitanic";
lazyStr.match(greedyReg); // ["Titani"] by detault regex are greedy hence returns
// the largest substring you can make it lazy with '?'
lazyStr.match(lazyReg); // ['Tai']

// ----------------SPECIAL CHARACTERS---------------
// \w Match all numbers and letters === /[A-Za-z0-9_]/
// \w+ Match letters ===/[A-Za-z]/
// \W This escapes all numbers and letters
// \d This only digits ===/[0-9]/g
// \D To not match digits
// \s This is used to match white spaces === /\s/g
// \r ==return
// \t ==tab
// \f ==form
// \n ==feed
// \v ==newline
// \S This finds non-whitespaces === [^\r\t\f\n\v]
// ----------------SPECIAL CHARACTERS---------------

// Match all  letters and numbers

let longHand = /[A-Za-z0-9_]/;
let shortHand = /\W+/;

// ---------------RANGE----------
// {x,y} is used to specify a character appearing in a
// certain range if /a{3,}h/g if a is repeated atleast 3 times
// You can also specify exact matches /a{3}h/g

let rangeReg = /a{3,5}h/g;
let A4 = "aaaah";
let A2 = "aah";

A4.match(rangeReg); // ['aaaah']
A2.match(rangeReg); //null

// --------------LOOK AHEADS----------------
// They tell JavaScript to look futher into our string
// to find a certain pattern
// POSITIVE LOOKAHEAD - looks to see if a search pattern is present but
// does match it (?=...)
//NEGATIVE LOOKAHEAD - Looks to make sure element in search pattern in not
// there (?!...) the dots should be replaced with what is not to be replaced

let quit = "qu";
let noquit = "qt";
let quReg = /q(?=u)/g;
let qReg = /q(?!u)/g;

quit.match(quReg); // ['q']
noquit.match(qReg); // ['q']

// -------------FINDING MIXED GROUPS-----------
// This is achieved using the OR operator |

let orReg = /p(engu|umpk)in/gi;
let orStr = "Penguin";
let orStr2 = "Pumpkin";
orStr.match(orReg); // ['Penguin']
orStr2.match(orReg); // ['Pumpkin']

// ---------------CAPTURE GROUPS---------------
// They allow reuse of regex

let repeatReg = /(\w+)\1\1/g;
let repStr = "row row row";

repeatReg.test(repStr);
repStr.match(repeatReg);

//--------------SEARCH AND REPLACED---------------

let wrongName = "The sky is silver";
let silverReg = /silver/;
wrongName.replace(silverReg, "blue"); //"The sky is blue"

//---------------REAL WORLD VALIDATION-------------------

//Try this problem and scroll down for my solution
// A phone number with ten digits and can only start with
// 0 followed by 7 or 1 then the remaining eight digits
let phone1 = "0723475667";
let phone2 = "0987564356";
let phone3 = "0134378490";
let phone4 = "tr67893246";

let phoneReg = /^0(1|7)\d{8}$/g;
log(phone1.match(phoneReg)); // [ '0723475667' ]
log(phone2.match(phoneReg)); //null
log(phone3.match(phoneReg)); // [ '0134378490' ]
log(phone4.match(phoneReg)); //null

//An email after the first part has @gmail.com

let email1 = 'john.doe@gmail.com'
let email2 = 'Jayson23@gmail.com'
let email3 = '23maddison.34@gmail.com'
let email4 = 'mells.ml_dev34@gmail.com'
let email5 = 'john-doe@gmail.com'
let email6 = 'Jayson23@mail.com'
let email7 = '23maddison.34@yahoo.com'
let email8 = 'mells.ml.dev34@gmail.com'

let emailReg = /^[a-z0-9]+(?!.*(?:\+{2,}|\-{2,}|\.{2,}))(?:[\.+\-]{0,1}[a-z0-9])*@gmail\.com$/gi

log(email1.match(emailReg))
log(email2.match(emailReg))
log(email3.match(emailReg))
log(email4.match(emailReg))
log(email5.match(emailReg))
log(email6.match(emailReg))
log(email7.match(emailReg))
log(email8.match(emailReg))

//Password Validation 
// Must be atleast 8 characters

let pass = "he_llo-7s"
let pass2 = "hjk"
let passReg = /^([\W\w])([^\s]){8,16}$/g

log(pass.match(passReg)) //[ 'he_llo-7s' ]
log(pass2.match(passReg)) //null


// Validating username
// It must have alpha numeric characters

let user1 = 'Miracle'
let user2 = '35racle'
let user3 = 'Mira4549'
let user4 = 'Mirslkfjlse'

let userReg = /(^[a-zA-Z]{2,}\d*$|[a-zA-Z]{1,}\d{2,}$)/g


user1.match(userReg) // [ 'Miracle' ]
user2.match(userReg) // null
user3.match(userReg) // [ 'Mira4549' ]
user4.match(userReg) // [ 'Mirslkfjlse' ]
