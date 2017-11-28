/*
console.log(`The last thing you remember is the light.  The blinding light.  And the pain.  
So much pain.  Some thing hit you from out of nowhere and now you're here.  Wherever here is.
You look down to inspect yourself and realise that there is nothing there.  You also noticed 
that you haven't really taken a breath in a while or blinked.  You try to speak but nothing 
comes out. Right.  No body no mouth, no vocal chords no sound.`);

console.log(`Suddenly you are surrounded by a grey blue light and, from what seems to you, 
very high up above you hear a screeching sound coming closer and closer.`);

console.log(`All of a sudden a black ball falls from above and lands in front of you.  
The ball materialises into a giant eye.  It stares at you ominously and out of nowhere a 
voice speaks`);

console.log(`"Welcome ${mainHero.name} we have been awaiting you!!!"`);

console.log(`You stare at the great eye and say. "Lord Sauron?"`);

console.log(`The eye opens fully showing the full size of it's pupil. It looks around and the 
voice says: "Who?"`);

console.log(`You look at the eye and, with slight relief in your voice and say: 
"So you're not the great Lord Sauron?`);

console.log(`"No, I am not!! Who is this Lord Sauron that you speak of?"`);

console.log(`"Lord Sauron??? Middle Earth??  Lord of the Rings?? Hobbitts?"`);

console.log(`"I have no idea what you are talking about.  Why would you confuse me for 
someone I have never heard of?"`);

console.log(`"Well you see, it's the eye, right?  In the Lord of the Rings trillogy, 
Sauron manifests himself as a giant, all seeing eye,  and seeing as you are a giant eye, 
the first thing	that came to mind was ... well ... Sauron"`);

console.log(`"I AM NOT SAURON!!"`);

console.log(`"Then why do you look like a gian eye?"`);

console.log(`"It is a form that we present ourselves as to you humans, 
after centuries of picking and choosing."`);

console.log(`"Picking and choosing from what?"`);

console.log(`"The human anatomy.  We tried different parts and came to the 
conclusion that the eye was one of the more comfortable manifestations that you were
comfortable with."`);

console.log(`"The other being?"`);

console.log(`"The brain, of course."`);

console.log(`"Have you tried genitalia?"`);

console.log(`"Yes, but we're not allowed to anymore."`);

console.log(`"So what was that like?"`);

console.log(`"We're not allowed to talk about it either.  
Anyways, I am here because I am to be your guide"`);

console.log(`"Guide to what?"`);

console.log(`"Why your next life, of course."`);

console.log(`"My next...what happened to my previous one?"`);
console.log(`"It was interrupted."`);
console.log(`"By what?"`);
console.log(`"I believe humans call it a train"`);
console.log(`With those words, visons beggan to appear in front of you.  A beer can.  
Train tracks.  The words 'Here, hold my beer'.  The oncoming lights`);
console.log(`"Crap.  I guess I didn't miss the train, did I?"`);
console.log(`"No, for once in your life you made it on time for public transport"`);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``);
console.log(``)
*/
//Character Creation
let name = prompt(`What is the name of your character?`);//Input the name
let gender = prompt(`What is the gender of your character?`);//Input the gender
let race =  prompt(`What is the race of your character?`);//Input the race
let characterRole =  prompt(`What class is your character? (Warrior, Ranger, Rouge)`);//Input the role

const mainHero = new Hero(name, 10, gender, race, characterRole);//the main hero object

checkRace(mainHero, mainHero.race);
checkClass(mainHero, mainHero.characterRole);

console.log(mainHero);