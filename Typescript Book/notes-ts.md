The problem with loosely typed program:
We may pass a wrong type and the program wil get error

Primitives are Wrapped objects-its a nice thing to remember.

toString() returns a string but it doenot alter the originale value to string.

eg: let a =5;
a.toString() will return a "5" but a will still have the 5 as number, it will not change the
orignal to string

Getting starte with Types script:
Typescript Environment
check version of ts:
tsc -v

we can write normal js in ts file and use tsc file.ts to compile it to js file

Type Annotations:
Type are assigned to everything in TypeScript
var name:string = "sam"
var number:number = 5;

var arr:Array<string> = ["Elephant","Mouse"];
or
var arr:string[] = ["Elephant","Mouse"];

any type can be used when we dont know the type or while using objects
var animals:any = {name:"Elephants", food:"Omnivore"};

TypeScript comes with defined types for the DOM

Edited the example to add type annotation
like input will have a type of <HTMLInputElement>
