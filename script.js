const sendButton = document.getElementById('sendBtn')
const textInput = document.getElementById('textInput')
const chatArea = document.getElementById('chat-area')

const settingsBtn = document.getElementById('settingsBtn');
const menu = document.getElementById('menu');
const container = document.getElementById('container');

function darkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);

function toggleOpen() {
    const toggle = document.getElementById("menu");
    if (toggle.style.right === "-100%") {
        toggle.style.right = "0";
        container.style.width = "calc(100% - 300px)"
        
    } else {
        toggle.style.right = "-100%";
        container.style.width = "100%"
    }
  }

const answers = ["I don't understand...","Um, I only speak English","Blup blup blup blup","Ok, go away...","Leave me alone","I don't know that","Hahaha he-hee","Yo put the gun down!"]

sendButton.addEventListener('click', () => userSendMessage())

textInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      userSendMessage()
    }
  })

  messageTracker = 0;

randomTime = Math.floor(Math.random() * (6000 - 3000)) + 3000; 

let botResponding = false;

function userSendMessage() {
    if (textInput.value.trim()) {
        const message = document.createElement('div')
        message.classList.add('user-message')
        message.innerHTML = document.getElementById('textInput').value
        document.getElementById('chat-area').appendChild(message)
        document.getElementById('textInput').value = ""
        chatArea.scrollTop = chatArea.scrollHeight;
        messageTracker++;
        if (!botResponding) {
            botResponding = true;
            botRespondEngine();
        }
    } else {
        return;
    }  
} 

function botTyping() {
    setTimeout(function() {
        const bottyping = document.createElement('div')
        bottyping.classList.add('bot-typing')
        document.getElementById('chat-area').appendChild(bottyping)
        bottyping.innerHTML = '<div class="bot-typing">DumbAI is typing<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span></div>'
        chatArea.scrollTop = chatArea.scrollHeight;
        setTimeout(() => {
        document.getElementById('chat-area').removeChild(bottyping)
        }, 1000)
    }, 2000)
}

function botRespondEngine(botMessageContent) {
    botTyping()
    setTimeout(function() {
    if(messageTracker === 1 && !botMessageContent) {
        const botMessage = document.createElement('div')
        botMessage.classList.add('bot-message')
        botMessage.innerHTML = "Hey"
        document.getElementById('chat-area').appendChild(botMessage)
        chatArea.scrollTop = chatArea.scrollHeight;
        messageTracker++;
    } else if (botMessageContent) {
        const botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        botMessage.innerHTML = botMessageContent;
        document.getElementById('chat-area').appendChild(botMessage);
        chatArea.scrollTop = chatArea.scrollHeight;
        messageTracker++;
    } else {
        const botMessage = document.createElement('div')
        botMessage.classList.add('bot-message')
        randomAnswer = Math.floor(Math.random() * (9 - 1)) + 1
        botMessage.innerHTML = answers[randomAnswer]
        document.getElementById('chat-area').appendChild(botMessage)
        chatArea.scrollTop = chatArea.scrollHeight;
        messageTracker++;
    }
    botResponding = false;
    }, randomTime);
}

function Poop() {
    var poop = document.createElement('div');
    poop.setAttribute('id', 'poop');
    poop.textContent = '\uD83D\uDCA9';

    var buttonRect = document.querySelector('.chat-button').getBoundingClientRect();
    var containerRect = document.getElementById('container').getBoundingClientRect();

    var buttonOffset = buttonRect.top - containerRect.top - 22;
    var buttonLeft = buttonRect.left - containerRect.left;

    poop.style.position = 'absolute';
    poop.style.top = buttonOffset + 'px';
    poop.style.left = buttonLeft + 'px';
    poop.style.opacity = '1';

    document.getElementById('container').appendChild(poop);

    // Animate the poop emoji
    var duration = 1000; // Animation duration in milliseconds
    var frameRate = 60; // Number of animation frames per second
    var distance = 30; // Distance to move the poop emoji up in pixels
    var opacityStep = 1 / (duration / 1000 * frameRate); // Opacity change per frame

    var frame = 0;
    var interval = setInterval(function () {
        if (frame >= duration / 1000 * frameRate) {
            clearInterval(interval);
            poop.style.display = 'none'; // Hide the poop div after the animation is finished
            document.getElementById('container').removeChild(poop); // Remove the poop div from the container
        } else {
            var translateY = easeOutCubic(frame / (duration / 1000 * frameRate)) * distance;
            var opacity = 1 - frame * opacityStep;
            poop.style.transform = 'translateY(-' + translateY + 'px)';
            poop.style.opacity = opacity;
            frame++;
        }
    }, 1000 / frameRate);
}

// Easing function for smoother animation
function easeOutCubic(t) {
    return (--t) * t * t + 1;
}

function openFile() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _ => {
      // you can use this method to get file and perform respective operations
              botRespondEngine("Stupid file...");
              setTimeout(botResponding, 1000);
          };
    input.click();
    
  }










        


