const allQuestions = [
  {
    question: "Šta predstavlja RGB model boja?",
    answers: [
      { text: "Aditivnu sintezu (svetlost)", correct: true },
      { text: "Suptraktivnu sintezu", correct: false },
      { text: "Model za štampu", correct: false },
    ],
  },
  {
    question: "Koji model boja se koristi u štampi?",
    answers: [
      { text: "RGB", correct: false },
      { text: "CMYK", correct: true },
      { text: "HSB", correct: false },
    ],
  },
  {
    question: "Šta je 'Edutainment'?",
    answers: [
      { text: "Spoj edukacije i zabave", correct: true },
      { text: "Video editor", correct: false },
      { text: "Vrsta monitora", correct: false },
    ],
  },
  {
    question: "Koja boja u Google logou krši pravilo osnovnih boja?",
    answers: [
      { text: "Crvena", correct: false },
      { text: "Zelena", correct: true },
      { text: "Plava", correct: false },
    ],
  },
  {
    question: "Šta je primarna karakteristika hipermedije?",
    answers: [
      { text: "Nelinearnost", correct: true },
      { text: "Samo tekst", correct: false },
      { text: "Crno-beli prikaz", correct: false },
    ],
  },
  {
    question: "Koja je jedinica za frekvenciju osvežavanja monitora?",
    answers: [
      { text: "Herc (Hz)", correct: true },
      { text: "Piksel (px)", correct: false },
      { text: "Bit", correct: false },
    ],
  },
  {
    question: "Šta znači skraćenica 'GUI'?",
    answers: [
      { text: "Grafički korisnički interfejs", correct: true },
      { text: "Globalna unija igara", correct: false },
      { text: "Glavni unos informacija", correct: false },
    ],
  },
  {
    question:
      "Koja boja se dobija mešanjem svih RGB boja maksimalnog intenziteta?",
    answers: [
      { text: "Bela", correct: true },
      { text: "Crna", correct: false },
      { text: "Siva", correct: false },
    ],
  },
  {
    question: "Koja boja se dobija mešanjem svih CMYK boja?",
    answers: [
      { text: "Crna", correct: true },
      { text: "Bela", correct: false },
      { text: "Zelena", correct: false },
    ],
  },
  {
    question: "Šta je 'Dithering'?",
    answers: [
      { text: "Simulacija boja koje nedostaju", correct: true },
      { text: "Vrsta štampe", correct: false },
      { text: "Snimanje zvuka", correct: false },
    ],
  },

  {
    question: "Osnovni element rasterske grafike je?",
    answers: [
      { text: "Piksel", correct: true },
      { text: "Vektor", correct: false },
      { text: "Linija", correct: false },
    ],
  },
  {
    question: "Koja grafika ne gubi kvalitet pri uvećanju?",
    answers: [
      { text: "Vektorska", correct: true },
      { text: "Rasterska", correct: false },
      { text: "Bitmap", correct: false },
    ],
  },
  {
    question: "Koji format slike podržava prozirnost (transparenciju)?",
    answers: [
      { text: "PNG", correct: true },
      { text: "JPEG", correct: false },
      { text: "BMP", correct: false },
    ],
  },
  {
    question: "Šta znači skraćenica 'DPI'?",
    answers: [
      { text: "Tačaka po inču", correct: true },
      { text: "Digitalni prikaz informacija", correct: false },
      { text: "Dupli pikseli", correct: false },
    ],
  },
  {
    question: "Koji format je najbolji za fotografije sa mnogo detalja?",
    answers: [
      { text: "JPEG", correct: true },
      { text: "GIF", correct: false },
      { text: "SVG", correct: false },
    ],
  },
  {
    question: "Koji format je isključivo vektorski?",
    answers: [
      { text: "SVG", correct: true },
      { text: "PNG", correct: false },
      { text: "TIFF", correct: false },
    ],
  },
  {
    question: "Koliko boja maksimalno podržava standardni GIF?",
    answers: [
      { text: "256", correct: true },
      { text: "16 miliona", correct: false },
      { text: "2", correct: false },
    ],
  },
  {
    question: "Šta je 'Antialiasing'?",
    answers: [
      { text: "Omekšavanje ivica piksela", correct: true },
      { text: "Uvećanje slike", correct: false },
      { text: "Promena formata", correct: false },
    ],
  },
  {
    question: "Koji format slike je 'lossless' (bez gubitaka)?",
    answers: [
      { text: "TIFF", correct: true },
      { text: "JPEG", correct: false },
      { text: "WebP (lossy)", correct: false },
    ],
  },
  {
    question: "Šta je rezolucija?",
    answers: [
      { text: "Ukupan broj piksela", correct: true },
      { text: "Dubina boje", correct: false },
      { text: "Težina fajla", correct: false },
    ],
  },

  {
    question: "Šta definiše Šenon-Nikvistova teorema?",
    answers: [
      { text: "Frekvencija uzorkovanja", correct: true },
      { text: "Jačina zvuka", correct: false },
      { text: "Boja glasa", correct: false },
    ],
  },
  {
    question: "Koja je jedinica za jačinu zvuka?",
    answers: [
      { text: "Decibel (dB)", correct: true },
      { text: "Herc (Hz)", correct: false },
      { text: "Vat (W)", correct: false },
    ],
  },
  {
    question: "Standardna frekvencija uzorkovanja za CD kvalitet je?",
    answers: [
      { text: "44.1 kHz", correct: true },
      { text: "22 kHz", correct: false },
      { text: "96 kHz", correct: false },
    ],
  },
  {
    question: "Šta je MP3?",
    answers: [
      { text: "Kompresovani audio format", correct: true },
      { text: "Video format", correct: false },
      { text: "Slika", correct: false },
    ],
  },
  {
    question: "Gornja granica ljudskog sluha je oko?",
    answers: [
      { text: "20.000 Hz", correct: true },
      { text: "5.000 Hz", correct: false },
      { text: "100.000 Hz", correct: false },
    ],
  },
  {
    question: "Šta je MIDI?",
    answers: [
      { text: "Protokol za razmenu muzičkih informacija", correct: true },
      { text: "Zvučni zapis", correct: false },
      { text: "Vrsta zvučnika", correct: false },
    ],
  },
  {
    question: "Koji format zvuka nije kompresovan?",
    answers: [
      { text: "WAV", correct: true },
      { text: "MP3", correct: false },
      { text: "WMA", correct: false },
    ],
  },
  {
    question: "Šta je 'Mono' zvuk?",
    answers: [
      { text: "Zvuk iz jednog kanala", correct: true },
      { text: "Zvuk iz dva kanala", correct: false },
      { text: "Tihi zvuk", correct: false },
    ],
  },
  {
    question: "Šta je 'Bit depth' kod zvuka?",
    answers: [
      { text: "Broj bita po uzorku", correct: true },
      { text: "Brzina pesme", correct: false },
      { text: "Dužina trajanja", correct: false },
    ],
  },
  {
    question: "Koji uređaj pretvara analogni zvuk u digitalni?",
    answers: [
      { text: "A/D konvertor", correct: true },
      { text: "Monitor", correct: false },
      { text: "Štampač", correct: false },
    ],
  },

  {
    question: "Koliko fps ima PAL standard?",
    answers: [
      { text: "25 fps", correct: true },
      { text: "30 fps", correct: false },
      { text: "60 fps", correct: false },
    ],
  },
  {
    question: "Koji je američki TV standard?",
    answers: [
      { text: "NTSC", correct: true },
      { text: "PAL", correct: false },
      { text: "SECAM", correct: false },
    ],
  },
  {
    question: "Šta je kodek?",
    answers: [
      { text: "Softver za kompresiju/dekompresiju", correct: true },
      { text: "Vrsta kabla", correct: false },
      { text: "Ekran", correct: false },
    ],
  },
  {
    question: "Koji format je najčešći za web video?",
    answers: [
      { text: "MP4", correct: true },
      { text: "AVI", correct: false },
      { text: "MOV", correct: false },
    ],
  },
  {
    question: "Šta znači skraćenica 'FPS'?",
    answers: [
      { text: "Slike u sekundi", correct: true },
      { text: "Prva pozicija ekrana", correct: false },
      { text: "Brzina fajla", correct: false },
    ],
  },
  {
    question: "Šta je 'Aspect Ratio'?",
    answers: [
      { text: "Odnos širine i visine ekrana", correct: true },
      { text: "Brzina interneta", correct: false },
      { text: "Osvetljenje", correct: false },
    ],
  },
  {
    question: "Koja je rezolucija Full HD videa?",
    answers: [
      { text: "1920x1080", correct: true },
      { text: "1280x720", correct: false },
      { text: "800x600", correct: false },
    ],
  },
  {
    question: "Šta je 'Streaming'?",
    answers: [
      { text: "Prenos podataka u realnom vremenu", correct: true },
      { text: "Download fajla", correct: false },
      { text: "Snimanje diska", correct: false },
    ],
  },
  {
    question: "Koji kodek se najčešće koristi za HD video?",
    answers: [
      { text: "H.264", correct: true },
      { text: "MP3", correct: false },
      { text: "JPEG", correct: false },
    ],
  },
  {
    question: "Šta je animacija?",
    answers: [
      { text: "Brza smena statičnih slika", correct: true },
      { text: "Jedna slika", correct: false },
      { text: "Samo zvuk", correct: false },
    ],
  },

  {
    question: "Koji fontovi su bolji za štampane knjige?",
    answers: [
      { text: "Serifni", correct: true },
      { text: "Sans-serifni", correct: false },
      { text: "Monospace", correct: false },
    ],
  },
  {
    question: "Šta je 'Kerning'?",
    answers: [
      { text: "Razmak između dva slova", correct: true },
      { text: "Veličina fonta", correct: false },
      { text: "Debljina slova", correct: false },
    ],
  },
  {
    question: "Koji font je Sans Serif?",
    answers: [
      { text: "Arial", correct: true },
      { text: "Times New Roman", correct: false },
      { text: "Courier", correct: false },
    ],
  },
  {
    question: "Šta je 'Leading'?",
    answers: [
      { text: "Razmak između redova", correct: true },
      { text: "Prvo slovo", correct: false },
      { text: "Naslov", correct: false },
    ],
  },
  {
    question: "Šta je 'Typography'?",
    answers: [
      { text: "Umetnost uređenja teksta", correct: true },
      { text: "Pisanje koda", correct: false },
      { text: "Crtanje", correct: false },
    ],
  },
  {
    question: "Koji font je Monospace (fiksne širine)?",
    answers: [
      { text: "Courier New", correct: true },
      { text: "Verdana", correct: false },
      { text: "Georgia", correct: false },
    ],
  },
  {
    question: "Šta znači 'Bold'?",
    answers: [
      { text: "Podebljan tekst", correct: true },
      { text: "Iskošen tekst", correct: false },
      { text: "Podvučen tekst", correct: false },
    ],
  },
  {
    question: "Šta je 'Italic'?",
    answers: [
      { text: "Iskošen tekst", correct: true },
      { text: "Mala slova", correct: false },
      { text: "Velika slova", correct: false },
    ],
  },
  {
    question: "Standardna jedinica za veličinu fonta je?",
    answers: [
      { text: "Point (pt)", correct: true },
      { text: "Piksel (px)", correct: false },
      { text: "Inč", correct: false },
    ],
  },
  {
    question: "Šta je 'Lorem Ipsum'?",
    answers: [
      { text: "Tekst čuvar mesta (placeholder)", correct: true },
      { text: "Vrsta fonta", correct: false },
      { text: "Programski jezik", correct: false },
    ],
  },

  {
    question: "Šta znači HTML?",
    answers: [
      { text: "HyperText Markup Language", correct: true },
      { text: "High Tech Modern Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
    ],
  },
  {
    question: "Koji tag se koristi za ubacivanje slike?",
    answers: [
      { text: "<img>", correct: true },
      { text: "<picture>", correct: false },
      { text: "<src>", correct: false },
    ],
  },
  {
    question: "Koji tag se koristi za linkove?",
    answers: [
      { text: "<a>", correct: true },
      { text: "<link>", correct: false },
      { text: "<href>", correct: false },
    ],
  },
  {
    question: "Šta radi CSS?",
    answers: [
      { text: "Definiše stil i izgled", correct: true },
      { text: "Strukturu teksta", correct: false },
      { text: "Baze podataka", correct: false },
    ],
  },
  {
    question: "Šta je JavaScript?",
    answers: [
      { text: "Programski jezik za interaktivnost", correct: true },
      { text: "Stilski jezik", correct: false },
      { text: "Vrsta slike", correct: false },
    ],
  },
  {
    question: "Koji tag se koristi za najveći naslov?",
    answers: [
      { text: "<h1>", correct: true },
      { text: "<h6>", correct: false },
      { text: "<head>", correct: false },
    ],
  },
  {
    question: "Šta znači 'WWW'?",
    answers: [
      { text: "World Wide Web", correct: true },
      { text: "World Wide Wood", correct: false },
      { text: "Web World Wide", correct: false },
    ],
  },
  {
    question: "Šta je URL?",
    answers: [
      { text: "Adresa veb stranice", correct: true },
      { text: "Vrsta koda", correct: false },
      { text: "Ime slike", correct: false },
    ],
  },
  {
    question: "Koji tag definiše listu sa brojevima?",
    answers: [
      { text: "<ol>", correct: true },
      { text: "<ul>", correct: false },
      { text: "<li>", correct: false },
    ],
  },
  {
    question: "Šta je 'Responsive design'?",
    answers: [
      { text: "Prilagođavanje svim ekranima", correct: true },
      { text: "Brzo učitavanje", correct: false },
      { text: "Dizajn u bojama", correct: false },
    ],
  },

  {
    question: "Šta je PDF?",
    answers: [
      { text: "Portable Document Format", correct: true },
      { text: "Print Data File", correct: false },
      { text: "Personal Digital File", correct: false },
    ],
  },
  {
    question: "Koji je najbrži tip prenosa podataka?",
    answers: [
      { text: "Optički kabl", correct: true },
      { text: "Bakarne žice", correct: false },
      { text: "Radio talasi", correct: false },
    ],
  },
  {
    question: "Šta je 'Cloud computing'?",
    answers: [
      { text: "Skladištenje podataka na internetu", correct: true },
      { text: "Vremenska prognoza", correct: false },
      { text: "Crtanje oblaka", correct: false },
    ],
  },
  {
    question: "Šta je 'Virtual Reality' (VR)?",
    answers: [
      { text: "Potpuno digitalno okruženje", correct: true },
      { text: "Stvarni svet", correct: false },
      { text: "Samo zvuk", correct: false },
    ],
  },
  {
    question: "Šta je 'Augmented Reality' (AR)?",
    answers: [
      { text: "Digitalni elementi u stvarnom svetu", correct: true },
      { text: "Crno-bela slika", correct: false },
      { text: "Video igra", correct: false },
    ],
  },
  {
    question: "Šta je 'Pixel Art'?",
    answers: [
      { text: "Umetnost na nivou piksela", correct: true },
      { text: "Moderna skulptura", correct: false },
      { text: "Vrsta muzike", correct: false },
    ],
  },
  {
    question: "Koji format koristi Photoshop?",
    answers: [
      { text: ".PSD", correct: true },
      { text: ".AI", correct: false },
      { text: ".DOC", correct: false },
    ],
  },
  {
    question: "Koji format koristi Illustrator?",
    answers: [
      { text: ".AI", correct: true },
      { text: ".PSD", correct: false },
      { text: ".JPG", correct: false },
    ],
  },
  {
    question: "Šta je 'Storyboard'?",
    answers: [
      { text: "Vizuelni plan videa", correct: true },
      { text: "Tastatura", correct: false },
      { text: "Vrsta drveta", correct: false },
    ],
  },
  {
    question: "Šta je 'Metadata'?",
    answers: [
      { text: "Podaci o podacima", correct: true },
      { text: "Velika baza", correct: false },
      { text: "Brzi podaci", correct: false },
    ],
  },
  {
    question: "Šta je 'Bitrate'?",
    answers: [
      { text: "Količina podataka u sekundi", correct: true },
      { text: "Veličina ekrana", correct: false },
      { text: "Boja", correct: false },
    ],
  },
  {
    question: "Šta je 'Firewall'?",
    answers: [
      { text: "Mrežna zaštita", correct: true },
      { text: "Grejač", correct: false },
      { text: "Program za crtanje", correct: false },
    ],
  },
  {
    question: "Šta je 'Bandwidth'?",
    answers: [
      { text: "Kapacitet mrežne veze", correct: true },
      { text: "Širina monitora", correct: false },
      { text: "Muzička grupa", correct: false },
    ],
  },
  {
    question: "Šta je 'Icon'?",
    answers: [
      { text: "Mala grafička reprezentacija", correct: true },
      { text: "Velika slika", correct: false },
      { text: "Tekst", correct: false },
    ],
  },
  {
    question: "Šta je 'Plug-in'?",
    answers: [
      { text: "Dodatak softveru", correct: true },
      { text: "Kabl za struju", correct: false },
      { text: "Vrsta virusa", correct: false },
    ],
  },
  {
    question: "Šta je 'Cache'?",
    answers: [
      { text: "Privremena memorija", correct: true },
      { text: "Novac", correct: false },
      { text: "Trajni disk", correct: false },
    ],
  },
  {
    question: "Koji je osnovni jezik za baze podataka?",
    answers: [
      { text: "SQL", correct: true },
      { text: "HTML", correct: false },
      { text: "CSS", correct: false },
    ],
  },
  {
    question: "Šta je 'Thumbnail'?",
    answers: [
      { text: "Mala sličica za pregled", correct: true },
      { text: "Nokat", correct: false },
      { text: "Veliki poster", correct: false },
    ],
  },
  {
    question: "Šta je 'Infografika'?",
    answers: [
      { text: "Vizuelni prikaz informacija", correct: true },
      { text: "Samo broj", correct: false },
      { text: "Audio zapis", correct: false },
    ],
  },
  {
    question: "Šta je 'Podcast'?",
    answers: [
      { text: "Audio serijal na internetu", correct: true },
      { text: "Vrsta koda", correct: false },
      { text: "Štampani časopis", correct: false },
    ],
  },
  {
    question: "Šta je 'Vectorization'?",
    answers: [
      { text: "Pretvaranje rastera u vektore", correct: true },
      { text: "Bojenje", correct: false },
      { text: "Brisanje", correct: false },
    ],
  },
  {
    question: "Šta je 'Compression'?",
    answers: [
      { text: "Smanjenje veličine fajla", correct: true },
      { text: "Uvećanje slike", correct: false },
      { text: "Promena boje", correct: false },
    ],
  },
  {
    question: "Šta je 'Raw' format?",
    answers: [
      { text: "Neobrađeni podaci sa senzora", correct: true },
      { text: "Gotova slika", correct: false },
      { text: "Samo tekst", correct: false },
    ],
  },
  {
    question: "Šta je 'CMYK' K?",
    answers: [
      { text: "Crna (Key)", correct: true },
      { text: "Plava", correct: false },
      { text: "Kraljevska", correct: false },
    ],
  },
  {
    question: "Šta je 'Vignetting'?",
    answers: [
      { text: "Zatamnjenje ivica slike", correct: true },
      { text: "Osvetljenje centra", correct: false },
      { text: "Zamućenje", correct: false },
    ],
  },
  {
    question: "Šta je 'Saturation'?",
    answers: [
      { text: "Intenzitet boje", correct: true },
      { text: "Svetlina", correct: false },
      { text: "Kontrast", correct: false },
    ],
  },
  {
    question: "Šta je 'Hue'?",
    answers: [
      { text: "Sama nijansa boje", correct: true },
      { text: "Tamnoća", correct: false },
      { text: "Veličina", correct: false },
    ],
  },
  {
    question: "Šta je 'Contrast'?",
    answers: [
      { text: "Razlika između svetlog i tamnog", correct: true },
      { text: "Broj boja", correct: false },
      { text: "Oštrina", correct: false },
    ],
  },
  {
    question: "Šta je 'Blur'?",
    answers: [
      { text: "Zamućenje slike", correct: true },
      { text: "Izoštravanje", correct: false },
      { text: "Sečenje", correct: false },
    ],
  },
  {
    question: "Šta je 'Crop'?",
    answers: [
      { text: "Isecanje delova slike", correct: true },
      { text: "Bojenje", correct: false },
      { text: "Rotacija", correct: false },
    ],
  },
  {
    question: "Šta je 'Aspect Ratio' 16:9?",
    answers: [
      { text: "Widescreen standard", correct: true },
      { text: "Kvadrat", correct: false },
      { text: "Vertikalni video", correct: false },
    ],
  },
  {
    question: "Koji je prečnik standardnog CD-a?",
    answers: [
      { text: "12 cm", correct: true },
      { text: "20 cm", correct: false },
      { text: "5 cm", correct: false },
    ],
  },
  {
    question: "Šta je 'UI'?",
    answers: [
      { text: "User Interface", correct: true },
      { text: "Unique Info", correct: false },
      { text: "Unit Item", correct: false },
    ],
  },
  {
    question: "Šta je 'UX'?",
    answers: [
      { text: "User Experience", correct: true },
      { text: "Unit X", correct: false },
      { text: "User Xylophone", correct: false },
    ],
  },
  {
    question: "Šta je 'SaaS'?",
    answers: [
      { text: "Software as a Service", correct: true },
      { text: "System as a Service", correct: false },
      { text: "Samo jedan sistem", correct: false },
    ],
  },
  {
    question: "Šta je 'Open Source'?",
    answers: [
      { text: "Softver otvorenog koda", correct: true },
      { text: "Zatvoren program", correct: false },
      { text: "Plaćeni softver", correct: false },
    ],
  },
  {
    question: "Koji je najpoznatiji sajt za video?",
    answers: [
      { text: "YouTube", correct: true },
      { text: "Google", correct: false },
      { text: "Facebook", correct: false },
    ],
  },
  {
    question: "Šta je 'Watermark'?",
    answers: [
      { text: "Prozirni logo za zaštitu", correct: true },
      { text: "Čaša vode", correct: false },
      { text: "Pozadina", correct: false },
    ],
  },
  {
    question: "Šta je 'Template'?",
    answers: [
      { text: "Unapred pripremljen šablon", correct: true },
      { text: "Prazan papir", correct: false },
      { text: "Vrsta fonta", correct: false },
    ],
  },
  {
    question: "Šta je 'Multimedija'?",
    answers: [
      { text: "Kombinacija teksta, slike, zvuka i videa", correct: true },
      { text: "Samo tekst", correct: false },
      { text: "Samo slika", correct: false },
    ],
  },
];

let selectedQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];

const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const qNum = document.getElementById("q-num");
const totalQ = document.getElementById("total-q");
const quizBox = document.getElementById("question-container");
const resultBox = document.getElementById("result-container");
const scoreVal = document.getElementById("score-val");
const feedbackText = document.getElementById("feedback-text");

function initQuiz() {
  let shuffled = allQuestions.sort(() => Math.random() - 0.5);

  selectedQuestions = shuffled.slice(0, 10);

  currentQuestionIndex = 0;
  userAnswers = [];
  totalQ.innerText = selectedQuestions.length;

  quizBox.classList.remove("d-none");
  resultBox.classList.add("d-none");

  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = selectedQuestions[currentQuestionIndex];
  qNum.innerText = currentQuestionIndex + 1;
  questionText.innerText = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn", "btn-answer");

    button.addEventListener("click", () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}

function resetState() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(answer) {
  userAnswers.push(answer.correct);

  currentQuestionIndex++;

  if (currentQuestionIndex < selectedQuestions.length) {
    showQuestion();
  } else {
    showFinalResults();
  }
}

function showFinalResults() {
  const score = userAnswers.filter((val) => val === true).length;

  quizBox.classList.add("d-none");
  resultBox.classList.remove("d-none");
  scoreVal.innerText = score;

  if (score === 10) {
    feedbackText.innerText =
      "Neverovatno! Svih 10 tačnih odgovora. Ti si majstor multimedije! ✨🏆";
  } else if (score >= 7) {
    feedbackText.innerText =
      "Odličan rezultat! Pokazao/la si zavidno znanje. 🌸💄";
  } else if (score >= 5) {
    feedbackText.innerText =
      "Solidno znanje, ali uvek može bolje. Probaj ponovo! 📚";
  } else {
    feedbackText.innerText =
      "Moglo bi biti bolje. Pregledaj materijale i pokušaj ponovo. ❌";
  }
}

initQuiz();
