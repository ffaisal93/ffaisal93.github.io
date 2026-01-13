// Configuration
const DEFAULT_API_URL = 'https://ml-meal-prep-api-production.up.railway.app';

// Get or create user ID (stored in localStorage for persistence)
function getUserId() {
    let userId = localStorage.getItem('mealPlannerUserId');
    if (!userId) {
        // Generate a unique user ID
        userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('mealPlannerUserId', userId);
    }
    return userId;
}

// Get API URL from input or use default
function getApiUrl() {
    const apiUrlInput = document.getElementById('apiUrl');
    const url = apiUrlInput.value.trim();
    return url || DEFAULT_API_URL;
}

// Set example query
function setExample(query) {
    document.getElementById('queryInput').value = query;
    document.getElementById('queryInput').focus();
}

// Generate meal plan
async function generateMealPlan() {
    const queryInput = document.getElementById('queryInput');
    const query = queryInput.value.trim();
    const btn = document.getElementById('generateBtn');
    const btnText = document.getElementById('btnText');
    const btnLoader = document.getElementById('btnLoader');
    const errorMessage = document.getElementById('errorMessage');
    const results = document.getElementById('results');

    // Validate input
    if (!query) {
        showError('Please enter a meal plan request');
        return;
    }

    // Show loading state
    btn.disabled = true;
    btnText.textContent = 'Generating...';
    btnLoader.style.display = 'block';
    errorMessage.style.display = 'none';
    results.style.display = 'none';

    try {
        const apiUrl = getApiUrl();
        const userId = getUserId(); // Get user ID for preference tracking
        const response = await fetch(`${apiUrl}/api/generate-meal-plan`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                query: query,
                user_id: userId  // Include user_id to save preferences
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.detail || error.error || 'Failed to generate meal plan');
        }

        const data = await response.json();
        displayResults(data);
        
        // Refresh history and suggestions after generating
        await loadUserPreferences();
        if (document.getElementById('historySection').style.display !== 'none') {
            await loadHistory();
        }

    } catch (error) {
        console.error('Error:', error);
        showError(error.message || 'Failed to generate meal plan. Please check your API URL and try again.');
    } finally {
        // Reset button state
        btn.disabled = false;
        btnText.textContent = 'Generate Meal Plan';
        btnLoader.style.display = 'none';
    }
}

// Display results
function displayResults(data) {
    const results = document.getElementById('results');
    results.style.display = 'block';

    // Update summary
    document.getElementById('summaryDuration').textContent = `${data.duration_days} days`;
    document.getElementById('summaryMeals').textContent = data.summary.total_meals;
    document.getElementById('summaryCost').textContent = data.summary.estimated_cost;
    document.getElementById('summaryTime').textContent = data.summary.avg_prep_time;

    // Update compliance tags
    const complianceTags = document.getElementById('complianceTags');
    complianceTags.innerHTML = '';
    data.summary.dietary_compliance.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.className = 'compliance-tag';
        tagEl.textContent = tag;
        complianceTags.appendChild(tagEl);
    });

    // Display meal plan days
    const mealPlanDays = document.getElementById('mealPlanDays');
    mealPlanDays.innerHTML = '';

    data.meal_plan.forEach(day => {
        const dayCard = createDayCard(day);
        mealPlanDays.appendChild(dayCard);
    });

    // Scroll to results
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Create day card
function createDayCard(day) {
    const dayCard = document.createElement('div');
    dayCard.className = 'day-card';

    const dayHeader = document.createElement('div');
    dayHeader.className = 'day-header';
    dayHeader.innerHTML = `
        <div>
            <div class="day-title">Day ${day.day}</div>
            <div class="day-date">${formatDate(day.date)}</div>
        </div>
    `;

    const mealsContainer = document.createElement('div');
    mealsContainer.className = 'meals-container';

    day.meals.forEach(meal => {
        const mealCard = createMealCard(meal);
        mealsContainer.appendChild(mealCard);
    });

    dayCard.appendChild(dayHeader);
    dayCard.appendChild(mealsContainer);

    return dayCard;
}

// Create meal card
function createMealCard(meal) {
    const mealCard = document.createElement('div');
    mealCard.className = 'meal-card';

    const mealHeader = document.createElement('div');
    mealHeader.className = 'meal-header';
    mealHeader.innerHTML = `
        <span class="meal-type">${meal.meal_type}</span>
        <span style="color: var(--text-secondary); font-size: 0.9rem;">${meal.preparation_time}</span>
    `;

    const mealName = document.createElement('div');
    mealName.className = 'meal-name';
    mealName.textContent = meal.recipe_name;

    const mealDescription = document.createElement('div');
    mealDescription.className = 'meal-description';
    mealDescription.textContent = meal.description;

    const mealDetails = document.createElement('div');
    mealDetails.className = 'meal-details';

    // Ingredients
    const ingredientsSection = document.createElement('div');
    ingredientsSection.className = 'detail-section';
    ingredientsSection.innerHTML = `
        <h4>Ingredients</h4>
        <ul>
            ${meal.ingredients.map(ing => `<li>${ing}</li>`).join('')}
        </ul>
    `;

    // Nutrition
    const nutritionSection = document.createElement('div');
    nutritionSection.className = 'detail-section';
    const nutrition = meal.nutritional_info;
    nutritionSection.innerHTML = `
        <h4>Nutrition (per serving)</h4>
        <div class="nutrition-grid">
            <div class="nutrition-item">
                <div class="nutrition-value">${nutrition.calories}</div>
                <div class="nutrition-label">Calories</div>
            </div>
            <div class="nutrition-item">
                <div class="nutrition-value">${nutrition.protein}g</div>
                <div class="nutrition-label">Protein</div>
            </div>
            <div class="nutrition-item">
                <div class="nutrition-value">${nutrition.carbs}g</div>
                <div class="nutrition-label">Carbs</div>
            </div>
            <div class="nutrition-item">
                <div class="nutrition-value">${nutrition.fat}g</div>
                <div class="nutrition-label">Fat</div>
            </div>
        </div>
    `;

    mealDetails.appendChild(ingredientsSection);
    mealDetails.appendChild(nutritionSection);

    // Instructions
    const instructions = document.createElement('div');
    instructions.className = 'instructions';
    instructions.innerHTML = `
        <h4>Instructions</h4>
        <p>${meal.instructions}</p>
    `;

    mealCard.appendChild(mealHeader);
    mealCard.appendChild(mealName);
    mealCard.appendChild(mealDescription);
    mealCard.appendChild(mealDetails);
    mealCard.appendChild(instructions);

    return mealCard;
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Show error
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Open API docs
function openApiDocs() {
    const apiUrl = getApiUrl();
    window.open(`${apiUrl}/docs`, '_blank');
}

// Allow Enter key to submit (but not Shift+Enter)
document.getElementById('queryInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        generateMealPlan();
    }
});

// Auto-detect Railway URL from current page (if deployed on same domain)
if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    // If on GitHub Pages, use saved URL or default to Railway URL
    const savedApiUrl = localStorage.getItem('mealPlannerApiUrl');
    const apiUrlInput = document.getElementById('apiUrl');
    if (savedApiUrl) {
        apiUrlInput.value = savedApiUrl;
    } else {
        // Set default Railway URL if not saved
        apiUrlInput.value = DEFAULT_API_URL;
        localStorage.setItem('mealPlannerApiUrl', DEFAULT_API_URL);
    }
}

// Load user preferences on page load for smart defaults
window.addEventListener('DOMContentLoaded', async () => {
    await loadUserPreferences();
});

// Fetch user preferences from API
async function loadUserPreferences() {
    try {
        const apiUrl = getApiUrl();
        const userId = getUserId();
        console.log('Loading preferences for user:', userId);
        
        const response = await fetch(`${apiUrl}/api/user/${userId}/preferences?limit=10`);
        console.log('API Response status:', response.status);
        
        if (response.ok) {
            const data = await response.json();
            console.log('Preferences data:', data);
            
            if (data.count > 0) {
                console.log('Found', data.count, 'preferences, showing suggestions');
                // Show smart suggestions
                showSmartSuggestions(data.preferences);
                // Pre-fill form with last preferences
                prefillForm(data.preferences[0]);
            } else {
                console.log('No preferences found (count is 0)');
            }
        } else {
            const errorText = await response.text();
            console.error('API Error:', response.status, errorText);
        }
    } catch (error) {
        console.error('Could not load preferences:', error);
        // Silently fail - not critical
    }
}

// Show smart suggestions based on history
function showSmartSuggestions(preferences) {
    console.log('showSmartSuggestions called with:', preferences);
    if (preferences.length === 0) {
        console.log('No preferences to show');
        return;
    }
    
    const suggestionsDiv = document.getElementById('smartSuggestions');
    const chipsDiv = document.getElementById('suggestionChips');
    
    if (!suggestionsDiv || !chipsDiv) {
        console.error('Could not find smartSuggestions or suggestionChips elements');
        return;
    }
    
    chipsDiv.innerHTML = '';
    
    // Get last query for regenerate (always use most recent)
    const lastPref = preferences[0];
    const suggestions = [];
    
    // Analyze last 2-3 queries for common patterns
    const recentPrefs = preferences.slice(0, Math.min(3, preferences.length));
    
    // Collect all dietary restrictions from recent queries
    const allRestrictions = [];
    recentPrefs.forEach(pref => {
        if (pref.dietary_restrictions && pref.dietary_restrictions.length > 0) {
            allRestrictions.push(...pref.dietary_restrictions);
        }
    });
    
    // Find most common restrictions (appear in 2+ queries)
    const restrictionCounts = {};
    allRestrictions.forEach(restriction => {
        restrictionCounts[restriction] = (restrictionCounts[restriction] || 0) + 1;
    });
    
    const commonRestrictions = Object.keys(restrictionCounts)
        .filter(r => restrictionCounts[r] >= 2)
        .sort((a, b) => restrictionCounts[b] - restrictionCounts[a]);
    
    // If no common restrictions, use the most recent one
    if (commonRestrictions.length > 0) {
        const restrictions = commonRestrictions.slice(0, 2).join(', '); // Max 2 for readability
        suggestions.push(`Create a meal plan (${restrictions})`);
    } else if (lastPref.dietary_restrictions && lastPref.dietary_restrictions.length > 0) {
        const restrictions = lastPref.dietary_restrictions.join(', ');
        suggestions.push(`Create a meal plan (${restrictions})`);
    }
    
    // Collect all preferences from recent queries
    const allPreferences = [];
    recentPrefs.forEach(pref => {
        if (pref.preferences && pref.preferences.length > 0) {
            allPreferences.push(...pref.preferences);
        }
    });
    
    // Find most common preferences (appear in 2+ queries)
    const preferenceCounts = {};
    allPreferences.forEach(pref => {
        preferenceCounts[pref] = (preferenceCounts[pref] || 0) + 1;
    });
    
    const commonPreferences = Object.keys(preferenceCounts)
        .filter(p => preferenceCounts[p] >= 2)
        .sort((a, b) => preferenceCounts[b] - preferenceCounts[a]);
    
    // If no common preferences, use the most recent one
    if (commonPreferences.length > 0) {
        const prefs = commonPreferences.slice(0, 2).join(', '); // Max 2 for readability
        suggestions.push(`Generate ${prefs} meal plan`);
    } else if (lastPref.preferences && lastPref.preferences.length > 0) {
        const prefs = lastPref.preferences.join(', ');
        suggestions.push(`Generate ${prefs} meal plan`);
    }
    
    // Add "Regenerate last" option (always based on most recent)
    if (lastPref.query) {
        suggestions.push(`Regenerate: ${lastPref.query.substring(0, 50)}...`);
    }
    
    if (suggestions.length > 0) {
        suggestions.forEach(suggestion => {
            const chip = document.createElement('button');
            chip.className = 'chip suggestion-chip';
            chip.textContent = suggestion;
            chip.onclick = () => {
                if (suggestion.startsWith('Regenerate:')) {
                    regenerateMealPlan(lastPref);
                } else {
                    setExample(suggestion);
                }
            };
            chipsDiv.appendChild(chip);
        });
        suggestionsDiv.style.display = 'block';
    }
}

// Pre-fill form with last preferences
function prefillForm(lastPreference) {
    if (!lastPreference) return;
    
    const queryInput = document.getElementById('queryInput');
    // Don't auto-fill, but show placeholder hint
    if (!queryInput.value) {
        // Could pre-fill, but let's just show a hint
        // queryInput.placeholder = `Last: ${lastPreference.query.substring(0, 60)}...`;
    }
}

// Toggle history section
function toggleHistory() {
    const historySection = document.getElementById('historySection');
    const toggleBtn = document.getElementById('toggleHistoryBtn');
    const viewLink = document.getElementById('viewHistoryLink');
    
    if (historySection.style.display === 'none') {
        loadHistory();
        historySection.style.display = 'block';
        toggleBtn.textContent = 'Hide History';
        viewLink.textContent = 'Hide My Meal Plans';
    } else {
        historySection.style.display = 'none';
        toggleBtn.textContent = 'Show History';
        viewLink.textContent = 'View My Meal Plans';
    }
}

// Load and display user history
async function loadHistory() {
    try {
        const apiUrl = getApiUrl();
        const userId = getUserId();
        const response = await fetch(`${apiUrl}/api/user/${userId}/preferences?limit=20`);
        
        if (!response.ok) {
            throw new Error('Failed to load history');
        }
        
        const data = await response.json();
        displayHistory(data.preferences);
    } catch (error) {
        console.error('Error loading history:', error);
        document.getElementById('historyContent').innerHTML = 
            '<p class="error-text">Failed to load meal plan history. Please try again later.</p>';
    }
}

// Display history in UI
function displayHistory(preferences) {
    const historyContent = document.getElementById('historyContent');
    
    if (preferences.length === 0) {
        historyContent.innerHTML = '<p class="empty-state">No meal plans yet. Generate your first meal plan!</p>';
        return;
    }
    
    historyContent.innerHTML = '';
    
    preferences.forEach((pref, index) => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        
        const date = new Date(pref.created_at);
        const dateStr = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        const tags = [];
        if (pref.dietary_restrictions && pref.dietary_restrictions.length > 0) {
            pref.dietary_restrictions.forEach(r => tags.push(`<span class="history-tag restriction">${r}</span>`));
        }
        if (pref.preferences && pref.preferences.length > 0) {
            pref.preferences.forEach(p => tags.push(`<span class="history-tag preference">${p}</span>`));
        }
        
        // Store preference in data attribute
        historyItem.setAttribute('data-preference', JSON.stringify(pref));
        
        historyItem.innerHTML = `
            <div class="history-item-header">
                <div class="history-item-date">${dateStr}</div>
                <button class="btn-regenerate" data-index="${index}">
                    🔄 Regenerate
                </button>
            </div>
            <div class="history-item-query">${pref.query}</div>
            <div class="history-item-tags">${tags.join('')}</div>
        `;
        
        // Add click handler for regenerate button
        const regenerateBtn = historyItem.querySelector('.btn-regenerate');
        regenerateBtn.addEventListener('click', () => {
            regenerateMealPlan(pref);
        });
        
        historyContent.appendChild(historyItem);
    });
}

// Regenerate a meal plan from history
function regenerateMealPlan(preference) {
    // Set the query input
    document.getElementById('queryInput').value = preference.query;
    
    // Scroll to input
    document.getElementById('queryInput').scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Focus and highlight
    const input = document.getElementById('queryInput');
    input.focus();
    input.select();
    
    // Optionally auto-generate (commented out - user can click generate)
    // Uncomment the line below if you want auto-generation
    // generateMealPlan();
}

// Save API URL when changed
document.getElementById('apiUrl').addEventListener('change', (e) => {
    localStorage.setItem('mealPlannerApiUrl', e.target.value);
});

