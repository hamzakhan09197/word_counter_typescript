#!/usr/bin/evn node
import inquirer from 'inquirer';
import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import showBanner from 'node-banner';
let time = (time = 2000) => new Promise((r) => setTimeout(r, time));
async function myBanner() {
    showBanner('Word Counter', '\n You can count number of words');
}
async function enterParagraph() {
    let { paragraph } = await inquirer.prompt({
        name: 'paragraph',
        type: 'input',
        message: chalk.rgb(92, 217, 255)('Enter Paragraph')
    });
    return paragraph;
}
async function counterParagrapg(paragraph) {
    let word = paragraph.split(' ');
    let letters = word.join('');
    return { word: word.length, latters: letters.length };
}
async function userExit() {
    let { exit } = await inquirer.prompt({
        name: "exit",
        type: "confirm",
        message: chalk.rgb(92, 217, 255)("Do you Want to Exit")
    });
    return exit;
}
async function mainfun() {
    await myBanner();
    await time();
    let exit = true;
    while (exit) {
        await time();
        let paragraph = await enterParagraph();
        let { word, latters } = await counterParagrapg(paragraph);
        let spinner = createSpinner('Counting...').start();
        await time();
        spinner.success({ text: chalk.greenBright.bold(`Total Words : ${word} `) });
        spinner.success({ text: chalk.greenBright.bold(`Total Letters : ${latters}`) });
        let again = await userExit();
        exit = !again;
        console.log(chalk.whiteBright.bold(`\n---{===================}---\n`));
    }
}
await mainfun();
