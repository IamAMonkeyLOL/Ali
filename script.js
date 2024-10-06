function showTab(tabId) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}
document.getElementById('myButton').addEventListener('click', function() {
    // Shake effect
    document.body.style.animation = 'shake 0.5s';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 500);

    // Create explosion dots
    const explosionContainer = document.getElementById('explosionContainer');
    
    for (let i = 0; i < 50; i++) { // Increased number of dots
        const dot = document.createElement('div');
        dot.classList.add('dot');
        
        // Random colors
        const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        dot.style.backgroundColor = randomColor;
        
        // Random position and direction
        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 100 + 50; // Random radius
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        dot.style.transform = `translate(${x}px, ${y}px)`;
        
        // Append to explosion container
        explosionContainer.appendChild(dot);

        // Animate dot
        setTimeout(() => {
            dot.style.transform = `translate(${x * 3}px, ${y * 3}px)`; // Move further
            dot.style.opacity = '0';
        }, 10);

        // Remove dot after a longer duration
        setTimeout(() => {
            explosionContainer.removeChild(dot);
        }, 2000); // Dots stay for longer
    }
});
