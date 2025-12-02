class Pokemon {
  static allPokemon = [];

  #health = 100;

  #level = 1;

  constructor(name, type) {
    this.name = name;
    this.type = type;
    Pokemon.allPokemon.push(this);
  }

  get health() {
    return this.#health;
  }

  get level() {
    return this.#level;
  }

  getLevel() {
    return this.#level;
  }

  getHealth() {
    return this.#health;
  }

  levelUp() {
    this.#level += 1;
    this.#health += 10;
    console.log(`${this.name} leveled up to level ${this.#level}!`);
  }

  isFainted() {
    return this.#health <= 0;
  }

  attack(targetPokemon) {
    const damage = this.#level * 10;
    targetPokemon.#health -= damage;
    console.log(`${this.name} attacked ${targetPokemon.name}!`);
  }

  static getTotalPokemon() {
    return Pokemon.allPokemon.length;
  }

  static findByName(name) {
    return Pokemon.allPokemon.find((mon) => mon.name === name);
  }
}

// TEST YOUR CODE HERE
const charizard = new Pokemon('Charizard', 'Fire');
const squirtle = new Pokemon('Squirtle', 'Water');

// 1. Checking instance properties
console.log(charizard); // Pokemon { name: "Charizard", type: "Fire" }
console.log(squirtle); // Pokemon { name: "Squirtle", type: "Water" }

// 2. Leveling up a Pokemon
squirtle.levelUp(); // Squirtle leveled up to level 2!
squirtle.levelUp(); // Squirtle leveled up to level 3!
squirtle.levelUp(); // Squirtle leveled up to level 4!

// 3. Checking the level
console.log(squirtle.getLevel()); // 2
// OR if you use the get syntax
console.log(squirtle.level); // 2

// 4. Checking on health
console.log(squirtle.getHealth()); // Should be 100
// OR if you use the get syntax
console.log(squirtle.health); // Should be 100

// 5. Attacking until one faints
while (!charizard.isFainted()) {
  squirtle.attack(charizard);
}
console.log('Squirtle has fainted!');

// 6. Finding a Pokemon instance
console.log(Pokemon.findByName('Charizard')); // Pokemon { name: "Charizard", type: "Fire" }

// 7. Viewing count of all Pokemon
console.log('Total Pokemon:', Pokemon.getTotalPokemon()); // 2
// DO NOT REMOVE
module.exports = { Pokemon };
