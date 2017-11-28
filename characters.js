class BaseCharacter {//base class for a character
		constructor(name, health){//name and health will be varied
			this.name = name;//the name is whatever the user chooses
			this.maxHealth = health;//this will allow the character health to be restored if needed to it's max
			this.currentHealth = health;//this health depeds
			this.isIncapacitated = false;
			this.barriers = {//basic statistics for all characters. THIS IS AN OBJECT AS A PROPERTY
				attack: 10,
				sneak: 10,
				persuade: 10
			};
			this.skills ={//basic skill stats for all characters. THIS IS AN OBJECT AS A PROPERTY
				attack: 0,
				sneak: 0,
				persuade: 0
			};
		};
	};

	class Hero extends BaseCharacter{
		constructor(name, health, gender, race, role){//hero name and health extend from basecharacter, hero race and role are chosen by user
			super(name, health);//conntects name and health to the hearo
			this.gener = gender;//new 
			this.race = race;
			this.characterRole = role;						
			this.equippedWeapon = {//More objects as property
				name: `None`,
				minDamage: null,//character has none to start
				maxDamage: null,//character has none to start
			};
			this.equippedArmor = {
				name: `None`,
				hitBarrierBonus: null;//character has none to start
			};
		};
	};

	const checkClass = (hero, characterClass) => {//function where user choice sets up the skills
		let lowerCharacterClass = characterClass.toLowerCase();//make all input lowe case

		switch (lowerCharacterClass) {//chosing the character function
			case `warrior`://make sure it's lower case here
				hero.skills.attack +=3;//add 3 to attack
				hero.skills.sneak --;//take 1 from sneak
				break;
			case `ranger`://make sure it's lower case here
				hero.skills.attack ++;//add 1 to attack
				hero.skills.persuade ++;//add 1 to persuade
				hero.skills.sneak ++;//take 1 from sneak
				break;
			case `rouge`://make sure it's lower case here
				hero.skills.sneak +=3;//add 3 to attack
				hero.skills.attack --;//take 1 from sneak
				break;
			default:
				characterClass = prompt(`${characterClass} is not a valid choice.  Choose a valid choice or check your spelling!!`);//in case the user choice doesn't match the valid choices
				hero.characterRole = characterClass;//
				checkClass(hero, characterClass);//re-start the check class function
				break;
		};
	};

const checkRace = (hero, race) => {
	let lowerCaseRace = race.toLowerCase();

	switch (lowerCaseRace) {
		case  `human`://no race bonuses
			break;
		case `elf`:// elf race bonus and barriers
			hero.skills.persuade ++;
			hero.barriers.persuade ++;
			hero.skills.attack --;
			hero.barriers.sneak --;
			break;
		case `dwarf`://dwarf race bonus and barriers
			hero.skills.attack++;
			hero.barriers.attack++;
			hero.skills.sneak--;
			hero.barriers.persuade--;
			break;
		case `halfling`:
			hero.skills.sneak++;
			hero.barriers.sneak++;
			hero.skills.attack--;
			hero.barriers.persuade--;
			break;
		default:
			race = prompt(`${race} is not a valid choice.  Choose a valid choice or check your spelling!!`);
			hero.race = race;
			checkRace(hero, race);
			break;		
	};
};

attack() {
	return Math.floor(Math.random() * 20) + 1 + this.skills.attack;
}