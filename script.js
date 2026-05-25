/**
 * Futuristic Cyberpunk Portfolio Interactions
 * Portfolio: Sravan Shankar P (Software Developer)
 */

document.addEventListener('DOMContentLoaded', () => {
  initMouseGlow();
  initTypingEffect();
  initSkillProgressAnimation();
  initTerminalSimulation();
  initMobileMenu();
});

/**
 * 1. Mouse coordinates tracker for dynamic background radial glow
 */
function initMouseGlow() {
  const glowBg = document.getElementById('mouse-glow');
  
  if (!glowBg) return;

  // Utilize requestAnimationFrame for ultra-smooth 60fps performance without layout thrashing
  let ticking = false;

  window.addEventListener('mousemove', (e) => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        glowBg.style.setProperty('--mouse-x', `${e.clientX}px`);
        glowBg.style.setProperty('--mouse-y', `${e.clientY}px`);
        ticking = false;
      });
      ticking = true;
    }
  });
}

/**
 * 2. Typing/De-typing Cursor animation in Hero Section
 */
function initTypingEffect() {
  const typingTextSpan = document.getElementById('typing-text');
  if (!typingTextSpan) return;

  const roles = [
    'SOFTWARE DEVELOPER',
    'BACKEND SYSTEM ARCHITECT',
    'AI/ML PRACTITIONER',
    'CYBER SECURITY ENTHUSIAST'
  ];
  
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      // Deleting characters
      typingTextSpan.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // Deletes faster than typing
    } else {
      // Typing characters
      typingTextSpan.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 120; // Natural typing pace
    }

    // Checking states
    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at full text
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      // Cycle to next role
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500; // Pause before typing next word
    }

    setTimeout(type, typingSpeed);
  }

  // Trigger initial typing
  setTimeout(type, 1000);
}

/**
 * 3. Animated Skill Meters using IntersectionObserver
 */
function initSkillProgressAnimation() {
  const skillCards = document.querySelectorAll('.skill-card');
  
  if (skillCards.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Trigger when 15% of the card is visible
  };

  const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const targetPercent = card.getAttribute('data-percentage');
        const fillBar = card.querySelector('.skill-bar-fill');
        
        if (fillBar && targetPercent) {
          fillBar.style.width = `${targetPercent}%`;
        }
        
        // Once animated, stop observing this specific card
        observer.unobserve(card);
      }
    });
  }, observerOptions);

  skillCards.forEach(card => skillObserver.observe(card));
}

/**
 * 4. Interactive Terminal Console Simulator in Footer
 */
function initTerminalSimulation() {
  const terminalContent = document.getElementById('terminal-interactive-content');
  if (!terminalContent) return;

  const systemLogs = [
    'Connection request: incoming from localhost...',
    'Establishing SSH session over secure SSL tunnel... Done.',
    'System diagnostic check: CPU 12%, MEMORY 48%, STACK: Stable.',
    'API request received: Fetch portfolio details.',
    'Querying experience data indices... 1 record found.',
    'Querying project portfolio records... 1 active project found.',
    'Querying academic records... Bachelor Degree - BCA, Srinivas University.',
    'Status report generated. Port 8000 ready for routing commands.',
    'Listening for user connection details...'
  ];

  let logIndex = 0;

  function printNextLog() {
    if (logIndex < systemLogs.length) {
      // Create a new line element for terminal logs
      const logLine = document.createElement('div');
      logLine.classList.add('terminal-line-code');
      logLine.textContent = `> ${systemLogs[logIndex]}`;
      
      // Insert before the prompt line
      terminalContent.parentElement.before(logLine);
      
      logIndex++;
      
      // Auto scroll terminal body if it exceeds standard container
      const terminalBody = document.querySelector('.terminal-body');
      if (terminalBody) {
        terminalBody.scrollTop = terminalBody.scrollHeight;
      }
      
      // Custom variable delay for realistic typing speeds
      setTimeout(printNextLog, Math.random() * 2000 + 1500);
    }
  }

  // Delay the starting boot messages to simulate page load complete
  setTimeout(printNextLog, 3000);
}

/**
 * 5. Mobile responsive navigation toggle drawer
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('active');
    
    // Animate button representation
    toggleBtn.classList.toggle('open');
  });

  // Close navigation menu when a link is clicked
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      toggleBtn.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}
