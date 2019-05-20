// Написать класс Dog, который наследуется от класcа Animal. 
// Класс Animal имеет метод getName (name можно передать в конструктор). 
// Класс Dog имеет метод bark (возвращает строку «Dog {dogname} is barking».

//     Пример использования:

//     var dog = new Dog ('Aban');

//     dog.getName () === 'Aban'; // true

//     dog.bark () === 'Dog Aban is barking'; // true

//     Задание необходимо сделать в двух вариантах: на ES5 и ES6.

//es5
var Animal = {
    getName: function (name) {
        return this.name;
    }
};

var Dog = function (name) {
    this.name = name;
};

Dog.prototype = Animal;

Dog.prototype.bark = function (name) {
    return 'Dog ' + this.name + ' is barking';
};

var dog = function (name) {
    return this.name = name
};

dog.prototype = Dog;

var dog = new Dog('Aban');

console.log(dog.getName() === 'Aban');
console.log(dog.bark() === 'Dog Aban is barking');

