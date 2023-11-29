import Title from './components/title';
import Image from './components/image';
import Button from './components/button';
import monalisa from './images/monalisa.jpeg';
import Error from './templates/error.html';

const title = new Title();
title.create('main title');

const image = new Image();
image.insert(monalisa);

const button = new Button();
button.create('click me');

// babel usage
const double = [1, 2, 3].map(num => num * 2);
console.log('double', double);

const body = document.querySelector('body');
body.innerHTML += Error;

console.log(process.env.API_KEY);