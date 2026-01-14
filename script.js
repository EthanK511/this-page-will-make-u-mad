// ===== GRANT CENTRAL PRANK WEBSITE JAVASCRIPT =====

// List of fun facts for the rotating fact feature
const funFacts = [
    "Grant Central was founded in 2024... or was it 2023?",
    "Our CEO's name is redacted (it's a mystery!)",
    "We have over 1 million visitors who are still looking for the contact page",
    "The average time to find our contact page is... well, we stopped measuring",
    "Our IT department consists of one person and one AI",
    "This website was built by someone who loves pranks",
    "You're currently wasting time reading these facts",
    "The contact page exists. It's really there. We promise.",
    "Fun fact: This is actually true for once!",
    "Grant Central cares about your frustration (in a playful way)"
];

let currentFactIndex = 0;

// Rotate through fun facts
function nextFact() {
    currentFactIndex = (currentFactIndex + 1) % funFacts.length;
    document.getElementById('rotating-fact').textContent = funFacts[currentFactIndex];
}

// Redirect to fake pages with messages
function redirectToFake() {
    const messages = [
        "Hmm, that button didn't work! Try another.",
        "Nice try! But that's not how to get the grant.",
        "You're clicking buttons randomly. Maybe try reading the clues?",
        "This button leads to nowhere! The contact page is somewhere else.",
        "Congratulations, you found a fake button! Want a cookie?",
        "Remember: You're looking for something called 'Contact'... something..."
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}

// Puzzle solution check for FAQ
function solvePuzzle() {
    const userInput = document.getElementById('puzzle-input').value.toLowerCase().trim();
    const response = document.getElementById('puzzle-response');
    
    if (userInput === 'contact' || userInput === 'contact us') {
        response.innerHTML = `
            <span style="color: #28a745; font-weight: bold;">
                🎉 Correct! You're looking for the Contact page! 
                Try typing "contact.html" in the address bar...
            </span>
        `;
        response.style.padding = '1rem';
        response.style.backgroundColor = '#d4edda';
        response.style.borderRadius = '5px';
    } else {
        response.innerHTML = `
            <span style="color: #E74C3C; font-weight: bold;">
                Not quite! Think about what you do when you need to talk to a business...
            </span>
        `;
        response.style.padding = '1rem';
        response.style.backgroundColor = '#f8d7da';
        response.style.borderRadius = '5px';
    }
}

// Reveal hidden message on About page
function revealClue() {
    const message = document.getElementById('hidden-message');
    const reveals = [
        "The Contact page is literally just called 'contact.html'",
        "It's hidden because it's not in the main navigation menu",
        "You've been reading about CONTACT this whole time!",
        "Try: www.yoursite.com/contact.html",
        "Seriously, just type it in the URL bar"
    ];
    
    const randomReveal = reveals[Math.floor(Math.random() * reveals.length)];
    message.textContent = randomReveal;
    message.style.padding = '1rem';
    message.style.backgroundColor = '#fff3cd';
    message.style.borderRadius = '5px';
    message.style.color = '#856404';
    message.style.fontWeight = 'bold';
}

// Password protection (the password is "CONTACT")
function checkPassword() {
    const passwordInput = document.getElementById('password-input');
    const response = document.getElementById('password-response');
    const password = passwordInput.value.toUpperCase().trim();
    
    if (password === 'CONTACT') {
        response.innerHTML = `
            <div style="padding: 1rem; background-color: #d4edda; border-radius: 5px; color: #155724; font-weight: bold;">
                🔓 Unlocked! The contact page is at: <code style="background-color: #c3e6cb; padding: 0.2rem 0.5rem;">contact.html</code>
                <br><br>
                <a href="contact.html" style="color: #28a745; text-decoration: underline; font-size: 1.1rem;">Click here to go to Contact Us →</a>
            </div>
        `;
    } else {
        response.innerHTML = `
            <span style="color: #E74C3C; font-weight: bold;">
                Wrong password! Hint: It's the most mentioned word on this entire website...
            </span>
        `;
        response.style.padding = '1rem';
        response.style.backgroundColor = '#f8d7da';
        response.style.borderRadius = '5px';
    }
}

// Console messages with clues
console.log("%c🎯 GRANT CENTRAL PRANK WEBSITE 🎯", "color: #FFD700; font-size: 20px; font-weight: bold;");
console.log("%c", "font-size: 1px; padding: 100px 0;");
console.log("%cYou're looking for the Contact Us page to claim your prize!", "color: #667eea; font-size: 14px; font-weight: bold;");
console.log("%cHere are some hints to get you started:", "color: #28a745; font-size: 12px;");
console.log("%c✓ The Contact link is missing from the navigation menu", "color: #FF6B6B; font-size: 11px;");
console.log("%c✓ Check the page source code for hidden comments", "color: #FF6B6B; font-size: 11px;");
console.log("%c✓ The word 'CONTACT' appears throughout the site as a hint", "color: #FF6B6B; font-size: 11px;");
console.log("%c✓ Try typing 'contact.html' directly in the URL", "color: #FF6B6B; font-size: 11px;");
console.log("%c✓ Solve the puzzles on the About and FAQ pages", "color: #FF6B6B; font-size: 11px;");
console.log("%cGood luck! You've got this! 🚀", "color: #FFD700; font-size: 14px; font-weight: bold;");

// Add a fun easter egg: keyboard shortcut
document.addEventListener('keydown', function(e) {
    // Konami code: ↑ ↑ ↓ ↓ ← → ← → B A
    // Simplified: Ctrl+Shift+C for "CONTACT"
    if (e.ctrlKey && e.shiftKey && e.code === 'KeyC') {
        alert('🎉 Easter Egg Unlocked!\n\nYou found the keyboard shortcut!\nThe page you seek is: contact.html');
    }
});

// Periodically remind users they're looking for something
let reminderCount = 0;
function showReminder() {
    reminderCount++;
    if (reminderCount % 3 === 0) {
        console.log(`%c💭 Psst... You're still looking for the Contact page...`, "color: #FFD700; font-size: 12px;");
    }
}

// Initialize page interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for interactive elements
    const puzzleInput = document.getElementById('puzzle-input');
    if (puzzleInput) {
        puzzleInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                solvePuzzle();
            }
        });
    }

    const passwordInput = document.getElementById('password-input');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
    }

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Fun text effect: Change text on hover (Easter egg)
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('p, h3, li');
    elements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            if (Math.random() < 0.02) { // 2% chance
                const originalText = this.textContent;
                this.textContent = '🎭 (You almost made it!)';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 800);
            }
        });
    });
});
