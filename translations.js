// 多语言翻译字典

const translations = {
  zh: {
    // 标题和导航
    appTitle: "🎓 中文惯用语教育智能体",
    nav: {
      home: "首页",
      allIdioms: "全部惯用语",
      practice: "练习",
      progress: "学习进度",
      about: "关于"
    },
    
    // 头部
    search: "🔍 搜索",
    searchPlaceholder: "搜索惯用语，如：一鸣惊人",
    darkMode: "🌙 深色",
    lightMode: "☀️ 浅色",
    
    // 首页
    homeTitle: "欢迎来到惯用语学习世界",
    homeSubtitle: "系统学习中文惯用语，掌握文化精髓，提升语言表达能力",
    startLearning: "开始学习",
    
    features: {
      feature1: "9+ 个核心惯用语",
      feature1Desc: "精选常用和经典惯用语，按HSK等级分类学习",
      feature2: "多种学习水平",
      feature2Desc: "初级、中级、高级三个水平的内容，满足不同学习者需求",
      feature3: "4种练习题型",
      feature3Desc: "填空、选择、改错、情景应用，全面巩固学习内容",
      feature4: "文化背景解释",
      feature4Desc: "了解每个惯用语的历史来源和文化意蕴",
      feature5: "学习进度追踪",
      feature5Desc: "记录已学内容和练习成绩，查看学习统计",
      feature6: "多语言支持",
      feature6Desc: "中文和英文界面，轻松切换学习语言"
    },
    
    quickStart: "快速开始",
    quickStartSteps: [
      "浏览惯用语：点击\"全部惯用语\"查看所有内容",
      "深入学习：点击卡片查看详细讲解、文化背景和例句",
      "标记已学：点击\"标记为已学\"按钮，追踪学习进度",
      "开始练习：点击\"练习\"选择题型进行练习",
      "查看统计：点击\"学习进度\"查看学习成果"
    ],
    
    // 全部惯用语
    allIdiomsTitle: "全部惠用语",
    filterLevel: {
      all: "全部水平",
      elementary: "初级（HSK 1-3）",
      intermediate: "中级（HSK 4-6）",
      advanced: "高级（HSK 6+）"
    },
    
    // 详情页
    markAsLearned: "+ 标记为已学",
    marked: "✓ 已学",
    definition: "含义",
    pinyin: "拼音",
    category: "分类",
    level: "学习水平",
    source: "出处",
    usage: "用法",
    examples: "例句",
    background: "文化背景",
    commonError: "常见错误",
    relatedWords: "相关词汇",
    synonyms: "近义词",
    antonyms: "反义词",
    backToList: "返回列表",
    
    // 练习
    practiceCenter: "练习中心",
    exerciseTypes: {
      fillBlank: "📝 填空题",
      multipleChoice: "🔤 选择题",
      errorCorrection: "✏️ 改错题",
      scenario: "🎭 情景应用"
    },
    
    question: "题目",
    correctAnswer: "正确答案",
    explanation: "解析",
    correctFeedback: "✓ 正确！",
    incorrectFeedback: "✗ 不正确。",
    nextQuestion: "下一题",
    isCorrect: "是否有错误？",
    hasError: "有错误",
    noError: "没有错误",
    correction: "改正为",
    scenario: "场景",
    scenarioTips: "提示",
    submitAnswer: "提交答案",
    referenceAnswer: "参考答案",
    yourAnswer: "你的回答",
    scenarioNote: "注：情景题为开放式，请对比参考答案和自己的回答是否符合要求。",
    
    exerciseComplete: "练习完成！",
    accuracy: "正确率",
    correctCount: "正确题数",
    restart: "重新开始",
    backHome: "返回首页",
    
    // 进度
    progressTitle: "学习进度统计",
    learnedIdioms: "已学习的惯用语",
    exerciseAccuracy: "练习正确率",
    completedQuestions: "已完成的题目",
    learnedList: "已学习的惯用语",
    noLearned: "还没有标记任何惯用语为已学。",
    resetProgress: "重置进度",
    resetConfirm: "确定要重置所有学习进度吗？",
    resetSuccess: "进度已重置",
    
    // 关于
    aboutTitle: "关于本应用",
    projectIntro: "项目介绍",
    projectIntroText: "\"中文惯用语教育智能体\"是一个专为国际学习者设计的在线学习平台。本应用提供系统的惯用语学习资源，包括详细的讲解、丰富的例句、文化背景信息和多种练习形式。",
    features: "功能特性",
    setupAdvice: "学习建议",
    dataStorage: "数据存储",
    dataStorageText: "本应用使用浏览器本地存储技术（LocalStorage）保存你的学习数据。你的所有学习进度和标记都保存在你的设备上，不会上传到任何服务器，完全私密安全。",
    techStack: "技术栈",
    versionInfo: "版本信息",
    version: "应用版本",
    releaseDate: "发布日期",
    language: "语言",
    license: "许可证",
    contact: "联系与反馈",
    copyright: "© 2026 中文惯用语教育平台 | 祝你学习愉快！",
    
    // 错误消息
    idiomNotFound: "未找到该惯用语",
    pleaseEnterAnswer: "请输入回答",
    partsPeripheral: "初级",
    intermediate: "中级",
    advanced: "高级",
  },
  
  en: {
    // 标题和导航
    appTitle: "🎓 Chinese Idioms Education AI",
    nav: {
      home: "Home",
      allIdioms: "All Idioms",
      practice: "Practice",
      progress: "Progress",
      about: "About"
    },
    
    // 头部
    search: "🔍 Search",
    searchPlaceholder: "Search idioms, e.g.: 一鸣惊人",
    darkMode: "🌙 Dark",
    lightMode: "☀️ Light",
    
    // 首页
    homeTitle: "Welcome to Chinese Idioms Learning",
    homeSubtitle: "Learn Chinese idioms systematically, master cultural essence, and enhance your language expression ability",
    startLearning: "Start Learning",
    
    features: {
      feature1: "9+ Core Idioms",
      feature1Desc: "Carefully selected and classic Chinese idioms, categorized by HSK levels",
      feature2: "Multiple Learning Levels",
      feature2Desc: "Elementary, intermediate, and advanced content for different learners",
      feature3: "4 Practice Types",
      feature3Desc: "Fill-in-the-blank, multiple choice, error correction, and situational practice",
      feature4: "Cultural Background",
      feature4Desc: "Understand the historical origin and cultural significance of each idiom",
      feature5: "Progress Tracking",
      feature5Desc: "Record learned content and practice scores, view learning statistics",
      feature6: "Multi-language Support",
      feature6Desc: "Chinese and English interfaces, easily switch learning languages"
    },
    
    quickStart: "Quick Start",
    quickStartSteps: [
      'Browse idioms: Click "All Idioms" to see all content',
      "Deep learning: Click cards to view detailed explanations and cultural background",
      'Mark as learned: Click "Mark as Learned" to track your progress',
      'Start practicing: Click "Practice" to choose question types',
      'View statistics: Click "Progress" to see your learning achievements'
    ],
    
    // 全部惯用语
    allIdiomsTitle: "All Idioms",
    filterLevel: {
      all: "All Levels",
      elementary: "Elementary (HSK 1-3)",
      intermediate: "Intermediate (HSK 4-6)",
      advanced: "Advanced (HSK 6+)"
    },
    
    // 详情页
    markAsLearned: "+ Mark as Learned",
    marked: "✓ Learned",
    definition: "Definition",
    pinyin: "Pinyin",
    category: "Category",
    level: "Learning Level",
    source: "Source",
    usage: "Usage",
    examples: "Examples",
    background: "Cultural Background",
    commonError: "Common Mistakes",
    relatedWords: "Related Words",
    synonyms: "Synonyms",
    antonyms: "Antonyms",
    backToList: "Back to List",
    
    // 练习
    practiceCenter: "Practice Center",
    exerciseTypes: {
      fillBlank: "📝 Fill-in-the-blank",
      multipleChoice: "🔤 Multiple Choice",
      errorCorrection: "✏️ Error Correction",
      scenario: "🎭 Scenario Practice"
    },
    
    question: "Question",
    correctAnswer: "Correct Answer",
    explanation: "Explanation",
    correctFeedback: "✓ Correct!",
    incorrectFeedback: "✗ Incorrect.",
    nextQuestion: "Next Question",
    isCorrect: "Is it correct?",
    hasError: "Has Error",
    noError: "No Error",
    correction: "Correction",
    scenario: "Scenario",
    scenarioTips: "Tips",
    submitAnswer: "Submit Answer",
    referenceAnswer: "Reference Answer",
    yourAnswer: "Your Answer",
    scenarioNote: "Note: Scenario questions are open-ended. Compare your answer with the reference answer to see if it meets the requirements.",
    
    exerciseComplete: "Practice Complete!",
    accuracy: "Accuracy",
    correctCount: "Correct Count",
    restart: "Restart",
    backHome: "Back to Home",
    
    // 进度
    progressTitle: "Learning Progress",
    learnedIdioms: "Learned Idioms",
    exerciseAccuracy: "Exercise Accuracy",
    completedQuestions: "Completed Questions",
    learnedList: "Learned Idioms List",
    noLearned: "No idioms marked as learned yet.",
    resetProgress: "Reset Progress",
    resetConfirm: "Are you sure you want to reset all learning progress?",
    resetSuccess: "Progress has been reset",
    
    // 关于
    aboutTitle: "About This App",
    projectIntro: "Project Introduction",
    projectIntroText: "\"Chinese Idioms Education AI\" is an online learning platform designed for international learners. This application provides systematic resources for learning Chinese idioms, including detailed explanations, rich example sentences, cultural background information, and various practice forms.",
    features: "Features",
    setupAdvice: "Learning Advice",
    dataStorage: "Data Storage",
    dataStorageText: "This application uses browser LocalStorage technology to save your learning data. All your learning progress and marks are stored on your device and will never be uploaded to any server, ensuring complete privacy and security.",
    techStack: "Tech Stack",
    versionInfo: "Version Information",
    version: "App Version",
    releaseDate: "Release Date",
    language: "Language",
    license: "License",
    contact: "Contact & Feedback",
    copyright: "© 2026 Chinese Idioms Education Platform | Happy Learning!",
    
    // 错误消息
    idiomNotFound: "Idiom not found",
    pleaseEnterAnswer: "Please enter your answer",
    elementary: "Elementary",
    intermediate: "Intermediate",
    advanced: "Advanced",
  }
};

// 获取当前语言（从localStorage或默认为中文）
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'zh';
}

// 设置语言
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  location.reload(); // 刷新页面以应用新语言
}

// 获取翻译文本
function t(key) {
  const lang = getCurrentLanguage();
  const keys = key.split('.');
  let value = translations[lang];
  
  for (let k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}
