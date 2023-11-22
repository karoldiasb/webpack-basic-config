import '../scss/button.scss';

class Button {

    create(text){
        const button = document.createElement('button');
        button.innerText = text;
        button.classList.add('button');
        document.querySelector('body').appendChild(button);
    }

}

export default Button;