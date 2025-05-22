const wordList = [
    "Star Wars", "Harry Potter", "Marvel", "Titanic", "Avatar", 
    "Matrix", "Jurassic Park", "Batman", "James Bond", "Herr der Ringe",
    "Inception", "Avengers", "Forrest Gump", "Joker", "Frozen",
    "Lion King", "Shrek", "Toy Story", "Finding Nemo", "Interstellar",
    "Minecraft", "Fortnite", "Mario", "Zelda", "Pokemon",
    "Call of Duty", "FIFA", "Grand Theft Auto", "Assassin's Creed", "The Witcher",
    "Overwatch", "League of Legends", "Tetris", "Skyrim", "Pac-Man",
    "Sonic", "Halo", "World of Warcraft", "Among Us", "Roblox",
    "Game of Thrones", "Breaking Bad", "Stranger Things", "Friends", "The Office",
    "The Simpsons", "The Walking Dead", "Black Mirror", "Squid Game", "Money Heist",
    "Bridgerton", "The Crown", "Sherlock", "Doctor Who", "Westworld",
    "Naruto", "Attack on Titan", "The Mandalorian", "The Big Bang Theory", "How I Met Your Mother",
    "The Hunger Games", "Percy Jackson", "Twilight", "The Hobbit", "Spider-Man",
    "Superman", "Wonder Woman", "The Witcher", "Dune", "1984",
    "The Little Prince", "Alice im Wunderland", "Pride and Prejudice", "Die Tribute von Panem", "Diary of a Wimpy Kid",
    "YouTube", "TikTok", "Instagram", "Twitter", "Spotify",
    "Netflix", "Disney+", "Amazon Prime", "Apple", "Google",
    "Lego", "Monopoly", "UNO", "Scrabble", "Jenga",
    "Fußball", "Basketball", "Tennis", "Schwimmen", "Laufen",
    "Pizza", "Burger", "Schokolade", "Eiscreme", "Popcorn"
];

const hints = {
    "Star Wars": ["Weltraum", "Lichtschwert", "Macht", "Jedi"],
    "Harry Potter": ["Zauberei", "Hogwarts", "Magie", "Zauberstab"],
    "Marvel": ["Superhelden", "Avengers", "Comics", "Iron Man"],
    "Titanic": ["Schiff", "Eisberg", "Untergang", "Ozean"],
    "Avatar": ["Blau", "Pandora", "Aliens", "Natur"],
    "Matrix": ["Simulation", "Rot oder Blau", "Realität", "Hacker"],
    "Jurassic Park": ["Dinosaurier", "Park", "T-Rex", "Fossilien"],
    "Batman": ["Fledermaus", "Gotham", "Dunkler Ritter", "Bruce Wayne"],
    "James Bond": ["Agent", "007", "Spion", "MI6"],
    "Herr der Ringe": ["Mittelerde", "Ring", "Hobbit", "Mordor"],
    "Inception": ["Traum", "Traumebene", "Realität", "Kreisel"],
    "Avengers": ["Superhelden", "Team", "Thanos", "Endgame"],
    "Forrest Gump": ["Laufen", "Schokolade", "Vietnam", "Geschichte"],
    "Joker": ["Bösewicht", "Clown", "Batman", "Lachen"],
    "Frozen": ["Eis", "Schnee", "Prinzessin", "Olaf"],
    "Lion King": ["Löwe", "Afrika", "Könige", "Tiere"],
    "Shrek": ["Oger", "Sumpf", "Esel", "Märchen"],
    "Toy Story": ["Spielzeug", "Woody", "Buzz", "Andy"],
    "Finding Nemo": ["Fisch", "Ozean", "Clownfisch", "Suche"],
    "Interstellar": ["Weltraum", "Zeit", "Schwarzes Loch", "Zukunft"],
    "Minecraft": ["Blöcke", "Bauen", "Creeper", "Überleben"],
    "Fortnite": ["Battle Royale", "Bauen", "Tänze", "Sturm"],
    "Mario": ["Pilze", "Prinzessin", "Klempner", "Röhren"],
    "Zelda": ["Link", "Hyrule", "Schwert", "Triforce"],
    "Pokemon": ["Monster", "Pikachu", "Trainer", "Pokeball"],
    "Call of Duty": ["Krieg", "Shooter", "Soldaten", "Waffen"],
    "FIFA": ["Fußball", "Sport", "EA Sports", "Teams"],
        "Assassin's Creed": ["Assassinen", "Geschichte", "Klingen", "Parkour"],
    "The Witcher": ["Monster", "Hexer", "Geralt", "Magie"],
    "Overwatch": ["Helden", "Teams", "Shooter", "Fähigkeiten"],
    "League of Legends": ["MOBA", "Champions", "Lanes", "Teams"],
    "Tetris": ["Blöcke", "Steine", "Reihen", "Puzzle"],
    "Skyrim": ["Drachen", "Nord", "Dovahkiin", "Skyrim"],
    "Pac-Man": ["Geister", "Labyrinth", "Punkte", "Gelb"],
    "Sonic": ["Igel", "Schnell", "Ringe", "Blau"],
    "Halo": ["Master Chief", "Aliens", "Spartaner", "Weltraum"],
    "World of Warcraft": ["MMORPG", "Allianz", "Horde", "Azeroth"],
    "Among Us": ["Verräter", "Raumschiff", "Aufgaben", "Astronauten"],
    "Roblox": ["Blöcke", "Plattform", "Minispiele", "Avatare"],
    "Game of Thrones": ["Drachen", "Winter", "Throne", "Familien"],
    "Breaking Bad": ["Drogen", "Chemie", "Lehrer", "Krebs"],
    "Stranger Things": ["80er", "Monster", "Kinder", "Upside Down"],
    "Friends": ["New York", "Café", "Freunde", "Sitcom"],
    "The Office": ["Büro", "Dunder Mifflin", "Mockumentary", "Arbeit"],
    "The Simpsons": ["Gelb", "Springfield", "Familie", "Zeichentrick"],
    "The Walking Dead": ["Zombies", "Überleben", "Apokalypse", "Rick"],
    "Black Mirror": ["Technologie", "Dystopie", "Zukunft", "Gesellschaft"],
    "Squid Game": ["Spiele", "Korea", "Überleben", "Geld"],
    "Money Heist": ["Bank", "Überfall", "Masken", "Professor"],
    "Bridgerton": ["Romantik", "Adel", "Regency", "Skandal"],
    "The Crown": ["Königin", "England", "Monarchie", "Elizabeth"],
    "Sherlock": ["Detektiv", "London", "Verbrechen", "Holmes"],
    "Doctor Who": ["Zeitreise", "Tardis", "Doktor", "Alien"],
    "Westworld": ["Roboter", "Park", "KI", "Western"],
    "Naruto": ["Ninja", "Chakra", "Japan", "Kämpfe"],
    "Attack on Titan": ["Titanen", "Mauern", "Militär", "Riesen"],
    "The Mandalorian": ["Star Wars", "Kopfgeldjäger", "Baby Yoda", "Weltall"],
    "The Big Bang Theory": ["Nerds", "Wissenschaft", "Physik", "Sitcom"],
    "How I Met Your Mother": ["New York", "Freunde", "Bar", "Romantik"],
    "The Hunger Games": ["Arena", "Überleben", "Tribut", "Distrikt"],
    "Percy Jackson": ["Götter", "Halbgott", "Mythologie", "Abenteuer"],
    "Twilight": ["Vampire", "Werwölfe", "Liebe", "Bella"],
    "The Hobbit": ["Zwerge", "Drache", "Schatz", "Reise"],
    "Spider-Man": ["Spinne", "New York", "Superheld", "Peter Parker"],
    "Superman": ["Kryptonit", "Held", "Journalist", "Clark Kent"],
    "Wonder Woman": ["Amazone", "Superheldin", "Lasso", "Diana"],
    "Dune": ["Wüste", "Spice", "Sandwürmer", "Arrakis"],
    "1984": ["Überwachung", "Big Brother", "Dystopie", "Gedankenpolizei"],
    "The Little Prince": ["Stern", "Rose", "Fuchs", "Reise"],
    "Alice im Wunderland": ["Kaninchen", "Tee", "Verrückt", "Königin"],
    "Pride and Prejudice": ["Liebe", "Hochzeit", "Klassiker", "Gesellschaft"],
    "Die Tribute von Panem": ["Arena", "Überlebenskampf", "Distrikte", "Revolution"],
    "Diary of a Wimpy Kid": ["Schule", "Tagebuch", "Kind", "Comic"],
    "YouTube": ["Videos", "Plattform", "Kanal", "Likes"],
    "TikTok": ["Kurzvideo", "Tanz", "Viral", "Trends"],
    "Instagram": ["Fotos", "Filter", "Stories", "Follower"],
    "Twitter": ["Tweets", "Vogel", "Kurznachrichten", "Hashtags"],
    "Spotify": ["Musik", "Streaming", "Playlists", "Grün"],
    "Netflix": ["Streaming", "Serien", "Filme", "Binge-Watching"],
    "Disney+": ["Mickey", "Marvel", "Star Wars", "Pixar"],
    "Amazon Prime": ["Streaming", "Lieferung", "Bezos", "Shopping"],
    "Apple": ["iPhone", "Mac", "Steve Jobs", "Technologie"],
    "Google": ["Suche", "Android", "Internet", "Chrome"],
    "Lego": ["Bausteine", "Konstruktion", "Figuren", "Spielzeug"],
    "Monopoly": ["Brettspiel", "Geld", "Immobilien", "Gefängnis"],
    "UNO": ["Kartenspiel", "Farben", "Zahlen", "Draw Four"],
    "Scrabble": ["Wörter", "Buchstaben", "Punkte", "Brettspiel"],
    "Jenga": ["Holz", "Turm", "Blöcke", "Balance"],
    "Fußball": ["Ball", "Tore", "Teams", "FIFA"],
    "Basketball": ["Korb", "NBA", "Spieler", "Dribbeln"],
    "Tennis": ["Schläger", "Ball", "Netz", "Grand Slam"],
    "Schwimmen": ["Wasser", "Bahnen", "Olympisch", "Schwimmbad"],
    "Laufen": ["Rennen", "Marathon", "Joggen", "Ausdauer"],
    "Pizza": ["Italien", "Käse", "Teig", "Belag"],
    "Burger": ["Fleisch", "Brötchen", "Fast Food", "Beilage"],
    "Schokolade": ["Süß", "Kakao", "Dessert", "Braun"],
    "Eiscreme": ["Kalt", "Sommer", "Waffel", "Geschmack"],
    "Popcorn": ["Kino", "Mais", "Snack", "Salzig"]
};

document.addEventListener('DOMContentLoaded', function() {
    const setupSection = document.getElementById('setupSection');
    const gameSection = document.getElementById('gameSection');
    const playerCountInput = document.getElementById('playerCount');
    const setPlayersBtn = document.getElementById('setPlayersBtn');
    const showHintsCheckbox = document.getElementById('showHintsCheckbox');
    const playerNamesSection = document.getElementById('playerNamesSection');
    const playerInputs = document.getElementById('playerInputs');
    const startGameBtn = document.getElementById('startGameBtn');
    const playerNameDisplay = document.getElementById('playerNameDisplay');
    const roleInfoBox = document.getElementById('roleInfoBox');
    const roleText = document.getElementById('roleText');
    const wordOrHintText = document.getElementById('wordOrHintText');
    const nextPlayerBtn = document.getElementById('nextPlayerBtn');
    const revealImpostorBtn = document.getElementById('revealImpostorBtn');
    const impostorRevealSection = document.getElementById('impostorRevealSection');
    const impostorsListContainer = document.getElementById('impostorsListContainer');
    const wordReveal = document.getElementById('wordReveal');
    const newGameBtn = document.getElementById('newGameBtn');
    const shieldCard = document.getElementById('shieldCard');
    const roleRevealContainer = document.getElementById('roleRevealContainer');
    const impostorCountSelect = document.getElementById('impostorCountSelect');
    const roleCard = document.getElementById('roleCard');
    
    let players = [];
    let currentPlayerIndex = 0;
    let selectedWord = '';
    let impostorIndices = [];
    let showHints = false;
    
    function getMaxImpostors(playerCount) {
        if (playerCount >= 3 && playerCount <= 4) {
            return 1;
        } else if (playerCount >= 5 && playerCount <= 6) {
            return 2;
        } else if (playerCount >= 7 && playerCount <= 10) {
            return 3;
        } else if (playerCount >= 11 && playerCount <= 15) {
            return 4;
        }
        return 0;
    }
    
    function updateImpostorDropdown(playerCount) {
        const maxImpostors = getMaxImpostors(playerCount);
        const currentValue = parseInt(impostorCountSelect.value) || 1;
        
        Array.from(impostorCountSelect.options).forEach((option, index) => {
            const value = parseInt(option.value);
            const disabled = value > maxImpostors;
            option.disabled = disabled;
            
            if (disabled) {
                option.style.color = "#999";
            } else {
                option.style.color = "";
            }
        });
        
        if (currentValue > maxImpostors) {
            impostorCountSelect.value = maxImpostors;
        }
    }
    
    playerCountInput.addEventListener('input', function() {
        const playerCount = parseInt(playerCountInput.value) || 0;
        updateImpostorDropdown(playerCount);
    });
    
    updateImpostorDropdown(parseInt(playerCountInput.value) || 5);
    
    const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];
    
    function getRandomIndices(max, count) {
        const indices = [];
        const available = Array.from({ length: max }, (_, i) => i);
        
        for (let i = 0; i < count && available.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * available.length);
            const selectedIndex = available.splice(randomIndex, 1)[0];
            indices.push(selectedIndex);
        }
        
        return indices;
    }
    function getRandomIndices(max, count) {
        const indices = [];
        const available = Array.from({ length: max }, (_, i) => i);
        
        for (let i = 0; i < count && available.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * available.length);
            const selectedIndex = available.splice(randomIndex, 1)[0];
            indices.push(selectedIndex);
        }
        
        return indices;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    setPlayersBtn.addEventListener('click', function() {
        const playerCount = parseInt(playerCountInput.value);
        
        if (playerCount < 3 || playerCount > 15) {
            alert('Bitte gib eine Anzahl zwischen 3 und 15 ein.');
            return;
        }
        
        updateImpostorDropdown(playerCount);
        
        playerInputs.innerHTML = '';
        for (let i = 0; i < playerCount; i++) {
            const inputDiv = document.createElement('div');
            inputDiv.innerHTML = `
                <label for="player${i}" class="block text-gray-700 mb-1">Spieler ${i+1}:</label>
                <input type="text" id="player${i}" class="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" value="Spieler ${i+1}">
            `;
            playerInputs.appendChild(inputDiv);
        }
        
        playerNamesSection.classList.remove('hidden');
    });
    
    startGameBtn.addEventListener('click', function() {
        players = [];
        const playerInputElements = playerInputs.querySelectorAll('input');
        playerInputElements.forEach(input => {
            players.push(input.value || input.id.replace('player', 'Spieler '));
        });

        shuffleArray(players);
        
        setupGame();
        
        setupSection.classList.add('hidden');
        gameSection.classList.remove('hidden');
    });
    
    function setupGame() {
        showHints = showHintsCheckbox.checked;
        selectedWord = getRandomItem(wordList);
        
        const impostorCount = parseInt(impostorCountSelect.value);
        
        const allIndices = players.map((_, idx) => idx);
        shuffleArray(allIndices);
        impostorIndices = allIndices.slice(0, impostorCount);
        
        currentPlayerIndex = 0;
        
        shieldCard.style.transform = 'translateY(0)';
        updatePlayerInfo();
        
        setTimeout(() => {
            shieldCard.classList.add('hint-slide-up');
            setTimeout(() => {
                shieldCard.classList.remove('hint-slide-up');
            }, 1500);
        }, 500);
        
        nextPlayerBtn.classList.remove('hidden');
        revealImpostorBtn.classList.add('hidden');
        impostorRevealSection.classList.add('hidden');
        
        initializeShieldDrag();
    }
    
    function updatePlayerInfo() {
        playerNameDisplay.textContent = players[currentPlayerIndex];
        
        const isImpostor = impostorIndices.includes(currentPlayerIndex);
        
        if (isImpostor) {
            roleText.textContent = "IMPOSTOR";
            roleInfoBox.classList.remove('bg-blue-100');
            roleInfoBox.classList.add('bg-red-100');
            
            if (showHints && hints[selectedWord]) {
                const randomHint = getRandomItem(hints[selectedWord]);
                wordOrHintText.textContent = `Hinweis: ${randomHint}`;
                wordOrHintText.classList.remove('hidden');
            } else {
                wordOrHintText.textContent = "Versuche herauszufinden, über welches Wort die anderen sprechen!";
                wordOrHintText.classList.remove('hidden');
            }
        } else {
            roleText.textContent = selectedWord;
            roleInfoBox.classList.remove('bg-red-100');
            roleInfoBox.classList.add('bg-blue-100');
            wordOrHintText.textContent = "";
            wordOrHintText.classList.add('hidden');
        }
    }
    
    function initializeShieldDrag() {
        let startY = 0;
        let currentY = 0;
        let isDragging = false;
        
        shieldCard.style.transform = 'translateY(0)';
        
        shieldCard.addEventListener('touchstart', startDrag, { passive: false });
        shieldCard.addEventListener('touchmove', drag, { passive: false });
        shieldCard.addEventListener('touchend', endDrag);
        
        shieldCard.addEventListener('mousedown', startDrag);
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', endDrag);
        
        function startDrag(e) {
            isDragging = true;
            shieldCard.style.cursor = 'grabbing';
            
            if (e.type === 'touchstart') {
                startY = e.touches[0].clientY;
            } else {
                startY = e.clientY;
                e.preventDefault();
            }
            
            const transform = window.getComputedStyle(shieldCard).getPropertyValue('transform');
            if (transform !== 'none') {
                const matrix = new DOMMatrixReadOnly(transform);
                currentY = matrix.m42;
            } else {
                currentY = 0;
            }
        }
        
        function drag(e) {
            if (!isDragging) return;
            
            let pointerY;
            if (e.type === 'touchmove') {
                pointerY = e.touches[0].clientY;
                e.preventDefault();
            } else {
                pointerY = e.clientY;
            }
            
            const deltaY = pointerY - startY;
            let newY = currentY + deltaY;
            
            newY = Math.min(0, Math.max(-roleRevealContainer.offsetHeight, newY));
            
            shieldCard.style.transform = `translateY(${newY}px)`;
        }
        
        function endDrag() {
            if (!isDragging) return;
            isDragging = false;
            shieldCard.style.cursor = 'grab';
            
            const transform = window.getComputedStyle(shieldCard).getPropertyValue('transform');
            const matrix = new DOMMatrixReadOnly(transform);
            const currentTransformY = matrix.m42;
            
            if (Math.abs(currentTransformY) > roleRevealContainer.offsetHeight / 2) {
                shieldCard.style.transform = `translateY(${-roleRevealContainer.offsetHeight}px)`;
                
                const successIndicator = document.createElement('div');
                successIndicator.className = 'absolute top-2 right-2 text-green-500 animate-pulse';
                successIndicator.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
                roleCard.appendChild(successIndicator);
                
                setTimeout(() => {
                    const indicators = roleCard.querySelectorAll('.text-green-500');
                    indicators.forEach(indicator => indicator.remove());
                }, 3000);
            } else {
                shieldCard.style.transform = 'translateY(0)';
            }
        }
    }
    
    nextPlayerBtn.addEventListener('click', function() {
        if (currentPlayerIndex < players.length - 1) {
            currentPlayerIndex++;
            updatePlayerInfo();
            shieldCard.classList.add('transition-none');
            shieldCard.style.transform = 'translateY(0)';
            void shieldCard.offsetWidth;
            shieldCard.classList.remove('transition-none');
            
            const indicators = roleCard.querySelectorAll('.text-green-500');
            indicators.forEach(indicator => indicator.remove());
            
            setTimeout(() => {
                shieldCard.classList.add('hint-slide-up');
                setTimeout(() => {
                    shieldCard.classList.remove('hint-slide-up');
                }, 1500);
            }, 300);
        } else {
            nextPlayerBtn.classList.add('hidden');
            revealImpostorBtn.classList.remove('hidden');
        }
    });
    
    revealImpostorBtn.addEventListener('click', function() {
        impostorsListContainer.innerHTML = '';
        
        impostorIndices.forEach(index => {
            const listItem = document.createElement('li');
            listItem.className = 'font-bold text-red-700 text-xl';
            listItem.textContent = players[index];
            impostorsListContainer.appendChild(listItem);
        });
        
        wordReveal.textContent = selectedWord;
        impostorRevealSection.classList.remove('hidden');
        revealImpostorBtn.classList.add('hidden');
    });
    
    newGameBtn.addEventListener('click', function() {
        gameSection.classList.add('hidden');
        setupSection.classList.remove('hidden');
        playerNamesSection.classList.add('hidden');
    });
});
