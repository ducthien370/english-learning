// Thêm đoạn mã này ngay đầu file để bỏ chặn chính sách tự động phát âm thanh
document.addEventListener('click', function enableAudio() {
    const audio = new Audio();
    audio.play().catch(() => {});
    document.removeEventListener('click', enableAudio);
});

let progress = JSON.parse(localStorage.getItem('vocabProgress')) || {
    vocabulary: 0,
    flashcard: 0,
    quiz: {
        multiple: { easy: 0, medium: 0, hard: 0 },
        listening: { easy: 0, medium: 0, hard: 0 },
        fill: { easy: 0, medium: 0, hard: 0 },
        scramble: { easy: 0, medium: 0, hard: 0 },
        sentence: { easy: 0, medium: 0, hard: 0 }
    },
    grammar: 0,
    score: 0
};
let currentCard = 0, isFlipped = false, currentQuizWord = null, timerId = null;
let wrongAnswers = JSON.parse(localStorage.getItem('wrongAnswers')) || [];
let wrongGrammarAnswers = JSON.parse(localStorage.getItem('wrongGrammarAnswers')) || [];
let quizStats = JSON.parse(localStorage.getItem('quizStats')) || { correct: 0, total: 0, wrongWords: {} };
let grammarStats = JSON.parse(localStorage.getItem('grammarStats')) || { correct: 0, total: 0, wrongExercises: {} };
let isReviewingWrong = false, isReviewingWrongGrammar = false;

// Dữ liệu bảng chữ cái
const alphabet = [
    { letter: "A", pronunciation: "/eɪ/", example: "Apple", image: "images/apple.jpg" },
    { letter: "B", pronunciation: "/biː/", example: "Banana", image: "images/banana.jpg" },
    { letter: "C", pronunciation: "/siː/", example: "Cat", image: "images/cat.jpg" },
    { letter: "D", pronunciation: "/diː/", example: "Dog", image: "images/dog.jpg" },
    { letter: "E", pronunciation: "/iː/", example: "Egg", image: "images/egg.jpg" },
    { letter: "F", pronunciation: "/ɛf/", example: "Fish", image: "images/fish_animal.jpg" },
    { letter: "G", pronunciation: "/dʒiː/", example: "Grape", image: "images/Grape.jpg" },
    { letter: "H", pronunciation: "/eɪtʃ/", example: "Horse", image: "images/horse.jpg" },
    { letter: "I", pronunciation: "/aɪ/", example: "Ice cream", image: "images/Ice cream.jpg" },
    { letter: "J", pronunciation: "/dʒeɪ/", example: "Juice", image: "images/Juice.jpg" },
    { letter: "K", pronunciation: "/keɪ/", example: "Kite", image: "images/Kite.jpg" },
    { letter: "L", pronunciation: "/ɛl/", example: "Lemon", image: "images/lemon.jpg" },
    { letter: "M", pronunciation: "/ɛm/", example: "Mango", image: "images/mango.jpg" },
    { letter: "N", pronunciation: "/ɛn/", example: "Noodle", image: "images/noodle.jpg" },
    { letter: "O", pronunciation: "/oʊ/", example: "Orange", image: "images/orange.jpg" },
    { letter: "P", pronunciation: "/piː/", example: "Pen", image: "images/pen.jpg" },
    { letter: "Q", pronunciation: "/kjuː/", example: "Queen", image: "images/Queen.jpg" },
    { letter: "R", pronunciation: "/ɑːr/", example: "Rice", image: "images/rice.jpg" },
    { letter: "S", pronunciation: "/ɛs/", example: "Soup", image: "images/soup.jpg" },
    { letter: "T", pronunciation: "/tiː/", example: "Table", image: "images/table.jpg" },
    { letter: "U", pronunciation: "/juː/", example: "Umbrella", image: "images/Umbrella.jpg" },
    { letter: "V", pronunciation: "/viː/", example: "Violin", image: "images/Violin.jpg" },
    { letter: "W", pronunciation: "/ˈdʌbəl.juː/", example: "Water", image: "images/water.jpg" },
    { letter: "X", pronunciation: "/ɛks/", example: "Xylophone", image: "images/Xylophone.jpg" },
    { letter: "Y", pronunciation: "/waɪ/", example: "Yogurt", image: "images/Yogurt.jpg" },
    { letter: "Z", pronunciation: "/ziː/", example: "Zebra", image: "images/Zebra.jpg" }
];

const showToast = (text, bgColor, duration = 3000) => {
    const toastNode = document.createElement('div');
    toastNode.className = 'flex items-center';
    const icon = document.createElement('i');
    icon.className = `fas ${bgColor === '#22c55e' ? 'fa-check-circle' : 'fa-times-circle'} mr-2`;
    const textNode = document.createTextNode(text);
    toastNode.appendChild(icon);
    toastNode.appendChild(textNode);
    Toastify({
        node: toastNode,
        duration,
        backgroundColor: bgColor,
        className: "animate__animated animate__bounceInRight rounded-lg shadow-lg",
        style: { background: bgColor }
    }).showToast();
};

const displayAlphabet = () => {
    const alphabetList = document.getElementById('alphabet-list');
    console.log('Displaying alphabet');
    alphabetList.innerHTML = alphabet.map((item, i) => `
        <li class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md flex items-center gap-4 animate__animated animate__fadeInUp" style="animation-delay: ${i * 0.1}s">
            <img src="${item.image}" onerror="this.src='${defaultImage}'" alt="${item.letter}" class="w-20 h-20 object-cover rounded-lg animate__animated animate__bounceIn" loading="lazy">
            <div class="flex-1">
                <strong class="text-2xl font-bold text-green-500 dark:text-green-400">${item.letter} (${item.letter.toLowerCase()})</strong>
                <p class="text-gray-600 dark:text-gray-400">Phát âm: ${item.pronunciation}</p>
                <p class="text-gray-600 dark:text-gray-400">Ví dụ: ${item.example}</p>
            </div>
            <button onclick="playPronunciation(event, '${item.letter}')" class="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 animate-pulse">
                <i class="fas fa-volume-up mr-2"></i>Nghe
            </button>
        </li>`).join('');
};

document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loading');
    loader.classList.remove('hidden');
    try {
        if (localStorage.getItem('theme') === 'dark') document.documentElement.classList.add('dark');
        updateProgressBars();
        displayVocabulary();
        loadFlashcard();
        loadQuiz();
        loadGrammar();
        displayAlphabet();

        // Preload images with error handling
        const imagePromises = [...vocabulary, ...alphabet].map(item => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = item.image;
                img.onload = resolve;
                img.onerror = () => {
                    console.error(`Failed to load image: ${item.image}`);
                    showToast(`Không tìm thấy hình ảnh cho "${item.word || item.letter}"`, "#ef4444");
                    item.image = defaultImage;
                    resolve();
                };
            });
        });

        Promise.all(imagePromises).then(() => {
            setTimeout(() => loader.classList.add('hidden'), 500);
        });

        // Các sự kiện khác
        document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
        document.querySelectorAll('input[name="quiz-type"]').forEach(input => input.addEventListener('change', () => { isReviewingWrong = false; loadQuiz(); }));
        document.querySelectorAll('input[name="difficulty"]').forEach(input => input.addEventListener('change', () => { isReviewingWrong = false; loadQuiz(); }));
        document.getElementById('category-filter').addEventListener('change', () => {
            console.log('Category filter changed to:', document.getElementById('category-filter').value);
            displayVocabulary();
        });
        document.getElementById('search-input').addEventListener('input', debounce(() => {
            console.log('Search input changed:', document.getElementById('search-input').value);
            displayVocabulary();
        }, 300));
        document.getElementById('reset-filter').addEventListener('click', () => {
            document.getElementById('category-filter').value = 'all';
            document.getElementById('search-input').value = '';
            console.log('Reset filter clicked');
            displayVocabulary();
            showToast("Đã xóa bộ lọc!", "#22c55e");
        });
        document.getElementById('reset-progress').addEventListener('click', () => {
            if (confirm('Bạn có chắc muốn reset tiến độ?')) {
                localStorage.removeItem('vocabProgress');
                localStorage.removeItem('wrongAnswers');
                localStorage.removeItem('wrongGrammarAnswers');
                localStorage.removeItem('quizStats');
                localStorage.removeItem('grammarStats');
                progress = {
                    vocabulary: 0,
                    flashcard: 0,
                    quiz: {
                        multiple: { easy: 0, medium: 0, hard: 0 },
                        listening: { easy: 0, medium: 0, hard: 0 },
                        fill: { easy: 0, medium: 0, hard: 0 },
                        scramble: { easy: 0, medium: 0, hard: 0 },
                        sentence: { easy: 0, medium: 0, hard: 0 }
                    },
                    grammar: 0,
                    score: 0
                };
                wrongAnswers = [];
                wrongGrammarAnswers = [];
                quizStats = { correct: 0, total: 0, wrongWords: {} };
                grammarStats = { correct: 0, total: 0, wrongExercises: {} };
                localStorage.setItem('vocabProgress', JSON.stringify(progress));
                localStorage.setItem('wrongAnswers', JSON.stringify(wrongAnswers));
                localStorage.setItem('wrongGrammarAnswers', JSON.stringify(wrongGrammarAnswers));
                localStorage.setItem('quizStats', JSON.stringify(quizStats));
                localStorage.setItem('grammarStats', JSON.stringify(grammarStats));
                showToast("Đã reset tiến độ!", "#22c55e");
                updateProgressBars();
                displayVocabulary();
                loadFlashcard();
                loadQuiz();
                loadGrammar();
                displayAlphabet();
            }
        });
        document.getElementById('review-wrong').addEventListener('click', () => {
            wrongAnswers = JSON.parse(localStorage.getItem('wrongAnswers')) || [];
            if (!wrongAnswers.length) {
                showToast("Chưa có từ sai để ôn tập!", "#ef4444");
                return;
            }
            isReviewingWrong = true;
            loadQuiz();
            showToast("Đang ôn tập từ sai!", "#22c55e");
        });
        document.getElementById('review-wrong-grammar').addEventListener('click', () => {
            wrongGrammarAnswers = JSON.parse(localStorage.getItem('wrongGrammarAnswers')) || [];
            if (!wrongGrammarAnswers.length) {
                showToast("Chưa có câu sai để ôn tập!", "#ef4444");
                return;
            }
            isReviewingWrongGrammar = true;
            loadGrammarExercise(null);
            showToast("Đang ôn tập câu sai!", "#22c55e");
        });
        document.getElementById('flashcard').addEventListener('click', flipCard);
    } catch (e) {
        console.error('Init error:', e);
        showToast(`Lỗi khởi tạo: ${e.message}`, "#ef4444");
        loader.classList.add('hidden');
    }
});

const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    showToast(document.documentElement.classList.contains('dark') ? "Chế độ tối!" : "Chế độ sáng!", "#22c55e", 2000);
};

const updateProgressBars = () => {
    const vocab = getFilteredVocabulary();
    if (!vocab.length) {
        console.warn('No vocabulary found for progress update');
        return;
    }
    document.getElementById('vocab-progress').style.width = `${Math.min((progress.vocabulary / vocab.length) * 100, 100)}%`;
    document.getElementById('vocab-progress-text').textContent = `${Math.min(Math.round((progress.vocabulary / vocab.length) * 100), 100)}%`;
    document.getElementById('flashcard-progress').style.width = `${Math.min((progress.flashcard / vocab.length) * 100, 100)}%`;
    document.getElementById('flashcard-progress-text').textContent = `${Math.min(Math.round((progress.flashcard / vocab.length) * 100), 100)}%`;
    const quizType = document.querySelector('input[name="quiz-type"]:checked')?.value || 'multiple';
    const difficulty = document.querySelector('input[name="difficulty"]:checked')?.value || 'medium';
    document.getElementById('quiz-progress').style.width = `${Math.min((progress.quiz[quizType][difficulty] / vocab.length) * 100, 100)}%`;
    document.getElementById('quiz-progress-text').textContent = `${Math.min(Math.round((progress.quiz[quizType][difficulty] / vocab.length) * 100), 100)}%`;
    document.getElementById('grammar-progress').style.width = `${Math.min((progress.grammar / grammarLessons.length) * 100, 100)}%`;
    document.getElementById('grammar-progress-text').textContent = `${Math.min(Math.round((progress.grammar / grammarLessons.length) * 100), 100)}%`;
    updateQuizStats();
    updateGrammarStats();
};

const getFilteredVocabulary = () => {
    const category = document.getElementById('category-filter')?.value || 'all';
    const search = document.getElementById('search-input')?.value.toLowerCase() || '';
    let filtered = category === 'all' ? vocabulary : vocabulary.filter(item => {
        const matchesCategory = item.category === category;
        console.log(`Checking item: ${item.word}, Category: ${item.category}, Matches: ${matchesCategory}`);
        return matchesCategory;
    });
    if (search) {
        filtered = filtered.filter(item => item.word.toLowerCase().includes(search) || item.meaning.toLowerCase().includes(search));
        console.log(`Filtered by search "${search}":`, filtered);
    }
    console.log(`Filtered vocabulary for category "${category}":`, filtered);
    return filtered;
};

const displayVocabulary = (start = 0, limit = 10) => {
    const vocabList = document.getElementById('vocab-list');
    const vocab = getFilteredVocabulary();
    console.log(`Displaying vocabulary, count: ${vocab.length}, start: ${start}, limit: ${limit}`);
    if (!vocab.length) {
        const category = document.getElementById('category-filter').value;
        vocabList.innerHTML = `<p class="text-center text-gray-500 dark:text-gray-400 animate__animated animate__fadeIn">Không tìm thấy từ vựng cho danh mục "${category === 'all' ? 'Tất cả danh mục' : category}".</p>`;
        showToast(`Không có từ vựng trong danh mục "${category === 'all' ? 'Tất cả danh mục' : category}"`, "#ef4444");
        return;
    }
    const end = Math.min(start + limit, vocab.length);
    vocabList.innerHTML = vocab.slice(start, end).map((item, i) => `
        <li class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md flex items-center gap-4 animate__animated animate__fadeInUp" style="animation-delay: ${i * 0.1}s">
            <img src="${item.image}" onerror="this.src='${defaultImage}'" alt="${item.word}" class="w-20 h-20 object-cover rounded-lg animate__animated animate__bounceIn" loading="lazy">
            <div class="flex-1">
                <strong class="text-2xl font-bold text-green-500 dark:text-green-400">${item.word}</strong>
                <p class="text-gray-600 dark:text-gray-400">Nghĩa: ${item.meaning}</p>
                <p class="text-gray-600 dark:text-gray-400">Ví dụ: ${item.example}</p>
                <p class="text-gray-600 dark:text-gray-400">Phát âm: ${item.pronunciation}</p>
            </div>
            <button onclick="playPronunciation(event, '${item.word}')" class="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 animate-pulse">
                <i class="fas fa-volume-up mr-2"></i>Nghe
            </button>
        </li>`).join('');
    if (end < vocab.length) {
        const btn = document.createElement('button');
        btn.textContent = 'Tải thêm';
        btn.className = 'bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 col-span-full text-center mt-6';
        btn.onclick = () => displayVocabulary(start + limit, limit);
        vocabList.appendChild(btn);
    }
    progress.vocabulary = Math.max(progress.vocabulary, end);
    localStorage.setItem('vocabProgress', JSON.stringify(progress));
    updateProgressBars();
};

const showSection = id => {
    const loader = document.getElementById('loading');
    loader.classList.remove('hidden');
    document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
    const section = document.getElementById(id);
    section.classList.remove('hidden');
    section.classList.add('animate__animated', 'animate__fadeInUp');
    if (id === 'quiz') loadQuiz();
    if (id === 'grammar') loadGrammar();
    if (id === 'alphabet') displayAlphabet();
    setTimeout(() => loader.classList.add('hidden'), 300);
};

const loadFlashcard = () => {
    const vocab = getFilteredVocabulary();
    if (!vocab.length) {
        console.warn('No vocabulary available for flashcard');
        document.getElementById('flashcard').innerHTML = '<p class="text-center text-gray-500 dark:text-gray-400">Không có từ vựng để hiển thị.</p>';
        return;
    }
    const card = document.getElementById('flashcard');
    card.classList.remove('flipped', 'animate__animated', 'animate__flipInY');
    void card.offsetWidth;
    card.classList.add('animate__animated', 'animate__flipInY');
    card.querySelector('.front').innerHTML = `
        <img id="flashcard-image" src="${vocab[currentCard].image}" onerror="this.src='${defaultImage}'" alt="${vocab[currentCard].word}" class="w-24 h-24 object-cover rounded-lg animate__animated animate__bounceIn" loading="lazy">
        <span id="flashcard-word" class="text-2xl font-bold text-center max-w-full text-green-500 dark:text-green-400 mt-4">${vocab[currentCard].word}</span>
        <button onclick="playPronunciation(event, '${vocab[currentCard].word}')" class="mt-4 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 animate-pulse">
            <i class="fas fa-volume-up mr-2"></i>Nghe
        </button>`;
    card.querySelector('.back').innerHTML = `
        <img id="flashcard-back-image" src="${vocab[currentCard].image}" onerror="this.src='${defaultImage}'" alt="${vocab[currentCard].word}" class="w-24 h-24 object-cover rounded-lg animate__animated animate__bounceIn" loading="lazy">
        <span id="flashcard-meaning" class="text-2xl font-bold text-center max-w-full text-green-500 dark:text-green-400 mt-4">${vocab[currentCard].meaning}</span>`;
    progress.flashcard = Math.max(progress.flashcard, currentCard + 1);
    localStorage.setItem('vocabProgress', JSON.stringify(progress));
    updateProgressBars();
};

const flipCard = () => {
    const card = document.getElementById('flashcard');
    isFlipped = !isFlipped;
    card.classList.toggle('flipped', isFlipped);
};

const nextCard = () => {
    const vocab = getFilteredVocabulary();
    if (!vocab.length) {
        console.warn('No vocabulary available for next card');
        return;
    }
    const wrongWords = vocab.filter(item => wrongAnswers.includes(item.word));
    if (wrongWords.length && Math.random() < 0.5) {
        currentCard = vocab.indexOf(wrongWords[Math.floor(Math.random() * wrongWords.length)]);
    } else {
        currentCard = (currentCard + 1) % vocab.length;
    }
    isFlipped = false;
    loadFlashcard();
};

const playPronunciation = (event, word) => {
    event.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
};

const startTimer = (timeLimit) => {
    clearInterval(timerId);
    let timeLeft = timeLimit;
    const timer = document.getElementById('timer');
    timer.textContent = `Thời gian: ${timeLeft}s`;
    timer.classList.remove('hidden');
    timerId = setInterval(() => {
        timeLeft--;
        timer.textContent = `Thời gian: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timerId);
            new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-tone-996.mp3').play();
            showToast("Hết thời gian!", "#ef4444");
            loadQuiz();
        }
    }, 1000);
};

const startQuiz = () => {
    const quizType = document.querySelector('input[name="quiz-type"]:checked').value;
    const difficulty = document.querySelector('input[name="difficulty"]:checked').value;
    const timeLimit = difficulty === 'easy' ? 30 : difficulty === 'medium' ? 20 : 10;
    document.getElementById('quiz-content').classList.remove('hidden');
    document.getElementById('start-quiz-btn').classList.add('hidden');
    startTimer(timeLimit);
};

const updateQuizStats = () => {
    const statsElement = document.getElementById('quiz-stats');
    const accuracy = quizStats.total ? Math.round((quizStats.correct / quizStats.total) * 100) : 0;
    const mostWrongWord = Object.entries(quizStats.wrongWords).reduce((a, b) => a[1] > b[1] ? a : b, ['', 0])[0];
    statsElement.innerHTML = `
        <p class="text-lg text-gray-800 dark:text-gray-200"><i class="fas fa-check-circle mr-2 text-green-500"></i>Số câu đúng: ${quizStats.correct}</p>
        <p class="text-lg text-gray-800 dark:text-gray-200"><i class="fas fa-times-circle mr-2 text-red-500"></i>Tổng số câu: ${quizStats.total}</p>
        <p class="text-lg text-gray-800 dark:text-gray-200"><i class="fas fa-chart-line mr-2 text-blue-500"></i>Tỷ lệ đúng: ${accuracy}%</p>
        ${mostWrongWord ? `<p class="text-lg text-gray-800 dark:text-gray-200"><i class="fas fa-exclamation-triangle mr-2 text-yellow-500"></i>Từ hay sai: ${mostWrongWord}</p>` : ''}
    `;
    statsElement.classList.remove('hidden');
};

const updateGrammarStats = () => {
    const statsElement = document.getElementById('grammar-stats');
    const accuracy = grammarStats.total ? Math.round((grammarStats.correct / grammarStats.total) * 100) : 0;
    const mostWrongExercise = Object.entries(grammarStats.wrongExercises).reduce((a, b) => a[1] > b[1] ? a : b, ['', 0])[0];
    statsElement.innerHTML = `
        <p class="text-lg text-gray-800 dark:text-gray-200"><i class="fas fa-check-circle mr-2 text-green-500"></i>Số câu đúng: ${grammarStats.correct}</p>
        <p class="text-lg text-gray-800 dark:text-gray-200"><i class="fas fa-times-circle mr-2 text-red-500"></i>Tổng số câu: ${grammarStats.total}</p>
        <p class="text-lg text-gray-800 dark:text-gray-200"><i class="fas fa-chart-line mr-2 text-blue-500"></i>Tỷ lệ đúng: ${accuracy}%</p>
        ${mostWrongExercise ? `<p class="text-lg text-gray-800 dark:text-gray-200"><i class="fas fa-exclamation-triangle mr-2 text-yellow-500"></i>Câu hay sai: ${mostWrongExercise}</p>` : ''}
    `;
    statsElement.classList.remove('hidden');
};

const loadGrammar = () => {
    const container = document.getElementById('grammar-container');
    const lessons = isReviewingWrongGrammar ? wrongGrammarAnswers.map(id => grammarLessons.find(l => l.id === id)).filter(Boolean) : grammarLessons;
    if (!lessons.length) {
        container.innerHTML = '<p class="text-center text-gray-500 dark:text-gray-400 animate__animated animate__fadeIn">Không có bài học ngữ pháp.</p>';
        return;
    }
    container.innerHTML = lessons.map((lesson, i) => `
        <div class="grammar-item animate__animated animate__fadeInUp" style="animation-delay: ${i * 0.1}s">
            <i class="${lesson.icon || 'fas fa-book'} icon"></i>
            <h3 class="text-xl font-bold text-green-500 dark:text-green-400">${lesson.title}</h3>
            <p class="text-gray-600 dark:text-gray-400">${lesson.explanation}</p>
            <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2">
                ${lesson.examples.map(ex => `<li>${ex}</li>`).join('')}
            </ul>
            <button onclick="toggleExercise(${lesson.id})" class="mt-4 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105">
                <i class="fas fa-pencil-alt mr-2"></i>Làm bài tập
            </button>
            <div id="exercise-${lesson.id}" class="exercise-container hidden"></div>
        </div>`).join('');
    if (!isReviewingWrongGrammar) {
        progress.grammar = Math.max(progress.grammar, lessons.length);
        localStorage.setItem('vocabProgress', JSON.stringify(progress));
        updateProgressBars();
    }
};

const toggleExercise = (lessonId) => {
    const exerciseContainer = document.getElementById(`exercise-${lessonId}`);
    const isHidden = exerciseContainer.classList.contains('hidden');
    exerciseContainer.classList.toggle('hidden', !isHidden);
    exerciseContainer.classList.toggle('show', isHidden);
    if (isHidden) {
        loadGrammarExercise(lessonId);
        exerciseContainer.scrollIntoView({ behavior: 'smooth' });
    }
};

const loadGrammarExercise = (lessonId) => {
    const lessons = isReviewingWrongGrammar ? wrongGrammarAnswers.map(id => grammarLessons.find(l => l.id === id)).filter(Boolean) : grammarLessons;
    const lesson = lessonId ? grammarLessons.find(l => l.id === lessonId) : lessons[Math.floor(Math.random() * lessons.length)];
    if (!lesson) {
        console.warn('No lesson found for ID:', lessonId);
        return;
    }
    const exercise = lesson.exercises[Math.floor(Math.random() * lesson.exercises.length)];
    const container = document.getElementById(`exercise-${lesson.id}`);
    container.innerHTML = `
        <h4 class="text-lg font-semibold text-green-500 dark:text-green-400">${exercise.question}</h4>
        ${exercise.type === 'multiple' ? `
            ${exercise.answers.map((ans, i) => `
                <label class="block mt-2">
                    <input type="radio" name="exercise-${lesson.id}" value="${ans}" class="form-radio text-green-500">
                    <span class="ml-2 text-gray-600 dark:text-gray-400">${ans}</span>
                </label>`).join('')}
        ` : `
            <input type="text" id="exercise-input-${lesson.id}" class="mt-2 w-full p-2 border rounded-lg focus:ring-green-500" placeholder="Nhập câu trả lời...">
        `}
        <button onclick="checkGrammarAnswer(${lesson.id}, '${exercise.correct.replace(/'/g, "\\'")}', '${exercise.type}')" class="mt-4 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105">
            <i class="fas fa-check mr-2"></i>Kiểm tra
        </button>`;
};

const checkGrammarAnswer = (lessonId, correctAnswer, type) => {
    const container = document.getElementById(`exercise-${lessonId}`);
    const input = type === 'multiple' ? container.querySelector(`input[name="exercise-${lessonId}"]:checked`) : document.getElementById(`exercise-input-${lessonId}`);
    if (!input || (type === 'multiple' && !input.value) || (type === 'fill' && !input.value.trim())) {
        showToast("Vui lòng chọn hoặc nhập câu trả lời!", "#ef4444");
        return;
    }
    const userAnswer = type === 'multiple' ? input.value : input.value.trim();
    grammarStats.total++;
    if (userAnswer === correctAnswer) {
        grammarStats.correct++;
        showToast("Chính xác! 🎉", "#22c55e");
        const correctAudio = new Audio('sounds/correct.mp3');
        correctAudio.play().catch(error => console.error('Lỗi phát âm thanh đúng:', error));
        if (!isReviewingWrongGrammar) {
            wrongGrammarAnswers = wrongGrammarAnswers.filter(id => id !== lessonId);
            localStorage.setItem('wrongGrammarAnswers', JSON.stringify(wrongGrammarAnswers));
        }
    } else {
        grammarStats.wrongExercises[correctAnswer] = (grammarStats.wrongExercises[correctAnswer] || 0) + 1;
        showToast(`Sai rồi! Đáp án đúng: ${correctAnswer}`, "#ef4444");
        const wrongAudio = new Audio('sounds/wrong.mp3');
        wrongAudio.play().catch(error => console.error('Lỗi phát âm thanh sai:', error));
        if (!wrongGrammarAnswers.includes(lessonId) && !isReviewingWrongGrammar) {
            wrongGrammarAnswers.push(lessonId);
            localStorage.setItem('wrongGrammarAnswers', JSON.stringify(wrongGrammarAnswers));
        }
    }
    localStorage.setItem('grammarStats', JSON.stringify(grammarStats));
    updateGrammarStats();
    loadGrammarExercise(lessonId);
};

const loadQuiz = () => {
    const vocab = isReviewingWrong ? wrongAnswers.map(word => vocabulary.find(v => v.word === word)).filter(Boolean) : getFilteredVocabulary();
    if (!vocab.length) {
        console.warn('No vocabulary available for quiz');
        document.getElementById('quiz-container').innerHTML = '<p class="text-center text-gray-500 dark:text-gray-400 animate__animated animate__fadeIn">Không có từ vựng để tạo quiz.</p>';
        showToast("Không có từ vựng để tạo quiz!", "#ef4444");
        return;
    }
    const quizType = document.querySelector('input[name="quiz-type"]:checked').value;
    const difficulty = document.querySelector('input[name="difficulty"]:checked').value;
    currentQuizWord = vocab[Math.floor(Math.random() * vocab.length)];
    const timeLimit = difficulty === 'easy' ? 30 : difficulty === 'medium' ? 20 : 10;
    const container = document.getElementById('quiz-container');
    container.innerHTML = `
        <img src="${currentQuizWord.image}" onerror="this.src='${defaultImage}'" alt="${currentQuizWord.word}" class="w-32 h-32 object-cover rounded-lg mx-auto mb-4 animate__animated animate__bounceIn" loading="lazy">
        <div id="timer" class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Thời gian: ${timeLimit}s</div>
        <div id="quiz-content" class="hidden">
            ${quizType === 'multiple' ? `
                <p class="text-lg font-semibold text-green-500 dark:text-green-400">Nghĩa của "${currentQuizWord.word}" là gì?</p>
                ${shuffleArray([currentQuizWord.meaning, ...getRandomMeanings(vocab, currentQuizWord, 3)]).map((meaning, i) => `
                    <label class="block mt-2">
                        <input type="radio" name="quiz-answer" value="${meaning}" class="form-radio text-green-500">
                        <span class="ml-2 text-gray-600 dark:text-gray-400">${meaning}</span>
                    </label>`).join('')}
            ` : quizType === 'listening' ? `
                <p class="text-lg font-semibold text-green-500 dark:text-green-400">Bạn nghe được từ gì?</p>
                <button onclick="playPronunciation(event, '${currentQuizWord.word}')" class="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105">
                    <i class="fas fa-volume-up mr-2"></i>Nghe
                </button>
                <input type="text" id="quiz-input" class="mt-2 w-full p-2 border rounded-lg focus:ring-green-500" placeholder="Nhập từ bạn nghe được...">
            ` : quizType === 'fill' ? `
                <p class="text-lg font-semibold text-green-500 dark:text-green-400">Điền từ vào chỗ trống: ${currentQuizWord.example.replace(currentQuizWord.word, '____')}</p>
                <input type="text" id="quiz-input" class="mt-2 w-full p-2 border rounded-lg focus:ring-green-500" placeholder="Nhập từ...">
            ` : quizType === 'scramble' ? `
                <p class="text-lg font-semibold text-green-500 dark:text-green-400">Sắp xếp lại từ: ${shuffleArray(currentQuizWord.word.toLowerCase().split('')).join(' ')}</p>
                <input type="text" id="quiz-input" class="mt-2 w-full p-2 border rounded-lg focus:ring-green-500" placeholder="Nhập từ...">
            ` : `
                <p class="text-lg font-semibold text-green-500 dark:text-green-400">Điền từ đúng vào câu: ____ ${currentQuizWord.example.split(currentQuizWord.word)[1]}</p>
                <input type="text" id="quiz-input" class="mt-2 w-full p-2 border rounded-lg focus:ring-green-500" placeholder="Nhập từ...">
            `}
            <button id="check-answer-btn" onclick="checkAnswers()" class="mt-4 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105">
                <i class="fas fa-check mr-2"></i>Kiểm tra
            </button>
        </div>
        <button id="start-quiz-btn" onclick="startQuiz()" class="mt-4 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105">
            <i class="fas fa-play mr-2"></i>Bắt đầu
        </button>`;
    document.getElementById('replay-audio')?.classList.toggle('hidden', quizType !== 'listening');
};

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const getRandomMeanings = (vocab, current, count) => {
    const meanings = vocab.filter(v => v.word !== current.word).map(v => v.meaning);
    return shuffleArray(meanings).slice(0, count);
};

const checkAnswers = () => {
    const quizType = document.querySelector('input[name="quiz-type"]:checked').value;
    const difficulty = document.querySelector('input[name="difficulty"]:checked').value;
    const input = quizType === 'multiple' ? document.querySelector('input[name="quiz-answer"]:checked') : document.getElementById('quiz-input');
    if (!input || (quizType === 'multiple' && !input.value) || (quizType !== 'multiple' && !input.value.trim())) {
        showToast("Vui lòng chọn hoặc nhập câu trả lời!", "#ef4444");
        return;
    }
    const userAnswer = quizType === 'multiple' ? input.value : input.value.trim().toLowerCase();
    const correctAnswer = quizType === 'multiple' ? currentQuizWord.meaning : quizType === 'listening' ? currentQuizWord.word.toLowerCase() : currentQuizWord.word.toLowerCase();
    quizStats.total++;
    if (userAnswer === correctAnswer) {
        quizStats.correct++;
        progress.quiz[quizType][difficulty]++;
        progress.score += difficulty === 'easy' ? 1 : difficulty === 'medium' ? 2 : 3;
        showToast("Chính xác! 🎉", "#22c55e");
        const correctAudio = new Audio('sounds/correct.mp3');
        correctAudio.play().catch(error => console.error('Lỗi phát âm thanh đúng:', error));
        if (!isReviewingWrong) {
            wrongAnswers = wrongAnswers.filter(word => word !== currentQuizWord.word);
            localStorage.setItem('wrongAnswers', JSON.stringify(wrongAnswers));
        }
    } else {
        quizStats.wrongWords[currentQuizWord.word] = (quizStats.wrongWords[currentQuizWord.word] || 0) + 1;
        showToast(`Sai rồi! Đáp án đúng: ${correctAnswer}`, "#ef4444");
        const wrongAudio = new Audio('sounds/wrong.mp3');
        wrongAudio.play().catch(error => console.error('Lỗi phát âm thanh sai:', error));
        if (!wrongAnswers.includes(currentQuizWord.word) && !isReviewingWrong) {
            wrongAnswers.push(currentQuizWord.word);
            localStorage.setItem('wrongAnswers', JSON.stringify(wrongAnswers));
        }
    }
    localStorage.setItem('vocabProgress', JSON.stringify(progress));
    localStorage.setItem('quizStats', JSON.stringify(quizStats));
    updateProgressBars();
    clearInterval(timerId);
    document.getElementById('timer').classList.add('hidden');
    loadQuiz();
};