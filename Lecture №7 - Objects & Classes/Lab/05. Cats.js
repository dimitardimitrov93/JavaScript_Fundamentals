function solution(arrInput) {

    let length = arrInput.length;
    let arr = arrInput.slice();

    // create a loop to iterate through all of the array elements(cats)
    for (let i = 0; i < length; i++) {

        let currentCat = arr[i]; // catName & catAge is contained within a single string
        let currentCatInfoArr = currentCat.split(' '); // transform the string into a new array

        // create a class "Cat" which is usable for every cat
        class Cat {

            // name & age will be unique in every instance so they are in a constructor
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }

            // the default/common action for all cats is to say "Meow" so it it is outside the contructor
            makeSound() {
                // we use this.name & this.age in order to print the information for the current cat
                return `${this.name}, age ${this.age} says Meow`; 
            }
        }

        // declare a variable that will store a instance of the class Cat ==> object for the current Cat
        let currentCatObj = new Cat(currentCatInfoArr[0], currentCatInfoArr[1]);

        // print on the console by calling the function <currentCatObj.makeSound()>
        console.log(currentCatObj.makeSound());
    }
}

solution(['Mellow 2', 'Tom 5']);