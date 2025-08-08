#!/usr/bin/env node
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const questions = [
  {
    question: 'Wie heißt das Amiga-Spiel, in dem der Charakter Guybrush Threepwood die Hauptrolle spielt?',
    answer: 'The Secret of Monkey Island',
  },
  {
    question: 'Welches Rennspiel von Psygnosis aus dem Jahr 1991 war für seinen Looping-Bug bekannt?',
    answer: 'Formula One Grand Prix',
  },
  {
    question: 'In welchem Spiel kämpft der Spieler als Turrican gegen den Maschinenherrscher Morgul?',
    answer: 'Turrican',
  },
  {
    question: 'Welches Amiga-Spiel basiert auf der Filmreihe um Ellen Ripley und beinhaltet Facehuggers?',
    answer: 'Alien Breed',
  },
  {
    question: 'Wie heißt der Hund, der im Spiel “Another World” den Helden kurzzeitig begleitet?',
    answer: 'Frogsdog',
  },
];

const rl = readline.createInterface({ input, output });
let score = 0;

for (const { question, answer } of questions) {
  const user = await rl.question(`${question}\n> `);
  if (user.trim().toLowerCase() === answer.toLowerCase()) {
    console.log('Richtig!');
    score++;
  } else {
    console.log(`Falsch! Richtige Antwort: ${answer}`);
  }
  console.log('');
}

console.log(`Du hast ${score} von ${questions.length} Fragen richtig beantwortet.`);
rl.close();
