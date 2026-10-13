/* Optional knowledge lessons; examples are verified C99 programs. */
const KNOWLEDGE = {
  "1": [
    {
      "id": "program-structure",
      "title": "C程序的基本结构",
      "level": "基础",
      "summary": "从main入口到return，认清一段完整程序。",
      "paragraphs": [
        "一段最小C程序包含main函数。执行时进入main，按控制流程运行语句，return 0向运行环境报告正常结束。",
        "#include是预处理指令，用于引入头文件中的声明。它在运行前处理，不是main中的第一条执行语句。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    puts(\"进入main\");\n    puts(\"按顺序执行语句\");\n    return 0;\n}\n",
      "output": "进入main\n按顺序执行语句",
      "stdin": "",
      "quiz": {
        "q": "程序运行时，从哪里进入？",
        "options": [
          "第一条#include",
          "main函数",
          "文件最后一行"
        ],
        "answer": 1,
        "explain": "本例的运行入口是main；#include在预处理时处理。"
      }
    },
    {
      "id": "names",
      "title": "标识符与关键字",
      "level": "基础",
      "summary": "给变量起一个合法且能说明用途的名字。",
      "paragraphs": [
        "本课使用字母、数字与下划线命名，数字不能作为首字符。变量名区分大小写，temp与Temp是两个名字。",
        "int、return、if等关键字有固定含义，不能用作变量名。用port_id、temperature等名字可让代码更易读。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int port_id = 3;\n    int temperature = 43;\n    printf(\"端口%d：%d℃\\n\", port_id, temperature);\n    return 0;\n}\n",
      "output": "端口3：43℃",
      "stdin": "",
      "quiz": {
        "q": "下列哪个名字适合用作变量名？",
        "options": [
          "3port",
          "int",
          "port_3"
        ],
        "answer": 2,
        "explain": "port_3符合本课使用的标识符规则，且不是关键字。"
      }
    },
    {
      "id": "comments",
      "title": "注释与代码可读性",
      "level": "基础",
      "summary": "为关键计算解释“为什么这样做”。",
      "paragraphs": [
        "//注释到本行末尾；/* ... */可以覆盖多行。注释不会作为运算语句执行。",
        "注释应说明单位、需求或设计理由。缩进使代码层次清楚，但不能代替分号与花括号。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    // 超温阈值，用于课堂示例\n    int limit = 45;\n    /* 输出当前阈值 */\n    printf(\"阈值：%d℃\\n\", limit);\n    return 0;\n}\n",
      "output": "阈值：45℃",
      "stdin": "",
      "quiz": {
        "q": "//后面的注释会在运行时自动输出吗？",
        "options": [
          "会",
          "不会",
          "只有中文注释会"
        ],
        "answer": 1,
        "explain": "注释用于阅读和维护代码；需要输出时仍要调用printf等函数。"
      }
    },
    {
      "id": "build-flow",
      "title": "编辑、预处理、编译与链接",
      "level": "基础",
      "summary": "理解“源文件”怎样变成可运行程序。",
      "paragraphs": [
        "编辑阶段保存.c源文件，预处理处理#include等指令，编译检查语法并形成目标代码，链接组合所需代码与库。",
        "运行阶段才执行main和输出语句。成功生成程序后，仍需运行并用输入验证结果。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    puts(\"源代码中的输出，在运行时才出现。\");\n    return 0;\n}\n",
      "output": "源代码中的输出，在运行时才出现。",
      "stdin": "",
      "quiz": {
        "q": "语法检查属于哪个阶段？",
        "options": [
          "编译",
          "运行后的打印",
          "输入数据"
        ],
        "answer": 0,
        "explain": "编译器在编译阶段检查程序语法；执行结果仍需在运行时观察。"
      }
    },
    {
      "id": "three-structures",
      "title": "顺序、选择与循环",
      "level": "基础",
      "summary": "用三种结构表达日常任务的处理逻辑。",
      "paragraphs": [
        "顺序结构依次执行；选择结构根据条件进入某个分支；循环结构在条件允许时重复执行。",
        "先明确输入、处理和输出，再选择结构。判断一次温度用选择，连续采样可以用循环。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int temperature = 47;\n    if (temperature > 45) puts(\"提示：温度偏高\");\n    for (int i = 0; i < 2; i++) puts(\"继续巡检\");\n    return 0;\n}\n",
      "output": "提示：温度偏高\n继续巡检\n继续巡检",
      "stdin": "",
      "quiz": {
        "q": "要连续读取8次温度，主要需要哪种结构？",
        "options": [
          "只用顺序结构",
          "循环结构",
          "只用一条注释"
        ],
        "answer": 1,
        "explain": "固定次数的重复任务可以使用循环，后续再学习其执行顺序。"
      }
    },
    {
      "id": "errors",
      "title": "语法错误与逻辑错误",
      "level": "基础",
      "summary": "程序能运行，还要验证它是否算得对。",
      "paragraphs": [
        "语法错误使代码不符合语言规则，通常由编译器报告。逻辑错误可能通过编译，但结果与需求不一致。",
        "把350 W乘以2 h后直接当成kWh，就是单位换算错误。应设计已知答案的输入检查结果。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    double power = 350.0, hours = 2.0;\n    double energy = power * hours / 1000.0;\n    printf(\"电量：%.2f kWh\\n\", energy);\n    return 0;\n}\n",
      "output": "电量：0.70 kWh",
      "stdin": "",
      "quiz": {
        "q": "程序成功编译能否保证费用计算正确？",
        "options": [
          "能",
          "不能，还要检查公式和测试结果",
          "只要有printf就能"
        ],
        "answer": 1,
        "explain": "编译成功只能说明代码通过相关检查，不能证明需求、公式和结果都正确。"
      }
    }
  ],
  "2": [
    {
      "id": "constants-variables",
      "title": "常量、变量与初始化",
      "level": "基础",
      "summary": "把固定规则和会变化的数据分清。",
      "paragraphs": [
        "字面常量直接表示值，如23、2.5和字符A。变量有名称与类型，其值可以在程序中更新。",
        "局部变量应在读取前初始化。const修饰的对象不能通过普通赋值语句修改，适合表达固定规则。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    const int capacity = 5;\n    int stock = 23;\n    stock = stock + 3;\n    printf(\"容量%d，库存%d\\n\", capacity, stock);\n    return 0;\n}\n",
      "output": "容量5，库存26",
      "stdin": "",
      "quiz": {
        "q": "局部变量声明为int stock;之后，能直接用它计算吗？",
        "options": [
          "可以，默认一定是0",
          "应先初始化或赋入有效值",
          "默认一定是1"
        ],
        "answer": 1,
        "explain": "未初始化的自动局部变量不能当作已知有效数据读取。"
      }
    },
    {
      "id": "basic-types",
      "title": "int、double与char",
      "level": "基础",
      "summary": "按数据的含义选择存储类型。",
      "paragraphs": [
        "int适合本例的整数数量；double可表示带小数的单价；char保存单个字符，字符常量用单引号括起。",
        "类型会影响表达式的计算与输入输出格式。需要保存完整字符串时，通常使用字符数组，而不是单个char。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int bottles = 23;\n    double price = 2.5;\n    char shelf = 'A';\n    printf(\"%c架：%d瓶，单价%.1f元\\n\", shelf, bottles, price);\n    return 0;\n}\n",
      "output": "A架：23瓶，单价2.5元",
      "stdin": "",
      "quiz": {
        "q": "保存单价2.5元，本例优先用什么类型？",
        "options": [
          "int",
          "double",
          "char"
        ],
        "answer": 1,
        "explain": "double可以表示小数；int会改变这个数据的含义。"
      }
    },
    {
      "id": "assignment",
      "title": "赋值与复合赋值",
      "level": "基础",
      "summary": "先算右侧，再把新值存回左侧变量。",
      "paragraphs": [
        "赋值号=表达存储更新，不是数学中的恒等关系。stock = stock + 3先读取旧值计算，再把结果写回stock。",
        "stock += 3在本例中与stock = stock + 3效果相同。每条语句结束后，后续语句读取的是更新后的值。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int stock = 23;\n    stock += 3;\n    stock *= 2;\n    printf(\"库存：%d\\n\", stock);\n    return 0;\n}\n",
      "output": "库存：52",
      "stdin": "",
      "quiz": {
        "q": "int x=5; x+=2; x*=3; 最后x是多少？",
        "options": [
          "21",
          "11",
          "15"
        ],
        "answer": 0,
        "explain": "先得到7，再把7乘以3，结果为21。"
      }
    },
    {
      "id": "division-remainder",
      "title": "整数除法与取余",
      "level": "基础",
      "summary": "用完整箱数和余量解释/与%。",
      "paragraphs": [
        "两个整数相除会得到整数结果；对本例非负数量，23/5为4。23%5为3，满足23=4×5+3。",
        "取余运算符%用于整数。除数必须有效且不为0；完整箱数和余量合起来才能说明实际分装情况。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int bottles = 23, capacity = 5;\n    printf(\"完整%d箱，余%d瓶\\n\", bottles / capacity, bottles % capacity);\n    return 0;\n}\n",
      "output": "完整4箱，余3瓶",
      "stdin": "",
      "quiz": {
        "q": "17瓶，每箱6瓶。完整箱数和余量是什么？",
        "options": [
          "2箱，5瓶",
          "3箱，1瓶",
          "2.83箱，0瓶"
        ],
        "answer": 0,
        "explain": "17/6=2，17%6=5。"
      }
    },
    {
      "id": "conversions",
      "title": "类型转换与浮点除法",
      "level": "基础",
      "summary": "在运算之前转换，才能保留本次除法的小数。",
      "paragraphs": [
        "double a=23/5会先进行整数除法，得到4，再存成4.0。结果变量的类型不会自动改变前面的整数运算。",
        "23/5.0或(double)23/5在除法前使运算涉及double，得到4.6。转换的时机是理解这类问题的关键。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    double a = 23 / 5;\n    double b = (double)23 / 5;\n    printf(\"整数除法后赋值：%.1f\\n\", a);\n    printf(\"先转换再除法：%.1f\\n\", b);\n    return 0;\n}\n",
      "output": "整数除法后赋值：4.0\n先转换再除法：4.6",
      "stdin": "",
      "quiz": {
        "q": "哪个表达式能得到4.6？",
        "options": [
          "(double)(23/5)",
          "(double)23/5",
          "23/5"
        ],
        "answer": 1,
        "explain": "(double)23/5先转换再相除；先做整数除法则无法找回被舍去的小数。"
      }
    },
    {
      "id": "precedence",
      "title": "运算优先级与自增",
      "level": "基础",
      "summary": "用括号表达意图，用分开的语句观察更新。",
      "paragraphs": [
        "乘除的优先级高于加减；括号可明确希望先计算的部分，如(2+3)*4与2+3*4不同。",
        "单独一条i++把i增加1。前置++i和后置i++在表达式中的取值时机不同，初学时可把更新拆成清晰的语句。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int a = 2 + 3 * 4;\n    int b = (2 + 3) * 4;\n    int i = 0;\n    i++;\n    printf(\"a=%d，b=%d，i=%d\\n\", a, b, i);\n    return 0;\n}\n",
      "output": "a=14，b=20，i=1",
      "stdin": "",
      "quiz": {
        "q": "(2+3)*4的结果是多少？",
        "options": [
          "14",
          "20",
          "24"
        ],
        "answer": 1,
        "explain": "括号中的2+3先计算为5，再乘以4得到20。"
      }
    }
  ],
  "3": [
    {
      "id": "scanf",
      "title": "scanf与取地址符",
      "level": "基础",
      "summary": "让输入进入对应类型的变量。",
      "paragraphs": [
        "scanf需要知道写入数据的位置，因此读取普通变量时通常传入它的地址，如&hours。",
        "%d对应int*；%lf对应double*。格式与变量类型应匹配，还应检查成功读取的数据个数。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int count = 0;\n    double hours = 0.0;\n    if (scanf(\"%d%lf\", &count, &hours) != 2) return 1;\n    printf(\"数量%d，时长%.1f\\n\", count, hours);\n    return 0;\n}\n",
      "output": "数量3，时长2.5",
      "stdin": "3 2.5\n",
      "quiz": {
        "q": "scanf读取double变量hours应传入哪一项？",
        "options": [
          "\"%lf\", &hours",
          "\"%d\", hours",
          "\"%f\", &hours"
        ],
        "answer": 0,
        "explain": "scanf的%lf对应double*，&hours提供写入该变量的位置。"
      }
    },
    {
      "id": "printf",
      "title": "printf与格式化输出",
      "level": "基础",
      "summary": "数值相同，显示方式可以不同。",
      "paragraphs": [
        "printf中%d显示int，%c显示字符，%f类格式显示浮点数。%.2f表示按两位小数显示。",
        "显示为两位小数不等于改变变量本身的值。格式占位符的次序要与后面的实参对应。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    double cost = 1.257;\n    printf(\"两位：%.2f\\n三位：%.3f\\n\", cost, cost);\n    return 0;\n}\n",
      "output": "两位：1.26\n三位：1.257",
      "stdin": "",
      "quiz": {
        "q": "%.2f的主要作用是什么？",
        "options": [
          "强制把变量改成整数",
          "控制浮点数的显示小数位数",
          "把变量类型改成float"
        ],
        "answer": 1,
        "explain": "它控制输出格式，变量仍保存原来的浮点值。"
      }
    },
    {
      "id": "character-io",
      "title": "getchar与putchar",
      "level": "基础",
      "summary": "体验单个字符的读取和输出。",
      "paragraphs": [
        "getchar读取下一个字符，返回类型是int，以便同时表示字符值和特殊结果EOF。putchar输出一个字符。",
        "输入中的换行也是字符。连续读取字符时，要考虑上一次输入留下的换行或空白。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int ch = getchar();\n    if (ch == EOF) return 1;\n    putchar(ch);\n    putchar('\\n');\n    return 0;\n}\n",
      "output": "A",
      "stdin": "A\n",
      "quiz": {
        "q": "getchar的返回值为什么通常先存入int？",
        "options": [
          "只允许读取数字",
          "需要同时表示字符值和EOF",
          "char不能输出"
        ],
        "answer": 1,
        "explain": "int能保留getchar返回的字符值和EOF，便于正确判断读取失败或文件结束。"
      }
    },
    {
      "id": "statement-order",
      "title": "语句顺序与中间变量",
      "level": "基础",
      "summary": "每条语句使用当时已经保存的值。",
      "paragraphs": [
        "顺序程序按语句出现的次序执行。交换两个变量时，应先用中间变量保留旧值。",
        "直接a=b; b=a;会使两个变量都取得原来的b。跟踪每条赋值后的状态可以找到这类错误。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int a = 3, b = 8;\n    int temp = a;\n    a = b;\n    b = temp;\n    printf(\"a=%d，b=%d\\n\", a, b);\n    return 0;\n}\n",
      "output": "a=8，b=3",
      "stdin": "",
      "quiz": {
        "q": "交换a和b时，temp变量的作用是什么？",
        "options": [
          "保存a的旧值",
          "让程序自动排序",
          "把两数相加"
        ],
        "answer": 0,
        "explain": "temp先保存即将被覆盖的旧值，最后再赋给b。"
      }
    },
    {
      "id": "unit-conversion",
      "title": "单位换算与计算公式",
      "level": "基础",
      "summary": "把公式中的单位写清楚再编程。",
      "paragraphs": [
        "功率W乘以时长h得到Wh；除以1000.0得到kWh。电量乘以元/kWh得到费用。",
        "可用一个容易手算的输入检查程序。实际应用中，还应核对所用功率和时长是否符合设备的真实数据。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    double power = 350.0, hours = 2.0, price = 0.6;\n    double energy = power * hours / 1000.0;\n    double cost = energy * price;\n    printf(\"电量%.2f，费用%.2f\\n\", energy, cost);\n    return 0;\n}\n",
      "output": "电量0.70，费用0.42",
      "stdin": "",
      "quiz": {
        "q": "1000 W运行1小时，按本例公式得到多少kWh？",
        "options": [
          "1000",
          "1",
          "0.001"
        ],
        "answer": 1,
        "explain": "1000×1÷1000.0=1 kWh。"
      }
    },
    {
      "id": "float-display",
      "title": "浮点值与显示精度",
      "level": "基础",
      "summary": "保留小数计算，再决定输出格式。",
      "paragraphs": [
        "计算阶段应选择合适的数据类型，避免在中途做整数除法。输出阶段再使用格式控制所显示的小数位。",
        "浮点数能表示的数值有限，显示位数与实际精度是不同概念。不要以为多打印几位就提高了计算精度。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    double average = 7 / 2.0;\n    printf(\"整数除法：%d\\n\", 7 / 2);\n    printf(\"浮点除法：%.1f\\n\", average);\n    return 0;\n}\n",
      "output": "整数除法：3\n浮点除法：3.5",
      "stdin": "",
      "quiz": {
        "q": "7/2.0与7/2的区别是什么？",
        "options": [
          "没有区别",
          "前者浮点运算，后者整数运算",
          "前者不能编译"
        ],
        "answer": 1,
        "explain": "2.0使前者进行浮点除法，得到3.5；整数除法得到3。"
      }
    }
  ],
  "4": [
    {
      "id": "if-else",
      "title": "if与else",
      "level": "基础",
      "summary": "满足条件时走哪一条分支？",
      "paragraphs": [
        "if先求条件表达式的值，非0表示真，0表示假。有else时，依据条件选择其中一个分支。",
        "用花括号明确每个分支的范围，可减少增加语句时出现的逻辑错误。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int temp = 46;\n    if (temp > 45) {\n        puts(\"温度偏高\");\n    } else {\n        puts(\"温度未超阈值\");\n    }\n    return 0;\n}\n",
      "output": "温度偏高",
      "stdin": "",
      "quiz": {
        "q": "条件temp>45为假时，会执行哪个分支？",
        "options": [
          "if分支",
          "else分支",
          "两个分支都执行"
        ],
        "answer": 1,
        "explain": "条件为假时执行else中的语句。"
      }
    },
    {
      "id": "else-if",
      "title": "多分支与条件次序",
      "level": "基础",
      "summary": "从高到低检查成绩区间。",
      "paragraphs": [
        "if…else if…else按先后次序检查；第一个满足的分支执行后，后面的分支不再检查。",
        "重叠区间要明确判断顺序。成绩分级通常先判断较高阈值，再依次降低。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int score = 85;\n    if (score >= 90) puts(\"优秀\");\n    else if (score >= 80) puts(\"良好\");\n    else if (score >= 60) puts(\"合格\");\n    else puts(\"继续努力\");\n    return 0;\n}\n",
      "output": "良好",
      "stdin": "",
      "quiz": {
        "q": "该程序中score=95时会输出几种等级？",
        "options": [
          "一种",
          "两种",
          "三种"
        ],
        "answer": 0,
        "explain": "满足>=90后执行第一个分支，后续else if分支不再执行。"
      }
    },
    {
      "id": "logic",
      "title": "逻辑运算与短路求值",
      "level": "基础",
      "summary": "把多个条件组合成一个判断。",
      "paragraphs": [
        "&&表示并且，||表示或者，!表示取反。&&左侧为假时不用再求右侧；||左侧为真时不用再求右侧。",
        "可把有效性判断放在前面，例如den!=0 && total/den>3，只有分母非0时才执行后面的除法。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int total = 23, den = 0;\n    if (den != 0 && total / den > 3)\n        puts(\"商大于3\");\n    else\n        puts(\"未计算有效的大于3条件\");\n    return 0;\n}\n",
      "output": "未计算有效的大于3条件",
      "stdin": "",
      "quiz": {
        "q": "den=0时，den!=0 && total/den>3会计算右侧除法吗？",
        "options": [
          "会",
          "不会",
          "先除法再判断den"
        ],
        "answer": 1,
        "explain": "&&左侧为假发生短路，右侧不求值。"
      }
    },
    {
      "id": "switch",
      "title": "switch与break",
      "level": "基础",
      "summary": "根据离散编号选择设备操作。",
      "paragraphs": [
        "switch根据整型表达式的值匹配case常量。case标签不会自动结束分支，通常用break退出switch。",
        "default用于处理没有匹配case的值。switch适合菜单编号等离散值，范围判断常用if。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int choice = 2;\n    switch (choice) {\n    case 1: puts(\"查询温度\"); break;\n    case 2: puts(\"查看巡检记录\"); break;\n    default: puts(\"未知选择\"); break;\n    }\n    return 0;\n}\n",
      "output": "查看巡检记录",
      "stdin": "",
      "quiz": {
        "q": "某个case末尾没有break，可能发生什么？",
        "options": [
          "自动返回main开头",
          "继续执行后续case中的语句",
          "一定报语法错误"
        ],
        "answer": 1,
        "explain": "匹配标签后会向下执行，直到break、return或switch结束。"
      }
    },
    {
      "id": "conditional",
      "title": "条件运算符?:",
      "level": "基础",
      "summary": "给简单的二选一结果赋值。",
      "paragraphs": [
        "条件?值1:值2先判断条件，条件为真时选择值1，为假时选择值2。",
        "适合简洁的二选一表达式；分支很复杂时，使用if…else更易读。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int temp = 47;\n    int hot = temp > 45 ? 1 : 0;\n    printf(\"超温标记：%d\\n\", hot);\n    return 0;\n}\n",
      "output": "超温标记：1",
      "stdin": "",
      "quiz": {
        "q": "temp=45时，temp>45?1:0得到什么？",
        "options": [
          "1",
          "0",
          "45"
        ],
        "answer": 1,
        "explain": "45>45为假，选择冒号后的0。"
      }
    },
    {
      "id": "boundaries",
      "title": "阈值边界与等号",
      "level": "基础",
      "summary": "用阈值前、阈值上、阈值后的输入验证。",
      "paragraphs": [
        ">与>=的区别在恰好等于阈值时体现。规则必须明确是“超过”还是“达到”。",
        "对阈值45，可至少检查44、45、46；同时覆盖分支的其他条件，避免只测试正常路径。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int temp = 45;\n    printf(\"超过45：%d\\n\", temp > 45);\n    printf(\"达到45：%d\\n\", temp >= 45);\n    return 0;\n}\n",
      "output": "超过45：0\n达到45：1",
      "stdin": "",
      "quiz": {
        "q": "需求为“超过45℃才计数”，temp=45时应怎样处理？",
        "options": [
          "计数",
          "不计数",
          "随机决定"
        ],
        "answer": 1,
        "explain": "超过对应>，等于阈值时条件为假。"
      }
    }
  ],
  "5": [
    {
      "id": "while",
      "title": "while循环",
      "level": "基础",
      "summary": "循环次数由条件控制。",
      "paragraphs": [
        "while先判断条件，条件为真时执行循环体，然后再次判断。条件最初为假时，循环体执行0次。",
        "循环体中应有使循环向结束推进的更新。用变量轨迹检查是否遗漏更新。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int i = 0;\n    while (i < 3) {\n        printf(\"第%d次巡检\\n\", i + 1);\n        i++;\n    }\n    return 0;\n}\n",
      "output": "第1次巡检\n第2次巡检\n第3次巡检",
      "stdin": "",
      "quiz": {
        "q": "while条件初始为假，循环体执行几次？",
        "options": [
          "0次",
          "1次",
          "至少2次"
        ],
        "answer": 0,
        "explain": "while先判断，初始为假直接退出。"
      }
    },
    {
      "id": "do-while",
      "title": "do…while循环",
      "level": "基础",
      "summary": "至少执行一次，再决定是否重复。",
      "paragraphs": [
        "do…while先执行循环体，随后检查条件，因此循环体至少执行一次。语句末尾的while(条件)之后要有分号。",
        "适合需要先进行一次操作再判断是否继续的任务，例如显示一次菜单后检查用户选择。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int attempts = 0;\n    do {\n        attempts++;\n        puts(\"显示操作菜单\");\n    } while (attempts < 0);\n    printf(\"执行次数：%d\\n\", attempts);\n    return 0;\n}\n",
      "output": "显示操作菜单\n执行次数：1",
      "stdin": "",
      "quiz": {
        "q": "条件从一开始就是假，本例do…while仍执行几次？",
        "options": [
          "0次",
          "1次",
          "无限次"
        ],
        "answer": 1,
        "explain": "先执行一次循环体，再检查为假的条件并结束。"
      }
    },
    {
      "id": "for-order",
      "title": "for的三个表达式",
      "level": "基础",
      "summary": "初始化一次，判断与更新反复发生。",
      "paragraphs": [
        "for先执行初始化，然后进行“条件判断→循环体→更新”的重复过程。初始化不是每轮都执行。",
        "for(i=0;i<3;i++)正常结束时，循环体执行3次，条件判断4次，最后i为3。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int i;\n    for (i = 0; i < 3; i++) printf(\"i=%d\\n\", i);\n    printf(\"退出时i=%d\\n\", i);\n    return 0;\n}\n",
      "output": "i=0\ni=1\ni=2\n退出时i=3",
      "stdin": "",
      "quiz": {
        "q": "此循环的条件i<3判断多少次？",
        "options": [
          "3次",
          "4次",
          "2次"
        ],
        "answer": 1,
        "explain": "i为0、1、2时判断为真，更新到3后还要做一次为假的判断。"
      }
    },
    {
      "id": "break-continue",
      "title": "break与continue",
      "level": "基础",
      "summary": "一个结束循环，一个跳过本轮剩余部分。",
      "paragraphs": [
        "break退出所在的最内层循环；continue结束本轮剩余语句，转向该循环的下一次迭代步骤。",
        "在for中，continue之后仍执行更新表达式再判断条件。不要把“跳过一次”误当作“全部结束”。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    for (int i = 1; i <= 5; i++) {\n        if (i == 2) continue;\n        if (i == 4) break;\n        printf(\"处理%d\\n\", i);\n    }\n    return 0;\n}\n",
      "output": "处理1\n处理3",
      "stdin": "",
      "quiz": {
        "q": "i=2时执行continue后，这个for接下来先做什么？",
        "options": [
          "执行i++，再判断条件",
          "立即退出整个循环",
          "重新执行初始化"
        ],
        "answer": 0,
        "explain": "for的continue转向更新表达式，随后再次判断条件。"
      }
    },
    {
      "id": "nested",
      "title": "嵌套循环与逐层巡检",
      "level": "基础",
      "summary": "每换一层，房间循环重新开始。",
      "paragraphs": [
        "外层循环控制楼层，内层循环控制本层房间。每进入一次外层循环体，都重新执行内层初始化。",
        "两层、每层三间时，共生成2×3条巡检提醒。内层从room=1重新开始，所以第二层不会漏掉前面的房间。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    for (int floor = 1; floor <= 2; floor++) {\n        for (int room = 1; room <= 3; room++) {\n            printf(\"巡检%d%02d室\\n\", floor, room);\n        }\n    }\n    return 0;\n}\n",
      "output": "巡检101室\n巡检102室\n巡检103室\n巡检201室\n巡检202室\n巡检203室",
      "stdin": "",
      "quiz": {
        "q": "这段代码内层room=1初始化几次？",
        "options": [
          "1次",
          "2次",
          "6次"
        ],
        "answer": 1,
        "explain": "每进入一个楼层的循环体，就执行一次内层初始化。"
      }
    },
    {
      "id": "loop-boundary",
      "title": "循环边界与死循环",
      "level": "基础",
      "summary": "检查起点、终点与更新是否一致。",
      "paragraphs": [
        "i从0开始，i<8允许0到7；i<=8则还包括8，循环体会执行9次。比较符号必须与任务对应。",
        "循环忘记更新或更新方向不对时，条件可能一直为真。先用小次数手动跟踪，再推广到较大次数。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int a = 0, b = 0;\n    for (int i = 0; i < 8; i++) a++;\n    for (int i = 0; i <= 8; i++) b++;\n    printf(\"<8执行%d次，<=8执行%d次\\n\", a, b);\n    return 0;\n}\n",
      "output": "<8执行8次，<=8执行9次",
      "stdin": "",
      "quiz": {
        "q": "for(i=0;i<=8;i++)循环体执行几次？",
        "options": [
          "8次",
          "9次",
          "7次"
        ],
        "answer": 1,
        "explain": "0到8共9个整数，各进入一次循环体。"
      }
    }
  ],
  "6": [
    {
      "id": "array-init",
      "title": "数组声明与初始化",
      "level": "基础",
      "summary": "多个同类型数据，按下标逐个保存。",
      "paragraphs": [
        "int temp[4]={43,47}声明4个整数元素，提供的两个初值保存到前两个元素，其余元素初始化为0。",
        "数组长度与已有初值个数不是同一概念。使用局部数组时，应明确初始化和数据来源。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int temp[4] = {43, 47};\n    for (int i = 0; i < 4; i++) printf(\"temp[%d]=%d\\n\", i, temp[i]);\n    return 0;\n}\n",
      "output": "temp[0]=43\ntemp[1]=47\ntemp[2]=0\ntemp[3]=0",
      "stdin": "",
      "quiz": {
        "q": "本例temp[2]的值是多少？",
        "options": [
          "未初始化的未知值",
          "0",
          "47"
        ],
        "answer": 1,
        "explain": "数组使用了部分初始化，其余元素被初始化为0。"
      }
    },
    {
      "id": "array-bounds",
      "title": "下标与访问边界",
      "level": "基础",
      "summary": "长度为n，最后一个下标是n−1。",
      "paragraphs": [
        "下标从0开始。int temp[3]的有效下标为0、1、2，temp[3]不在这个数组中。",
        "用i<n遍历n个元素，并保证下标不为负。越界访问不能当作可靠的“额外数据”。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int temp[3] = {43, 47, 42};\n    for (int i = 0; i < 3; i++) printf(\"%d\\n\", temp[i]);\n    return 0;\n}\n",
      "output": "43\n47\n42",
      "stdin": "",
      "quiz": {
        "q": "长度为3的数组，最后一个有效下标是多少？",
        "options": [
          "3",
          "2",
          "4"
        ],
        "answer": 1,
        "explain": "有效下标是0到2，3已经越界。"
      }
    },
    {
      "id": "two-dimensional",
      "title": "二维数组与多路采样",
      "level": "基础",
      "summary": "行表示充电口，列表示采样次序。",
      "paragraphs": [
        "int temp[2][3]可以保存2个充电口、每口3次采样。temp[row][col]使用两个下标定位数据。",
        "遍历时用外层处理行、内层处理列。每进入新行，内层列下标重新从0开始。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int temp[2][3] = {{43, 47, 42}, {40, 41, 39}};\n    for (int row = 0; row < 2; row++) {\n        int sum = 0;\n        for (int col = 0; col < 3; col++) sum += temp[row][col];\n        printf(\"端口%d平均%.1f\\n\", row + 1, sum / 3.0);\n    }\n    return 0;\n}\n",
      "output": "端口1平均44.0\n端口2平均40.0",
      "stdin": "",
      "quiz": {
        "q": "数组temp[2][3]共有几个int元素？",
        "options": [
          "5个",
          "6个",
          "3个"
        ],
        "answer": 1,
        "explain": "2行乘3列，共6个元素。"
      }
    },
    {
      "id": "character-array",
      "title": "字符数组与结束符",
      "level": "基础",
      "summary": "字符串需要给结束符留一个位置。",
      "paragraphs": [
        "char name[]=\"C_Lab\"保存字符和末尾的空字符\\0；在C源码中该结束符通常写作反斜杠0。",
        "这里字符串长度为5，数组容量为6。strlen统计结束符前的字符数；sizeof对本例数组得到整个数组的字节数。"
      ],
      "code": "#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char name[] = \"C_Lab\";\n    printf(\"字符数%zu，数组字节数%zu\\n\", strlen(name), sizeof name);\n    return 0;\n}\n",
      "output": "字符数5，数组字节数6",
      "stdin": "",
      "quiz": {
        "q": "char s[]=\"ABC\"需要几个char元素？",
        "options": [
          "3个",
          "4个",
          "2个"
        ],
        "answer": 1,
        "explain": "三个字母加一个字符串结束符，共4个char元素。"
      }
    },
    {
      "id": "string-io",
      "title": "字符串输入输出",
      "level": "基础",
      "summary": "限定输入长度，避免写出数组范围。",
      "paragraphs": [
        "用字符数组保存输入文本。scanf的%s读取遇到空白前的一段字符，不包含空格。",
        "char name[8]配合%7s，最多读入7个字符，并给结束符留出位置。需要读取整行时可以学习fgets。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    char name[8];\n    if (scanf(\"%7s\", name) != 1) return 1;\n    printf(\"你好，%s\\n\", name);\n    return 0;\n}\n",
      "output": "你好，C_Lab",
      "stdin": "C_Lab\n",
      "quiz": {
        "q": "char name[8]配合%7s，为什么最多读取7个字符？",
        "options": [
          "为结束符留一个位置",
          "第8个字符不能是字母",
          "%s总是只能读7个"
        ],
        "answer": 0,
        "explain": "数组还要保存字符串结束符，输入长度应留出这一个位置。"
      }
    },
    {
      "id": "array-search",
      "title": "线性查找",
      "level": "进阶",
      "summary": "按顺序找到第一个超温读数。",
      "paragraphs": [
        "线性查找逐个检查元素。使用position=-1表示还没有找到，满足条件后保存下标并退出循环。",
        "查找目标、返回的是下标还是值、找不到怎样表示，都应在编程前明确。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int temp[4] = {43, 47, 42, 51};\n    int position = -1;\n    for (int i = 0; i < 4; i++) {\n        if (temp[i] > 45) { position = i; break; }\n    }\n    printf(\"第一个超温下标：%d\\n\", position);\n    return 0;\n}\n",
      "output": "第一个超温下标：1",
      "stdin": "",
      "quiz": {
        "q": "本例position=1表示什么？",
        "options": [
          "第1次采样",
          "第2次采样",
          "超温次数为1"
        ],
        "answer": 1,
        "explain": "下标从0开始，下标1对应第2次采样。"
      }
    }
  ],
  "7": [
    {
      "id": "declaration",
      "title": "函数定义、声明与调用",
      "level": "基础",
      "summary": "让编译器知道函数的参数和返回类型。",
      "paragraphs": [
        "定义包含函数体，说明具体怎样做。声明给出函数名、参数类型与返回类型，供调用处检查。",
        "当定义位于main后面时，可以在main前放一个函数声明。声明与定义应保持一致。"
      ],
      "code": "#include <stdio.h>\n\nint add(int a, int b);\nint add(int a, int b) { return a + b; }\n\nint main(void) {\n    int result = add(3, 4);\n    printf(\"结果：%d\\n\", result);\n    return 0;\n}\n",
      "output": "结果：7",
      "stdin": "",
      "quiz": {
        "q": "int add(int a,int b);末尾为什么有分号？",
        "options": [
          "它是函数声明",
          "它是完整函数体",
          "表示函数被调用了"
        ],
        "answer": 0,
        "explain": "这是一条声明，给出函数接口；完整定义还包含函数体。"
      }
    },
    {
      "id": "value-parameters",
      "title": "实参、形参与值传递",
      "level": "基础",
      "summary": "形参的改变不自动改写普通实参变量。",
      "paragraphs": [
        "调用函数时，普通int实参的值传给对应形参。形参与调用者变量是不同的对象。",
        "若希望函数直接修改调用者的对象，可以在第八章使用指针参数传入地址。"
      ],
      "code": "#include <stdio.h>\n\nvoid calibrate(int t) { t++; printf(\"函数内部：%d\\n\", t); }\n\nint main(void) {\n    int temperature = 43;\n    calibrate(temperature);\n    printf(\"调用者：%d\\n\", temperature);\n    return 0;\n}\n",
      "output": "函数内部：44\n调用者：43",
      "stdin": "",
      "quiz": {
        "q": "本例函数内t++后，main中的temperature变了吗？",
        "options": [
          "变为44",
          "仍为43",
          "变为0"
        ],
        "answer": 1,
        "explain": "普通int参数按值传递，t的更新没有改写main中的temperature。"
      }
    },
    {
      "id": "return-value",
      "title": "返回值与void函数",
      "level": "基础",
      "summary": "调用者如何取得函数的处理结果？",
      "paragraphs": [
        "返回值把结果交给调用者，如int hot=over_limit(47)。返回类型应与结果的含义相符。",
        "void表示不返回值，适合仅执行输出等动作的函数。不能把void函数当成数值参与运算。"
      ],
      "code": "#include <stdio.h>\n\nint over_limit(int t) { return t > 45; }\n\nint main(void) {\n    int hot = over_limit(47);\n    printf(\"超温：%d\\n\", hot);\n    return 0;\n}\n",
      "output": "超温：1",
      "stdin": "",
      "quiz": {
        "q": "void函数表示什么？",
        "options": [
          "返回整数0",
          "不返回值",
          "函数不会执行"
        ],
        "answer": 1,
        "explain": "void函数仍可执行操作，但不向调用者提供一个返回值。"
      }
    },
    {
      "id": "scope",
      "title": "变量作用域",
      "level": "基础",
      "summary": "同名变量可以属于不同的作用域。",
      "paragraphs": [
        "局部变量的名字只在相应范围内有效。函数中的局部变量与另一个函数里的同名变量不代表同一对象。",
        "应优先使用清楚的参数和局部变量，减少依赖可变的全局状态。示例用同名变量说明作用域差别。"
      ],
      "code": "#include <stdio.h>\n\nint total = 10;\nint local_value(void) { int total = 3; return total; }\n\nint main(void) {\n    printf(\"函数局部值：%d\\n\", local_value());\n    printf(\"全局值：%d\\n\", total);\n    return 0;\n}\n",
      "output": "函数局部值：3\n全局值：10",
      "stdin": "",
      "quiz": {
        "q": "local_value中的局部total=3会覆盖全局total的存储值吗？",
        "options": [
          "会变成3",
          "不会，它们是不同对象",
          "会自动相加"
        ],
        "answer": 1,
        "explain": "局部名字在函数里遮蔽外层名字，但这不等于改写全局对象。"
      }
    },
    {
      "id": "recursion",
      "title": "递归与终止条件",
      "level": "进阶",
      "summary": "把问题化为规模更小的同类问题。",
      "paragraphs": [
        "递归函数直接或间接调用自己。必须有终止条件，并让每次调用向该条件推进。",
        "本例阶乘把factorial(n)化为n×factorial(n−1)，n<=1时返回1。实际使用还要限制输入，避免数值溢出和过深调用。"
      ],
      "code": "#include <stdio.h>\n\nint factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\nint main(void) {\n    printf(\"4的阶乘：%d\\n\", factorial(4));\n    return 0;\n}\n",
      "output": "4的阶乘：24",
      "stdin": "",
      "quiz": {
        "q": "递归函数若没有可达到的终止条件，可能怎样？",
        "options": [
          "自动产生正确答案",
          "不断调用而无法正常结束",
          "只执行一次"
        ],
        "answer": 1,
        "explain": "终止条件和逐步缩小的规模共同保证本例递归能结束。"
      }
    },
    {
      "id": "array-parameters",
      "title": "数组作为函数参数",
      "level": "进阶",
      "summary": "同时传入数据位置和元素个数。",
      "paragraphs": [
        "数组实参用于传递元素位置，函数可以访问和修改这些元素。形参写成int data[]时，在这里按指针参数处理。",
        "函数不能只从这个形参自动知道数组的元素个数，通常还要传入length等长度参数。"
      ],
      "code": "#include <stdio.h>\n\nvoid raise_all(int data[], int length) {\n    for (int i = 0; i < length; i++) data[i]++;\n}\n\nint main(void) {\n    int temp[3] = {43, 47, 42};\n    raise_all(temp, 3);\n    printf(\"%d %d %d\\n\", temp[0], temp[1], temp[2]);\n    return 0;\n}\n",
      "output": "44 48 43",
      "stdin": "",
      "quiz": {
        "q": "为什么调用raise_all时还要传入3？",
        "options": [
          "告诉函数可处理的元素个数",
          "告诉函数数组一定有3字节",
          "函数名要求有数字"
        ],
        "answer": 0,
        "explain": "函数需要显式长度才能在有效范围内遍历数组。"
      }
    }
  ],
  "8": [
    {
      "id": "address-value",
      "title": "地址、指针与解引用",
      "level": "基础",
      "summary": "p保存位置，*p访问那个位置的对象。",
      "paragraphs": [
        "&x取得对象x的地址。int *p=&x使p指向x；*p读取或写入x本身。",
        "必须先让指针指向有效对象，再解引用。不能把未初始化的指针当作一个可用地址。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int temp = 43;\n    int *p = &temp;\n    *p = 46;\n    printf(\"temp=%d，*p=%d\\n\", temp, *p);\n    return 0;\n}\n",
      "output": "temp=46，*p=46",
      "stdin": "",
      "quiz": {
        "q": "*p=46改变了哪个对象？",
        "options": [
          "只有指针地址",
          "p指向的temp",
          "所有int变量"
        ],
        "answer": 1,
        "explain": "解引用访问p指向的对象，本例就是temp。"
      }
    },
    {
      "id": "array-pointer",
      "title": "指针与数组步长",
      "level": "基础",
      "summary": "指针加1，移动一个所指类型的元素。",
      "paragraphs": [
        "指向数组第一个元素的指针可以在有效范围内移动。p+1表示下一个元素的位置，步长取决于所指类型。",
        "数组末尾后一位的指针可用于终止比较，但不能解引用。步长不要直接假设为固定的一个字节。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int data[3] = {23, 25, 27};\n    int *p = data;\n    printf(\"当前%d\\n\", *p);\n    p++;\n    printf(\"下一项%d\\n\", *p);\n    return 0;\n}\n",
      "output": "当前23\n下一项25",
      "stdin": "",
      "quiz": {
        "q": "p++的步长由什么决定？",
        "options": [
          "所指类型的大小",
          "变量名长度",
          "一定是1字节"
        ],
        "answer": 0,
        "explain": "指针加1移动一个所指类型的元素。"
      }
    },
    {
      "id": "pointer-parameters",
      "title": "指针参数与原地修改",
      "level": "基础",
      "summary": "把地址传给函数，让它更新调用者的数据。",
      "paragraphs": [
        "将&temperature作为实参传入，形参指针就能访问这个对象。函数通过*t赋值更新调用者变量。",
        "参数仍是按值传递，这里复制的是地址值；共享的地址使双方能够访问同一个对象。"
      ],
      "code": "#include <stdio.h>\n\nvoid calibrate(int *t) { if (t != NULL) (*t)++; }\n\nint main(void) {\n    int temperature = 43;\n    calibrate(&temperature);\n    printf(\"校准后：%d\\n\", temperature);\n    return 0;\n}\n",
      "output": "校准后：44",
      "stdin": "",
      "quiz": {
        "q": "调用calibrate需要传什么？",
        "options": [
          "temperature的旧值",
          "&temperature",
          "字符t"
        ],
        "answer": 1,
        "explain": "函数需要变量的地址，才能通过指针改写它。"
      }
    },
    {
      "id": "string-pointers",
      "title": "字符数组与字符串指针",
      "level": "基础",
      "summary": "可修改的文本放在哪里？",
      "paragraphs": [
        "char label[]=\"Port\"创建可修改的字符数组；const char *message=\"Ready\"指向字符串字面量，不应修改它。",
        "数组内容和指针变量是不同概念。修改字符数组中的元素不会改变另一个独立字符串。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    char label[] = \"Port\";\n    const char *message = \"Ready\";\n    label[0] = 'p';\n    printf(\"%s：%s\\n\", label, message);\n    return 0;\n}\n",
      "output": "port：Ready",
      "stdin": "",
      "quiz": {
        "q": "要把label第一个字母改为小写，本例为什么用字符数组？",
        "options": [
          "数组提供可修改的字符存储",
          "字符串字面量总能改",
          "指针变量不能保存地址"
        ],
        "answer": 0,
        "explain": "字符数组保存可修改的字符，字符串字面量不应被改写。"
      }
    },
    {
      "id": "const-pointer",
      "title": "const与指针",
      "level": "进阶",
      "summary": "“不能改值”与“不能换指向”要区分。",
      "paragraphs": [
        "const int *p限制通过p修改所指对象；int *const q限制q这个指针变量重新指向另一个对象。",
        "所指对象本身是否可以由其他合法路径修改，取决于它自己的定义。示例中的x不是const对象。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    int x = 23;\n    const int *p = &x;\n    int *const q = &x;\n    *q = 28;\n    printf(\"x=%d，*p=%d\\n\", x, *p);\n    return 0;\n}\n",
      "output": "x=28，*p=28",
      "stdin": "",
      "quiz": {
        "q": "int *const q=&x;主要限制什么？",
        "options": [
          "通过*q改写x",
          "q重新指向别处",
          "读取x"
        ],
        "answer": 1,
        "explain": "这里const修饰指针q自身，不能给q重新赋另一个地址。"
      }
    },
    {
      "id": "dynamic-memory",
      "title": "动态内存与释放",
      "level": "进阶",
      "summary": "按需要申请存储，使用后归还。",
      "paragraphs": [
        "malloc申请指定字节数的存储，成功时返回可用地址，失败时返回NULL。申请后应先检查，再写入和读取。",
        "free释放动态申请的存储。释放后不可再通过旧地址访问对象，可把本变量设为NULL以减少误用。"
      ],
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int *data = malloc(3 * sizeof *data);\n    if (data == NULL) return 1;\n    for (int i = 0; i < 3; i++) data[i] = i + 1;\n    printf(\"%d %d %d\\n\", data[0], data[1], data[2]);\n    free(data);\n    data = NULL;\n    return 0;\n}\n",
      "output": "1 2 3",
      "stdin": "",
      "quiz": {
        "q": "malloc失败返回NULL时，应先怎么做？",
        "options": [
          "直接写入data[0]",
          "处理失败，避免继续访问",
          "把NULL当成一个元素"
        ],
        "answer": 1,
        "explain": "必须检查申请结果，失败时不能解引用NULL。"
      }
    }
  ],
  "9": [
    {
      "id": "struct-members",
      "title": "结构体与成员访问",
      "level": "基础",
      "summary": "一个设备，用一个对象保存多种属性。",
      "paragraphs": [
        "struct Port描述一类设备的成员。声明变量p后，p.id、p.temp等分别访问其属性。",
        "结构体可以包含不同类型的成员，适合把有关联的编号、温度和状态组织在一起。"
      ],
      "code": "#include <stdio.h>\n\nstruct Port { int id; double temp; };\n\nint main(void) {\n    struct Port p = {3, 46.5};\n    printf(\"端口%d：%.1f℃\\n\", p.id, p.temp);\n    return 0;\n}\n",
      "output": "端口3：46.5℃",
      "stdin": "",
      "quiz": {
        "q": "变量p的温度成员怎样访问？",
        "options": [
          "p.temp",
          "p[temp]",
          "temp.p"
        ],
        "answer": 0,
        "explain": "结构体变量通过点运算符访问成员。"
      }
    },
    {
      "id": "struct-array",
      "title": "结构体数组",
      "level": "基础",
      "summary": "用数组保存多个设备档案。",
      "paragraphs": [
        "结构体数组的每个元素是一份完整档案。ports[i].temp先定位第i个元素，再访问其中的温度成员。",
        "用循环遍历设备，仍需遵守下标范围；不同属性保持在同一个元素中，避免编号与读数错位。"
      ],
      "code": "#include <stdio.h>\n\nstruct Port { int id; double temp; };\n\nint main(void) {\n    struct Port ports[2] = {{1, 43.0}, {2, 47.0}};\n    for (int i = 0; i < 2; i++)\n        printf(\"端口%d：%.1f℃\\n\", ports[i].id, ports[i].temp);\n    return 0;\n}\n",
      "output": "端口1：43.0℃\n端口2：47.0℃",
      "stdin": "",
      "quiz": {
        "q": "ports[1].temp表示什么？",
        "options": [
          "第1个端口的编号",
          "数组第2个设备的温度成员",
          "整个数组的平均值"
        ],
        "answer": 1,
        "explain": "下标1定位第二个元素，.temp选择它的温度成员。"
      }
    },
    {
      "id": "struct-pointer",
      "title": "结构体指针与->",
      "level": "基础",
      "summary": "用指针定位一份设备档案。",
      "paragraphs": [
        "指针ptr指向结构体变量时，可以写ptr->temp，等价于(*ptr).temp。",
        "使用->前同样要保证指针有效。对指针成员赋值会更新所指的结构体对象。"
      ],
      "code": "#include <stdio.h>\n\nstruct Port { int id; double temp; };\n\nint main(void) {\n    struct Port p = {3, 43.0};\n    struct Port *ptr = &p;\n    ptr->temp = 46.0;\n    printf(\"端口%d：%.1f℃\\n\", p.id, p.temp);\n    return 0;\n}\n",
      "output": "端口3：46.0℃",
      "stdin": "",
      "quiz": {
        "q": "ptr->temp等价于哪一种？",
        "options": [
          "*ptr.temp",
          "(*ptr).temp",
          "ptr[temp]"
        ],
        "answer": 1,
        "explain": "先解引用ptr取得结构体对象，再使用点运算符。"
      }
    },
    {
      "id": "enum",
      "title": "枚举与状态命名",
      "level": "基础",
      "summary": "让状态值的含义更容易读懂。",
      "paragraphs": [
        "enum给整型状态取有意义的名字，如OFF、ON、FAULT。可以明确设置各自的整数值。",
        "用状态名字比较，代码比到处写0、1、2更易读；具体值和规则仍应在定义与需求中说明。"
      ],
      "code": "#include <stdio.h>\n\nenum State { OFF = 0, ON = 1, FAULT = 2 };\n\nint main(void) {\n    enum State state = FAULT;\n    if (state == FAULT) puts(\"设备故障\");\n    printf(\"状态编码：%d\\n\", (int)state);\n    return 0;\n}\n",
      "output": "设备故障\n状态编码：2",
      "stdin": "",
      "quiz": {
        "q": "本例FAULT对应哪个整数值？",
        "options": [
          "0",
          "1",
          "2"
        ],
        "answer": 2,
        "explain": "定义显式规定OFF=0、ON=1、FAULT=2。"
      }
    },
    {
      "id": "typedef",
      "title": "typedef与类型别名",
      "level": "基础",
      "summary": "让已有类型的使用更简洁。",
      "paragraphs": [
        "在本例中typedef为结构体类型定义别名Port，之后可写Port p声明变量。",
        "类型别名方便表达用途，但不会自动创建变量，也不会为数据添加新的存储空间。"
      ],
      "code": "#include <stdio.h>\n\ntypedef struct { int id; double temp; } Port;\n\nint main(void) {\n    Port p = {3, 43.0};\n    printf(\"Port档案：%d，%.1f\\n\", p.id, p.temp);\n    return 0;\n}\n",
      "output": "Port档案：3，43.0",
      "stdin": "",
      "quiz": {
        "q": "执行typedef声明后，会自动生成一个设备变量吗？",
        "options": [
          "会",
          "不会，还需声明变量",
          "会生成一个数组"
        ],
        "answer": 1,
        "explain": "typedef定义类型别名；Port p才是设备对象的声明。"
      }
    },
    {
      "id": "union",
      "title": "共用体与共享存储",
      "level": "进阶",
      "summary": "多个成员共用同一份存储区域。",
      "paragraphs": [
        "union的成员共享存储，不像struct那样同时保存一份独立的各成员值。写入一个成员会改变共享的内容。",
        "本例先写入整数成员并读取它，再写入double成员并读取double。理解当前数据是哪一种形式，才能正确使用。"
      ],
      "code": "#include <stdio.h>\n\nunion Reading { int count; double temperature; };\n\nint main(void) {\n    union Reading r;\n    r.count = 8;\n    printf(\"整数读数：%d\\n\", r.count);\n    r.temperature = 46.5;\n    printf(\"温度读数：%.1f\\n\", r.temperature);\n    return 0;\n}\n",
      "output": "整数读数：8\n温度读数：46.5",
      "stdin": "",
      "quiz": {
        "q": "写入temperature后，能认为count还独立保存旧值8吗？",
        "options": [
          "能",
          "不能，成员共享存储",
          "只有成员名很短时能"
        ],
        "answer": 1,
        "explain": "共用体成员共享存储，不能把它们当成互不影响的独立数据。"
      }
    }
  ],
  "10": [
    {
      "id": "file-modes",
      "title": "文件打开模式w、a与r",
      "level": "基础",
      "summary": "覆盖、追加、读取，选择与任务一致的模式。",
      "paragraphs": [
        "w用于写入，打开已有文件时会截断旧内容；a用于追加；r用于读取，要求文件已经存在。",
        "每次打开都要检查结果，并在完成后关闭。示例创建一个演示文件，追加一条记录后读取，最后删除演示文件。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    FILE *fp = fopen(\"lab_modes_demo.txt\", \"w\");\n    if (fp == NULL) return 1;\n    fputs(\"第1条记录\\n\", fp);\n    fclose(fp);\n    fp = fopen(\"lab_modes_demo.txt\", \"a\");\n    if (fp == NULL) return 1;\n    fputs(\"第2条记录\\n\", fp);\n    fclose(fp);\n    fp = fopen(\"lab_modes_demo.txt\", \"r\");\n    if (fp == NULL) return 1;\n    char line[64];\n    while (fgets(line, sizeof line, fp) != NULL) fputs(line, stdout);\n    fclose(fp);\n    remove(\"lab_modes_demo.txt\");\n    return 0;\n}\n",
      "output": "第1条记录\n第2条记录",
      "stdin": "",
      "quiz": {
        "q": "要保留历史日志并增加新记录，应选择哪个模式？",
        "options": [
          "w",
          "a",
          "r"
        ],
        "answer": 1,
        "explain": "a把新内容追加到末尾；w会截断旧内容。"
      }
    },
    {
      "id": "formatted-write",
      "title": "fprintf与格式化记录",
      "level": "基础",
      "summary": "把已有数据按约定格式写入文件。",
      "paragraphs": [
        "fprintf与printf类似，但把输出写到指定文件流。CSV记录可以用逗号分隔字段，一行对应一次采样。",
        "文件和变量承担不同任务：变量服务于当前计算，文件承载需要继续保存的记录。示例使用临时文件展示写入后的内容。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    FILE *fp = tmpfile();\n    if (fp == NULL) return 1;\n    fprintf(fp, \"minute,temperature\\n\");\n    fprintf(fp, \"%d,%d\\n\", 1, 43);\n    rewind(fp);\n    char line[64];\n    while (fgets(line, sizeof line, fp) != NULL) fputs(line, stdout);\n    fclose(fp);\n    return 0;\n}\n",
      "output": "minute,temperature\n1,43",
      "stdin": "",
      "quiz": {
        "q": "fprintf(fp,...)写到哪里？",
        "options": [
          "总是屏幕",
          "fp对应的文件流",
          "变量fp的名字里面"
        ],
        "answer": 1,
        "explain": "第一个参数fp指定输出流，printf通常输出到标准输出。"
      }
    },
    {
      "id": "line-read",
      "title": "fgets与逐行读取",
      "level": "基础",
      "summary": "读取返回值决定是否还有一行数据。",
      "paragraphs": [
        "fgets在给定容量内读取一行或一段文本，并保留读到的换行。成功返回目标数组地址，失败或无数据时返回NULL。",
        "常见模式是while(fgets(...)!=NULL)。数组容量小于一整行时，要考虑同一行可能分多次读入。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    FILE *fp = tmpfile();\n    if (fp == NULL) return 1;\n    fputs(\"43\\n47\\n\", fp);\n    rewind(fp);\n    char line[16];\n    while (fgets(line, sizeof line, fp) != NULL) {\n        printf(\"读到：%s\", line);\n    }\n    fclose(fp);\n    return 0;\n}\n",
      "output": "读到：43\n读到：47",
      "stdin": "",
      "quiz": {
        "q": "fgets读取成功时返回什么？",
        "options": [
          "NULL",
          "目标字符数组的地址",
          "固定整数1"
        ],
        "answer": 1,
        "explain": "成功时返回传入的字符数组地址，返回NULL说明本次没有成功读入。"
      }
    },
    {
      "id": "eof-errors",
      "title": "EOF、feof与ferror",
      "level": "进阶",
      "summary": "先看读取结果，再判断结束或错误。",
      "paragraphs": [
        "fgetc使用int返回字符或EOF。先读取，再依据返回值控制循环，避免使用while(!feof(fp))来预测下一次能否读到数据。",
        "feof表示先前的读取触发了文件结束状态；ferror表示发生了读取等错误。EOF本身是返回状态，不是文件中的普通字符。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    FILE *fp = tmpfile();\n    if (fp == NULL) return 1;\n    fputs(\"A\", fp);\n    rewind(fp);\n    printf(\"读取前feof：%d\\n\", feof(fp) != 0);\n    int ch;\n    while ((ch = fgetc(fp)) != EOF) putchar(ch);\n    printf(\"\\n读取后feof：%d\\n\", feof(fp) != 0);\n    printf(\"错误标记：%d\\n\", ferror(fp) != 0);\n    fclose(fp);\n    return 0;\n}\n",
      "output": "读取前feof：0\nA\n读取后feof：1\n错误标记：0",
      "stdin": "",
      "quiz": {
        "q": "稳妥的逐字符读取控制方式是哪一个？",
        "options": [
          "先while(!feof(fp))再读",
          "先依据fgetc返回值判断是否为EOF",
          "一次读取后永不检查"
        ],
        "answer": 1,
        "explain": "读取返回值直接反映本次能否取得字符；结束后再查看结束或错误标记。"
      }
    },
    {
      "id": "file-position",
      "title": "文件位置与fseek",
      "level": "进阶",
      "summary": "把读写位置移动到需要的地方。",
      "paragraphs": [
        "fseek调整文件位置，SEEK_SET表示以文件起点为基准。使用前要确认文件形式与位置规则适合该操作。",
        "本例临时文件写入ABC，向起点后的第1字节定位后，下一次读取的是B。应检查定位是否成功。"
      ],
      "code": "#include <stdio.h>\n\nint main(void) {\n    FILE *fp = tmpfile();\n    if (fp == NULL) return 1;\n    fputs(\"ABC\", fp);\n    if (fseek(fp, 1L, SEEK_SET) != 0) { fclose(fp); return 1; }\n    int ch = fgetc(fp);\n    if (ch != EOF) printf(\"定位后：%c\\n\", ch);\n    fclose(fp);\n    return 0;\n}\n",
      "output": "定位后：B",
      "stdin": "",
      "quiz": {
        "q": "本例fseek(fp,1L,SEEK_SET)后读取到哪个字符？",
        "options": [
          "A",
          "B",
          "C"
        ],
        "answer": 1,
        "explain": "起点后的偏移1对应第二个字节，本例是B。"
      }
    },
    {
      "id": "record-read",
      "title": "结构化记录与fscanf",
      "level": "进阶",
      "summary": "读取设备编号和温度，检查完整记录。",
      "paragraphs": [
        "约定一条记录由端口编号和温度组成，就可以用对应的格式读入结构体成员。",
        "fscanf的返回值是成功匹配并赋值的项数。应确认需要的字段都读入成功，再使用这一条记录。"
      ],
      "code": "#include <stdio.h>\n\nstruct Port { int id; double temp; };\n\nint main(void) {\n    FILE *fp = tmpfile();\n    if (fp == NULL) return 1;\n    fprintf(fp, \"3 46.5\\n\");\n    rewind(fp);\n    struct Port p;\n    if (fscanf(fp, \"%d%lf\", &p.id, &p.temp) == 2)\n        printf(\"端口%d，温度%.1f\\n\", p.id, p.temp);\n    fclose(fp);\n    return 0;\n}\n",
      "output": "端口3，温度46.5",
      "stdin": "",
      "quiz": {
        "q": "本例为什么检查fscanf返回值等于2？",
        "options": [
          "需要确认两个字段都成功读入",
          "文件必须有两行",
          "结构体固定占2字节"
        ],
        "answer": 0,
        "explain": "编号与温度共两项，必须都成功匹配并赋值后再使用。"
      }
    }
  ]
};
