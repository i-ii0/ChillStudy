// ===== DeepSeek API 配置 =====
const DEEPSEEK_API_KEY = 'your-api-key-here';
const DEEPSEEK_API_URL = 'https://api.deepseek.com/chat/completions';

// ===== Mock 题库数据（API 失败时备用） =====
const MOCK_QUESTIONS = {
  'Python基础': [
    {
      question: 'Python 中用于定义函数的关键字是什么？',
      options: [
        { label: 'A', text: 'function' },
        { label: 'B', text: 'def' },
        { label: 'C', text: 'func' },
        { label: 'D', text: 'define' }
      ],
      answer: 'B',
      explanation: 'Python 使用 def 关键字来定义函数，例如 def my_function():'
    },
    {
      question: '以下哪种数据类型是不可变的？',
      options: [
        { label: 'A', text: 'list' },
        { label: 'B', text: 'dict' },
        { label: 'C', text: 'tuple' },
        { label: 'D', text: 'set' }
      ],
      answer: 'C',
      explanation: 'tuple（元组）是不可变数据类型，一旦创建就不能修改其元素。list、dict、set 都是可变的。'
    },
    {
      question: 'Python 中 // 运算符的作用是什么？',
      options: [
        { label: 'A', text: '普通除法' },
        { label: 'B', text: '取模运算' },
        { label: 'C', text: '整除（向下取整）' },
        { label: 'D', text: '注释' }
      ],
      answer: 'C',
      explanation: '// 是整除运算符，返回商的整数部分（向下取整）。例如 7 // 2 = 3。'
    },
    {
      question: '如何获取列表的长度？',
      options: [
        { label: 'A', text: 'list.size()' },
        { label: 'B', text: 'list.length' },
        { label: 'C', text: 'len(list)' },
        { label: 'D', text: 'list.count()' }
      ],
      answer: 'C',
      explanation: 'Python 使用内置函数 len() 来获取列表、字符串等对象的长度。'
    },
    {
      question: 'Python 中哪个关键字用于异常处理？',
      options: [
        { label: 'A', text: 'catch' },
        { label: 'B', text: 'except' },
        { label: 'C', text: 'handle' },
        { label: 'D', text: 'rescue' }
      ],
      answer: 'B',
      explanation: 'Python 使用 try...except 语句进行异常处理，不同于 Java 的 try...catch。'
    }
  ],
  '世界历史': [
    {
      question: '第一次世界大战爆发于哪一年？',
      options: [
        { label: 'A', text: '1912年' },
        { label: 'B', text: '1914年' },
        { label: 'C', text: '1916年' },
        { label: 'D', text: '1918年' }
      ],
      answer: 'B',
      explanation: '第一次世界大战于1914年爆发，导火索是奥匈帝国皇储斐迪南大公在萨拉热窝被刺杀。'
    },
    {
      question: '法国大革命爆发于哪一年？',
      options: [
        { label: 'A', text: '1776年' },
        { label: 'B', text: '1789年' },
        { label: 'C', text: '1799年' },
        { label: 'D', text: '1804年' }
      ],
      answer: 'B',
      explanation: '法国大革命于1789年爆发，以攻占巴士底狱为标志，深刻改变了法国和世界的历史进程。'
    },
    {
      question: '丝绸之路的起点城市是哪里？',
      options: [
        { label: 'A', text: '洛阳' },
        { label: 'B', text: '长安（今西安）' },
        { label: 'C', text: '北京' },
        { label: 'D', text: '开封' }
      ],
      answer: 'B',
      explanation: '丝绸之路的起点是长安（今西安），是古代连接东西方的重要贸易通道。'
    },
    {
      question: '联合国成立于哪一年？',
      options: [
        { label: 'A', text: '1943年' },
        { label: 'B', text: '1944年' },
        { label: 'C', text: '1945年' },
        { label: 'D', text: '1946年' }
      ],
      answer: 'C',
      explanation: '联合国于1945年10月24日正式成立，初始成员国51个，旨在维护国际和平与安全。'
    },
    {
      question: '文艺复兴运动最早起源于哪个国家？',
      options: [
        { label: 'A', text: '法国' },
        { label: 'B', text: '英国' },
        { label: 'C', text: '意大利' },
        { label: 'D', text: '德国' }
      ],
      answer: 'C',
      explanation: '文艺复兴最早起源于14世纪的意大利，以佛罗伦萨为中心，后来扩展到欧洲各地。'
    }
  ],
  'JavaScript入门': [
    {
      question: 'JavaScript 中声明常量的关键字是？',
      options: [
        { label: 'A', text: 'var' },
        { label: 'B', text: 'let' },
        { label: 'C', text: 'const' },
        { label: 'D', text: 'static' }
      ],
      answer: 'C',
      explanation: 'const 用于声明常量，声明后不可重新赋值。var 是函数作用域，let 是块级作用域的可变变量。'
    },
    {
      question: 'typeof null 的返回值是什么？',
      options: [
        { label: 'A', text: '"null"' },
        { label: 'B', text: '"undefined"' },
        { label: 'C', text: '"object"' },
        { label: 'D', text: '"boolean"' }
      ],
      answer: 'C',
      explanation: '这是 JavaScript 的一个历史遗留 bug。typeof null 返回 "object"，尽管 null 并不是对象。'
    },
    {
      question: '箭头函数与普通函数的区别之一是？',
      options: [
        { label: 'A', text: '箭头函数不能有参数' },
        { label: 'B', text: '箭头函数没有自己的 this' },
        { label: 'C', text: '箭头函数运行更快' },
        { label: 'D', text: '箭头函数只能写一行' }
      ],
      answer: 'B',
      explanation: '箭头函数不绑定自己的 this，它会继承外层作用域的 this 值，这是与普通函数最重要的区别之一。'
    },
    {
      question: 'JavaScript 中 === 和 == 的区别是？',
      options: [
        { label: 'A', text: '没有区别' },
        { label: 'B', text: '=== 比较值和类型，== 只比较值' },
        { label: 'C', text: '=== 只比较类型' },
        { label: 'D', text: '== 更严格' }
      ],
      answer: 'B',
      explanation: '=== 是严格相等运算符，会同时比较值和类型；== 是宽松相等，会进行类型转换后再比较。'
    },
    {
      question: '以下哪个是 JavaScript 的异步编程方式？',
      options: [
        { label: 'A', text: 'Promise' },
        { label: 'B', text: 'for 循环' },
        { label: 'C', text: 'if 语句' },
        { label: 'D', text: 'switch 语句' }
      ],
      answer: 'A',
      explanation: 'Promise 是 JavaScript 处理异步操作的重要方式，还有 callback 和 async/await 也是异步编程方式。'
    }
  ],
  '数学基础': [
    {
      question: '圆的面积公式是什么？',
      options: [
        { label: 'A', text: '2πr' },
        { label: 'B', text: 'πr²' },
        { label: 'C', text: 'πd' },
        { label: 'D', text: '2πr²' }
      ],
      answer: 'B',
      explanation: '圆的面积公式为 S = πr²，其中 r 是半径。2πr 是圆的周长公式。'
    },
    {
      question: '以下哪个是质数？',
      options: [
        { label: 'A', text: '9' },
        { label: 'B', text: '15' },
        { label: 'C', text: '17' },
        { label: 'D', text: '21' }
      ],
      answer: 'C',
      explanation: '质数是只能被1和自身整除的大于1的自然数。17只能被1和17整除，是质数。9=3×3，15=3×5，21=3×7。'
    },
    {
      question: '勾股定理的表达式是？',
      options: [
        { label: 'A', text: 'a + b = c' },
        { label: 'B', text: 'a² + b² = c²' },
        { label: 'C', text: 'a × b = c' },
        { label: 'D', text: 'a² - b² = c²' }
      ],
      answer: 'B',
      explanation: '勾股定理：在直角三角形中，两条直角边的平方和等于斜边的平方，即 a² + b² = c²。'
    },
    {
      question: '0! 等于多少？',
      options: [
        { label: 'A', text: '0' },
        { label: 'B', text: '1' },
        { label: 'C', text: '未定义' },
        { label: 'D', text: '-1' }
      ],
      answer: 'B',
      explanation: '0! = 1，这是阶乘的数学定义。阶乘的递归定义 n! = n × (n-1)! 配合 0! = 1 使得公式对所有非负整数成立。'
    },
    {
      question: '三角形内角和是多少度？',
      options: [
        { label: 'A', text: '90°' },
        { label: 'B', text: '180°' },
        { label: 'C', text: '270°' },
        { label: 'D', text: '360°' }
      ],
      answer: 'B',
      explanation: '平面三角形的三个内角之和恒等于180°，这是欧几里得几何的基本定理之一。'
    }
  ],
  '科学常识': [
    {
      question: '光在真空中的传播速度约为多少？',
      options: [
        { label: 'A', text: '3×10⁶ m/s' },
        { label: 'B', text: '3×10⁸ m/s' },
        { label: 'C', text: '3×10¹⁰ m/s' },
        { label: 'D', text: '3×10⁴ m/s' }
      ],
      answer: 'B',
      explanation: '光在真空中的速度约为 3×10⁸ m/s（约30万公里/秒），这是宇宙中信息传播的速度上限。'
    },
    {
      question: '水的化学式是什么？',
      options: [
        { label: 'A', text: 'CO₂' },
        { label: 'B', text: 'H₂O' },
        { label: 'C', text: 'NaCl' },
        { label: 'D', text: 'O₂' }
      ],
      answer: 'B',
      explanation: '水的化学式是 H₂O，由两个氢原子和一个氧原子组成。CO₂ 是二氧化碳，NaCl 是食盐。'
    },
    {
      question: '地球的自转周期约为多少？',
      options: [
        { label: 'A', text: '12小时' },
        { label: 'B', text: '24小时' },
        { label: 'C', text: '365天' },
        { label: 'D', text: '30天' }
      ],
      answer: 'B',
      explanation: '地球自转一周约24小时（精确说是23小时56分4秒），这就是一天的由来。365天是公转周期。'
    },
    {
      question: 'DNA 的双螺旋结构是由谁发现的？',
      options: [
        { label: 'A', text: '达尔文' },
        { label: 'B', text: '爱因斯坦' },
        { label: 'C', text: '沃森和克里克' },
        { label: 'D', text: '牛顿' }
      ],
      answer: 'C',
      explanation: '1953年，詹姆斯·沃森和弗朗西斯·克里克发现了DNA的双螺旋结构，这是20世纪最伟大的科学发现之一。'
    },
    {
      question: '人体最大的器官是什么？',
      options: [
        { label: 'A', text: '肝脏' },
        { label: 'B', text: '大脑' },
        { label: 'C', text: '皮肤' },
        { label: 'D', text: '心脏' }
      ],
      answer: 'C',
      explanation: '皮肤是人体最大的器官，成人皮肤总面积约1.5-2平方米，重量约占体重的16%。'
    }
  ]
};

const GENERAL_QUESTIONS = [
  {
    question: '世界上面积最大的国家是？',
    options: [
      { label: 'A', text: '中国' },
      { label: 'B', text: '加拿大' },
      { label: 'C', text: '俄罗斯' },
      { label: 'D', text: '美国' }
    ],
    answer: 'C',
    explanation: '俄罗斯是世界上面积最大的国家，约1710万平方公里，横跨欧亚两洲。'
  },
  {
    question: '世界上最长的河流是？',
    options: [
      { label: 'A', text: '亚马逊河' },
      { label: 'B', text: '长江' },
      { label: 'C', text: '尼罗河' },
      { label: 'D', text: '密西西比河' }
    ],
    answer: 'C',
    explanation: '尼罗河全长约6650公里，是世界上最长的河流，流经非洲东北部多个国家。'
  },
  {
    question: '地球的天然卫星是什么？',
    options: [
      { label: 'A', text: '太阳' },
      { label: 'B', text: '火星' },
      { label: 'C', text: '月球' },
      { label: 'D', text: '金星' }
    ],
    answer: 'C',
    explanation: '月球是地球唯一的天然卫星，距地球约38.4万公里，对地球的潮汐有重要影响。'
  },
  {
    question: '1 KB 等于多少字节？',
    options: [
      { label: 'A', text: '100 字节' },
      { label: 'B', text: '512 字节' },
      { label: 'C', text: '1000 字节' },
      { label: 'D', text: '1024 字节' }
    ],
    answer: 'D',
    explanation: '在计算机科学中，1 KB = 2¹⁰ = 1024 字节。虽然国际单位制中1KB=1000字节，但传统计算中通常使用1024。'
  },
  {
    question: '以下哪个是可再生能源？',
    options: [
      { label: 'A', text: '煤炭' },
      { label: 'B', text: '石油' },
      { label: 'C', text: '太阳能' },
      { label: 'D', text: '天然气' }
    ],
    answer: 'C',
    explanation: '太阳能是可再生能源，取之不尽。煤炭、石油和天然气都是化石燃料，属于不可再生能源。'
  }
];

// ===== 应用状态 =====
const state = {
  topic: '',
  questions: [],
  currentIndex: 0,
  answers: [],
  startTime: 0,
  endTime: 0
};

// ===== DOM 元素 =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const topicInput = $('#topic-input');
const startBtn = $('#start-btn');
const topicTags = $$('.topic-tag');

const topicName = $('#topic-name');
const progressText = $('#progress-text');
const progressFill = $('#progress-fill');
const questionNumber = $('#question-number');
const questionText = $('#question-text');
const optionsContainer = $('#options-container');
const optionBtns = $$('.option-btn');
const feedback = $('#feedback');
const feedbackIcon = $('#feedback-icon');
const feedbackText = $('#feedback-text');
const feedbackExplanation = $('#feedback-explanation');
const nextBtn = $('#next-btn');
const quizCard = $('#quiz-card');

const loadingOverlay = $('#loading-overlay');
const loadingText = $('#loading-text');
const errorOverlay = $('#error-overlay');
const errorMsg = $('#error-msg');
const errorRetryBtn = $('#error-retry-btn');
const errorBackBtn = $('#error-back-btn');

const resultBadge = $('#result-badge');
const resultTitle = $('#result-title');
const scoreNumber = $('#score-number');
const scoreRingFill = $('#score-ring-fill');
const statCorrect = $('#stat-correct');
const statTotal = $('#stat-total');
const statRate = $('#stat-rate');
const statTime = $('#stat-time');
const retryBtn = $('#retry-btn');
const changeTopicBtn = $('#change-topic-btn');

const confettiCanvas = $('#confetti-canvas');

// ===== 页面切换 =====
function showPage(pageId) {
  $$('.page').forEach(p => p.classList.remove('active'));
  $(`#${pageId}`).classList.add('active');
}

// ===== 加载状态 =====
function showLoading(text) {
  loadingText.textContent = text || 'AI 正在为你生成题目...';
  loadingOverlay.classList.add('show');
}

function hideLoading() {
  loadingOverlay.classList.remove('show');
}

function showError(msg) {
  errorMsg.textContent = msg || '生成题目失败，请稍后重试';
  errorOverlay.classList.add('show');
}

function hideError() {
  errorOverlay.classList.remove('show');
}

// ===== DeepSeek API 调用 =====
async function generateQuestionsFromAPI(topic) {
  const questionCount = Math.floor(Math.random() * 5) + 5; // 5-9

  const prompt = `你是一个专业的教育出题专家。请为"${topic}"这个主题生成${questionCount}道选择题。

要求：
1. 每道题有4个选项（A/B/C/D），只有一个正确答案
2. 题目要有教育意义，难度适中
3. 每道题附带简短的解析
4. 严格按照以下JSON格式返回，不要添加任何其他文字：

[
  {
    "question": "题目内容",
    "options": [
      {"label": "A", "text": "选项A内容"},
      {"label": "B", "text": "选项B内容"},
      {"label": "C", "text": "选项C内容"},
      {"label": "D", "text": "选项D内容"}
    ],
    "answer": "正确答案的标签，如A",
    "explanation": "答案解析"
  }
]

请直接返回JSON数组，不要包含markdown代码块标记或其他文字。`;

  const response = await fetch(DEEPSEEK_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: '你是一个专业的教育出题助手，只返回JSON格式的数据，不添加任何额外文字。' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.8,
      max_tokens: 4096
    })
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => '');
    throw new Error(`API 请求失败 (${response.status}): ${errText || response.statusText}`);
  }

  const data = await response.json();

  if (!data.choices || !data.choices[0] || !data.choices[0].message) {
    throw new Error('API 返回数据格式异常');
  }

  let content = data.choices[0].message.content.trim();

  // 清理可能的 markdown 代码块标记
  content = content.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/i, '');

  let questions;
  try {
    questions = JSON.parse(content);
  } catch (e) {
    throw new Error('AI 返回的数据格式不正确，无法解析题目');
  }

  if (!Array.isArray(questions) || questions.length === 0) {
    throw new Error('AI 未生成有效的题目');
  }

  // 验证并标准化题目格式
  return questions.map((q, i) => ({
    question: q.question || `题目 ${i + 1}`,
    options: (q.options || []).map((opt, j) => ({
      label: opt.label || String.fromCharCode(65 + j),
      text: opt.text || ''
    })),
    answer: q.answer || 'A',
    explanation: q.explanation || '暂无解析'
  }));
}

// ===== Mock 备用生成 =====
function generateQuestionsFromMock(topic) {
  for (const [key, questions] of Object.entries(MOCK_QUESTIONS)) {
    if (topic.includes(key) || key.includes(topic)) {
      return shuffleArray([...questions]).slice(0, randomInt(5, 5));
    }
  }
  return shuffleArray([...GENERAL_QUESTIONS]).slice(0, randomInt(5, 5));
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ===== 开始学习 =====
async function startQuiz(topic) {
  if (!topic.trim()) {
    topicInput.focus();
    topicInput.style.borderColor = 'var(--red)';
    setTimeout(() => { topicInput.style.borderColor = ''; }, 1500);
    return;
  }

  state.topic = topic.trim();
  state.currentIndex = 0;
  state.answers = [];
  state.startTime = Date.now();

  // 显示答题页 + 加载动画
  showPage('page-quiz');
  topicName.textContent = state.topic;
  quizCard.classList.add('hidden');
  nextBtn.classList.add('hidden');
  showLoading('AI 正在为你生成「' + state.topic + '」的题目...');

  try {
    // 尝试调用 DeepSeek API
    if (DEEPSEEK_API_KEY === 'your-api-key-here') {
      // 未配置 API Key，使用 Mock 数据
      console.warn('未配置 DeepSeek API Key，使用本地题库');
      await new Promise(r => setTimeout(r, 800)); // 模拟加载延迟
      state.questions = generateQuestionsFromMock(state.topic);
    } else {
      state.questions = await generateQuestionsFromAPI(state.topic);
    }

    hideLoading();
    quizCard.classList.remove('hidden');
    renderQuestion();
  } catch (err) {
    hideLoading();
    console.error('生成题目失败:', err);

    // API 失败时尝试使用 Mock 数据
    try {
      state.questions = generateQuestionsFromMock(state.topic);
      if (state.questions.length > 0) {
        hideError();
        quizCard.classList.remove('hidden');
        renderQuestion();
        return;
      }
    } catch (mockErr) {
      // Mock 也失败
    }

    // 全部失败，显示错误
    showError('生成题目失败：' + (err.message || '请检查网络连接后重试'));
  }
}

// ===== 渲染题目 =====
function renderQuestion() {
  const q = state.questions[state.currentIndex];
  const total = state.questions.length;
  const current = state.currentIndex + 1;

  // 进度
  progressText.textContent = `${current}/${total}`;
  progressFill.style.width = `${(current / total) * 100}%`;

  // 题号
  questionNumber.textContent = `第 ${current} 题`;

  // 题目
  questionText.textContent = q.question;

  // 选项
  const optTexts = [$('#opt-a'), $('#opt-b'), $('#opt-c'), $('#opt-d')];
  q.options.forEach((opt, i) => {
    if (optionBtns[i]) {
      optionBtns[i].dataset.label = opt.label;
      optionBtns[i].querySelector('.option-label').textContent = opt.label;
    }
    if (optTexts[i]) {
      optTexts[i].textContent = opt.text;
    }
  });

  // 重置选项状态
  optionBtns.forEach(btn => {
    btn.classList.remove('correct', 'wrong', 'disabled');
  });

  // 隐藏反馈和下一题按钮
  feedback.classList.remove('show', 'correct-feedback', 'wrong-feedback');
  nextBtn.classList.add('hidden');

  // 卡片动画
  quizCard.classList.remove('card-enter');
  void quizCard.offsetWidth;
  quizCard.classList.add('card-enter');
}

// ===== 选择答案 =====
function selectAnswer(selectedLabel) {
  const q = state.questions[state.currentIndex];
  const isCorrect = selectedLabel === q.answer;

  state.answers.push({ selected: selectedLabel, correct: isCorrect });

  optionBtns.forEach(btn => {
    btn.classList.add('disabled');
    if (btn.dataset.label === q.answer) {
      btn.classList.add('correct');
    }
    if (btn.dataset.label === selectedLabel && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  feedback.classList.add('show');
  if (isCorrect) {
    feedback.classList.add('correct-feedback');
    feedbackIcon.textContent = '✅';
    feedbackText.textContent = '回答正确！';
    launchConfetti();
  } else {
    feedback.classList.add('wrong-feedback');
    feedbackIcon.textContent = '❌';
    feedbackText.textContent = `回答错误，正确答案是 ${q.answer}`;
  }
  feedbackExplanation.textContent = q.explanation;

  const isLast = state.currentIndex >= state.questions.length - 1;
  nextBtn.querySelector('span').textContent = isLast ? '查看结果' : '下一题';
  nextBtn.classList.remove('hidden');
}

// ===== 下一题 / 查看结果 =====
function goNext() {
  if (state.currentIndex >= state.questions.length - 1) {
    state.endTime = Date.now();
    showResult();
    return;
  }

  state.currentIndex++;
  renderQuestion();
}

// ===== 显示结果 =====
function showResult() {
  showPage('page-result');

  const total = state.questions.length;
  const correct = state.answers.filter(a => a.correct).length;
  const rate = Math.round((correct / total) * 100);
  const score = correct * 10;
  const timeSec = Math.round((state.endTime - state.startTime) / 1000);

  let badge, title;
  if (rate >= 90) {
    badge = '🏆';
    title = '学霸级闯关！';
  } else if (rate >= 70) {
    badge = '🌟';
    title = '达人级闯关！';
  } else if (rate >= 50) {
    badge = '💪';
    title = '继续加油！';
  } else {
    badge = '📖';
    title = '再接再厉！';
  }

  resultBadge.textContent = badge;
  resultTitle.textContent = title;

  animateNumber(scoreNumber, 0, score, 1200);

  const circumference = 2 * Math.PI * 52;
  const offset = circumference * (1 - rate / 100);
  scoreRingFill.style.strokeDasharray = circumference;
  scoreRingFill.style.strokeDashoffset = circumference;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      scoreRingFill.style.strokeDashoffset = offset;
    });
  });

  statCorrect.textContent = correct;
  statTotal.textContent = total;
  statRate.textContent = rate + '%';
  statTime.textContent = formatTime(timeSec);

  if (rate >= 70) {
    setTimeout(() => launchConfetti(), 600);
  }
}

function animateNumber(el, from, to, duration) {
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(from + (to - from) * eased);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function formatTime(sec) {
  if (sec < 60) return sec + 's';
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}m${s}s`;
}

// ===== 撒花效果 =====
function launchConfetti() {
  const ctx = confettiCanvas.getContext('2d');
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#10B981', '#F59E0B', '#EF4444', '#3B82F6', '#8B5CF6', '#EC4899'];

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * confettiCanvas.width,
      y: -20 - Math.random() * 100,
      w: 6 + Math.random() * 6,
      h: 4 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 4,
      vy: 2 + Math.random() * 4,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      opacity: 1
    });
  }

  let frame = 0;
  const maxFrames = 150;

  function draw() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    frame++;

    particles.forEach(p => {
      p.x += p.vx;
      p.vy += 0.08;
      p.y += p.vy;
      p.rotation += p.rotSpeed;

      if (frame > maxFrames - 40) {
        p.opacity = Math.max(0, p.opacity - 0.03);
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    if (frame < maxFrames) {
      requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }

  draw();
}

// ===== SVG 渐变注入 =====
function injectSVGGradient() {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = $('.score-ring');
  const defs = document.createElementNS(svgNS, 'defs');
  const gradient = document.createElementNS(svgNS, 'linearGradient');
  gradient.setAttribute('id', 'scoreGradient');
  gradient.setAttribute('x1', '0%');
  gradient.setAttribute('y1', '0%');
  gradient.setAttribute('x2', '100%');
  gradient.setAttribute('y2', '0%');

  const stop1 = document.createElementNS(svgNS, 'stop');
  stop1.setAttribute('offset', '0%');
  stop1.setAttribute('stop-color', '#10B981');

  const stop2 = document.createElementNS(svgNS, 'stop');
  stop2.setAttribute('offset', '100%');
  stop2.setAttribute('stop-color', '#F59E0B');

  gradient.appendChild(stop1);
  gradient.appendChild(stop2);
  defs.appendChild(gradient);
  svg.insertBefore(defs, svg.firstChild);

  scoreRingFill.style.stroke = 'url(#scoreGradient)';
}

// ===== 事件绑定 =====
startBtn.addEventListener('click', () => {
  startQuiz(topicInput.value);
});

topicInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') startQuiz(topicInput.value);
});

topicTags.forEach(tag => {
  tag.addEventListener('click', () => {
    topicTags.forEach(t => t.classList.remove('selected'));
    tag.classList.add('selected');
    topicInput.value = tag.dataset.topic;
  });
});

optionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('disabled')) return;
    selectAnswer(btn.dataset.label);
  });
});

nextBtn.addEventListener('click', goNext);

retryBtn.addEventListener('click', () => {
  state.currentIndex = 0;
  state.answers = [];
  state.startTime = Date.now();
  showPage('page-quiz');
  quizCard.classList.remove('hidden');
  renderQuestion();
});

changeTopicBtn.addEventListener('click', () => {
  topicInput.value = '';
  topicTags.forEach(t => t.classList.remove('selected'));
  showPage('page-home');
});

// 错误页按钮
errorRetryBtn.addEventListener('click', () => {
  hideError();
  startQuiz(state.topic);
});

errorBackBtn.addEventListener('click', () => {
  hideError();
  showPage('page-home');
});

// ===== 初始化 =====
injectSVGGradient();
