function heroesRegister(arrInput) {
    
    let arr = arrInput.slice();
    let length = arr.length;

    let heroesArr = [];

    class Hero {
        constructor(hero, level, items) {
            this.hero = hero;
            this.level = level;
            this.items = items;
        }

        printInfo() {
            if (this.items) {
                console.log(`Hero: ${this.hero}`);
                console.log(`level => ${this.level}`);
                console.log(`items => ${this.items}`);
            } else {
                console.log(`Hero: ${this.hero}`);
                console.log(`level => ${this.level}`);
            }
        }
    }

    for (let i = 0; i < length; i++) {
        let heroInfo = {};
        let currentHeroInfoArr = arr[i].split(' ');
        let nameAndLevel = currentHeroInfoArr.slice(0, 4);

        nameAndLevel = nameAndLevel.filter(function (element) {
            if (element !== '/' && element !== ',') {
                return element;
            }
        });

        heroInfo.Hero = nameAndLevel[0];
        heroInfo.level = Number(nameAndLevel[1]);
    
        let unsortedItemsWithSymbols = currentHeroInfoArr.slice(4);
        let unsortedItems = [];

        for (let element of unsortedItemsWithSymbols) {
            element = element.replace(',', '');
            unsortedItems.push(element);
        }

        let sortedItems = unsortedItems.sort((a, b) => a.localeCompare(b));

        heroInfo.items = sortedItems.join(', ');

        heroesArr.push([heroInfo.Hero, heroInfo.level, heroInfo.items]);      
    }

    let sortedHeroesArr = heroesArr.sort((a, b) => a[1] - b[1]);

    for (const index in sortedHeroesArr) {
        currentHeroInfoArr = sortedHeroesArr[index];

        let printLine = new Hero(currentHeroInfoArr[0], currentHeroInfoArr[1], currentHeroInfoArr[2]);
        printLine.printInfo();
    }
}

heroesRegister([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);