const storageKey = "vive-spanish-state-v1";

const cards = [
  {
    id: "c1",
    level: "A2",
    deck: "colombia",
    prompt: "How are you doing? / What's up?",
    answer: "¿Qué más?",
    note: "Very Colombian. Casual greeting, not a literal question about more things."
  },
  {
    id: "c2",
    level: "A2",
    deck: "daily",
    prompt: "I need to run an errand.",
    answer: "Necesito hacer una vuelta.",
    note: "In Colombia, una vuelta can mean an errand or quick task."
  },
  {
    id: "c3",
    level: "A2",
    deck: "work",
    prompt: "Can you help me with this?",
    answer: "¿Me puedes ayudar con esto?",
    note: "Useful everywhere in Latin America."
  },
  {
    id: "c4",
    level: "B1",
    deck: "connectors",
    prompt: "Even though it is raining, I am going out.",
    answer: "Aunque está lloviendo, voy a salir.",
    note: "Aunque is a high-value connector for longer sentences."
  },
  {
    id: "c5",
    level: "A2",
    deck: "daily",
    prompt: "I am getting used to speaking more.",
    answer: "Me estoy acostumbrando a hablar más.",
    note: "Use acostumbrarse a plus infinitive."
  },
  {
    id: "c6",
    level: "B1",
    deck: "colombia",
    prompt: "That place is really cool.",
    answer: "Ese lugar es muy bacano.",
    note: "Bacano is common in Colombia for cool or nice."
  },
  {
    id: "c7",
    level: "B1",
    deck: "work",
    prompt: "I realized that I made a mistake.",
    answer: "Me di cuenta de que cometí un error.",
    note: "Darse cuenta de que is the pattern."
  },
  {
    id: "c8",
    level: "B1",
    deck: "connectors",
    prompt: "The problem is that we do not have enough time.",
    answer: "El problema es que no tenemos suficiente tiempo.",
    note: "A clean structure for explaining constraints."
  },
  {
    id: "c9",
    level: "A2",
    deck: "colombia",
    prompt: "Please give me a little bit.",
    answer: "Regálame un poquito, por favor.",
    note: "In Colombian service contexts, regalar can soften a request."
  },
  {
    id: "c10",
    level: "B1",
    deck: "daily",
    prompt: "I have been trying to listen every day.",
    answer: "He estado tratando de escuchar todos los días.",
    note: "He estado plus gerund is useful for recent ongoing effort."
  },
  {
    id: "c11",
    level: "B1",
    deck: "connectors",
    prompt: "Instead of translating, try to describe it.",
    answer: "En vez de traducir, intenta describirlo.",
    note: "A helpful habit for living in the language."
  },
  {
    id: "c12",
    level: "A2",
    deck: "work",
    prompt: "I will check it and let you know.",
    answer: "Lo reviso y te aviso.",
    note: "Natural, compact Latin American phrasing."
  },
  {
    id: "s1",
    level: "Slang",
    deck: "slang",
    prompt: "Friend / buddy / bro",
    answer: "Parce / parcero",
    note: "Very Colombian and casual. Good to recognize; use with friends, not formal settings."
  },
  {
    id: "s2",
    level: "Slang",
    deck: "slang",
    prompt: "Cool / awesome",
    answer: "Chévere / bacano",
    note: "Both are common. Chévere is broadly safe; bacano feels especially Colombian in many regions."
  },
  {
    id: "s3",
    level: "Slang",
    deck: "slang",
    prompt: "Sounds good / I'm in / right away",
    answer: "De una",
    note: "Very useful Colombian phrase. Context decides whether it means agreement or immediacy."
  },
  {
    id: "s4",
    level: "Slang",
    deck: "slang",
    prompt: "Money / cash",
    answer: "Plata",
    note: "Common across Latin America and very normal in Colombia. More casual than dinero."
  },
  {
    id: "s5",
    level: "Careful",
    deck: "slang",
    prompt: "That is really cool / amazing",
    answer: "Qué chimba",
    note: "Common in Colombia, especially casually, but can be vulgar depending on context and audience."
  },
  {
    id: "s6",
    level: "Careful",
    deck: "slang",
    prompt: "What a hassle / what a shame / what a thing",
    answer: "Qué vaina",
    note: "Useful expression, but tone matters. It can be complaint, sympathy, or annoyance."
  },
  {
    id: "s7",
    level: "Slang",
    deck: "slang",
    prompt: "Angry / upset",
    answer: "Bravo / brava",
    note: "In Colombia, estar bravo can mean being angry, not brave."
  },
  {
    id: "s8",
    level: "Slang",
    deck: "slang",
    prompt: "To hang out / chat someone up",
    answer: "Parchear / charlar",
    note: "Parchear is casual hanging out. Charlar is safer and more general."
  },
  {
    id: "s9",
    level: "Slang",
    deck: "slang",
    prompt: "A hangout plan / friend group",
    answer: "Un parche",
    note: "Casual Colombian usage. Also can mean a patch in other contexts."
  },
  {
    id: "s10",
    level: "Careful",
    deck: "slang",
    prompt: "Dude / guy / girl",
    answer: "Man / vieja",
    note: "Casual. Vieja can be friendly or rude depending on relationship and tone."
  }
];

const scenes = [
  {
    es: "Estoy en una cafetería en Medellín. Pido un tinto y le pregunto al mesero si hay algo para comer. Él me recomienda una arepa con queso.",
    en: "I am in a cafe in Medellin. I order a black coffee and ask the waiter if there is something to eat. He recommends an arepa with cheese.",
    chips: ["tinto", "mesero", "recomendar", "arepa"]
  },
  {
    es: "Hoy tengo varias vueltas. Primero paso por la tienda, después llamo a un cliente y más tarde practico español mientras camino.",
    en: "Today I have several errands. First I stop by the store, then I call a customer, and later I practice Spanish while I walk.",
    chips: ["vueltas", "pasar por", "mientras", "más tarde"]
  },
  {
    es: "Mi meta no es hablar perfecto. Mi meta es entender más, responder más rápido y sentirme cómodo usando frases nuevas.",
    en: "My goal is not to speak perfectly. My goal is to understand more, answer faster, and feel comfortable using new phrases.",
    chips: ["meta", "perfecto", "rápido", "cómodo"]
  },
  {
    es: "Un amigo me dice: parce, ¿vamos por un café? Yo respondo: de una. Ese plan suena muy bacano.",
    en: "A friend says: buddy, should we go for coffee? I answer: sounds good. That plan sounds really cool.",
    chips: ["parce", "de una", "bacano", "plan"]
  },
  {
    es: "Escucho una palabra nueva en la calle. Primero trato de entender el tono: ¿es amable, informal o demasiado fuerte?",
    en: "I hear a new word on the street. First I try to understand the tone: is it friendly, informal, or too strong?",
    chips: ["calle", "tono", "informal", "fuerte"]
  }
];

const speakPrompts = [
  {
    prompt: "Tell a friend you are learning Spanish because you want to use it every day.",
    target: "Estoy aprendiendo español porque quiero usarlo todos los días."
  },
  {
    prompt: "Ask someone if they can repeat it more slowly.",
    target: "¿Puedes repetirlo más despacio?"
  },
  {
    prompt: "Say that you understood the main idea, but not every word.",
    target: "Entendí la idea principal, pero no todas las palabras."
  },
  {
    prompt: "Say that you are going to practice for ten minutes.",
    target: "Voy a practicar durante diez minutos."
  }
];

const puzzles = [
  {
    en: "I want to speak with more confidence.",
    es: ["Quiero", "hablar", "con", "más", "confianza"]
  },
  {
    en: "Can you explain it another way?",
    es: ["¿Puedes", "explicarlo", "de", "otra", "manera?"]
  },
  {
    en: "I am going to listen while I drive.",
    es: ["Voy", "a", "escuchar", "mientras", "manejo"]
  },
  {
    en: "That sounds good to me.",
    es: ["Eso", "me", "suena", "bien"]
  }
];

const missions = [
  {
    id: "m1",
    title: "Name the room",
    text: "Point to ten objects near you and say each name in Spanish. Guess first, check later."
  },
  {
    id: "m2",
    title: "One real sentence",
    text: "Narrate one thing you are doing: Estoy preparando..., necesito..., voy a..."
  },
  {
    id: "m3",
    title: "Input burst",
    text: "Listen to Spanish audio for five minutes. Your only job is catching familiar words."
  },
  {
    id: "m4",
    title: "No-English retry",
    text: "When you forget a word, describe around it in Spanish instead of switching immediately."
  },
  {
    id: "m5",
    title: "Slang radar",
    text: "Notice one casual phrase in a song, video, or conversation. Save it only after you understand the tone."
  }
];

const defaultState = {
  cards: {},
  streak: 0,
  lastPractice: "",
  completedMissions: {},
  journal: []
};

let state = loadState();
let currentCard = null;
let currentScene = 0;
let currentSpeak = 0;
let currentPuzzle = 0;
let builtWords = [];
let availableWords = [];
let deferredPrompt = null;

const els = {
  tabs: document.querySelectorAll(".tab"),
  views: document.querySelectorAll(".view"),
  streakCount: document.getElementById("streakCount"),
  dueCount: document.getElementById("dueCount"),
  knownCount: document.getElementById("knownCount"),
  deckFilter: document.getElementById("deckFilter"),
  cardLevel: document.getElementById("cardLevel"),
  cardDeck: document.getElementById("cardDeck"),
  promptLabel: document.getElementById("promptLabel"),
  cardPrompt: document.getElementById("cardPrompt"),
  cardAnswer: document.getElementById("cardAnswer"),
  cardNote: document.getElementById("cardNote"),
  cardSound: document.getElementById("cardSound"),
  showAnswer: document.getElementById("showAnswer"),
  againButton: document.getElementById("againButton"),
  hardButton: document.getElementById("hardButton"),
  knownButton: document.getElementById("knownButton"),
  sceneSpanish: document.getElementById("sceneSpanish"),
  sceneEnglish: document.getElementById("sceneEnglish"),
  sceneChips: document.getElementById("sceneChips"),
  sceneSound: document.getElementById("sceneSound"),
  rateSlider: document.getElementById("rateSlider"),
  newScene: document.getElementById("newScene"),
  speakPrompt: document.getElementById("speakPrompt"),
  speakTarget: document.getElementById("speakTarget"),
  newSpeak: document.getElementById("newSpeak"),
  hearSpeakTarget: document.getElementById("hearSpeakTarget"),
  recordButton: document.getElementById("recordButton"),
  shadowDone: document.getElementById("shadowDone"),
  transcript: document.getElementById("transcript"),
  speechSupport: document.getElementById("speechSupport"),
  puzzleEnglish: document.getElementById("puzzleEnglish"),
  dropZone: document.getElementById("dropZone"),
  wordBank: document.getElementById("wordBank"),
  newPuzzle: document.getElementById("newPuzzle"),
  clearPuzzle: document.getElementById("clearPuzzle"),
  checkPuzzle: document.getElementById("checkPuzzle"),
  puzzleFeedback: document.getElementById("puzzleFeedback"),
  missionList: document.getElementById("missionList"),
  resetDay: document.getElementById("resetDay"),
  journalForm: document.getElementById("journalForm"),
  journalEntry: document.getElementById("journalEntry"),
  journalLog: document.getElementById("journalLog"),
  installButton: document.getElementById("installButton")
};

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return { ...defaultState, ...saved, cards: saved?.cards || {} };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function cardProgress(card) {
  if (!state.cards[card.id]) {
    state.cards[card.id] = {
      box: 0,
      due: Date.now(),
      seen: 0,
      correct: 0
    };
  }
  return state.cards[card.id];
}

function dueCards() {
  const deck = els.deckFilter.value;
  const now = Date.now();
  return cards
    .filter((card) => deck === "all" || card.deck === deck)
    .filter((card) => cardProgress(card).due <= now)
    .sort((a, b) => cardProgress(a).due - cardProgress(b).due);
}

function updateStreak() {
  const today = todayKey();
  if (state.lastPractice === today) {
    return;
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = yesterday.toISOString().slice(0, 10);
  state.streak = state.lastPractice === yesterdayKey ? state.streak + 1 : 1;
  state.lastPractice = today;
  saveState();
}

function updateStats() {
  const known = cards.filter((card) => cardProgress(card).box >= 4).length;
  els.streakCount.textContent = state.streak;
  els.dueCount.textContent = dueCards().length;
  els.knownCount.textContent = known;
}

function nextCard() {
  const queue = dueCards();
  currentCard = queue[0] || cards.find((card) => els.deckFilter.value === "all" || card.deck === els.deckFilter.value) || cards[0];
  const progress = cardProgress(currentCard);
  els.cardLevel.textContent = currentCard.level;
  els.cardDeck.textContent = labelDeck(currentCard.deck);
  els.promptLabel.textContent = progress.seen % 2 === 0 ? "Say this in Spanish" : "What does this mean?";
  els.cardPrompt.textContent = progress.seen % 2 === 0 ? currentCard.prompt : currentCard.answer;
  els.cardAnswer.textContent = progress.seen % 2 === 0 ? currentCard.answer : currentCard.prompt;
  els.cardAnswer.hidden = true;
  els.cardNote.textContent = currentCard.note;
  setGradeButtons(false);
  updateStats();
}

function labelDeck(deck) {
  const labels = {
    colombia: "Colombia",
    daily: "Daily life",
    work: "Work and errands",
    connectors: "Connectors",
    slang: "Slang"
  };
  return labels[deck] || deck;
}

function setGradeButtons(enabled) {
  els.againButton.disabled = !enabled;
  els.hardButton.disabled = !enabled;
  els.knownButton.disabled = !enabled;
}

function gradeCard(quality) {
  const progress = cardProgress(currentCard);
  const intervals = {
    again: 0,
    hard: 1,
    known: 3
  };
  progress.seen += 1;
  if (quality === "again") {
    progress.box = Math.max(0, progress.box - 1);
  } else {
    progress.correct += 1;
    progress.box = Math.min(5, progress.box + intervals[quality]);
  }

  const delayDays = [0, 0.04, 0.5, 1, 3, 7][progress.box] || 10;
  progress.due = Date.now() + delayDays * 24 * 60 * 60 * 1000;
  updateStreak();
  saveState();
  nextCard();
}

function speak(text, rate = Number(els.rateSlider?.value || 0.82)) {
  if (!("speechSynthesis" in window)) {
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  utterance.voice =
    voices.find((voice) => voice.lang === "es-CO") ||
    voices.find((voice) => voice.lang === "es-MX") ||
    voices.find((voice) => voice.lang.startsWith("es")) ||
    null;
  utterance.lang = utterance.voice?.lang || "es-CO";
  utterance.rate = rate;
  window.speechSynthesis.speak(utterance);
}

function renderScene() {
  const scene = scenes[currentScene];
  els.sceneSpanish.textContent = scene.es;
  els.sceneEnglish.textContent = scene.en;
  els.sceneChips.innerHTML = "";
  scene.chips.forEach((chip) => {
    const span = document.createElement("span");
    span.textContent = chip;
    els.sceneChips.appendChild(span);
  });
}

function renderSpeak() {
  const item = speakPrompts[currentSpeak];
  els.speakPrompt.textContent = item.prompt;
  els.speakTarget.textContent = item.target;
  els.transcript.textContent = "Listen, say it out loud, then mark it done. Recording is optional.";
  els.speechSupport.textContent = speechHint();
}

function speechHint() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    return "Recording is not available in this browser, but shadowing still counts.";
  }
  if (!window.isSecureContext) {
    return "Recording usually needs HTTPS or localhost. If this is open from your phone by IP address, use the Hear and I said it buttons instead.";
  }
  return "Recording works only after the browser allows microphone access.";
}

function shuffled(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function renderPuzzle() {
  builtWords = [];
  const puzzle = puzzles[currentPuzzle];
  availableWords = shuffled(puzzle.es);
  els.puzzleEnglish.textContent = puzzle.en;
  els.puzzleFeedback.textContent = "";
  renderBuiltWords();
  renderWordBank();
}

function renderWordBank() {
  els.wordBank.innerHTML = "";
  availableWords.forEach((word, index) => {
    const button = document.createElement("button");
    button.className = "word-chip";
    button.type = "button";
    button.textContent = word;
    button.addEventListener("click", () => {
      builtWords.push(word);
      availableWords.splice(index, 1);
      renderWordBank();
      renderBuiltWords();
    });
    els.wordBank.appendChild(button);
  });
}

function renderBuiltWords() {
  els.dropZone.innerHTML = "";
  builtWords.forEach((word, index) => {
    const button = document.createElement("button");
    button.className = "word-chip";
    button.type = "button";
    button.textContent = word;
    button.addEventListener("click", () => {
      builtWords.splice(index, 1);
      availableWords.push(word);
      renderWordBank();
      renderBuiltWords();
    });
    els.dropZone.appendChild(button);
  });
}

function renderMissions() {
  els.missionList.innerHTML = "";
  const completed = state.completedMissions[todayKey()] || {};
  missions.forEach((mission) => {
    const label = document.createElement("label");
    label.className = "mission";
    label.innerHTML = `
      <input type="checkbox" ${completed[mission.id] ? "checked" : ""}>
      <span><strong>${mission.title}</strong><p>${mission.text}</p></span>
    `;
    label.querySelector("input").addEventListener("change", (event) => {
      state.completedMissions[todayKey()] = state.completedMissions[todayKey()] || {};
      state.completedMissions[todayKey()][mission.id] = event.target.checked;
      updateStreak();
      saveState();
      updateStats();
    });
    els.missionList.appendChild(label);
  });
}

function renderJournal() {
  els.journalLog.innerHTML = "";
  state.journal.slice(-5).reverse().forEach((entry) => {
    const p = document.createElement("p");
    p.textContent = `${entry.date}: ${entry.text}`;
    els.journalLog.appendChild(p);
  });
}

function startRecognition() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    els.speechSupport.textContent = "Recording is not available in this browser. Say the line out loud and tap I said it.";
    return;
  }
  if (!window.isSecureContext) {
    els.speechSupport.textContent = "Recording is blocked on this address because it is not a secure browser context. On your phone, the local IP link may not allow mic recording.";
    return;
  }
  const recognition = new Recognition();
  recognition.lang = "es-CO";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  els.transcript.textContent = "Listening...";
  els.speechSupport.textContent = "Speak after the browser starts listening. You may need to allow microphone access.";
  recognition.onresult = (event) => {
    els.transcript.textContent = event.results[0][0].transcript;
    els.speechSupport.textContent = "Nice. Compare that transcript with the target, then try it once more naturally.";
    updateStreak();
    saveState();
    updateStats();
  };
  recognition.onerror = (event) => {
    const messages = {
      "not-allowed": "Microphone access was blocked. Allow the mic in the browser, or use I said it.",
      "service-not-allowed": "This browser is blocking speech recognition on this page. Use Hear plus I said it.",
      "network": "Speech recognition needs the browser's online speech service and it could not connect.",
      "no-speech": "No speech was detected. Try again, or mark the shadow practice done.",
      "audio-capture": "The browser could not access the microphone."
    };
    els.transcript.textContent = messages[event.error] || "Recording did not start cleanly. Shadow practice still counts.";
    els.speechSupport.textContent = "The important part is producing the sentence out loud, not saving audio.";
  };
  recognition.onend = () => {
    els.recordButton.disabled = false;
    els.recordButton.textContent = "Record";
  };
  els.recordButton.disabled = true;
  els.recordButton.textContent = "Listening";
  try {
    recognition.start();
  } catch {
    els.recordButton.disabled = false;
    els.recordButton.textContent = "Record";
    els.transcript.textContent = "Recording could not start here. Say it out loud and tap I said it.";
  }
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

els.tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    els.tabs.forEach((button) => button.classList.remove("is-active"));
    els.views.forEach((view) => view.classList.remove("is-active"));
    tab.classList.add("is-active");
    document.getElementById(tab.dataset.view).classList.add("is-active");
  });
});

els.deckFilter.addEventListener("change", nextCard);
els.showAnswer.addEventListener("click", () => {
  els.cardAnswer.hidden = false;
  setGradeButtons(true);
});
els.cardSound.addEventListener("click", () => speak(currentCard.answer));
els.againButton.addEventListener("click", () => gradeCard("again"));
els.hardButton.addEventListener("click", () => gradeCard("hard"));
els.knownButton.addEventListener("click", () => gradeCard("known"));

els.sceneSound.addEventListener("click", () => speak(scenes[currentScene].es));
els.newScene.addEventListener("click", () => {
  currentScene = (currentScene + 1) % scenes.length;
  renderScene();
});

els.newSpeak.addEventListener("click", () => {
  currentSpeak = (currentSpeak + 1) % speakPrompts.length;
  renderSpeak();
});
els.hearSpeakTarget.addEventListener("click", () => speak(speakPrompts[currentSpeak].target));
els.recordButton.addEventListener("click", startRecognition);
els.shadowDone.addEventListener("click", () => {
  els.transcript.textContent = "Marked done. Say it once more without looking if you can.";
  updateStreak();
  saveState();
  updateStats();
});

els.newPuzzle.addEventListener("click", () => {
  currentPuzzle = (currentPuzzle + 1) % puzzles.length;
  renderPuzzle();
});
els.clearPuzzle.addEventListener("click", renderPuzzle);
els.checkPuzzle.addEventListener("click", () => {
  const target = puzzles[currentPuzzle].es.join(" ");
  const attempt = builtWords.join(" ");
  if (attempt === target) {
    els.puzzleFeedback.textContent = "Correct. Say it out loud once before moving on.";
    speak(target);
    updateStreak();
    saveState();
    updateStats();
  } else {
    els.puzzleFeedback.textContent = `Close. Target: ${target}`;
  }
});

els.resetDay.addEventListener("click", () => {
  state.completedMissions[todayKey()] = {};
  saveState();
  renderMissions();
});

els.journalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = els.journalEntry.value.trim();
  if (!text) return;
  state.journal.push({ date: todayKey(), text });
  els.journalEntry.value = "";
  updateStreak();
  saveState();
  renderJournal();
  updateStats();
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  els.installButton.hidden = false;
});

els.installButton.addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  els.installButton.hidden = true;
});

window.speechSynthesis?.addEventListener?.("voiceschanged", () => {});

nextCard();
renderScene();
renderSpeak();
renderPuzzle();
renderMissions();
renderJournal();
updateStats();
registerServiceWorker();
