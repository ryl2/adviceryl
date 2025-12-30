// Life Advice Guide - Main JavaScript with Enhanced Features

// DOM Elements
const searchInput = document.getElementById('search-input');
const themeToggle = document.getElementById('theme-toggle');
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav');
const body = document.body;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadThemePreference();
  initializeEventListeners();
  loadDailyAdvice();
  setupMoodSelector();
});

// Event Listeners
function initializeEventListeners() {
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }

  // Close menu when clicking on a link
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && !e.target.closest('.menu-toggle')) {
      closeMenu();
    }
  });
}

// Theme Toggle
function toggleTheme() {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  updateThemeToggleIcon();
}

function loadThemePreference() {
  const theme = localStorage.getItem('theme') || 'light';
  if (theme === 'dark') {
    body.classList.add('dark-mode');
  }
  updateThemeToggleIcon();
}

function updateThemeToggleIcon() {
  const icon = themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// Menu Toggle
function toggleMenu() {
  const navLinks = document.querySelector('nav ul');
  if (navLinks) {
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
  }
}

function closeMenu() {
  const navLinks = document.querySelector('nav ul');
  if (navLinks) {
    navLinks.style.display = 'none';
  }
}

// Search Functionality
function handleSearch() {
  const query = searchInput.value.trim();
  
  if (query.length === 0) {
    const container = document.querySelector('.container');
    if (container && container.classList.contains('search-active')) {
      location.href = '/advice/index.html';
    }
    return;
  }

  const results = searchAdvice(query);
  displaySearchResults(results, query);
}

function displaySearchResults(results, query) {
  const mainContent = document.querySelector('.categories-grid') || 
                      document.querySelector('.advice-list') ||
                      document.querySelector('.random-advice-widget')?.parentElement;

  if (!mainContent) return;

  let html = `
    <div class="search-results" style="grid-column: 1 / -1;">
      <div class="search-results-header">
        <h2>Search Results</h2>
        <p class="results-count">Found ${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"</p>
      </div>
      ${results.length === 0 ? `
        <div class="no-results">
          <div class="no-results-emoji">🔍</div>
          <h3>No results found</h3>
          <p>Try searching for different keywords</p>
        </div>
      ` : `
        <div class="advice-list">
          ${results.map(result => `
            <div class="result-item">
              <span class="result-category">${result.categoryEmoji} ${result.categoryTitle}</span>
              <h3>${result.title}</h3>
              <p><strong>Problem:</strong> ${result.problem}</p>
              <p>${result.description}</p>
              <a href="/advice/pages/${result.categoryId}.html" class="back-btn" style="display: inline-block; margin-top: 1rem;">
                View Full Guide →
              </a>
            </div>
          `).join('')}
        </div>
      `}
    </div>
  `;

  mainContent.innerHTML = html;
  document.querySelector('.container').classList.add('search-active');
}

function clearSearch() {
  if (searchInput) {
    searchInput.value = '';
    const searchResults = document.querySelector('.search-results');
    if (searchResults) {
      searchResults.remove();
      document.querySelector('.container').classList.remove('search-active');
    }
  }
}

// Mood Selector (Home Page Feature)
function setupMoodSelector() {
  const moodBtn = document.getElementById('mood-btn');
  if (!moodBtn) return;

  moodBtn.addEventListener('click', () => {
    const moods = ['anxious', 'stressed', 'lonely', 'unmotivated', 'lost', 'overwhelmed', 'inadequate', 'sad'];
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    displayMoodSuggestions(randomMood);
  });
}

function displayMoodSuggestions(mood) {
  const suggestionsContainer = document.getElementById('mood-suggestions');
  if (!suggestionsContainer) return;

  const suggestions = getSuggestedCategories(mood);
  const moodEmojis = {
    anxious: '😰',
    stressed: '😣',
    lonely: '😔',
    unmotivated: '😑',
    lost: '🥺',
    overwhelmed: '😵',
    inadequate: '😟',
    sad: '😢'
  };

  suggestionsContainer.innerHTML = `
    <div class="mood-response">
      <p style="font-size: 3rem; margin-bottom: 1rem;">${moodEmojis[mood]}</p>
      <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">Feeling <strong>${mood}</strong>? Here are some guides that might help:</p>
      <div style="display: grid; gap: 1rem;">
        ${suggestions.map(cat => `
          <a href="/advice/pages/${cat.id}.html" class="mood-suggestion-card">
            <span style="font-size: 2rem;">${cat.emoji}</span>
            <span>${cat.title}</span>
            →
          </a>
        `).join('')}
      </div>
    </div>
  `;
}

// Category Navigation
function navigateToCategory(categoryId) {
  window.location.href = `/advice/pages/${categoryId}.html`;
}

// Collapsible Advice Items
function setupCollapsibleItems() {
  const titles = document.querySelectorAll('.advice-title');
  
  titles.forEach(title => {
    title.addEventListener('click', (e) => {
      e.stopPropagation();
      const article = title.closest('.advice-item');
      if (!article) return;
      
      const content = article.querySelector('.advice-content');
      if (!content) return;
      
      const isCollapsed = article.classList.contains('collapsed');
      
      if (isCollapsed) {
        // Expand
        article.classList.remove('collapsed');
        article.classList.add('expanded');
        content.hidden = false;
        title.setAttribute('aria-expanded', 'true');
        if (title.querySelector('.collapse-icon')) {
          title.querySelector('.collapse-icon').style.transform = 'rotate(90deg)';
        }
      } else {
        // Collapse
        article.classList.add('collapsed');
        article.classList.remove('expanded');
        content.hidden = true;
        title.setAttribute('aria-expanded', 'false');
        if (title.querySelector('.collapse-icon')) {
          title.querySelector('.collapse-icon').style.transform = 'rotate(0deg)';
        }
      }
    });
    
    // Keyboard support
    title.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        title.click();
      }
    });
  });
}

// Bookmarking Functionality
function setupBookmarking() {
  const items = document.querySelectorAll('.advice-item');
  
  items.forEach((item, index) => {
    const categoryId = getCategoryIdFromUrl();
    const itemId = index + 1;
    
    const title = item.querySelector('.advice-title');
    if (title) {
      const bookmarkBtn = document.createElement('button');
      bookmarkBtn.className = 'bookmark-btn';
      bookmarkBtn.setAttribute('data-category', categoryId);
      bookmarkBtn.setAttribute('data-item', itemId);
      bookmarkBtn.title = 'Bookmark this advice';
      
      updateBookmarkButton(bookmarkBtn, categoryId, itemId);
      
      bookmarkBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleBookmark(categoryId, itemId, bookmarkBtn);
      });
      
      title.appendChild(bookmarkBtn);
    }
  });
}

function toggleBookmark(categoryId, itemId, button) {
  if (isBookmarked(categoryId, itemId)) {
    removeBookmark(categoryId, itemId);
  } else {
    saveBookmark(categoryId, itemId);
  }
  updateBookmarkButton(button, categoryId, itemId);
}

function updateBookmarkButton(button, categoryId, itemId) {
  if (isBookmarked(categoryId, itemId)) {
    button.textContent = '🔖';
    button.classList.add('bookmarked');
  } else {
    button.textContent = '🔗';
    button.classList.remove('bookmarked');
  }
}

// Random Daily Advice
function getRandomAdvice() {
  const categories = Object.values(adviceData);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomAdvice = randomCategory.advice[Math.floor(Math.random() * randomCategory.advice.length)];
  
  return {
    title: randomAdvice.title,
    description: randomAdvice.description,
    emoji: randomCategory.emoji
  };
}

function loadDailyAdvice() {
  const randomBtn = document.getElementById('random-btn');
  const randomContent = document.getElementById('random-content');
  
  if (randomBtn && randomContent) {
    displayRandomAdvice();
    randomBtn.addEventListener('click', displayRandomAdvice);
  }
}

function displayRandomAdvice() {
  const randomContent = document.getElementById('random-content');
  const advice = getRandomAdvice();
  
  randomContent.innerHTML = `
    <div class="random-advice-content">
      <p style="font-size: 2rem; margin-bottom: 1rem;">${advice.emoji}</p>
      <div class="random-advice-title">${advice.title}</div>
      <div class="random-advice-text">${advice.description}</div>
    </div>
  `;
}

// Progress Tracker (localStorage)
function saveProgress(categoryId, itemId) {
  const progress = JSON.parse(localStorage.getItem('progress')) || {};
  
  if (!progress[categoryId]) {
    progress[categoryId] = [];
  }
  
  if (!progress[categoryId].includes(itemId)) {
    progress[categoryId].push(itemId);
  }
  
  localStorage.setItem('progress', JSON.stringify(progress));
  updateProgressDisplay();
}

function getProgress() {
  return JSON.parse(localStorage.getItem('progress')) || {};
}

function updateProgressDisplay() {
  const progress = getProgress();
  const totalCompleted = Object.values(progress).reduce((sum, items) => sum + items.length, 0);
  
  const progressElement = document.getElementById('progress-display');
  if (progressElement) {
    progressElement.textContent = `📊 Progress: ${totalCompleted} advice items read`;
  }
}

// Add progress tracking to advice items
function setupProgressTracking() {
  const items = document.querySelectorAll('.advice-item');
  
  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      const categoryId = getCategoryIdFromUrl();
      if (!item.classList.contains('collapsed')) {
        saveProgress(categoryId, index + 1);
      }
    });
  });
}

function getCategoryIdFromUrl() {
  const path = window.location.pathname;
  const match = path.match(/\/pages\/([^.]+)\.html/);
  return match ? match[1] : 'unknown';
}

// Initialize collapsible items when page loads
document.addEventListener('DOMContentLoaded', () => {
  setupCollapsibleItems();
  setupProgressTracking();
  setupBookmarking();
  updateProgressDisplay();
});

// Category card click handler
function setupCategoryCards() {
  const cards = document.querySelectorAll('.category-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const categoryId = card.getAttribute('data-category');
      navigateToCategory(categoryId);
    });
  });
}

document.addEventListener('DOMContentLoaded', setupCategoryCards);
