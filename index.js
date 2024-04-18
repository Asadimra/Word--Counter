#! /usr/bin/env node
import inquirer from "inquirer";
const count = await inquirer.prompt([
    {
        name: "word",
        type: "input",
        message: "Enter a sentence to count your words: ",
    },
]);
const counted_word = count.word.trim().split(" ");
console.log(counted_word);
console.log("your counted word is " + counted_word.length);
