const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = 'Light Mode';
}

themeToggle.addEventListener('click', function(e) {
    e.preventDefault();
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = 'Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = 'Dark Mode';
    }
});

function getTimeBasedGreeting() {
    const hour = new Date().getHours();
    const greeting = document.getElementById('greeting');
    let greetingText = '';
    
    if (hour < 12) {
        greetingText = 'Good Morning';
    } else if (hour < 18) {
        greetingText = 'Good Afternoon';
    } else {
        greetingText = 'Good Evening';
    }
    
    greeting.textContent = greetingText;
}

getTimeBasedGreeting();

function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const dateTimeString = now.toLocaleDateString('en-US', options);
    document.getElementById('dateTime').textContent = dateTimeString;
}

updateDateTime();

setInterval(updateDateTime, 1000);

const editJobBtn = document.getElementById('editJobBtn');
const jobTitle = document.getElementById('jobTitle');
const editJobForm = document.getElementById('editJobForm');
const jobInput = document.getElementById('jobInput');
const saveJobBtn = document.getElementById('saveJobBtn');
const cancelJobBtn = document.getElementById('cancelJobBtn');

const savedJobTitle = localStorage.getItem('jobTitle');
if (savedJobTitle) {
    jobTitle.textContent = savedJobTitle;
}

editJobBtn.addEventListener('click', function() {
    editJobForm.style.display = 'block';
    jobInput.value = jobTitle.textContent;
    jobInput.focus();
});

saveJobBtn.addEventListener('click', function() {
    const newJobTitle = jobInput.value.trim();
    if (newJobTitle) {
        jobTitle.textContent = newJobTitle;
        localStorage.setItem('jobTitle', newJobTitle);
        editJobForm.style.display = 'none';
    }
});

cancelJobBtn.addEventListener('click', function() {
    editJobForm.style.display = 'none';
});

const toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
const skillsContent = document.getElementById('skillsContent');
let skillsVisible = false;

toggleSkillsBtn.addEventListener('click', function(e) {
    e.preventDefault();
    skillsVisible = !skillsVisible;
    
    if (skillsVisible) {
        skillsContent.style.display = 'block';
        toggleSkillsBtn.textContent = '-';
    } else {
        skillsContent.style.display = 'none';
        toggleSkillsBtn.textContent = '+';
    }
});

const toggleExpBtn = document.getElementById('toggleExpBtn');
const expContent = document.getElementById('expContent');
let expVisible = false;

toggleExpBtn.addEventListener('click', function(e) {
    e.preventDefault();
    expVisible = !expVisible;
    
    if (expVisible) {
        expContent.style.display = 'block';
        toggleExpBtn.textContent = '-';
    } else {
        expContent.style.display = 'none';
        toggleExpBtn.textContent = '+';
    }
});

const messageInput = document.getElementById('messageInput');
const charCounter = document.getElementById('charCounter');

messageInput.addEventListener('input', function() {
    const currentLength = messageInput.value.length;
    charCounter.textContent = currentLength + ' / 500 characters';
});

const messageForm = document.getElementById('messageForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

messageForm.addEventListener('submit', function(e) {
   
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    
    let isValid = true;
    
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'The fields cannot be empty';
        isValid = false;
    }
    
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'The fields cannot be empty';
        isValid = false;
    } else if (!emailInput.value.includes('@')) {
        emailError.textContent = 'Please enter a valid email';
        isValid = false;
    }
    
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'The fields cannot be empty';
        isValid = false;
    }
    
    if (!isValid) {
        e.preventDefault();
    }
});
