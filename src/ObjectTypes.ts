
// [Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
// Sun Nov  3 17:04:20 EST 2024


interface IPerson {
    name: string;
    age: number;
}

type PersonType = {
    name: string;
    age: number;
}

function greet(person: { name: string; age: number }) {
    return "Hello " + person.name;
}

interface Shape {
    xPos?: number;
    yPos?: number;
}

interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
}

function paintShape(opts: PaintOptions) {
    // ...
}

function getShape() {
    return {
        xPos: 0,
        yPos: 0
    }
}

const shape = getShape();

paintShape({ shape });



