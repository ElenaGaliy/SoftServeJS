//******************************Task1******************************************************//

let arr = ['Tom', 'Sam', 'Ray', 'Bob'];
let [x, y, , ...z] = arr;

console.log(x);
console.log(y);
console.log(z);


//******************************Task2******************************************************//

let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};

let {
    names: { [1]: name2 },
    ages: { [1]: age2 },
    names: { [3]: name4 },
    ages: { [3]: age4 },
} = data;

console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);


//******************************Task3******************************************************//

function mul(...props) {
    let res = 0;
    for (const i of props) {
        if (typeof i === "number") {
            res = res === 0 ? 1 : res;
            res = res * i;
        }
    }
    return res;
};

console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));


//******************************Task4******************************************************//



let server = {
    data: 0,
    convertToString(callback) {
        callback(() => {
            return this.data + "";
        });
    }
};
let client = {
    server: server,
    result: "",
    calc(data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification() {
        return (callback) => {
            this.result = callback();
        };
    }
};

client.calc(123);
console.log(client.result);
console.log(typeof client.result);


//******************************Task5******************************************************//

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

function mapBuilder(keys, values) {
    const mapStruct = new Map();
    for (let i = 0; i < keys.length; i++) {
        mapStruct.set(keys[i], values[i]);
    }
    return mapStruct;
}

let map = mapBuilder(keys, values);

console.log(map.size);
console.log(map.get(2));