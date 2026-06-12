// ===== 题库数据 =====
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
      explanation: 'Python 没有 char 类型，单个字符也是 str（字符串）类型。'
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
      explanation: '箭头函数不绑定自己的 this，它会继承外层作用域的 this 值。'
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
      explanation: 'push() 方法向数组末尾添加一个或多个元素，并返回新的长度。'
    }
  ],
  '语文': [
    {
      question: '"但愿人长久，千里共婵娟"的作者是谁？',
      options: [
        { label: 'A', text: '李白' },
        { label: 'B', text: '杜甫' },
        { label: 'C', text: '苏轼' },
        { label: 'D', text: '白居易' }
      ],
      answer: 'C',
      explanation: '这句词出自苏轼的《水调歌头·明月几时有》，是中秋词中的千古绝唱。'
    },
    {
      question: '"四大名著"中，哪部作品的作者是曹雪芹？',
      options: [
        { label: 'A', text: '《西游记》' },
        { label: 'B', text: '《红楼梦》' },
        { label: 'C', text: '《三国演义》' },
        { label: 'D', text: '《水浒传》' }
      ],
      answer: 'B',
      explanation: '《红楼梦》的作者是曹雪芹，被誉为中国古典小说的巅峰之作。'
    },
    {
      question: '下列哪个成语使用的是比喻修辞手法？',
      options: [
        { label: 'A', text: '守株待兔' },
        { label: 'B', text: '光阴似箭' },
        { label: 'C', text: '画蛇添足' },
        { label: 'D', text: '掩耳盗铃' }
      ],
      answer: 'B',
      explanation: '"光阴似箭"用箭的速度来比喻时间飞逝，是比喻修辞。其他选项主要是寓言故事。'
    },
    {
      question: '"先天下之忧而忧，后天下之乐而乐"出自哪篇文章？',
      options: [
        { label: 'A', text: '《醉翁亭记》' },
        { label: 'B', text: '《岳阳楼记》' },
        { label: 'C', text: '《滕王阁序》' },
        { label: 'D', text: '《出师表》' }
      ],
      answer: 'B',
      explanation: '此句出自范仲淹的《岳阳楼记》，表达了忧国忧民的崇高情怀。'
    },
    {
      question: '鲁迅的第一篇白话小说是？',
      options: [
        { label: 'A', text: '《阿Q正传》' },
        { label: 'B', text: '《狂人日记》' },
        { label: 'C', text: '《孔乙己》' },
        { label: 'D', text: '《药》' }
      ],
      answer: 'B',
      explanation: '《狂人日记》发表于1918年，是中国现代文学史上第一篇白话小说。'
    },
    {
      question: '"落霞与孤鹜齐飞，秋水共长天一色"的作者是？',
      options: [
        { label: 'A', text: '王勃' },
        { label: 'B', text: '李白' },
        { label: 'C', text: '杜甫' },
        { label: 'D', text: '苏轼' }
      ],
      answer: 'A',
      explanation: '此句出自王勃的《滕王阁序》，是千古传诵的名句。'
    },
    {
      question: '下列哪个字是形声字？',
      options: [
        { label: 'A', text: '日' },
        { label: 'B', text: '明' },
        { label: 'C', text: '休' },
        { label: 'D', text: '清' }
      ],
      answer: 'D',
      explanation: '"清"是形声字，左边"氵"表意，右边"青"表音。"日"是象形字，"明"和"休"是会意字。'
    }
  ],
  '英语': [
    {
      question: 'Which of the following is a correct sentence?',
      options: [
        { label: 'A', text: 'He don\'t like apples.' },
        { label: 'B', text: 'He doesn\'t like apples.' },
        { label: 'C', text: 'He not like apples.' },
        { label: 'D', text: 'He no like apples.' }
      ],
      answer: 'B',
      explanation: '第三人称单数否定句应使用 doesn\'t + 动词原形，不能用 don\'t。'
    },
    {
      question: '"Break a leg" 这个习语的意思是？',
      options: [
        { label: 'A', text: '摔断腿' },
        { label: 'B', text: '祝你好运' },
        { label: 'C', text: '小心点' },
        { label: 'D', text: '快跑' }
      ],
      answer: 'B',
      explanation: '"Break a leg" 是演出前祝人好运的习语，源自戏剧界的传统。'
    },
    {
      question: '以下哪个单词是动词过去式？',
      options: [
        { label: 'A', text: 'gone' },
        { label: 'B', text: 'went' },
        { label: 'C', text: 'going' },
        { label: 'D', text: 'goes' }
      ],
      answer: 'B',
      explanation: 'went 是 go 的过去式，gone 是过去分词，going 是现在分词，goes 是第三人称单数。'
    },
    {
      question: '"I have been living here since 2010." 使用的是什么时态？',
      options: [
        { label: 'A', text: '一般现在时' },
        { label: 'B', text: '现在完成时' },
        { label: 'C', text: '现在完成进行时' },
        { label: 'D', text: '过去进行时' }
      ],
      answer: 'C',
      explanation: 'have been doing 是现在完成进行时，表示从过去持续到现在的动作。'
    },
    {
      question: '以下哪个词是可数名词？',
      options: [
        { label: 'A', text: 'information' },
        { label: 'B', text: 'advice' },
        { label: 'C', text: 'furniture' },
        { label: 'D', text: 'suggestion' }
      ],
      answer: 'D',
      explanation: 'suggestion 是可数名词（a suggestion / suggestions），而 information、advice、furniture 都是不可数名词。'
    },
    {
      question: '"If I were you, I would study harder." 是什么类型的条件句？',
      options: [
        { label: 'A', text: '第一条件句（真实条件）' },
        { label: 'B', text: '第二条件句（虚拟条件）' },
        { label: 'C', text: '第三条件句（过去虚拟）' },
        { label: 'D', text: '零条件句（普遍真理）' }
      ],
      answer: 'B',
      explanation: '第二条件句（If + 过去式, would + 动词原形）表示与现在事实相反的假设。'
    },
    {
      question: '以下哪个介词搭配正确？',
      options: [
        { label: 'A', text: 'interested at' },
        { label: 'B', text: 'interested on' },
        { label: 'C', text: 'interested in' },
        { label: 'D', text: 'interested for' }
      ],
      answer: 'C',
      explanation: '"interested in" 是固定搭配，表示"对……感兴趣"。'
    }
  ],
  '物理': [
    {
      question: '牛顿第二定律的表达式是？',
      options: [
        { label: 'A', text: 'F = mv' },
        { label: 'B', text: 'F = ma' },
        { label: 'C', text: 'F = mg' },
        { label: 'D', text: 'F = mv²' }
      ],
      answer: 'B',
      explanation: '牛顿第二定律：F = ma，物体的加速度与所受合力成正比，与质量成反比。'
    },
    {
      question: '以下哪个是电阻的单位？',
      options: [
        { label: 'A', text: '安培（A）' },
        { label: 'B', text: '伏特（V）' },
        { label: 'C', text: '欧姆（Ω）' },
        { label: 'D', text: '瓦特（W）' }
      ],
      answer: 'C',
      explanation: '电阻的国际单位是欧姆（Ω）。安培是电流单位，伏特是电压单位，瓦特是功率单位。'
    },
    {
      question: '光从空气射入水中时，折射角与入射角的关系是？',
      options: [
        { label: 'A', text: '折射角大于入射角' },
        { label: 'B', text: '折射角等于入射角' },
        { label: 'C', text: '折射角小于入射角' },
        { label: 'D', text: '无法确定' }
      ],
      answer: 'C',
      explanation: '光从光疏介质（空气）射入光密介质（水）时，折射角小于入射角，光线向法线方向偏折。'
    },
    {
      question: '一个物体从高处自由下落（忽略空气阻力），2秒后速度约为？',
      options: [
        { label: 'A', text: '10 m/s' },
        { label: 'B', text: '20 m/s' },
        { label: 'C', text: '30 m/s' },
        { label: 'D', text: '40 m/s' }
      ],
      answer: 'B',
      explanation: '自由落体速度 v = gt，g ≈ 10 m/s²，所以 v = 10 × 2 = 20 m/s。'
    },
    {
      question: '以下哪种波属于电磁波？',
      options: [
        { label: 'A', text: '声波' },
        { label: 'B', text: '水波' },
        { label: 'C', text: '地震波' },
        { label: 'D', text: 'X射线' }
      ],
      answer: 'D',
      explanation: 'X射线是电磁波的一种。声波、水波是机械波，地震波也是机械波。'
    },
    {
      question: '欧姆定律的表达式是？',
      options: [
        { label: 'A', text: 'I = UR' },
        { label: 'B', text: 'I = U/R' },
        { label: 'C', text: 'I = R/U' },
        { label: 'D', text: 'I = U + R' }
      ],
      answer: 'B',
      explanation: '欧姆定律：I = U/R，电流等于电压除以电阻。'
    },
    {
      question: '以下哪种现象属于光的干涉？',
      options: [
        { label: 'A', text: '海市蜃楼' },
        { label: 'B', text: '雨后彩虹' },
        { label: 'C', text: '肥皂泡的彩色条纹' },
        { label: 'D', text: '水中倒影' }
      ],
      answer: 'C',
      explanation: '肥皂泡的彩色条纹是薄膜干涉现象。海市蜃楼是全反射，彩虹是色散，水中倒影是反射。'
    }
  ],
  '化学': [
    {
      question: '水的化学式是什么？',
      options: [
        { label: 'A', text: 'CO₂' },
        { label: 'B', text: 'H₂O' },
        { label: 'C', text: 'NaCl' },
        { label: 'D', text: 'O₂' }
      ],
      answer: 'B',
      explanation: '水的化学式是 H₂O，由两个氢原子和一个氧原子组成。'
    },
    {
      question: '元素周期表中，原子序数为6的元素是？',
      options: [
        { label: 'A', text: '氮（N）' },
        { label: 'B', text: '碳（C）' },
        { label: 'C', text: '氧（O）' },
        { label: 'D', text: '硼（B）' }
      ],
      answer: 'B',
      explanation: '碳（C）的原子序数为6，位于第二周期第IVA族，是有机物的核心元素。'
    },
    {
      question: '以下哪种物质是酸？',
      options: [
        { label: 'A', text: 'NaOH' },
        { label: 'B', text: 'HCl' },
        { label: 'C', text: 'NaCl' },
        { label: 'D', text: 'CaO' }
      ],
      answer: 'B',
      explanation: 'HCl（盐酸）是酸，电离产生 H⁺。NaOH 是碱，NaCl 是盐，CaO 是碱性氧化物。'
    },
    {
      question: '化学方程式 2H₂ + O₂ → 2H₂O 中，反应物和生成物的质量比遵循什么定律？',
      options: [
        { label: 'A', text: '能量守恒定律' },
        { label: 'B', text: '质量守恒定律' },
        { label: 'C', text: '阿伏伽德罗定律' },
        { label: 'D', text: '盖吕萨克定律' }
      ],
      answer: 'B',
      explanation: '化学反应遵循质量守恒定律，反应前后各元素的质量和种类不变。'
    },
    {
      question: '铁在潮湿空气中生锈，主要生成物是？',
      options: [
        { label: 'A', text: 'FeO' },
        { label: 'B', text: 'Fe₂O₃' },
        { label: 'C', text: 'Fe₃O₄' },
        { label: 'D', text: 'Fe(OH)₂' }
      ],
      answer: 'B',
      explanation: '铁锈的主要成分是 Fe₂O₃·xH₂O（氧化铁的水合物），是铁与氧气和水共同作用的结果。'
    },
    {
      question: '以下哪种是氧化还原反应？',
      options: [
        { label: 'A', text: 'NaCl 溶于水' },
        { label: 'B', text: '碳在氧气中燃烧' },
        { label: 'C', text: '冰融化成水' },
        { label: 'D', text: '食盐溶于盐酸' }
      ],
      answer: 'B',
      explanation: '碳在氧气中燃烧（C + O₂ → CO₂）涉及化合价变化，是氧化还原反应。'
    },
    {
      question: 'pH 值为7的溶液呈什么性？',
      options: [
        { label: 'A', text: '酸性' },
        { label: 'B', text: '碱性' },
        { label: 'C', text: '中性' },
        { label: 'D', text: '无法判断' }
      ],
      answer: 'C',
      explanation: 'pH = 7 为中性，pH < 7 为酸性，pH > 7 为碱性。'
    }
  ],
  '生物': [
    {
      question: 'DNA 的双螺旋结构是由谁发现的？',
      options: [
        { label: 'A', text: '达尔文' },
        { label: 'B', text: '爱因斯坦' },
        { label: 'C', text: '沃森和克里克' },
        { label: 'D', text: '孟德尔' }
      ],
      answer: 'C',
      explanation: '1953年，沃森和克里克发现了DNA的双螺旋结构，这是20世纪最伟大的科学发现之一。'
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
      explanation: '皮肤是人体最大的器官，成人皮肤总面积约1.5-2平方米。'
    },
    {
      question: '光合作用主要发生在植物的哪个结构中？',
      options: [
        { label: 'A', text: '线粒体' },
        { label: 'B', text: '叶绿体' },
        { label: 'C', text: '细胞核' },
        { label: 'D', text: '核糖体' }
      ],
      answer: 'B',
      explanation: '叶绿体是光合作用的场所，含有叶绿素，能将光能转化为化学能。线粒体是有氧呼吸的场所。'
    },
    {
      question: '以下哪种细胞没有细胞核？',
      options: [
        { label: 'A', text: '肌肉细胞' },
        { label: 'B', text: '神经细胞' },
        { label: 'C', text: '成熟的红细胞' },
        { label: 'D', text: '白细胞' }
      ],
      answer: 'C',
      explanation: '哺乳动物成熟的红细胞没有细胞核，这为携带更多血红蛋白腾出了空间。'
    },
    {
      question: '孟德尔的分离定律描述的是？',
      options: [
        { label: 'A', text: '基因的自由组合' },
        { label: 'B', text: '等位基因随同源染色体分开而分离' },
        { label: 'C', text: '基因的连锁和交换' },
        { label: 'D', text: '显性基因掩盖隐性基因' }
      ],
      answer: 'B',
      explanation: '分离定律：在减数分裂形成配子时，等位基因随同源染色体的分开而分离，分别进入不同的配子中。'
    },
    {
      question: '以下哪种属于原核生物？',
      options: [
        { label: 'A', text: '酵母菌' },
        { label: 'B', text: '大肠杆菌' },
        { label: 'C', text: '草履虫' },
        { label: 'D', text: '衣藻' }
      ],
      answer: 'B',
      explanation: '大肠杆菌是细菌，属于原核生物，没有以核膜为界限的细胞核。酵母菌、草履虫、衣藻都是真核生物。'
    },
    {
      question: '人体血液循环中，将血液从心脏输送到肺的循环叫什么？',
      options: [
        { label: 'A', text: '体循环' },
        { label: 'B', text: '肺循环' },
        { label: 'C', text: '淋巴循环' },
        { label: 'D', text: '微循环' }
      ],
      answer: 'B',
      explanation: '肺循环（小循环）：右心室 → 肺动脉 → 肺部毛细血管 → 肺静脉 → 左心房。'
    }
  ],
  '地理': [
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
      question: '地球自转一周的时间约为？',
      options: [
        { label: 'A', text: '12小时' },
        { label: 'B', text: '24小时' },
        { label: 'C', text: '365天' },
        { label: 'D', text: '30天' }
      ],
      answer: 'B',
      explanation: '地球自转一周约24小时，这就是一天的由来。365天是公转周期。'
    },
    {
      question: '以下哪条河流是世界上最长的河流？',
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
      question: '板块构造学说认为，地球表面由多少个主要板块组成？',
      options: [
        { label: 'A', text: '5个' },
        { label: 'B', text: '6个' },
        { label: 'C', text: '7个' },
        { label: 'D', text: '8个' }
      ],
      answer: 'B',
      explanation: '板块构造学说将地球表面分为6大板块：太平洋板块、亚欧板块、非洲板块、美洲板块、印度洋板块和南极洲板块。'
    },
    {
      question: '赤道附近的气候类型主要是？',
      options: [
        { label: 'A', text: '温带季风气候' },
        { label: 'B', text: '热带雨林气候' },
        { label: 'C', text: '地中海气候' },
        { label: 'D', text: '极地气候' }
      ],
      answer: 'B',
      explanation: '赤道附近常年受赤道低气压带控制，高温多雨，形成热带雨林气候。'
    },
    {
      question: '以下哪个沙漠是世界上面积最大的热带沙漠？',
      options: [
        { label: 'A', text: '戈壁沙漠' },
        { label: 'B', text: '撒哈拉沙漠' },
        { label: 'C', text: '阿拉伯沙漠' },
        { label: 'D', text: '塔克拉玛干沙漠' }
      ],
      answer: 'B',
      explanation: '撒哈拉沙漠面积约906万平方公里，是世界上最大的热带沙漠，位于非洲北部。'
    },
    {
      question: '地球上海洋面积约占地球表面积的？',
      options: [
        { label: 'A', text: '51%' },
        { label: 'B', text: '61%' },
        { label: 'C', text: '71%' },
        { label: 'D', text: '81%' }
      ],
      answer: 'C',
      explanation: '地球表面约71%被海洋覆盖，因此地球被称为"蓝色星球"。'
    }
  ],
  '政治': [
    {
      question: '我国的国家根本大法是？',
      options: [
        { label: 'A', text: '刑法' },
        { label: 'B', text: '宪法' },
        { label: 'C', text: '民法' },
        { label: 'D', text: '行政法' }
      ],
      answer: 'B',
      explanation: '宪法是国家的根本大法，具有最高的法律效力，是其他法律的立法基础。'
    },
    {
      question: '我国的根本政治制度是？',
      options: [
        { label: 'A', text: '多党合作制度' },
        { label: 'B', text: '政治协商制度' },
        { label: 'C', text: '人民代表大会制度' },
        { label: 'D', text: '民族区域自治制度' }
      ],
      answer: 'C',
      explanation: '人民代表大会制度是我国的根本政治制度，是人民当家作主的重要途径。'
    },
    {
      question: '社会主义核心价值观中，个人层面的内容是？',
      options: [
        { label: 'A', text: '富强、民主、文明、和谐' },
        { label: 'B', text: '自由、平等、公正、法治' },
        { label: 'C', text: '爱国、敬业、诚信、友善' },
        { label: 'D', text: '创新、协调、绿色、开放' }
      ],
      answer: 'C',
      explanation: '社会主义核心价值观：国家层面（富强、民主、文明、和谐），社会层面（自由、平等、公正、法治），个人层面（爱国、敬业、诚信、友善）。'
    },
    {
      question: '我国的基本经济制度中，公有制经济的地位是？',
      options: [
        { label: 'A', text: '补充地位' },
        { label: 'B', text: '主体地位' },
        { label: 'C', text: '主导地位' },
        { label: 'D', text: '辅助地位' }
      ],
      answer: 'B',
      explanation: '我国基本经济制度：公有制为主体、多种所有制经济共同发展。国有经济在国民经济中起主导作用。'
    },
    {
      question: '"一国两制"方针首先被应用于解决哪个地区的问题？',
      options: [
        { label: 'A', text: '台湾' },
        { label: 'B', text: '香港' },
        { label: 'C', text: '澳门' },
        { label: 'D', text: '海南' }
      ],
      answer: 'B',
      explanation: '"一国两制"首先在香港成功实践，1997年7月1日香港回归祖国。'
    },
    {
      question: '中国共产党的最高理想和最终目标是？',
      options: [
        { label: 'A', text: '实现社会主义现代化' },
        { label: 'B', text: '实现共产主义' },
        { label: 'C', text: '全面建成小康社会' },
        { label: 'D', text: '实现中华民族伟大复兴' }
      ],
      answer: 'B',
      explanation: '根据《中国共产党章程》，党的最高理想和最终目标是实现共产主义。'
    }
  ],
  '历史': [
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
      question: '中国历史上第一个统一的封建王朝是？',
      options: [
        { label: 'A', text: '夏朝' },
        { label: 'B', text: '商朝' },
        { label: 'C', text: '周朝' },
        { label: 'D', text: '秦朝' }
      ],
      answer: 'D',
      explanation: '公元前221年，秦始皇统一六国，建立了中国历史上第一个统一的中央集权封建国家——秦朝。'
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
      question: '柏林墙倒塌是在哪一年？',
      options: [
        { label: 'A', text: '1987年' },
        { label: 'B', text: '1989年' },
        { label: 'C', text: '1991年' },
        { label: 'D', text: '1993年' }
      ],
      answer: 'B',
      explanation: '柏林墙于1989年11月9日倒塌，标志着冷战走向终结，东西德走向统一。'
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
      explanation: '质数是只能被1和自身整除的大于1的自然数。17只能被1和17整除，是质数。'
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
      explanation: '0! = 1，这是阶乘的数学定义。'
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
      question: '太阳系中最大的行星是？',
      options: [
        { label: 'A', text: '土星' },
        { label: 'B', text: '木星' },
        { label: 'C', text: '天王星' },
        { label: 'D', text: '海王星' }
      ],
      answer: 'B',
      explanation: '木星是太阳系中最大的行星，质量是其他所有行星质量总和的2.5倍。'
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
      explanation: '光合作用利用二氧化碳和水，在光能的作用下合成有机物并释放氧气。'
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
      explanation: '绝对零度为 -273.15°C（0K），是理论上可能达到的最低温度。'
    }
  ]
};

// 通用知识题库（无匹配主题时使用）
const GENERAL_QUESTIONS = [
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
    question: '以下哪个是可再生能源？',
    options: [
      { label: 'A', text: '煤炭' },
      { label: 'B', text: '石油' },
      { label: 'C', text: '太阳能' },
      { label: 'D', text: '天然气' }
    ],
    answer: 'C',
    explanation: '太阳能是可再生能源，取之不尽。煤炭、石油和天然气都是化石燃料，属于不可再生能源。'
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
    explanation: '在计算机科学中，1 KB = 2¹⁰ = 1024 字节。'
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
    explanation: '404 Not Found 表示服务器无法找到请求的资源。200 表示成功，500 表示服务器错误。'
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
  loadingText.textContent = text || '正在准备题目...';
  loadingOverlay.classList.add('show');
}

function hideLoading() {
  loadingOverlay.classList.remove('show');
}

// ===== 生成题目 =====
function generateQuestions(topic) {
  // 尝试匹配预设题库
  for (const [key, questions] of Object.entries(MOCK_QUESTIONS)) {
    if (topic.includes(key) || key.includes(topic)) {
      return shuffleArray([...questions]).slice(0, randomInt(5, Math.min(questions.length, 9)));
    }
  }

  // 模糊匹配：检查用户输入是否包含题库关键词的子串
  const topicLower = topic.toLowerCase();
  for (const [key, questions] of Object.entries(MOCK_QUESTIONS)) {
    const keyLower = key.toLowerCase();
    // 检查是否有部分匹配
    for (let i = 0; i < keyLower.length - 1; i++) {
      if (topicLower.includes(keyLower.substring(i, i + 2))) {
        return shuffleArray([...questions]).slice(0, randomInt(5, Math.min(questions.length, 9)));
      }
    }
  }

  // 无匹配则使用通用题库
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
  showLoading('正在准备「' + state.topic + '」的题目...');

  // 模拟短暂加载，增强体验
  await new Promise(r => setTimeout(r, 600));

  state.questions = generateQuestions(state.topic);

  hideLoading();
  quizCard.classList.remove('hidden');
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

// ===== 初始化 =====
injectSVGGradient();
