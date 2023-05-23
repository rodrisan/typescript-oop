import { Animal, Dog, Pet } from './09-protected';

// const pet = new Pet('petty');  // Cannot create an instance of an abstract class

const animal = new Animal('elliottea');
animal.greeting();

const bruce = new Dog('Bruce', 'Rod');
bruce.greeting();
bruce.bark(2);
