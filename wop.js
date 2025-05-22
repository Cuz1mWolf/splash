const truthQuestions = [
    "Was war dein peinlichster Moment?",
    "Was ist dein größtes Geheimnis?",
    "Wann hast du das letzte Mal gelogen und warum?",
    "Wen findest du in diesem Raum am attraktivsten?",
    "Was ist deine größte Angst?",
    "Welchen Promi findest du am attraktivsten?",
    "Was ist das Verrückteste, was du je getan hast?",
    "Was würdest du ändern, wenn du einen Tag lang jemand anderes sein könntest?",
    "Welchen deiner Freunde findest du am nervigsten?",
    "Was ist dein peinlichstes Erlebnis in der Schule/Arbeit?",
    "Welches Geheimnis hast du noch nie jemandem erzählt?",
    "Hast du schon einmal etwas gestohlen?",
    "Was war dein letzter Traum, an den du dich erinnern kannst?",
    "Was ist dein größter Fehler?",
    "Wenn du eine Superkraft haben könntest, welche wäre das?",
    "Was ist deine schlimmste Angewohnheit?",
    "Welche Person beeinflusst dich am meisten?",
    "Worauf bist du am stolzesten?",
    "Was war dein erster Eindruck von der Person rechts von dir?",
    "Wenn du nur noch einen Tag zu leben hättest, was würdest du tun?",
    "Was ist das Seltsamste, was du je gegessen hast?",
    "Welches Geheimnis hast du vor deinen Eltern?",
    "Was war der beste Tag deines Lebens?",
    "Wenn du eine Sache an dir ändern könntest, was wäre das?",
    "Was ist die dümmste Sache, die du je getan hast?",
    "Was war dein schlimmster Streit?",
    "Welches Lied beschreibt dein Leben am besten?",
    "Was war dein peinlichstes Date?",
    "Wenn du jemanden im Raum küssen müsstest, wer wäre es?",
    "Was ist die verrückteste Sache, die du dir je gewünscht hast?"
];

const dareActions = [
    "Tanze für 30 Sekunden ohne Musik",
    "Rufe eine zufällige Person aus deinem Telefonbuch an und singe ein Lied",
    "Mache 10 Liegestütze",
    "Lass jemand anderes ein peinliches Statusupdate für dich in den sozialen Medien posten",
    "Iss einen Löffel scharfe Soße oder Gewürze",
    "Schreib einer Person deiner Wahl eine peinliche Nachricht",
    "Erlaube jemandem, dein Telefon für 2 Minuten zu durchsuchen",
    "Mach ein peinliches Selfie und zeige es der Gruppe",
    "Ahme ein Tier deiner Wahl nach, bis die anderen erraten, welches es ist",
    "Tausche für die nächsten 10 Minuten die Kleidung mit jemandem",
    "Zeig deinen letzten Suchverlauf",
    "Erzähle einen Witz, ohne zu lachen",
    "Rede für die nächsten 5 Minuten in einem Akzent",
    "Lass jemand anderen deine Haare stylen",
    "Spiele 'Flaschendrehen' mit einer imaginären Flasche",
    "Gib jemandem in der Runde eine Rückenmassage",
    "Führe einen Catwalk wie ein Supermodel vor",
    "Mache den Spagat oder versuche es zumindest",
    "Rufe bei einer Pizzeria an und frage, ob sie Burger liefern",
    "Spiele Pantomime, bis jemand errät, was du darstellst",
    "Lasse jemanden ein Wort auf deine Stirn schreiben",
    "Trinke ein Glas Wasser ohne deine Hände zu benutzen",
    "Steh für 30 Sekunden auf einem Bein",
    "Lass jemanden eine Zutat deiner Wahl in ein Getränk mischen und trinke es",
    "Sprich 2 Minuten lang rückwärts",
    "Errate, wer in der Gruppe ein Geheimnis hat, das du nicht kennst",
    "Versuche zu jodeln",
    "Mach 3 Minuten lang Yoga-Posen",
    "Lies die letzte Textnachricht laut vor, die du bekommen hast",
    "Trage deine Kleidung verkehrt herum für die nächsten 10 Minuten"
];

document.addEventListener('DOMContentLoaded', function() {
    const setupSection = document.getElementById('setupSection');
    const playerCount = document.getElementById('playerCount');
    const setPlayersBtn = document.getElementById('setPlayersBtn');
    const playerNamesSection = document.getElementById('playerNamesSection');
    const playerInputs = document.getElementById('playerInputs');
    const startGameBtn = document.getElementById('startGameBtn');
    
    const gameSection = document.getElementById('gameSection');
    const currentPlayerDisplay = document.getElementById('currentPlayerDisplay');
    const nextPlayerBtn = document.getElementById('nextPlayerBtn');
    const truthBtn = document.getElementById('truthBtn');
    const dareBtn = document.getElementById('dareBtn');
    const resultBox = document.getElementById('resultBox');
    const resultText = document.getElementById('resultText');
    const newGameBtn = document.getElementById('newGameBtn');
    
    let players = [];
    let currentPlayerIndex = 0;
    
    const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    setPlayersBtn.addEventListener('click', function() {
        const count = parseInt(playerCount.value);
        
        if (count < 2 || count > 8) {
            alert('Bitte gib eine Anzahl zwischen 2 und 8 ein.');
            return;
        }
        
        playerInputs.innerHTML = '';
        for (let i = 0; i < count; i++) {
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
        
        if (players.length < 2) {
            alert('Bitte gib mindestens 2 Spielernamen ein.');
            return;
        }
        
        shuffleArray(players);
        
        currentPlayerIndex = 0;
        updateCurrentPlayer();
        
        setupSection.classList.add('hidden');
        gameSection.classList.remove('hidden');
        resultBox.classList.add('hidden');
    });
    
    function updateCurrentPlayer() {
        currentPlayerDisplay.textContent = `${players[currentPlayerIndex]} ist dran`;
    }
    
    nextPlayerBtn.addEventListener('click', function() {
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        updateCurrentPlayer();
        resultBox.classList.add('hidden');
    });
    
    truthBtn.addEventListener('click', function() {
        resultText.textContent = getRandomItem(truthQuestions);
        resultBox.classList.remove('hidden');
        resultBox.style.backgroundColor = '#EBF4FF';
    });
    
    dareBtn.addEventListener('click', function() {
        resultText.textContent = getRandomItem(dareActions);
        resultBox.classList.remove('hidden');
        resultBox.style.backgroundColor = '#FAE8FF'; 
    });
    
    // New game button handler
    newGameBtn.addEventListener('click', function() {
        gameSection.classList.add('hidden');
        setupSection.classList.remove('hidden');
        playerNamesSection.classList.add('hidden');
        resultBox.classList.add('hidden');
    });
});
