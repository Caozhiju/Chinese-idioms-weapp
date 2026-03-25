    // 应用逻辑

class IdiomsApp {
  constructor() {
    this.currentPage = 'home';
    this.currentIdiom = null;
    this.learningProgress = this.loadProgress();
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    this.currentExerciseType = 'fillBlank';
    this.currentExercise = null;
    this.currentExerciseIndex = 0;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.applyTheme();
    this.updatePageTexts();
    this.showPage('home');
  }

  updatePageTexts() {
    // 更新标题
    document.getElementById('appTitle').textContent = t('appTitle');
    document.getElementById('searchInput').placeholder = t('searchPlaceholder');
    document.getElementById('searchBtn').textContent = t('search');
    
    // 更新导航按钮
    document.querySelectorAll('[data-nav]').forEach(btn => {
      const page = btn.dataset.nav;
      btn.textContent = t(`nav.${page}`);
    });
    
    // 更新语言选择器
    const langZh = document.querySelector('.lang-zh');
    const langEn = document.querySelector('.lang-en');
    if (langZh) langZh.classList.toggle('active', getCurrentLanguage() === 'zh');
    if (langEn) langEn.classList.toggle('active', getCurrentLanguage() === 'en');
  }

  setupEventListeners() {
    // 导航按钮
    document.querySelectorAll('[data-nav]').forEach(btn => {
      btn.addEventListener('click', () => {
        const page = btn.dataset.nav;
        this.showPage(page);
      });
    });

    // 主题切换
    document.getElementById('themeToggle')?.addEventListener('click', () => {
      this.toggleTheme();
    });

    // 搜索
    document.getElementById('searchBtn')?.addEventListener('click', () => {
      this.search();
    });

    document.getElementById('searchInput')?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.search();
    });

    // HSK 等级筛选
    document.querySelectorAll('.level-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.level-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.showPage('allIdioms');
      });
    });

    // 练习题类型切换
    document.querySelectorAll('.exercise-type-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.exercise-type-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentExerciseType = btn.dataset.type;
        this.startExercise();
      });
    });
  }

  showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(page)?.classList.remove('hidden');
    this.currentPage = page;

    // 加载相应的内容
    if (page === 'allIdioms') this.renderAllIdioms();
    else if (page === 'practice') this.startExercise();
    else if (page === 'progress') this.renderProgress();
  }

  search() {
    const query = document.getElementById('searchInput')?.value.trim().toLowerCase();
    if (!query) return;

    const result = idiomsDatabase.find(idiom => 
      idiom.name.toLowerCase().includes(query) || 
      idiom.pinyin.toLowerCase().includes(query)
    );

    if (result) {
      this.showIdiomDetail(result);
    } else {
      alert('未找到该惯用语');
    }
  }

  renderAllIdioms() {
    const container = document.getElementById('allIdiomsContainer');
    const levelFilter = document.querySelector('.level-filter.active')?.dataset.level || 'all';
    const language = getCurrentLanguage();
    
    let filtered = idiomsDatabase;
    if (levelFilter !== 'all') {
      filtered = idiomsDatabase.filter(idiom => 
        idiom.hskLevel.includes(levelFilter)
      );
    }

    const categories = {};
    filtered.forEach(idiom => {
      const translated = getTranslatedIdiom(idiom.id, language);
      if (!categories[idiom.category]) categories[idiom.category] = [];
      categories[idiom.category].push(translated);
    });

    let html = '';
    for (const [category, idioms] of Object.entries(categories)) {
      html += `<div class="category-section"><h3>${category}</h3>`;
      idioms.forEach(idiom => {
        html += `
          <div class="idiom-card" onclick="app.showIdiomDetail(app.getIdiomById(${idiom.id}))">
            <div class="idiom-name">${idiom.name}</div>
            <div class="idiom-pinyin">${idiom.pinyin}</div>
            <div class="idiom-meaning">${idiom.meaning}</div>
            <div class="idiom-level">${idiom.level}</div>
          </div>
        `;
      });
      html += '</div>';
    }

    container.innerHTML = html;
  }

  getIdiomById(id) {
    const language = getCurrentLanguage();
    return getTranslatedIdiom(id, language);
  }

  showIdiomDetail(idiom) {
    this.currentIdiom = idiom;
    const container = document.getElementById('idiomDetail');
    const isLearned = this.learningProgress.learnedIdioms.includes(idiom.id);

    let html = `
      <div class="detail-header">
        <h2>${idiom.name}</h2>
        <button class="btn-small ${isLearned ? 'btn-learned' : ''}" onclick="app.toggleLearned(${idiom.id})">
          ${isLearned ? '✓ 已学' : '+ 标记为已学'}
        </button>
      </div>
      <div class="detail-section">
        <p><strong>拼音：</strong> ${idiom.pinyin}</p>
        <p><strong>分类：</strong> ${idiom.category}</p>
        <p><strong>学习水平：</strong> ${idiom.level}</p>
        <p><strong>含义：</strong> ${idiom.meaning}</p>
        <p><strong>词性：</strong> ${idiom.usage}</p>
        <p><strong>出处：</strong> ${idiom.source}</p>
      </div>

      <div class="detail-section">
        <h3>使用场景与例句</h3>
        <div class="examples">
          <div><strong>初级：</strong> ${idiom.examples.初级}</div>
          <div><strong>中级：</strong> ${idiom.examples.中级}</div>
          <div><strong>高级：</strong> ${idiom.examples.高级}</div>
        </div>
      </div>

      <div class="detail-section">
        <h3>文化背景</h3>
        <p>${idiom.background}</p>
      </div>

      <div class="detail-section">
        <h3>常见错误</h3>
        <p>${idiom.commonError}</p>
      </div>

      <div class="detail-section">
        <h3>相关词汇</h3>
        <p><strong>近义词：</strong> ${idiom.synonym}</p>
        <p><strong>反义词：</strong> ${idiom.antonym}</p>
      </div>

      <button class="btn-primary" onclick="app.showPage('allIdioms')">返回列表</button>
    `;

    container.innerHTML = html;
    this.showPage('detail');
  }

  startExercise() {
    const exercises = exerciseDatabase[this.currentExerciseType];
    if (!exercises || exercises.length === 0) return;

    this.currentExerciseIndex = 0;
    this.showExercise();
  }

  showExercise() {
    const exerciseType = this.currentExerciseType;
    const exercises = exerciseDatabase[exerciseType];
    
    if (this.currentExerciseIndex >= exercises.length) {
      this.showExerciseResult();
      return;
    }

    this.currentExercise = exercises[this.currentExerciseIndex];
    const container = document.getElementById('exerciseContainer');

    let html = `
      <div class="exercise-progress">
        第 ${this.currentExerciseIndex + 1} / ${exercises.length} 题
      </div>
    `;

    if (exerciseType === '填空题' || exerciseType === '选择题') {
      html += `
        <div class="exercise-question">
          <h3>题目</h3>
          <p>${this.currentExercise.question}</p>
        </div>
        <div class="exercise-options">
      `;
      this.currentExercise.options.forEach((option, index) => {
        html += `
          <button class="option-btn" onclick="app.selectAnswer(${index})">
            ${String.fromCharCode(65 + index)}. ${option}
          </button>
        `;
      });
      html += '</div>';
    } else if (exerciseType === '改错题') {
      html += `
        <div class="exercise-question">
          <h3>判断以下句子是否正确</h3>
          <p class="statement">"${this.currentExercise.statement}"</p>
          <p><strong>是否有错误？</strong></p>
        </div>
        <div class="exercise-options">
          <button class="option-btn" onclick="app.selectAnswer(true)">有错误</button>
          <button class="option-btn" onclick="app.selectAnswer(false)">没有错误</button>
        </div>
      `;
    } else if (exerciseType === '情景题') {
      html += `
        <div class="exercise-question">
          <h3>情景题</h3>
          <p><strong>场景：</strong> ${this.currentExercise.scenario}</p>
          <p><strong>提示：</strong> ${this.currentExercise.tips}</p>
        </div>
        <div class="exercise-input">
          <textarea id="scenarioAnswer" placeholder="请输入你的回答..." rows="6"></textarea>
        </div>
        <button class="btn-primary" onclick="app.submitScenarioAnswer()">提交答案</button>
      `;
    }

    html += `<div id="feedback"></div>`;
    container.innerHTML = html;
  }

  selectAnswer(answerIndex) {
    const exercise = this.currentExercise;
    const feedbackDiv = document.getElementById('feedback');
    let isCorrect = false;

    if (this.currentExerciseType === '改错题') {
      isCorrect = answerIndex === exercise.error;
    } else {
      isCorrect = answerIndex === exercise.answer;
    }

    if (isCorrect) {
      this.learningProgress.correctAnswers++;
      feedbackDiv.innerHTML = `
        <div class="feedback correct">
          ✓ 正确！
          <p>${exercise.explanation}</p>
          <button class="btn-primary" onclick="app.nextExercise()">下一题</button>
        </div>
      `;
    } else {
      feedbackDiv.innerHTML = `
        <div class="feedback incorrect">
          ✗ 不正确。
          <p><strong>正确答案：</strong> ${this.currentExerciseType === '改错题' ? 
            (exercise.error ? '有错误' : '没有错误') : 
            exercise.options[exercise.answer]}</p>
          <p><strong>解析：</strong> ${exercise.explanation}</p>
          <button class="btn-primary" onclick="app.nextExercise()">下一题</button>
        </div>
      `;
    }

    this.learningProgress.totalAnswers++;
    this.saveProgress();
  }

  submitScenarioAnswer() {
    const answer = document.getElementById('scenarioAnswer').value.trim();
    if (!answer) {
      alert('请输入回答');
      return;
    }

    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.innerHTML = `
      <div class="feedback scenario-feedback">
        <p><strong>参考答案：</strong></p>
        <p>${this.currentExercise.answer_example}</p>
        <p><strong>你的回答：</strong></p>
        <p>${answer}</p>
        <p style="color: #ff9800;"><strong>注：</strong>情景题为开放式，请对比参考答案和自己的回答是否符合要求。</p>
        <button class="btn-primary" onclick="app.nextExercise()">下一题</button>
      </div>
    `;

    this.learningProgress.totalAnswers++;
    this.learningProgress.correctAnswers++;
    this.saveProgress();
  }

  nextExercise() {
    this.currentExerciseIndex++;
    this.showExercise();
  }

  showExerciseResult() {
    const accuracy = this.learningProgress.totalAnswers > 0 ? 
      Math.round(this.learningProgress.correctAnswers / this.learningProgress.totalAnswers * 100) : 0;

    const container = document.getElementById('exerciseContainer');
    container.innerHTML = `
      <div class="exercise-result">
        <h2>练习完成！</h2>
        <p>正确率：${accuracy}%</p>
        <p>正确题数：${this.learningProgress.correctAnswers} / ${this.learningProgress.totalAnswers}</p>
        <button class="btn-primary" onclick="app.startExercise()">重新开始</button>
        <button class="btn-secondary" onclick="app.showPage('home')">返回首页</button>
      </div>
    `;
  }

  toggleLearned(idiomId) {
    const index = this.learningProgress.learnedIdioms.indexOf(idiomId);
    if (index > -1) {
      this.learningProgress.learnedIdioms.splice(index, 1);
    } else {
      this.learningProgress.learnedIdioms.push(idiomId);
    }
    this.saveProgress();
    
    // 更新按钮状态
    const btn = document.querySelector('.btn-small');
    if (btn) {
      btn.classList.toggle('btn-learned');
      btn.textContent = this.learningProgress.learnedIdioms.includes(idiomId) ? '✓ 已学' : '+ 标记为已学';
    }
  }

  renderProgress() {
    const total = idiomsDatabase.length;
    const learned = this.learningProgress.learnedIdioms.length;
    const accuracy = this.learningProgress.totalAnswers > 0 ? 
      Math.round(this.learningProgress.correctAnswers / this.learningProgress.totalAnswers * 100) : 0;

    const progressContainer = document.getElementById('progressContainer');

    let html = `
      <div class="progress-stats">
        <div class="stat-card">
          <h3>${learned} / ${total}</h3>
          <p>已学习的惯用语</p>
        </div>
        <div class="stat-card">
          <h3>${accuracy}%</h3>
          <p>练习正确率</p>
        </div>
        <div class="stat-card">
          <h3>${this.learningProgress.totalAnswers}</h3>
          <p>已完成的题目</p>
        </div>
      </div>

      <div class="detail-section">
        <h3>已学习的惯用语</h3>
        <div class="learned-list">
    `;

    if (learned === 0) {
      html += '<p>还没有标记任何惯用语为已学。</p>';
    } else {
      this.learningProgress.learnedIdioms.forEach(id => {
        const idiom = this.getIdiomById(id);
        if (idiom) {
          html += `
            <div class="learned-item" onclick="app.showIdiomDetail(app.getIdiomById(${id}))">
              <strong>${idiom.name}</strong>
              <span>${idiom.meaning}</span>
            </div>   < / div>
          `;
        }
      });
    }

    html += `
        </div>   < / div>
      </div>   < / div>

      <button class="btn-secondary" onclick="app.resetProgress()">重置进度</button>
    `;

    progressContainer.innerHTML = html;
  }

  saveProgress() {
    localStorage.setItem('learningProgress', JSON.stringify(this   这.learningProgress));
  }

  loadProgress() {
    const saved = localStorage.getItem('learningProgress');
    return saved ? JSON.parse(saved) : {
      learnedIdioms: [],
      totalAnswers: 0,
      correctAnswers: 0
    };
  }

  resetProgress() {
    if (confirm('确定要重置所有学习进度吗？')) {
      this.learningProgress = {
        learnedIdioms: [],
        totalAnswers: 0,
        correctAnswers: 0
      };
      this.saveProgress();
      this.renderProgress();
      alert('进度已重置');
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode);
    this.applyTheme();
  }

  applyTheme() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      document.getElementById('themeToggle').textContent = '☀️ 浅色';
    } else {
      document.body.classList.remove('dark-mode');
      document.getElementById('themeToggle').textContent = '🌙 深色';
    }
  }
}

// 全局语言切换函数
function setLanguageAndReload(lang) {
  setLanguage(lang);
}

// 初始化应用
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new IdiomsApp();
});
