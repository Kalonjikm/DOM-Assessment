joke1 = "When I was young I wanted to play the guitar really badly. After years of lessons, hard work, and practice, I can play the guitar really badly.";
joke2 = "What type of bear is toothless? A gummy bear.";
joke3 = "I have a joke about construction, but I'm still working on it.";

const main = document.querySelector('main');
const body = document.querySelector('body');

const template = `
    <h1>My Jokes</h1>
    <ul>
        <li>${joke1}</li>
        <li>${joke2}</li>
        <li>${joke3}</li>
    </ul>
`;

main.innerHTML = template;

const end = document.createElement('p');
end.textContent = "That's all folks!";
body.appendChild(end);