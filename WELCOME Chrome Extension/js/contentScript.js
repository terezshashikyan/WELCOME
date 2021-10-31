const addtheWordWelcome = function() {
const mainDiv = document.body.querySelector('div');
const injectElement = document.createElement('h1');
injectElement.className = 'wordWelcome';
injectElement.innerHTML = 'Welcome!';
mainDiv.prepend(injectElement);
}

addtheWordWelcome()