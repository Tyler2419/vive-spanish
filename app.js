const storageKey = "vive-spanish-state-v2";

const cards = [
  ["c1", "A2", "colombia", "How are you doing? / What's up?", "¿Qué más?", "Very Colombian. Casual greeting, not a literal question about more things."],
  ["c2", "A2", "daily", "I need to run an errand.", "Necesito hacer una vuelta.", "In Colombia, una vuelta can mean an errand or quick task."],
  ["c3", "A2", "work", "Can you help me with this?", "¿Me puedes ayudar con esto?", "Useful everywhere in Latin America."],
  ["c4", "B1", "connectors", "Even though it is raining, I am going out.", "Aunque está lloviendo, voy a salir.", "Aunque is a high-value connector for longer sentences."],
  ["c5", "A2", "daily", "I am getting used to speaking more.", "Me estoy acostumbrando a hablar más.", "Use acostumbrarse a plus infinitive."],
  ["c6", "B1", "colombia", "That place is really cool.", "Ese lugar es muy bacano.", "Bacano is common in Colombia for cool or nice."],
  ["c7", "B1", "work", "I realized that I made a mistake.", "Me di cuenta de que cometí un error.", "Darse cuenta de que is the pattern."],
  ["c8", "B1", "connectors", "The problem is that we do not have enough time.", "El problema es que no tenemos suficiente tiempo.", "A clean structure for explaining constraints."],
  ["c9", "A2", "colombia", "Please give me a little bit.", "Regálame un poquito, por favor.", "In Colombian service contexts, regalar can soften a request."],
  ["c10", "B1", "daily", "I have been trying to listen every day.", "He estado tratando de escuchar todos los días.", "He estado plus gerund is useful for recent ongoing effort."],
  ["c11", "B1", "connectors", "Instead of translating, try to describe it.", "En vez de traducir, intenta describirlo.", "A helpful habit for living in the language."],
  ["c12", "A2", "work", "I will check it and let you know.", "Lo reviso y te aviso.", "Natural, compact Latin American phrasing."],
  ["c13", "A2", "daily", "I am going to grab something to eat.", "Voy a comer algo rápido.", "A natural everyday phrase; rápido can mean quick or casual here."],
  ["c14", "B1", "connectors", "That depends on what happens tomorrow.", "Eso depende de lo que pase mañana.", "A useful way to avoid yes/no answers."],
  ["c15", "A2", "daily", "I am looking for my keys.", "Estoy buscando mis llaves.", "Buscar does not need por when it means look for."],
  ["c16", "B1", "work", "I will send it to you when I finish.", "Te lo mando cuando termine.", "Compact and natural for work texts."],
  ["c17", "A2", "colombia", "Do you want a black coffee?", "¿Quieres un tinto?", "In Colombia, tinto is black coffee, not red wine."],
  ["c18", "B1", "daily", "I have not had time yet.", "Todavía no he tenido tiempo.", "Todavía no is extremely useful."],
  ["c19", "B1", "connectors", "Besides that, everything is fine.", "Aparte de eso, todo está bien.", "Good connector for updates."],
  ["c20", "A2", "work", "Can you repeat the address?", "¿Puedes repetir la dirección?", "Good practical phrase for calls, routes, and errands."],
  ["c21", "A2", "daily", "I forgot how to say it.", "Se me olvidó cómo decirlo.", "Se me olvidó is a natural way to say I forgot."],
  ["c22", "B1", "connectors", "I am not sure, but I think so.", "No estoy seguro, pero creo que sí.", "Very useful when speaking honestly."],
  ["c23", "B1", "daily", "I am trying not to translate everything.", "Estoy tratando de no traducir todo.", "This is a good language-learning sentence to own."],
  ["c24", "A2", "colombia", "Do you want to hang out for a while?", "¿Quieres parchar un rato?", "Casual Colombian phrasing. Use with friends."],
  ["c25", "B1", "work", "Let me check before I answer.", "Déjame revisar antes de responder.", "Polite and useful when you need a second."],
  ["c26", "A2", "daily", "I need to practice more often.", "Necesito practicar más seguido.", "Más seguido is common for more often."],
  ["c27", "B1", "connectors", "What I mean is...", "Lo que quiero decir es...", "A rescue phrase for explaining yourself."],
  ["c28", "A2", "daily", "I am on my way.", "Ya voy en camino.", "Ya gives it a natural immediacy."],
  ["c29", "B1", "work", "Could you send me a photo?", "¿Me podrías mandar una foto?", "Podrías softens the request."],
  ["c30", "A2", "colombia", "That is very far.", "Eso queda muy lejos.", "Quedar is common for location."],
  ["s1", "Slang", "slang", "Friend / buddy / bro", "Parce / parcero", "Very Colombian and casual. Good to recognize; use with friends, not formal settings."],
  ["s2", "Slang", "slang", "Cool / awesome", "Chévere / bacano", "Chévere is broadly safe; bacano feels especially Colombian."],
  ["s3", "Slang", "slang", "Sounds good / I'm in / right away", "De una", "Very useful Colombian phrase. Context decides whether it means agreement or immediacy."],
  ["s4", "Slang", "slang", "Money / cash", "Plata", "Common across Latin America and very normal in Colombia. More casual than dinero."],
  ["s5", "Careful", "slang", "That is really cool / amazing", "Qué chimba", "Common in Colombia, especially casually, but can be vulgar depending on context and audience."],
  ["s6", "Careful", "slang", "What a hassle / what a shame / what a thing", "Qué vaina", "Useful expression, but tone matters. It can be complaint, sympathy, or annoyance."],
  ["s7", "Slang", "slang", "Angry / upset", "Bravo / brava", "In Colombia, estar bravo can mean being angry, not brave."],
  ["s8", "Slang", "slang", "To hang out", "Parchear", "Casual Colombian word for hanging out."],
  ["s9", "Slang", "slang", "A hangout plan / friend group", "Un parche", "Casual Colombian usage. Also can mean a patch in other contexts."],
  ["s10", "Careful", "slang", "Dude / guy / girl", "Man / vieja", "Casual. Vieja can be friendly or rude depending on relationship and tone."],
  ["s11", "Slang", "slang", "A little favor", "Un favorcito", "Softens a request; common and friendly."],
  ["s12", "Slang", "slang", "A lot / very", "Un montón", "Common and safe."],
  ["s13", "Careful", "slang", "To be broke", "Estar llevado", "Colombian casual phrase. Understand before using broadly."],
  ["s14", "Slang", "slang", "A snack / small bite", "Mecato", "Common in parts of Colombia; regional."],
  ["s15", "Careful", "slang", "Annoying / intense person", "Cansón / cansona", "Useful but can sound critical."],
  ["s16", "Slang", "slang", "Embarrassing / awkward", "Qué pena", "Also used as excuse me or sorry in Colombia."],
  ["s17", "Slang", "slang", "No problem / relaxed", "Fresco / fresca", "Very common in Colombia for reassuring someone."],
  ["s18", "Slang", "slang", "To work hard / hustle", "Camellar", "Casual Colombian verb for working."],
  ["s19", "Careful", "slang", "A mess / chaos", "Un desorden", "Safe word; less slangy than stronger alternatives."],
  ["s20", "Slang", "slang", "Let's do it / let's go", "Hágale", "Very Colombian. Tone can mean go ahead, do it, or let's go."]
].map(([id, level, deck, prompt, answer, note]) => ({ id, level, deck, prompt, answer, note }));

const scenes = [
  {
    title: "Coffee in Medellín",
    es: "Estoy en una cafetería en Medellín. Pido un tinto y le pregunto al mesero si hay algo para comer. Él me recomienda una arepa con queso.",
    en: "I am in a cafe in Medellin. I order a black coffee and ask the waiter if there is something to eat. He recommends an arepa with cheese.",
    chips: ["tinto", "mesero", "recomendar", "arepa"]
  },
  {
    title: "Errands day",
    es: "Hoy tengo varias vueltas. Primero paso por la tienda, después llamo a un cliente y más tarde practico español mientras camino.",
    en: "Today I have several errands. First I stop by the store, then I call a customer, and later I practice Spanish while I walk.",
    chips: ["vueltas", "pasar por", "mientras", "más tarde"]
  },
  {
    title: "Learning goal",
    es: "Mi meta no es hablar perfecto. Mi meta es entender más, responder más rápido y sentirme cómodo usando frases nuevas.",
    en: "My goal is not to speak perfectly. My goal is to understand more, answer faster, and feel comfortable using new phrases.",
    chips: ["meta", "perfecto", "rápido", "cómodo"]
  },
  {
    title: "Making plans",
    es: "Un amigo me dice: parce, ¿vamos por un café? Yo respondo: de una. Ese plan suena muy bacano.",
    en: "A friend says: buddy, should we go for coffee? I answer: sounds good. That plan sounds really cool.",
    chips: ["parce", "de una", "bacano", "plan"]
  },
  {
    title: "Slang radar",
    es: "Escucho una palabra nueva en la calle. Primero trato de entender el tono: ¿es amable, informal o demasiado fuerte?",
    en: "I hear a new word on the street. First I try to understand the tone: is it friendly, informal, or too strong?",
    chips: ["calle", "tono", "informal", "fuerte"]
  },
  {
    title: "At work",
    es: "Antes de responder, reviso los detalles. Si no entiendo algo, pregunto: ¿me puedes explicar eso de otra manera?",
    en: "Before answering, I check the details. If I do not understand something, I ask: can you explain that another way?",
    chips: ["antes", "detalles", "explicar", "otra manera"]
  },
  {
    title: "On the road",
    es: "Voy manejando y escucho una historia corta en español. No entiendo todo, pero reconozco palabras y sigo el contexto.",
    en: "I am driving and listening to a short story in Spanish. I do not understand everything, but I recognize words and follow the context.",
    chips: ["manejando", "historia", "reconozco", "contexto"]
  },
  {
    title: "Ordering food",
    es: "Quiero pedir algo sencillo. Digo: regálame una arepa y un tinto, por favor. Después pregunto cuánto cuesta.",
    en: "I want to order something simple. I say: please give me an arepa and a black coffee. Then I ask how much it costs.",
    chips: ["pedir", "sencillo", "regálame", "cuánto cuesta"]
  }
];

const speakPrompts = [
  ["Tell a friend you are learning Spanish because you want to use it every day.", "Estoy aprendiendo español porque quiero usarlo todos los días."],
  ["Ask someone if they can repeat it more slowly.", "¿Puedes repetirlo más despacio?"],
  ["Say that you understood the main idea, but not every word.", "Entendí la idea principal, pero no todas las palabras."],
  ["Say that you are going to practice for ten minutes.", "Voy a practicar durante diez minutos."],
  ["Say you are not sure, but you can try.", "No estoy seguro, pero puedo intentarlo."],
  ["Ask a friend if they want to get coffee.", "¿Quieres ir por un café?"],
  ["Say you need to check something first.", "Necesito revisar algo primero."],
  ["Say that word sounds new to you.", "Esa palabra me suena nueva."],
  ["Say you are trying to speak without translating.", "Estoy tratando de hablar sin traducir."],
  ["Say the plan sounds good to you.", "Ese plan me suena bien."]
].map(([prompt, target]) => ({ prompt, target }));

const puzzles = [
  { en: "I want to speak with more confidence.", es: ["Quiero", "hablar", "con", "más", "confianza"] },
  { en: "Can you explain it another way?", es: ["¿Puedes", "explicarlo", "de", "otra", "manera?"] },
  { en: "I am going to listen while I drive.", es: ["Voy", "a", "escuchar", "mientras", "manejo"] },
  { en: "That sounds good to me.", es: ["Eso", "me", "suena", "bien"] },
  { en: "I need to run a quick errand.", es: ["Necesito", "hacer", "una", "vuelta", "rápida"] },
  { en: "I understood the main idea.", es: ["Entendí", "la", "idea", "principal"] },
  { en: "Let me check before answering.", es: ["Déjame", "revisar", "antes", "de", "responder"] },
  { en: "We can try again tomorrow.", es: ["Podemos", "intentarlo", "otra", "vez", "mañana"] }
];

const replyGames = [
  {
    prompt: "Your friend texts: ¿Vamos por un café?",
    answer: "De una.",
    options: ["De una.", "Estoy llevado.", "Qué pena."],
    note: "De una is a natural casual yes."
  },
  {
    prompt: "Someone speaks too fast. What do you say?",
    answer: "¿Puedes repetirlo más despacio?",
    options: ["¿Puedes repetirlo más despacio?", "Estoy buscando mis llaves.", "Qué chimba."],
    note: "Ask for the speed you need."
  },
  {
    prompt: "You need a moment before answering.",
    answer: "Déjame revisar primero.",
    options: ["Déjame revisar primero.", "Regálame un tinto.", "Un parche."],
    note: "This buys time politely."
  },
  {
    prompt: "You want to reassure someone.",
    answer: "Fresco, no pasa nada.",
    options: ["Fresco, no pasa nada.", "Qué vaina.", "Estoy bravo."],
    note: "Fresco can mean relaxed / no worries."
  }
];

const toneGames = [
  { prompt: "¿Me podrías ayudar con esto?", answer: "formal", options: ["formal", "casual", "careful"], note: "Polite and broadly safe." },
  { prompt: "Parce, de una.", answer: "casual", options: ["formal", "casual", "careful"], note: "Friendly Colombian casual." },
  { prompt: "Qué chimba.", answer: "careful", options: ["formal", "casual", "careful"], note: "Common, but can be vulgar depending on setting." },
  { prompt: "Regálame un tinto, por favor.", answer: "casual", options: ["formal", "casual", "careful"], note: "Common Colombian service phrasing." },
  { prompt: "Vieja, ¿qué más?", answer: "careful", options: ["formal", "casual", "careful"], note: "Can be friendly or rude depending on relationship." },
  { prompt: "Aparte de eso, todo está bien.", answer: "formal", options: ["formal", "casual", "careful"], note: "Neutral and safe." }
];

const speedGames = [
  { prompt: "Flash meaning: todavía no", answer: "not yet", options: ["not yet", "right away", "too far"], note: "Fast recall phrase." },
  { prompt: "Flash meaning: de una", answer: "right away / I'm in", options: ["right away / I'm in", "I forgot", "how much"], note: "Very common in Colombia." },
  { prompt: "Flash meaning: me di cuenta", answer: "I realized", options: ["I realized", "I am driving", "I am angry"], note: "High-frequency structure." },
  { prompt: "Flash meaning: una vuelta", answer: "an errand", options: ["an errand", "a coffee", "a friend"], note: "Colombian daily-life word." },
  { prompt: "Flash meaning: qué pena", answer: "sorry / excuse me", options: ["sorry / excuse me", "how cool", "cash"], note: "Context changes the English." }
];

const situationGames = [
  {
    prompt: "A friend invites you for coffee, but you are busy until later.",
    answer: "Más tarde puedo. ¿Te aviso?",
    options: ["Más tarde puedo. ¿Te aviso?", "Estoy buscando mis llaves.", "Qué chimba."],
    note: "This answers the situation, not just a translation."
  },
  {
    prompt: "You did not understand a fast sentence at work.",
    answer: "¿Me lo puedes repetir más despacio?",
    options: ["¿Me lo puedes repetir más despacio?", "De una, parce.", "Eso queda lejos."],
    note: "Ask for repetition and speed together."
  },
  {
    prompt: "Someone apologizes for being late.",
    answer: "Fresco, no pasa nada.",
    options: ["Fresco, no pasa nada.", "Estoy llevado.", "Regálame un tinto."],
    note: "Very Colombian way to say no worries."
  },
  {
    prompt: "You want to order coffee and be polite.",
    answer: "Regálame un tinto, por favor.",
    options: ["Regálame un tinto, por favor.", "Qué vaina.", "Estoy bravo."],
    note: "Common Colombian service phrasing."
  },
  {
    prompt: "A friend asks if the plan sounds good.",
    answer: "Sí, de una. Me suena bien.",
    options: ["Sí, de una. Me suena bien.", "No he tenido tiempo todavía.", "Aparte de eso."],
    note: "Natural friendly acceptance."
  }
];

const packs = {
  core: {
    name: "Daily core",
    decks: ["daily", "connectors"],
    scene: 2,
    gameMode: "build",
    message: "A balanced daily mix: useful phrases, listening, speaking, and a quick game."
  },
  cafe: {
    name: "Coffee shop",
    decks: ["colombia", "daily"],
    scene: 0,
    gameMode: "situation",
    message: "Practice ordering, asking, and sounding natural in a Colombian cafe."
  },
  work: {
    name: "Work help",
    decks: ["work", "connectors"],
    scene: 5,
    gameMode: "reply",
    message: "Useful phrases for asking, clarifying, checking, and responding."
  },
  errands: {
    name: "Errands",
    decks: ["daily", "colombia"],
    scene: 1,
    gameMode: "build",
    message: "Short phrases for moving around, asking, and handling little tasks."
  },
  plans: {
    name: "Making plans",
    decks: ["daily", "slang"],
    scene: 3,
    gameMode: "situation",
    message: "Casual replies for coffee, timing, yes/no, and friend texts."
  },
  slang: {
    name: "Colombian slang",
    decks: ["slang"],
    scene: 4,
    gameMode: "tone",
    message: "Recognize what people say, with tone notes so you know when to be careful."
  }
};

const unlocks = [
  { id: "cafe", label: "Cafe pack", minXp: 0 },
  { id: "work", label: "Work pack", minXp: 60 },
  { id: "plans", label: "Plans pack", minXp: 120 },
  { id: "slang", label: "Slang lab", minXp: 220 },
  { id: "conversation", label: "Conversation mode", minXp: 360 },
  { id: "recap", label: "Weekly coach", minXp: 0 }
];

const missions = [
  ["m1", "Name the room", "Point to ten objects near you and say each name in Spanish. Guess first, check later."],
  ["m2", "One real sentence", "Narrate one thing you are doing: Estoy preparando..., necesito..., voy a..."],
  ["m3", "Input burst", "Listen to Spanish audio for five minutes. Your only job is catching familiar words."],
  ["m4", "No-English retry", "When you forget a word, describe around it in Spanish instead of switching immediately."],
  ["m5", "Slang radar", "Notice one casual phrase in a song, video, or conversation. Save it only after you understand the tone."],
  ["m6", "Coffee order", "Say a full coffee order out loud, including por favor and gracias."],
  ["m7", "Text yourself", "Write one short Spanish text you could actually send someone."],
  ["m8", "Three connectors", "Use aunque, entonces, and aparte de eso in three quick sentences."]
].map(([id, title, text]) => ({ id, title, text }));

const levels = [
  { name: "Survival", min: 0 },
  { name: "Daily Life", min: 120 },
  { name: "Colombian Flow", min: 300 },
  { name: "Conversation Mode", min: 650 },
  { name: "Living In It", min: 1100 }
];

const dailySteps = [
  { key: "review", label: "Review", tab: "review" },
  { key: "listen", label: "Listen", tab: "listen" },
  { key: "speak", label: "Speak", tab: "speak" },
  { key: "play", label: "Play", tab: "play" },
  { key: "live", label: "Live", tab: "live" }
];

const defaultState = {
  cards: {},
  streak: 0,
  lastPractice: "",
  completedMissions: {},
  journal: [],
  totalXp: 0,
  todayXp: 0,
  xpDate: "",
  savedCards: [],
  hardCards: [],
  mistakeLog: [],
  activityLog: [],
  selectedPack: "core",
  rotation: { scene: 0, speak: 0, puzzle: 0, lastSessionDate: "" },
  session: { active: false, step: 0, completed: [], pack: "core" }
};

let state = loadState();
let currentCard = null;
let currentScene = state.rotation.scene || 0;
let currentSpeak = state.rotation.speak || 0;
let currentPuzzle = state.rotation.puzzle || 0;
let selectedChoice = "";
let builtWords = [];
let availableWords = [];
let deferredPrompt = null;
let toastTimer = null;

const els = {
  tabs: document.querySelectorAll(".tab"),
  views: document.querySelectorAll(".view"),
  streakCount: document.getElementById("streakCount"),
  levelCount: document.getElementById("levelCount"),
  dueCount: document.getElementById("dueCount"),
  xpCount: document.getElementById("xpCount"),
  levelName: document.getElementById("levelName"),
  dailyTitle: document.getElementById("dailyTitle"),
  dailyMessage: document.getElementById("dailyMessage"),
  packSelect: document.getElementById("packSelect"),
  xpBar: document.getElementById("xpBar"),
  xpGoalText: document.getElementById("xpGoalText"),
  startDaily: document.getElementById("startDaily"),
  pathSteps: document.getElementById("pathSteps"),
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
  saveCard: document.getElementById("saveCard"),
  weeklyRecap: document.getElementById("weeklyRecap"),
  unlockList: document.getElementById("unlockList"),
  exportProgress: document.getElementById("exportProgress"),
  importProgress: document.getElementById("importProgress"),
  importFile: document.getElementById("importFile"),
  savedList: document.getElementById("savedList"),
  clearSaved: document.getElementById("clearSaved"),
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
  playTitle: document.getElementById("playTitle"),
  gamePromptLabel: document.getElementById("gamePromptLabel"),
  gameMode: document.getElementById("gameMode"),
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
  installButton: document.getElementById("installButton"),
  toast: document.getElementById("toast")
};

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function loadState() {
  const oldState = JSON.parse(localStorage.getItem("vive-spanish-state-v1") || "null");
  const newState = JSON.parse(localStorage.getItem(storageKey) || "null");
  const saved = newState || oldState || {};
  const merged = { ...defaultState, ...saved };
  merged.cards = saved.cards || {};
  merged.savedCards = saved.savedCards || [];
  merged.hardCards = saved.hardCards || [];
  merged.mistakeLog = saved.mistakeLog || [];
  merged.activityLog = saved.activityLog || [];
  merged.selectedPack = saved.selectedPack || "core";
  merged.rotation = { ...defaultState.rotation, ...(saved.rotation || {}) };
  merged.session = { ...defaultState.session, ...(saved.session || {}) };
  if (merged.xpDate !== todayKey()) {
    merged.todayXp = 0;
    merged.xpDate = todayKey();
  }
  return merged;
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function cardProgress(card) {
  if (!state.cards[card.id]) {
    state.cards[card.id] = { box: 0, due: Date.now(), seen: 0, correct: 0 };
  }
  return state.cards[card.id];
}

function dueCards() {
  const deck = els.deckFilter.value;
  const pack = packs[state.selectedPack] || packs.core;
  const now = Date.now();
  return cards
    .filter((card) => deck === "all" || card.deck === deck)
    .filter((card) => deck !== "all" || pack.decks.includes(card.deck))
    .filter((card) => cardProgress(card).due <= now)
    .sort((a, b) => cardProgress(a).due - cardProgress(b).due);
}

function levelInfo() {
  let index = 0;
  levels.forEach((level, i) => {
    if (state.totalXp >= level.min) index = i;
  });
  return { index, number: index + 1, ...levels[index], next: levels[index + 1] };
}

function awardXp(amount, reason) {
  state.todayXp += amount;
  state.totalXp += amount;
  logActivity(reason, amount);
  updateStreak();
  saveState();
  updateStats();
  showToast(`+${amount} XP · ${reason}`);
}

function logActivity(reason, xp) {
  state.activityLog.push({
    date: todayKey(),
    reason,
    xp,
    pack: state.selectedPack
  });
  state.activityLog = state.activityLog.slice(-250);
}

function updateStreak() {
  const today = todayKey();
  if (state.lastPractice === today) return;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = yesterday.toISOString().slice(0, 10);
  state.streak = state.lastPractice === yesterdayKey ? state.streak + 1 : 1;
  state.lastPractice = today;
}

function updateStats() {
  const info = levelInfo();
  const goal = 40;
  const known = cards.filter((card) => cardProgress(card).box >= 4).length;
  const pack = packs[state.selectedPack] || packs.core;
  els.packSelect.value = state.selectedPack;
  els.streakCount.textContent = state.streak;
  els.levelCount.textContent = info.number;
  els.dueCount.textContent = dueCards().length;
  els.xpCount.textContent = state.todayXp;
  els.levelName.textContent = `Level ${info.number}: ${info.name}`;
  els.xpBar.style.width = `${Math.min(100, Math.round((state.todayXp / goal) * 100))}%`;
  els.xpGoalText.textContent = `${state.todayXp} / ${goal} XP · ${known} known`;

  const remaining = Math.max(0, goal - state.todayXp);
  els.dailyMessage.textContent = remaining
    ? `${pack.message} ${remaining} XP left for today's goal.`
    : "Daily goal hit. Anything extra is bonus Spanish.";
  renderPathSteps();
  renderSaved();
  renderWeeklyRecap();
  renderUnlocks();
}

function switchView(viewId) {
  els.tabs.forEach((button) => button.classList.toggle("is-active", button.dataset.view === viewId));
  els.views.forEach((view) => view.classList.toggle("is-active", view.id === viewId));
}

function startDailySession() {
  const pack = packs[state.selectedPack] || packs.core;
  currentScene = takeRotation("scene", scenes.length, pack.scene);
  currentSpeak = takeRotation("speak", speakPrompts.length);
  currentPuzzle = takeRotation("puzzle", puzzles.length);
  state.rotation.lastSessionDate = todayKey();
  els.gameMode.value = pack.gameMode;
  state.session = { active: true, step: 0, completed: [], pack: state.selectedPack };
  saveState();
  nextCard();
  renderScene();
  renderPuzzle();
  switchView(dailySteps[0].tab);
  renderPathSteps();
  showToast(`${pack.name} started: review first.`);
}

function normalizeIndex(value, length, fallback = 0) {
  const source = Number.isInteger(value) ? value : fallback;
  return ((source % length) + length) % length;
}

function takeRotation(key, length, fallback = 0) {
  const current = normalizeIndex(state.rotation[key], length, fallback);
  state.rotation[key] = (current + 1) % length;
  return current;
}

function storeNextRotation(key, current, length) {
  state.rotation[key] = (normalizeIndex(current, length) + 1) % length;
  saveState();
}

function completeStep(key) {
  if (!state.session.active) return;
  if (!state.session.completed.includes(key)) {
    state.session.completed.push(key);
  }
  if (state.session.completed.length >= dailySteps.length) {
    state.session.active = false;
    awardXp(10, "daily path complete");
    showToast("Path complete. You lived in Spanish today.");
  } else {
    const nextIndex = dailySteps.findIndex((step) => !state.session.completed.includes(step.key));
    state.session.step = Math.max(0, nextIndex);
    const next = dailySteps[state.session.step];
    saveState();
    switchView(next.tab);
    showToast(`Next: ${next.label}`);
  }
  saveState();
  renderPathSteps();
}

function renderPathSteps() {
  els.pathSteps.innerHTML = "";
  dailySteps.forEach((step, index) => {
    const div = document.createElement("div");
    div.className = "path-step";
    if (state.session.completed.includes(step.key)) div.classList.add("is-done");
    if (state.session.active && state.session.step === index) div.classList.add("is-active");
    div.textContent = step.label;
    els.pathSteps.appendChild(div);
  });
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
  els.cardNote.innerHTML = `${toneBadge(currentCard)} ${currentCard.note}`;
  setGradeButtons(false);
  updateStats();
}

function toneBadge(card) {
  let tone = "safe";
  if (card.deck === "slang") tone = card.level === "Careful" ? "careful" : "casual";
  if (card.note.toLowerCase().includes("formal")) tone = "formal";
  const label = tone === "careful" ? "Use carefully" : tone === "casual" ? "Casual" : tone === "formal" ? "Safe formal" : "Safe";
  return `<span class="tone-badge ${tone}">${label}</span>`;
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
  const intervals = { again: 0, hard: 1, known: 3 };
  progress.seen += 1;
  if (quality === "again") {
    progress.box = Math.max(0, progress.box - 1);
    saveHardCard(currentCard);
    logMistake(currentCard);
    awardXp(2, "honest miss");
  } else {
    progress.correct += 1;
    progress.box = Math.min(5, progress.box + intervals[quality]);
    awardXp(quality === "known" ? 6 : 4, quality === "known" ? "card mastered" : "hard card reviewed");
  }
  const delayDays = [0, 0.04, 0.5, 1, 3, 7][progress.box] || 10;
  progress.due = Date.now() + delayDays * 24 * 60 * 60 * 1000;
  completeStep("review");
  saveState();
  nextCard();
}

function saveHardCard(card) {
  if (!state.hardCards.includes(card.id)) state.hardCards.push(card.id);
}

function logMistake(card) {
  state.mistakeLog.push({ id: card.id, date: todayKey(), deck: card.deck });
  state.mistakeLog = state.mistakeLog.slice(-120);
}

function saveCurrentCard() {
  if (!currentCard) return;
  if (!state.savedCards.includes(currentCard.id)) {
    state.savedCards.push(currentCard.id);
    awardXp(1, "phrase saved");
  } else {
    showToast("Already saved.");
  }
  saveState();
  renderSaved();
}

function renderSaved() {
  els.savedList.innerHTML = "";
  const ids = [...new Set([...state.savedCards, ...state.hardCards])].slice(-12).reverse();
  ids.forEach((id) => {
    const card = cards.find((item) => item.id === id);
    if (!card) return;
    const div = document.createElement("div");
    div.className = "saved-item";
    div.innerHTML = `<strong>${card.answer}</strong><small>${card.prompt}</small><small>${toneBadge(card)} ${card.note}</small>`;
    els.savedList.appendChild(div);
  });
}

function renderWeeklyRecap() {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 6);
  const cutoffKey = cutoff.toISOString().slice(0, 10);
  const week = state.activityLog.filter((item) => item.date >= cutoffKey);
  const days = new Set(week.map((item) => item.date)).size;
  const xp = week.reduce((sum, item) => sum + Number(item.xp || 0), 0);
  const mistakes = state.mistakeLog.filter((item) => item.date >= cutoffKey);
  const hardest = mostCommon(mistakes.map((item) => item.id));
  const hardCard = cards.find((card) => card.id === hardest);
  els.weeklyRecap.textContent = week.length
    ? `${days} active day${days === 1 ? "" : "s"}, ${xp} XP, ${mistakes.length} misses. Hardest phrase: ${hardCard ? hardCard.answer : "none yet"}.`
    : "No weekly data yet. Finish a few reps and this turns into your coach report.";
}

function mostCommon(values) {
  const counts = {};
  values.forEach((value) => {
    counts[value] = (counts[value] || 0) + 1;
  });
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0];
}

function renderUnlocks() {
  els.unlockList.innerHTML = "";
  unlocks.forEach((unlock) => {
    const span = document.createElement("span");
    const unlocked = state.totalXp >= unlock.minXp;
    span.className = `unlock-badge${unlocked ? "" : " is-locked"}`;
    span.textContent = unlocked ? unlock.label : `${unlock.label} · ${unlock.minXp} XP`;
    els.unlockList.appendChild(span);
  });
}

function speak(text, rate = Number(els.rateSlider?.value || 0.82)) {
  if (!("speechSynthesis" in window)) return;
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
  if (!Recognition) return "Recording is not available in this browser, but shadowing still counts.";
  if (!window.isSecureContext) return "Recording usually needs HTTPS or localhost. If this is open from your phone by IP address, use Hear and I said it instead.";
  return "Recording works only after the browser allows microphone access.";
}

function shuffled(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function renderPuzzle() {
  selectedChoice = "";
  builtWords = [];
  els.puzzleFeedback.textContent = "";
  const mode = els.gameMode.value;
  els.dropZone.innerHTML = "";
  els.wordBank.innerHTML = "";

  if (mode === "build") renderBuildGame();
  if (mode === "reply") renderChoiceGame(replyGames[currentPuzzle % replyGames.length], "Choose the natural reply");
  if (mode === "situation") renderChoiceGame(situationGames[currentPuzzle % situationGames.length], "What would you say?");
  if (mode === "tone") renderChoiceGame(toneGames[currentPuzzle % toneGames.length], "Slang, formal, or careful?");
  if (mode === "speed") renderChoiceGame(speedGames[currentPuzzle % speedGames.length], "Fast recall");
}

function renderBuildGame() {
  const puzzle = puzzles[currentPuzzle % puzzles.length];
  availableWords = shuffled(puzzle.es);
  els.playTitle.textContent = "Put it together";
  els.gamePromptLabel.textContent = "Build the Spanish sentence";
  els.puzzleEnglish.textContent = puzzle.en;
  renderBuiltWords();
  renderWordBank();
}

function renderChoiceGame(game, label) {
  els.playTitle.textContent = label;
  els.gamePromptLabel.textContent = label;
  els.puzzleEnglish.textContent = game.prompt;
  game.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "word-chip";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => {
      selectedChoice = option;
      [...els.wordBank.children].forEach((child) => child.classList.remove("is-selected"));
      button.classList.add("is-selected");
      els.dropZone.textContent = option;
    });
    els.wordBank.appendChild(button);
  });
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

function checkPuzzle() {
  const mode = els.gameMode.value;
  let correct = false;
  let target = "";
  let note = "";
  if (mode === "build") {
    target = puzzles[currentPuzzle % puzzles.length].es.join(" ");
    correct = builtWords.join(" ") === target;
  } else {
    const source = mode === "reply" ? replyGames : mode === "situation" ? situationGames : mode === "tone" ? toneGames : speedGames;
    const game = source[currentPuzzle % source.length];
    target = game.answer;
    note = game.note;
    correct = selectedChoice === target;
  }

  if (correct) {
    els.puzzleFeedback.textContent = note || "Correct. Say it out loud once before moving on.";
    speak(target);
    awardXp(mode === "speed" ? 5 : 7, "game win");
    storeNextRotation("puzzle", currentPuzzle, puzzles.length);
    completeStep("play");
  } else {
    els.puzzleFeedback.textContent = `Close. Target: ${target}`;
  }
}

function selectPack() {
  state.selectedPack = els.packSelect.value;
  const pack = packs[state.selectedPack] || packs.core;
  currentScene = pack.scene;
  storeNextRotation("scene", currentScene, scenes.length);
  els.gameMode.value = pack.gameMode;
  state.session.active = false;
  saveState();
  nextCard();
  renderScene();
  renderPuzzle();
  updateStats();
  showToast(`${pack.name} loaded.`);
}

function exportProgress() {
  const payload = {
    app: "Vive Spanish",
    exportedAt: new Date().toISOString(),
    state
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `vive-spanish-progress-${todayKey()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast("Progress export downloaded.");
}

function importProgressFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      const importedState = parsed.state || parsed;
      state = { ...defaultState, ...importedState };
      state.cards = importedState.cards || {};
      state.savedCards = importedState.savedCards || [];
      state.hardCards = importedState.hardCards || [];
      state.mistakeLog = importedState.mistakeLog || [];
      state.activityLog = importedState.activityLog || [];
      state.rotation = { ...defaultState.rotation, ...(importedState.rotation || {}) };
      state.session = { ...defaultState.session, ...(importedState.session || {}) };
      state.selectedPack = importedState.selectedPack || "core";
      currentScene = normalizeIndex(state.rotation.scene, scenes.length);
      currentSpeak = normalizeIndex(state.rotation.speak, speakPrompts.length);
      currentPuzzle = normalizeIndex(state.rotation.puzzle, puzzles.length);
      saveState();
      nextCard();
      renderScene();
      renderSpeak();
      renderPuzzle();
      renderMissions();
      renderJournal();
      updateStats();
      showToast("Progress imported.");
    } catch {
      showToast("That progress file could not be imported.");
    }
  };
  reader.readAsText(file);
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
      if (event.target.checked) {
        awardXp(8, "mission complete");
        completeStep("live");
      }
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
    awardXp(8, "speaking rep");
    storeNextRotation("speak", currentSpeak, speakPrompts.length);
    completeStep("speak");
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

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove("is-visible"), 1800);
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

els.tabs.forEach((tab) => {
  tab.addEventListener("click", () => switchView(tab.dataset.view));
});

els.packSelect.addEventListener("change", selectPack);
els.startDaily.addEventListener("click", startDailySession);
els.deckFilter.addEventListener("change", nextCard);
els.showAnswer.addEventListener("click", () => {
  els.cardAnswer.hidden = false;
  setGradeButtons(true);
});
els.cardSound.addEventListener("click", () => speak(currentCard.answer));
els.againButton.addEventListener("click", () => gradeCard("again"));
els.hardButton.addEventListener("click", () => gradeCard("hard"));
els.knownButton.addEventListener("click", () => gradeCard("known"));
els.saveCard.addEventListener("click", saveCurrentCard);
els.exportProgress.addEventListener("click", exportProgress);
els.importProgress.addEventListener("click", () => els.importFile.click());
els.importFile.addEventListener("change", () => {
  importProgressFile(els.importFile.files[0]);
  els.importFile.value = "";
});
els.clearSaved.addEventListener("click", () => {
  state.savedCards = [];
  state.hardCards = [];
  saveState();
  renderSaved();
  showToast("Personal bank cleared.");
});

els.sceneSound.addEventListener("click", () => {
  speak(scenes[currentScene].es);
  awardXp(5, "listening rep");
  storeNextRotation("scene", currentScene, scenes.length);
  completeStep("listen");
});
els.newScene.addEventListener("click", () => {
  currentScene = (currentScene + 1) % scenes.length;
  storeNextRotation("scene", currentScene, scenes.length);
  renderScene();
});

els.newSpeak.addEventListener("click", () => {
  currentSpeak = (currentSpeak + 1) % speakPrompts.length;
  storeNextRotation("speak", currentSpeak, speakPrompts.length);
  renderSpeak();
});
els.hearSpeakTarget.addEventListener("click", () => speak(speakPrompts[currentSpeak].target));
els.recordButton.addEventListener("click", startRecognition);
els.shadowDone.addEventListener("click", () => {
  els.transcript.textContent = "Marked done. Say it once more without looking if you can.";
  awardXp(8, "shadow speaking");
  storeNextRotation("speak", currentSpeak, speakPrompts.length);
  completeStep("speak");
});

els.gameMode.addEventListener("change", renderPuzzle);
els.newPuzzle.addEventListener("click", () => {
  currentPuzzle += 1;
  storeNextRotation("puzzle", currentPuzzle, puzzles.length);
  renderPuzzle();
});
els.clearPuzzle.addEventListener("click", renderPuzzle);
els.checkPuzzle.addEventListener("click", checkPuzzle);

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
  awardXp(6, "Spanish sentence");
  completeStep("live");
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

els.packSelect.value = state.selectedPack;
nextCard();
renderScene();
renderSpeak();
renderPuzzle();
renderMissions();
renderJournal();
updateStats();
registerServiceWorker();
