// ===== Mock 题库数据 =====
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
    },
    {
      question: '以下哪个不是 Python 的基本数据类型？',
      options: [
        { label: 'A', text: 'int' },
        { label: 'B', text: 'str' },
        { label: 'C', text: 'char' },
        { label: 'D', text: 'bool' }
      ],
      answer: 'C',
      explanation: 'Python 没有 char 类型，单个字符也是 str（字符串）类型。int、str、bool 都是基本数据类型。'
    },
    {
      question: 'Python 列表推导式的正确写法是？',
      options: [
        { label: 'A', text: '[x for x in range(10)]' },
        { label: 'B', text: '{x for x in range(10)}' },
        { label: 'C', text: '(x for x in range(10))' },
        { label: 'D', text: '<x for x in range(10)>' }
      ],
      answer: 'A',
      explanation: '列表推导式使用方括号 []，花括号 {} 是集合推导式，圆括号 () 是生成器表达式。'
    },
    {
      question: 'Python 中 == 和 is 的区别是什么？',
      options: [
        { label: 'A', text: '没有区别' },
        { label: 'B', text: '== 比较值，is 比较身份（内存地址）' },
        { label: 'C', text: '== 比较身份，is 比较值' },
        { label: 'D', text: 'is 只能用于数字' }
      ],
      answer: 'B',
      explanation: '== 比较两个对象的值是否相等，is 比较两个对象是否是同一个对象（内存地址相同）。'
    },
    {
      question: 'Python 中 with 语句的主要用途是？',
      options: [
        { label: 'A', text: '条件判断' },
        { label: 'B', text: '循环控制' },
        { label: 'C', text: '上下文管理（如自动关闭文件）' },
        { label: 'D', text: '异常抛出' }
      ],
      answer: 'C',
      explanation: 'with 语句用于上下文管理，可以自动管理资源的获取和释放，最常用于文件操作。'
    },
    {
      question: '以下哪种方式可以正确创建一个空字典？',
      options: [
        { label: 'A', text: 'dict = []' },
        { label: 'B', text: 'dict = {}' },
        { label: 'C', text: 'dict = ()' },
        { label: 'D', text: 'dict = set()' }
      ],
      answer: 'B',
      explanation: '{} 创建空字典，[] 创建空列表，() 创建空元组，set() 创建空集合。'
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
      question: '古埃及最著名的法老图坦卡蒙的陵墓是在哪一年被发现的？',
      options: [
        { label: 'A', text: '1899年' },
        { label: 'B', text: '1912年' },
        { label: 'C', text: '1922年' },
        { label: 'D', text: '1935年' }
      ],
      answer: 'C',
      explanation: '图坦卡蒙陵墓由英国考古学家霍华德·卡特于1922年在帝王谷发现，是保存最完好的法老陵墓之一。'
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
    },
    {
      question: '柏林墙倒塌是在哪一年？',
      options: [
        { label: 'A', text: '1987年' },
        { label: 'B', text: '1989年' },
        { label: 'C', text: '1991年' },
        { label: 'D', text: '1993年' }
      ],
      answer: 'B',
      explanation: '柏林墙于1989年11月9日倒塌，标志着冷战走向终结，东西德走向统一。'
    },
    {
      question: '工业革命最早发生在哪个国家？',
      options: [
        { label: 'A', text: '美国' },
        { label: 'B', text: '法国' },
        { label: 'C', text: '德国' },
        { label: 'D', text: '英国' }
      ],
      answer: 'D',
      explanation: '工业革命最早发生在18世纪60年代的英国，以蒸汽机的改良和纺织业的革新为标志。'
    },
    {
      question: '古罗马帝国的官方语言是什么？',
      options: [
        { label: 'A', text: '希腊语' },
        { label: 'B', text: '拉丁语' },
        { label: 'C', text: '意大利语' },
        { label: 'D', text: '英语' }
      ],
      answer: 'B',
      explanation: '古罗马帝国的官方语言是拉丁语，它也是后来罗曼语族（法语、意大利语、西班牙语等）的源头。'
    },
    {
      question: '人类历史上第一个登上月球的人是谁？',
      options: [
        { label: 'A', text: '巴兹·奥尔德林' },
        { label: 'B', text: '尤里·加加林' },
        { label: 'C', text: '尼尔·阿姆斯特朗' },
        { label: 'D', text: '艾伦·谢泼德' }
      ],
      answer: 'C',
      explanation: '尼尔·阿姆斯特朗于1969年7月20日乘坐阿波罗11号首次登上月球，留下了"人类的一大步"的名言。'
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
      question: '以下哪个方法可以将字符串转换为整数？',
      options: [
        { label: 'A', text: 'Number.parseInt()' },
        { label: 'B', text: 'String.toInt()' },
        { label: 'C', text: 'Math.integer()' },
        { label: 'D', text: 'convert.toInt()' }
      ],
      answer: 'A',
      explanation: 'Number.parseInt() 或 parseInt() 可以将字符串解析为整数。也可以使用 Number() 进行类型转换。'
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
    },
    {
      question: '数组的 push() 方法的作用是？',
      options: [
        { label: 'A', text: '删除末尾元素' },
        { label: 'B', text: '在开头添加元素' },
        { label: 'C', text: '在末尾添加元素' },
        { label: 'D', text: '删除开头元素' }
      ],
      answer: 'C',
      explanation: 'push() 方法向数组末尾添加一个或多个元素，并返回新的长度。unshift() 在开头添加，pop() 删除末尾。'
    },
    {
      question: 'JavaScript 中哪个对象用于存储键值对？',
      options: [
        { label: 'A', text: 'Array' },
        { label: 'B', text: 'Object' },
        { label: 'C', text: 'Set' },
        { label: 'D', text: 'Map' }
      ],
      answer: 'B',
      explanation: 'Object 是 JavaScript 中最常用的键值对存储方式。Map 也可以存储键值对，但 Object 更基础和常用。'
    },
    {
      question: 'document.querySelector() 的作用是？',
      options: [
        { label: 'A', text: '创建新元素' },
        { label: 'B', text: '选择第一个匹配的 DOM 元素' },
        { label: 'C', text: '选择所有匹配的元素' },
        { label: 'D', text: '删除元素' }
      ],
      answer: 'B',
      explanation: 'querySelector() 返回文档中匹配指定 CSS 选择器的第一个元素。querySelectorAll() 返回所有匹配元素。'
    },
    {
      question: 'NaN === NaN 的结果是？',
      options: [
        { label: 'A', text: 'true' },
        { label: 'B', text: 'false' },
        { label: 'C', text: 'undefined' },
        { label: 'D', text: '报错' }
      ],
      answer: 'B',
      explanation: 'NaN 是 JavaScript 中唯一一个不等于自身的值，NaN === NaN 和 NaN == NaN 都返回 false。需要用 Number.isNaN() 来判断。'
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
    },
    {
      question: '以下哪个数是无理数？',
      options: [
        { label: 'A', text: '3.14' },
        { label: 'B', text: '22/7' },
        { label: 'C', text: '√2' },
        { label: 'D', text: '0.333...' }
      ],
      answer: 'C',
      explanation: '√2 是无理数，不能表示为两个整数的比。3.14 和 22/7 是有理数，0.333... = 1/3 也是有理数。'
    },
    {
      question: '斐波那契数列的前6项是？',
      options: [
        { label: 'A', text: '1, 1, 2, 3, 5, 8' },
        { label: 'B', text: '1, 2, 3, 4, 5, 6' },
        { label: 'C', text: '0, 1, 1, 2, 3, 5' },
        { label: 'D', text: '1, 2, 4, 8, 16, 32' }
      ],
      answer: 'A',
      explanation: '斐波那契数列从1开始，每一项等于前两项之和：1, 1, 2, 3, 5, 8, 13, 21...（选项C也是合法的，取决于起始定义）'
    },
    {
      question: 'log₁₀(1000) 等于多少？',
      options: [
        { label: 'A', text: '2' },
        { label: 'B', text: '3' },
        { label: 'C', text: '4' },
        { label: 'D', text: '10' }
      ],
      answer: 'B',
      explanation: 'log₁₀(1000) = log₁₀(10³) = 3，因为10的3次方等于1000。'
    },
    {
      question: '绝对值函数 |x| 的定义是？',
      options: [
        { label: 'A', text: 'x 本身' },
        { label: 'B', text: 'x 的相反数' },
        { label: 'C', text: 'x ≥ 0 时为 x，x < 0 时为 -x' },
        { label: 'D', text: 'x 的平方' }
      ],
      answer: 'C',
      explanation: '绝对值 |x| = x（当 x ≥ 0），|x| = -x（当 x < 0）。它表示数轴上点到原点的距离，总是非负的。'
    },
    {
      question: '等差数列 2, 5, 8, 11, ... 的公差是？',
      options: [
        { label: 'A', text: '2' },
        { label: 'B', text: '3' },
        { label: 'C', text: '5' },
        { label: 'D', text: '7' }
      ],
      answer: 'B',
      explanation: '等差数列的公差是相邻两项的差。5 - 2 = 3，8 - 5 = 3，11 - 8 = 3，公差为3。'
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
    },
    {
      question: '声音在空气中的传播速度约为？',
      options: [
        { label: 'A', text: '340 m/s' },
        { label: 'B', text: '3400 m/s' },
        { label: 'C', text: '34 m/s' },
        { label: 'D', text: '34000 m/s' }
      ],
      answer: 'A',
      explanation: '声音在空气中的传播速度约为340 m/s（在15°C时约340.3 m/s），远低于光速。'
    },
    {
      question: '太阳系中最大的行星是？',
      options: [
        { label: 'A', text: '土星' },
        { label: 'B', text: '木星' },
        { label: 'C', text: '天王星' },
        { label: 'D', text: '海王星' }
      ],
      answer: 'B',
      explanation: '木星是太阳系中最大的行星，质量是其他所有行星质量总和的2.5倍，直径约14万公里。'
    },
    {
      question: '牛顿第一定律也被称为？',
      options: [
        { label: 'A', text: '加速度定律' },
        { label: 'B', text: '作用力与反作用力定律' },
        { label: 'C', text: '惯性定律' },
        { label: 'D', text: '万有引力定律' }
      ],
      answer: 'C',
      explanation: '牛顿第一定律即惯性定律：物体在不受外力作用时，保持静止或匀速直线运动状态。'
    },
    {
      question: '以下哪种气体是光合作用的原料？',
      options: [
        { label: 'A', text: '氧气' },
        { label: 'B', text: '氮气' },
        { label: 'C', text: '二氧化碳' },
        { label: 'D', text: '氢气' }
      ],
      answer: 'C',
      explanation: '光合作用利用二氧化碳和水，在光能的作用下合成有机物并释放氧气：6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂'
    },
    {
      question: '绝对零度是多少摄氏度？',
      options: [
        { label: 'A', text: '-100°C' },
        { label: 'B', text: '-273.15°C' },
        { label: 'C', text: '-373.15°C' },
        { label: 'D', text: '0°C' }
      ],
      answer: 'B',
      explanation: '绝对零度为 -273.15°C（0K），是理论上可能达到的最低温度，此时粒子热运动完全停止。'
    }
  ]
};

// 通用知识题库（无匹配主题时使用）
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
    question: 'HTTP 状态码 404 表示什么？',
    options: [
      { label: 'A', text: '服务器错误' },
      { label: 'B', text: '页面未找到' },
      { label: 'C', text: '请求成功' },
      { label: 'D', text: '重定向' }
    ],
    answer: 'B',
    explanation: '404 Not Found 表示服务器无法找到请求的资源。200 表示成功，500 表示服务器错误，301/302 表示重定向。'
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
    question: '二进制数 1010 转换为十进制是多少？',
    options: [
      { label: 'A', text: '8' },
      { label: 'B', text: '10' },
      { label: 'C', text: '12' },
      { label: 'D', text: '14' }
    ],
    answer: 'B',
    explanation: '1010₂ = 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 8 + 0 + 2 + 0 = 10'
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
    question: '以下哪种维生素又被称为"阳光维生素"？',
    options: [
      { label: 'A', text: '维生素A' },
      { label: 'B', text: '维生素B' },
      { label: 'C', text: '维生素C' },
      { label: 'D', text: '维生素D' }
    ],
    answer: 'D',
    explanation: '维生素D被称为"阳光维生素"，因为人体皮肤在紫外线照射下可以合成维生素D。'
  },
  {
    question: '世界上最深的海沟是？',
    options: [
      { label: 'A', text: '秘鲁-智利海沟' },
      { label: 'B', text: '马里亚纳海沟' },
      { label: 'C', text: '日本海沟' },
      { label: 'D', text: '汤加海沟' }
    ],
    answer: 'B',
    explanation: '马里亚纳海沟位于太平洋西部，最深处约11034米（挑战者深渊），是地球上已知最深的海沟。'
  },
  {
    question: 'HTML 的全称是什么？',
    options: [
      { label: 'A', text: 'Hyper Text Markup Language' },
      { label: 'B', text: 'High Tech Modern Language' },
      { label: 'C', text: 'Hyper Transfer Markup Language' },
      { label: 'D', text: 'Home Tool Markup Language' }
    ],
    answer: 'A',
    explanation: 'HTML 全称 HyperText Markup Language（超文本标记语言），是构建网页内容的标准标记语言。'
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

// ===== 生成题目 =====
function generateQuestions(topic) {
  // 尝试匹配预设题库
  for (const [key, questions] of Object.entries(MOCK_QUESTIONS)) {
    if (topic.includes(key) || key.includes(topic)) {
      return shuffleArray([...questions]).slice(0, randomInt(5, 10));
    }
  }

  // 无匹配则使用通用题库
  return shuffleArray([...GENERAL_QUESTIONS]).slice(0, randomInt(5, 10));
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
function startQuiz(topic) {
  if (!topic.trim()) {
    topicInput.focus();
    topicInput.style.borderColor = 'var(--red)';
    setTimeout(() => { topicInput.style.borderColor = ''; }, 1500);
    return;
  }

  state.topic = topic.trim();
  state.questions = generateQuestions(state.topic);
  state.currentIndex = 0;
  state.answers = [];
  state.startTime = Date.now();

  showPage('page-quiz');
  renderQuestion();
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
    optionBtns[i].dataset.label = opt.label;
    optionBtns[i].querySelector('.option-label').textContent = opt.label;
    optTexts[i].textContent = opt.text;
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
  void quizCard.offsetWidth; // 触发 reflow
  quizCard.classList.add('card-enter');
}

// ===== 选择答案 =====
function selectAnswer(selectedLabel) {
  const q = state.questions[state.currentIndex];
  const isCorrect = selectedLabel === q.answer;

  // 记录答案
  state.answers.push({ selected: selectedLabel, correct: isCorrect });

  // 禁用所有选项
  optionBtns.forEach(btn => {
    btn.classList.add('disabled');
    if (btn.dataset.label === q.answer) {
      btn.classList.add('correct');
    }
    if (btn.dataset.label === selectedLabel && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  // 显示反馈
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

  // 显示下一题按钮
  const isLast = state.currentIndex >= state.questions.length - 1;
  nextBtn.querySelector('span').textContent = isLast ? '查看结果' : '下一题';
  nextBtn.classList.remove('hidden');
}

// ===== 下一题 / 查看结果 =====
function goNext() {
  if (state.currentIndex >= state.questions.length - 1) {
    // 答题结束
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

  // 评价
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

  // 分数动画
  animateNumber(scoreNumber, 0, score, 1200);

  // 环形进度
  const circumference = 2 * Math.PI * 52; // r=52
  const offset = circumference * (1 - rate / 100);
  scoreRingFill.style.strokeDasharray = circumference;
  // 需要先重置再设置，触发动画
  scoreRingFill.style.strokeDashoffset = circumference;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      scoreRingFill.style.strokeDashoffset = offset;
    });
  });

  // 统计
  statCorrect.textContent = correct;
  statTotal.textContent = total;
  statRate.textContent = rate + '%';
  statTime.textContent = formatTime(timeSec);

  // 高分撒花
  if (rate >= 70) {
    setTimeout(() => launchConfetti(), 600);
  }
}

function animateNumber(el, from, to, duration) {
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
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

// ===== SVG 渐变注入（用于环形进度条） =====
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
  renderQuestion();
});

changeTopicBtn.addEventListener('click', () => {
  topicInput.value = '';
  topicTags.forEach(t => t.classList.remove('selected'));
  showPage('page-home');
});

// ===== 初始化 =====
injectSVGGradient();
