function typeEffect(elementId, text, speed) {
    const element = document.getElementById(elementId);
    const sound = new Audio('typingSound.mp3');
    let index = 0;

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            sound.play();
            index++;
            setTimeout(type, speed);
        } else {
            sound.pause(); 
        }
    }

    type();
}

window.onload = function() {
    const text = "I am a student of the Department of Informatics Engineering at Tarumanagara University. I have a great interest in exploring data analysis. I am committed to developing my skills in data analysis and applying them in a professional environment and would like to learn more about the technology industry.";
    typeEffect('intro-text', text, 50);
};
