export class Kata {
    static getCount(str) {
        let filter = str.match(/[aeiou]/gi);
        return filter ? filter.length : 0;
    }
}
console.log(Kata.getCount("abracadabra"));
//# sourceMappingURL=vowelCount.js.map