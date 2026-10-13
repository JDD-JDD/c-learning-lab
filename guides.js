/* Chapter-specific, student-directed learning guides. */
const GUIDES = {
  "1": {
    "intro": "从一个自己想表达的欢迎语开始，认识程序怎样被编译和运行。你可以先观察，也可以先修改一句输出，再带着问题阅读代码。",
    "goalHint": "我想让程序输出自己的欢迎语，并解释编译成功与运行输出的区别。",
    "ready": [
      "我能找到main函数与printf语句。",
      "我能分清写代码、生成程序与运行程序。"
    ],
    "steps": [
      {
        "title": "写一句自己的欢迎语",
        "text": "在“电子屏的欢迎语”输入框中填写短句，先预测屏幕会显示什么。"
      },
      {
        "title": "逐步看运行过程",
        "text": "点击“执行下一步”，观察编辑、预处理、编译、链接和运行；输出出现前，留意当前阶段。"
      },
      {
        "title": "改一句，再验证",
        "text": "修改欢迎语会重建本次实验。对比两次输出，解释为什么修改源代码后还需要重新生成和运行程序。"
      },
      {
        "title": "用自测说明理由",
        "text": "完成本章两道核心自测；再选择程序结构或错误类型的知识点，把不清楚的地方记下来。"
      }
    ],
    "paths": {
      "support": {
        "task": "先找main和输出语句，慢速完成迎新实验；只选一个还不熟悉的知识点阅读。",
        "topics": [
          "program-structure",
          "build-flow"
        ]
      },
      "practice": {
        "task": "独立修改欢迎语，运行前写下预测；执行后用自己的话解释每个阶段的作用。",
        "topics": [
          "comments",
          "errors"
        ]
      },
      "challenge": {
        "task": "为校园服务设计一条信息输出，并描述它的输入、处理和输出；尝试说明何时需要选择或循环。",
        "topics": [
          "names",
          "three-structures"
        ]
      }
    },
    "games": [
      {
        "id": "swap",
        "level": 1,
        "purpose": "预习体验：把三条赋值语句当作按顺序执行的动作，观察数据搬家。",
        "followup": "先用提示完成一次交换，再说出为什么先执行哪一步很重要；赋值的完整含义在第二章继续学习。"
      }
    ],
    "trouble": [
      {
        "issue": "编译阶段为什么没有欢迎语？",
        "fix": "回看阶段标签，区分生成程序与执行printf。",
        "topic": "build-flow"
      },
      {
        "issue": "能运行是否就代表结果正确？",
        "fix": "用容易核对的输入和预期输出检查结果，再区分语法错误与逻辑错误。",
        "topic": "errors"
      }
    ],
    "checks": [
      "我能指出本例运行入口main。",
      "我能解释欢迎语在哪个阶段真正输出。",
      "我能给出一次“预测—修改—验证”的记录。"
    ],
    "reflection": "我修改了什么？输出是否符合预测？我还想问老师哪一个关于编译或运行的问题？"
  },
  "2": {
    "intro": "从库存、单价和货架编号的实际含义选择类型，再用变量变化验证表达式。你决定本次重点练习类型选择、赋值还是除法。",
    "goalHint": "我想分清整数除法与浮点除法，并解释补货后库存怎样更新。",
    "ready": [
      "我能说明整数数量与小数单价的区别。",
      "我能读懂右侧计算后再赋给左侧变量的过程。"
    ],
    "steps": [
      {
        "title": "设置库存数据",
        "text": "输入原有库存、补货数、每箱容量和单价；容量至少为1。先预测完整箱数和余量。"
      },
      {
        "title": "观察变量中的值",
        "text": "逐步执行，查看int、double与char存储框；特别观察bottles += added前后的变化。"
      },
      {
        "title": "比较不同运算",
        "text": "把原有库存设为23、补货设为0、容量设为5，对比整数商4、余数3和浮点商4.6。"
      },
      {
        "title": "换一组数检查",
        "text": "改成补货3瓶再验证。用自测检查类型转换的时机，并把“先算什么、后存什么”写进笔记。"
      }
    ],
    "paths": {
      "support": {
        "task": "先选变量类型与赋值知识点，逐步记录一次库存更新；看到不理解的步骤就暂停或回看。",
        "topics": [
          "basic-types",
          "assignment"
        ]
      },
      "practice": {
        "task": "对两组不同库存先预测，再核对完整箱数、余量和货值；解释两个除法结果为什么不同。",
        "topics": [
          "division-remainder",
          "conversions"
        ]
      },
      "challenge": {
        "task": "设计一组恰好装满和一组有余量的数据，比较表达式与结果；用括号明确一次复杂运算的计算顺序。",
        "topics": [
          "precedence",
          "constants-variables"
        ]
      }
    },
    "games": [
      {
        "id": "swap",
        "level": 1,
        "purpose": "直接练习：用temp保护旧值，完成变量交换。",
        "followup": "把游戏中的三条赋值按先后顺序写下来，解释每条语句读取和覆盖了什么。"
      },
      {
        "id": "debug",
        "level": 2,
        "purpose": "巩固整数除法与类型转换。",
        "followup": "解释为何(double)(sum/2)与sum/2.0会得到不同结果。"
      }
    ],
    "trouble": [
      {
        "issue": "为什么double变量里还是4.0？",
        "fix": "先检查除法两边的类型；把转换放到除法之前，再观察结果。",
        "topic": "conversions"
      },
      {
        "issue": "库存更新后为什么读到新值？",
        "fix": "回看赋值前后两个状态，先用旧值计算，再把结果保存到同一变量。",
        "topic": "assignment"
      }
    ],
    "checks": [
      "我能为数量、单价、单个编号选择合适类型。",
      "我能说明23/5、23%5与23/5.0的结果。",
      "我能跟踪一次赋值前后的变量变化。"
    ],
    "reflection": "哪一种运算最容易让我误判？我用哪组新数据验证了自己的解释？"
  },
  "3": {
    "intro": "把输入、公式和输出连成一个能解释的顺序程序。先选一组你能手算的数据，再用页面验证单位、语句顺序和格式。",
    "goalHint": "我想独立估算一次充电费用，并指出每个输入变量的单位和格式。",
    "ready": [
      "我能使用变量保存数量与小数。",
      "我能解释乘除表达式与赋值顺序。"
    ],
    "steps": [
      {
        "title": "填写输入并手算",
        "text": "设置功率W、时长h和电价元/kWh；先写下电量与费用的估算结果。"
      },
      {
        "title": "逐条检查公式",
        "text": "点击“执行下一步”，观察输入→电量→费用→输出；核对除以1000.0的单位换算。"
      },
      {
        "title": "只改变一个输入",
        "text": "保持功率与电价不变，只改变时长。预测费用如何变化，再用执行结果验证。"
      },
      {
        "title": "检查格式并留证据",
        "text": "完成两道核心自测；在知识点示例中对照scanf与printf格式，把一组输入及结果写进笔记。"
      }
    ],
    "paths": {
      "support": {
        "task": "先使用默认数据350 W、2 h、0.6元/kWh，按每条语句的顺序读值；遇到格式疑问再看知识点。",
        "topics": [
          "scanf",
          "unit-conversion"
        ]
      },
      "practice": {
        "task": "独立完成两组费用计算，并解释输入格式、单位换算和显示小数位分别影响什么。",
        "topics": [
          "printf",
          "statement-order"
        ]
      },
      "challenge": {
        "task": "为校园设备设计另一个顺序计算任务：列明输入单位、计算公式与输出格式，用简单数据核对结果。",
        "topics": [
          "float-display",
          "character-io"
        ]
      }
    },
    "games": [
      {
        "id": "debug",
        "level": 3,
        "purpose": "直接练习double读取的格式匹配。",
        "followup": "修复后回到本章scanf知识点，对照%lf、&hours与返回值检查。"
      },
      {
        "id": "swap",
        "level": 1,
        "purpose": "练习顺序语句与中间变量。",
        "followup": "说明交换步骤为什么不能任意调换，再联系费用计算的先后依赖。"
      }
    ],
    "trouble": [
      {
        "issue": "电量大了1000倍？",
        "fix": "检查W×h得到的是Wh，是否除以1000.0后才输出kWh。",
        "topic": "unit-conversion"
      },
      {
        "issue": "输入格式或小数显示不清楚？",
        "fix": "分别核对scanf读取类型与printf显示格式，不要把两者的格式规则混为一谈。",
        "topic": "scanf"
      }
    ],
    "checks": [
      "我能写清功率、电量与费用之间的单位关系。",
      "我能为double输入选择%lf并传入地址。",
      "我能通过只改变一个输入来验证计算趋势。"
    ],
    "reflection": "我的公式、输入格式或语句顺序曾出现什么问题？我是怎样定位并验证修正的？"
  },
  "4": {
    "intro": "从“什么时候该开灯”这样的需求开始，选择输入、预测分支并验证边界。你可以从一个条件起步，再挑战复合条件。",
    "goalHint": "我想用四种光照与人员组合验证&&条件，并解释等于阈值时的结果。",
    "ready": [
      "我能判断一个关系表达式是真还是假。",
      "我能区分赋值号=与相等判断==。"
    ],
    "steps": [
      {
        "title": "先读夜灯规则",
        "text": "本例要求光照小于阈值且有人经过。先根据默认输入预测夜灯状态。"
      },
      {
        "title": "修改场景输入",
        "text": "调整光照、是否有人和阈值；逐步执行，观察判断结果及真正进入的分支。"
      },
      {
        "title": "测试边界和组合",
        "text": "比较阈值前、恰好等于阈值、阈值后三个值，再测试暗且无人等组合。每次先预测再验证。"
      },
      {
        "title": "用反馈修正理解",
        "text": "完成核心自测；把误判归因于比较符号、逻辑组合或分支次序，并选择相应知识点重练。"
      }
    ],
    "paths": {
      "support": {
        "task": "先看if与else，再只改变“有人/无人”这一项；用具体输入说清哪个条件为假。",
        "topics": [
          "if-else",
          "logic"
        ]
      },
      "practice": {
        "task": "设计暗且有人、暗且无人、亮且有人、亮且无人四组输入，分别验证预期分支。",
        "topics": [
          "logic",
          "boundaries"
        ]
      },
      "challenge": {
        "task": "为宿舍设备提出多档规则，用else if或switch表达；说明你选择的结构与边界。",
        "topics": [
          "else-if",
          "switch"
        ]
      }
    },
    "games": [
      {
        "id": "conditions",
        "level": 1,
        "purpose": "直接练习校园场景中的逻辑条件，关卡2专门检查阈值边界。",
        "followup": "每次选择前逐个说出子条件的真假，通关后写下一组使整体为假的输入。"
      },
      {
        "id": "debug",
        "level": 5,
        "purpose": "区分严格超过与达到阈值。",
        "followup": "用44、45、46三组输入解释>与>=的不同。"
      }
    ],
    "trouble": [
      {
        "issue": "环境暗，为什么灯仍没开？",
        "fix": "检查present是否为0；&&要求两边都为真。",
        "topic": "logic"
      },
      {
        "issue": "恰好等于阈值时为什么不进入if？",
        "fix": "重新读取需求中的“小于”或“超过”，核对<、>与包含等号的比较。",
        "topic": "boundaries"
      }
    ],
    "checks": [
      "我能解释复合条件中每个子条件的真假。",
      "我能用边界值验证一个判断规则。",
      "我能给出至少一组走if、一组走else的输入。"
    ],
    "reflection": "我在哪个场景判断错了？哪个子条件或边界让我改变了原来的预测？"
  },
  "5": {
    "intro": "把重复任务变成可跟踪的程序。先说清一次巡检做什么，再解释为何重复8次、何时停止，最后把规律迁移到机器人或宿舍楼巡检。",
    "goalHint": "我想解释8次循环体为什么需要9次条件判断，并完成一条机器人循环路线。",
    "ready": [
      "我能判断温度是否超过45℃。",
      "我能区分循环变量i与超温计数count。"
    ],
    "steps": [
      {
        "title": "先预测八次巡检",
        "text": "阅读三号口任务，先预测8次固定采样的超温次数和最后的i。原有for实验使用给定的8次温度。"
      },
      {
        "title": "运行原有for实验",
        "text": "在嵌入实验中点击“执行下一次”，查看i、x与count；熟悉后再用“自动执行8次”，最后关注i=8时的退出判断。"
      },
      {
        "title": "对照两个扩展实验",
        "text": "点击“嵌套循环·宿舍楼巡检”，可调整楼层和房间数并逐步执行；再看“break·即时响应”，比较第3次超温即退出与8次后汇总。"
      },
      {
        "title": "根据卡点选学",
        "text": "用自测检验次数和退出规则；选择while、do…while、break与continue等知识点，记录一种容易漏掉的更新或边界。"
      }
    ],
    "paths": {
      "support": {
        "task": "先区分i、x与count，只做逐次执行并记录前两次；再读for顺序和循环边界。",
        "topics": [
          "for-order",
          "loop-boundary"
        ]
      },
      "practice": {
        "task": "完整跟踪8次执行，解释9次条件判断；再调整宿舍楼的楼层与房间数，验证总提醒数。",
        "topics": [
          "nested",
          "break-continue"
        ]
      },
      "challenge": {
        "task": "比较固定次数汇总、即时退出与不同循环形式；在机器人游戏中把连续动作合成循环，并解释停止原因。",
        "topics": [
          "while",
          "do-while"
        ]
      }
    },
    "games": [
      {
        "id": "maze",
        "level": 1,
        "purpose": "直接练习for的重复次数与指令顺序，之后可自主选择绕障关卡。",
        "followup": "先画路线，再搭建前进循环；通关后解释每段循环重复了几次，为什么转向放在这个位置。"
      },
      {
        "id": "debug",
        "level": 1,
        "purpose": "检查循环起点与终点是否恰好执行8次。",
        "followup": "列出进入循环体的i取值，说明<8与<=8的次数差别。"
      }
    ],
    "trouble": [
      {
        "issue": "把8次执行当成8次判断？",
        "fix": "把最后i=8、条件为假的判断补入变量轨迹，区分判断次数和进入循环体次数。",
        "topic": "for-order"
      },
      {
        "issue": "break与continue分不清？",
        "fix": "先问任务是结束整个当前循环，还是只跳过本轮剩余语句，再看示例输出。",
        "topic": "break-continue"
      }
    ],
    "checks": [
      "我能按初始化→判断→循环体→更新解释for。",
      "我能说明8次执行、9次判断与最终i=8。",
      "我能把循环次数或退出规则迁移到一个新任务。"
    ],
    "reflection": "我原先对循环次数或退出规则有什么误解？机器人或宿舍楼实验怎样帮我发现并修正它？"
  },
  "6": {
    "intro": "让一组采样数据都有位置，并对整组数据做统计。你可以先看清下标，再尝试负值、二维数组或相邻交换。",
    "goalHint": "我想准确使用0到7的下标，并解释求平均值时为什么要除以8.0。",
    "ready": [
      "我能读懂for遍历的起点、条件与更新。",
      "我能区分整数除法和浮点除法。"
    ],
    "steps": [
      {
        "title": "输入恰好8个温度",
        "text": "在温度输入框中用逗号分隔8个整数；本页支持−40至150。先预测最高值与平均值。"
      },
      {
        "title": "看下标与统计变量",
        "text": "逐步执行，观察当前元素和sum、max的变化；注意初始化max来自第一个元素。"
      },
      {
        "title": "设计不同数据验证",
        "text": "可试相同值、包含负数或最大值在最后的输入。修改数据后重新执行，比较你的预测。"
      },
      {
        "title": "选择扩展并自检",
        "text": "完成核心自测；根据需要选择二维数组、字符数组、字符串或查找，记录如何判断访问范围。"
      }
    ],
    "paths": {
      "support": {
        "task": "从数组初始化和下标开始，先只跟踪前两个元素，再逐步完成整组数据。",
        "topics": [
          "array-init",
          "array-bounds"
        ]
      },
      "practice": {
        "task": "独立输入两组数据，核对sum、max与平均值；尝试负数并解释max的初始化。",
        "topics": [
          "array-bounds",
          "array-search"
        ]
      },
      "challenge": {
        "task": "把一维采样扩展为多端口二维数据，或比较字符串字符数与数组容量。",
        "topics": [
          "two-dimensional",
          "character-array"
        ]
      }
    },
    "games": [
      {
        "id": "arrays",
        "level": 1,
        "purpose": "直接练习下标、相邻交换与有序数组。",
        "followup": "每次交换前先说出两项下标，观察逆序数变化；通关后写出一次临时变量交换。"
      },
      {
        "id": "debug",
        "level": 4,
        "purpose": "识别长度为8的数组的最后一个有效下标。",
        "followup": "把“第几次采样”与“数组下标”逐一对应起来。"
      }
    ],
    "trouble": [
      {
        "issue": "为什么第8个元素不是temp[8]？",
        "fix": "从temp[0]数起，把第1到第8次对应到下标0到7。",
        "topic": "array-bounds"
      },
      {
        "issue": "负数输入后，最高值为什么可能出错？",
        "fix": "核对候选最大值是否来自真实数据，而不是随意用0初始化。",
        "topic": "array-search"
      }
    ],
    "checks": [
      "我能把第几项正确对应到数组下标。",
      "我能跟踪sum与max对每个元素的更新。",
      "我能解释整数平均值与浮点平均值的差别。"
    ],
    "reflection": "我用什么特殊数据检查了数组统计？哪一次交换或访问让我看清了下标的作用？"
  },
  "7": {
    "intro": "把一个清楚的判断职责封装成函数，通过输入和返回值验证它。你可以先跟踪一次调用，再考虑多处复用或更复杂的参数。",
    "goalHint": "我想区分实参、形参与返回值，并用44、45、46验证同一个超温函数。",
    "ready": [
      "我能写出温度超过阈值的条件。",
      "我能跟踪普通变量赋值后的值。"
    ],
    "steps": [
      {
        "title": "设置实参与阈值",
        "text": "调整温度和阈值，先预测over_limit的返回值是0还是1。"
      },
      {
        "title": "逐步跟踪调用栈",
        "text": "观察main准备实参、进入函数、判断、return与回到main；说明数据在哪里被复制。"
      },
      {
        "title": "重复验证同一职责",
        "text": "分别测试温度44、45、46和阈值45，比较返回值；再改变阈值，观察函数如何复用规则。"
      },
      {
        "title": "按需选学与自检",
        "text": "完成核心自测，再选择声明、值传递、作用域、递归或数组参数；记录函数内外哪些对象发生变化。"
      }
    ],
    "paths": {
      "support": {
        "task": "先看函数接口和普通参数的值传递，用一组输入完整跟踪调用与返回。",
        "topics": [
          "declaration",
          "value-parameters"
        ]
      },
      "practice": {
        "task": "用三组边界输入验证返回值，解释实参、形参、返回值分别承担的角色。",
        "topics": [
          "return-value",
          "scope"
        ]
      },
      "challenge": {
        "task": "把数组处理封装为函数并传入长度，或选一个有明确终止条件的递归示例。",
        "topics": [
          "array-parameters",
          "recursion"
        ]
      }
    },
    "games": [
      {
        "id": "conditions",
        "level": 4,
        "purpose": "跨章迁移：先辨清超温判断规则，再把它变成函数。",
        "followup": "这一关练习条件判断；回本章把同一规则写成over_limit，使用44、45、46分别调用并解释返回值。"
      }
    ],
    "trouble": [
      {
        "issue": "修改形参，main的变量为什么没变？",
        "fix": "把实参对象和函数内形参分开画出来，观察普通int参数复制的是值。",
        "topic": "value-parameters"
      },
      {
        "issue": "返回值与输出语句混淆？",
        "fix": "找出return交回的值，再看main如何保存或输出它；printf与返回值承担不同作用。",
        "topic": "return-value"
      }
    ],
    "checks": [
      "我能说明一次实参到形参的传递过程。",
      "我能根据return值解释调用者的下一步。",
      "我能用同一函数验证至少三组输入。"
    ],
    "reflection": "函数封装让哪个重复任务变清楚了？我还不确定的是参数、作用域还是返回过程？"
  },
  "8": {
    "intro": "把“地址”和“那里保存的值”分开观察。先让指针指向一个有效对象，再验证解引用修改与指针移动各改变什么。",
    "goalHint": "我想区分p与*p，并解释为什么指针走到数组末尾后一位时不能再读取。",
    "ready": [
      "我能理解变量保存值，数组元素按下标定位。",
      "我能解释普通参数按值传递。"
    ],
    "steps": [
      {
        "title": "选定校准对象",
        "text": "选择data[0]、data[1]或data[2]，设置新读数；先预测哪些数组元素会变化。"
      },
      {
        "title": "观察地址与解引用",
        "text": "逐步看p=&data[i]与*p赋值。图中采用假设地址、4字节int示意，重点是所指对象关系。"
      },
      {
        "title": "检查指针步长与边界",
        "text": "把指针选到最后一个元素再执行p++，观察程序如何避免解引用尾后一位。"
      },
      {
        "title": "用知识点加深理解",
        "text": "完成核心自测，再比较指针参数、字符串指针、const或动态内存；记录一次有效对象与访问范围检查。"
      }
    ],
    "paths": {
      "support": {
        "task": "先读地址、指针和解引用，用一个元素说明p与*p分别是什么。",
        "topics": [
          "address-value",
          "array-pointer"
        ]
      },
      "practice": {
        "task": "分别选择中间与最后一个元素，预测校准结果与p++后的可访问状态。",
        "topics": [
          "array-pointer",
          "pointer-parameters"
        ]
      },
      "challenge": {
        "task": "用指针参数原地更新调用者数据，或探索const与动态内存申请、检查和释放。",
        "topics": [
          "const-pointer",
          "dynamic-memory"
        ]
      }
    },
    "games": [
      {
        "id": "debug",
        "level": 6,
        "purpose": "直接区分修改指针自身与修改所指对象。",
        "followup": "选择补丁前说出p++和(*p)++各改变什么，再回到校准实验验证。"
      },
      {
        "id": "swap",
        "level": 1,
        "purpose": "复习赋值保护旧值，为指针参数交换准备思路。",
        "followup": "先写出临时变量交换步骤，再思考函数若要原地交换，应接收哪两个对象的地址。"
      }
    ],
    "trouble": [
      {
        "issue": "为什么p++不是把温度加1？",
        "fix": "区分指针中的位置与该位置保存的整数；用游戏补丁和数组图对照。",
        "topic": "array-pointer"
      },
      {
        "issue": "指针能移动，为什么不能总是解引用？",
        "fix": "检查它是否仍指向有效元素；尾后一位用于比较，不能读取为一个额外元素。",
        "topic": "address-value"
      }
    ],
    "checks": [
      "我能分别解释p、&data[i]与*p。",
      "我能预测解引用赋值会改写哪个原始对象。",
      "我能指出一个可移动但不可解引用的位置。"
    ],
    "reflection": "我在哪里把地址和值混在一起了？哪个例子帮助我明确了修改对象与移动指针的区别？"
  },
  "9": {
    "intro": "从设备有哪些属性开始设计类型，再验证成员访问和状态更新。你可以先建一份档案，再自主扩展到多个设备或命名状态。",
    "goalHint": "我想用结构体保存编号、温度和状态，并解释更新一个成员后其他成员如何变化。",
    "ready": [
      "我能为编号、温度与状态选择数据类型。",
      "我能区分普通对象与指向对象的指针。"
    ],
    "steps": [
      {
        "title": "给设备设初始属性",
        "text": "调整端口编号、温度和初始通电状态；先预测程序将改写哪个成员。"
      },
      {
        "title": "从类型到对象逐步观察",
        "text": "跟踪Port类型定义、变量p创建、成员读取与状态更新，区分定义类型和创建数据。"
      },
      {
        "title": "验证边界与成员独立性",
        "text": "把温度设为45与46比较，再改变编号；观察一次状态修改对其他成员的影响。"
      },
      {
        "title": "扩展你的设备模型",
        "text": "完成核心自测后，按需选择结构体数组、指针、enum、typedef或union；为身边设备补充两个属性并说明类型。"
      }
    ],
    "paths": {
      "support": {
        "task": "先只建一份设备档案，逐个对应成员名、类型和当前值，再看点运算符。",
        "topics": [
          "struct-members",
          "typedef"
        ]
      },
      "practice": {
        "task": "使用两组温度验证状态更新，说明类型定义、变量对象和成员访问的区别。",
        "topics": [
          "struct-members",
          "struct-pointer"
        ]
      },
      "challenge": {
        "task": "建立多个设备档案或用enum命名状态，并比较struct保存多个属性与union共享存储的用途。",
        "topics": [
          "struct-array",
          "enum",
          "union"
        ]
      }
    },
    "games": [
      {
        "id": "conditions",
        "level": 5,
        "purpose": "跨章迁移：把巡检数据与最终状态整理成设备记录。",
        "followup": "游戏练习汇总状态判断；回本章用结构体组织编号、温度或计数、状态，在设备档案实验中检查成员访问。"
      }
    ],
    "trouble": [
      {
        "issue": "struct Port与变量p混淆？",
        "fix": "先看类型描述包含什么，再找创建某一份设备对象的声明。",
        "topic": "struct-members"
      },
      {
        "issue": "点运算符与->混淆？",
        "fix": "先确认左侧是结构体变量还是结构体指针，再选择对应访问方式。",
        "topic": "struct-pointer"
      }
    ],
    "checks": [
      "我能为一个设备列出有含义且类型合适的成员。",
      "我能区分定义类型与创建具体对象。",
      "我能根据对象或指针选择.或->访问成员。"
    ],
    "reflection": "我的设备档案还需要哪两个属性？我为什么选择这些类型，又该如何验证状态更新？"
  },
  "10": {
    "intro": "让程序中的读数成为可继续查看的日志。由你选择保存需求、打开模式和验证数据，再用文件内容检查记录是否符合预期。",
    "goalHint": "我想说明a与w的区别，并用下载的日志验证是否保留了原记录。",
    "ready": [
      "我能读懂程序的输入输出格式。",
      "我能理解指针有效性与错误分支判断。"
    ],
    "steps": [
      {
        "title": "先选择保存需求",
        "text": "已有记录要保留时选择a，需要重新写入时选择w；设置本次温度和模拟打开结果。"
      },
      {
        "title": "逐步观察读写过程",
        "text": "跟踪打开、NULL检查、写入和关闭；注意w在成功打开时就清空原内容，a保留原内容。"
      },
      {
        "title": "下载并比较记录",
        "text": "成功写入并执行到结束后，点击“下载本次日志CSV”。分别运行a和w，再打开下载文件核对内容。"
      },
      {
        "title": "验证打开失败",
        "text": "将模拟结果设为失败，观察写入和关闭是否跳过；完成自测，再按需学习逐行读取、EOF、定位或结构化读取。"
      }
    ],
    "paths": {
      "support": {
        "task": "先只比较a与w，逐步执行并查看已有记录怎样变化，再看格式化写入。",
        "topics": [
          "file-modes",
          "formatted-write"
        ]
      },
      "practice": {
        "task": "独立运行追加、覆盖和失败三种情况，下载成功日志并以实际内容核对预测。",
        "topics": [
          "line-read",
          "eof-errors"
        ]
      },
      "challenge": {
        "task": "把结构体记录写入文件再读回，检查读取项数与错误标记；或探索适合场景的文件位置操作。",
        "topics": [
          "record-read",
          "file-position"
        ]
      }
    },
    "games": [
      {
        "id": "debug",
        "level": 3,
        "purpose": "跨章迁移：复习double读取的格式匹配。",
        "followup": "这一关使用scanf；回本章结构化读取示例，对照fscanf中的%lf及读取项数，再用日志实验练习追加、覆盖和失败处理。"
      }
    ],
    "trouble": [
      {
        "issue": "为什么旧记录消失了？",
        "fix": "检查是否使用w打开；把打开后的文件内容与a模式对照。",
        "topic": "file-modes"
      },
      {
        "issue": "循环读取为什么多处理了一次？",
        "fix": "依据实际读取函数的返回值控制循环，结束后再查看feof或ferror。",
        "topic": "eof-errors"
      }
    ],
    "checks": [
      "我能按保存需求解释为什么选择a或w。",
      "我能指出打开失败时哪些步骤不应继续。",
      "我能用下载文件的实际内容验证写入结果。"
    ],
    "reflection": "我的保存需求是什么？文件内容与预测一致吗？若读取或打开失败，我应该记录什么并怎样处理？"
  }
};
const GUIDE_PATHS={support:{title:'跟着提示起步',description:'先补一个卡点，逐步看清过程。'},practice:{title:'独立验证',description:'先预测，再用不同输入检查解释。'},challenge:{title:'迁移挑战',description:'把学过的规律用于一个新任务。'}};
function guideRecord(id){const p=progress(id);p.guide||={path:'practice',goal:'',reflection:'',checks:{}};p.guide.checks||={};if(!GUIDE_PATHS[p.guide.path])p.guide.path='practice';return p.guide;}
function guideCheckCount(id){const r=guideRecord(id);return GUIDES[id].checks.filter((_,i)=>r.checks[i]).length;}
function guideSearchText(id){return '本章学习指南'+GUIDES[id].games.map(r=>GAMES.find(g=>g.id===r.id)?.name||'').join('');}
function guideTopicLink(id,topic,label){const k=knowledgeList(id).find(k=>k.id===topic);return `<a href="#chapter-${id}/topic/${topic}">${escapeHTML(label||k?.title||topic)} ↗</a>`;}
function renderChapterGuide(id,expanded){
 const host=$('chapter-guide');if(!host)return;const g=GUIDES[id],c=CHAPTERS[id-1],r=guideRecord(id);
 if(!expanded){host.className='chapter-guide guide-entry';host.innerHTML=`<div><span class="eyebrow">YOUR LEARNING GUIDE</span><h2>本章学习指南</h2><p>了解本页怎么用，选择今天的学习路线，找到对应小游戏，用自检和记录回看自己的收获。</p></div><a class="button primary" href="#chapter-${id}/guide">打开本章指南 →</a>`;return;}
 if(!r.viewedAt){r.viewedAt=new Date().toISOString();persist();}
 host.className='chapter-guide guide-expanded';host.innerHTML=`<header class="guide-heading"><div><span class="eyebrow">CHAPTER ${String(id).padStart(2,'0')} / YOUR LEARNING GUIDE</span><h2>本章学习指南</h2><h3>${escapeHTML(c.title)}</h3><p>${escapeHTML(g.intro)}</p></div><a class="button secondary" href="#chapter-${id}">回到本章实验 ↑</a></header><section class="guide-goal-block"><div><small>01 / 今天，你想解决什么？</small><h3>先定一个自己的目标</h3><p>可以从本章目标中选一个，也可以写下你最想弄明白的问题。目标可以随着学习调整。</p><textarea id="guide-goal" maxlength="240" rows="2" aria-label="我的本章学习目标" placeholder="${escapeHTML(g.goalHint)}">${escapeHTML(r.goal||'')}</textarea></div><div class="guide-ready"><b>进入前问问自己</b>${g.ready.map(text=>`<p><span>?</span>${escapeHTML(text)}</p>`).join('')}<small>还不确定也可以开始；选择“跟着提示起步”，边操作边补充理解。</small></div></section><section class="guide-block"><div class="guide-section-title"><small>02 / 路线由你选择</small><h3>哪条路线适合今天的你？</h3><p>你可以随时切换。选择依据是当前需要和目标，每条路线都能回到本章任务。</p></div><div class="guide-path-grid">${Object.entries(GUIDE_PATHS).map(([key,path])=>`<button class="guide-path ${r.path===key?'selected':''}" data-guide-path="${key}" aria-pressed="${r.path===key}"><b>${path.title}</b><span>${path.description}</span></button>`).join('')}</div><div id="guide-path-detail" class="guide-path-detail"></div></section><section class="guide-block"><div class="guide-section-title"><small>03 / 本章网页怎么用</small><h3>一边操作，一边验证</h3></div><ol class="guide-steps">${g.steps.map((step,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><div><h4>${escapeHTML(step.title)}</h4><p>${escapeHTML(step.text)}</p></div></li>`).join('')}</ol><div class="guide-page-tools"><a class="button primary" href="#chapter-${id}">进入本章核心实验 →</a><a class="button secondary" href="#chapter-${id}/topic/${g.paths[r.path].topics[0]}">打开一个建议知识点</a><small>${id===5?'原有for实验按整次巡检推进；宿舍楼与break实验可逐步执行、回看和重置。':'核心实验支持逐步、自动、回看和重置；修改输入会重新开始本次模拟。'}</small></div></section><section class="guide-block"><div class="guide-section-title"><small>04 / 本章对应的小游戏</small><h3>先玩一关，再把发现带回来</h3><p>关卡帮助你练习指定的规律。通关后，完成下面的回课任务，用解释和新输入验证理解。</p></div><div class="guide-game-grid">${g.games.map(link=>{const game=GAMES.find(game=>game.id===link.id),level=GAME_LEVELS[link.id][link.level-1];return `<article class="guide-game-card"><small>小游戏 / 第${link.level}关</small><h4>${escapeHTML(game.name)}</h4><b>${escapeHTML(level.label)}</b><p>${escapeHTML(link.purpose)}</p><div class="guide-game-return"><strong>玩后回到本章</strong><p>${escapeHTML(link.followup)}</p></div><a class="button secondary" href="#appendix/${game.id}/${link.level}">进入对应关卡 →</a></article>`;}).join('')}</div></section><section class="guide-block"><div class="guide-section-title"><small>05 / 卡住时，调整一步</small><h3>把错误当作下一步的线索</h3></div><div class="guide-trouble-grid">${g.trouble.map(problem=>`<article><h4>${escapeHTML(problem.issue)}</h4><p>${escapeHTML(problem.fix)}</p>${guideTopicLink(id,problem.topic,'打开相关知识点')}</article>`).join('')}</div><p class="guide-help-note">仍不清楚时，在笔记里写下具体输入、实际结果和你的预期。带着这三项信息与同学核对，或在课堂上请老师一起分析。</p></section><section class="guide-block guide-check-block"><div class="guide-section-title"><small>06 / 用证据检查自己的收获</small><h3>离开本章前，我能做到什么？</h3><p>逐项自评。选择后，再想一想你能拿出哪次操作、哪个输入或哪段解释作为证据。</p></div><div class="guide-checklist">${g.checks.map((check,i)=>`<label><input type="checkbox" data-guide-check="${i}" ${r.checks[i]?'checked':''}><span>${escapeHTML(check)}</span></label>`).join('')}</div><div id="guide-check-summary" class="guide-check-summary">已自评 ${guideCheckCount(id)}/${g.checks.length} 项 · 这份自评记录帮助你安排下一次学习。</div><label class="guide-reflection-label" for="guide-reflection">记录一次发现、一个证据或一个待解决的问题</label><textarea id="guide-reflection" maxlength="1600" rows="4" placeholder="${escapeHTML(g.reflection)}">${escapeHTML(r.reflection||'')}</textarea><div class="guide-save-tools"><span id="guide-save-status" role="status">目标、路线、自评与反思会保存在当前浏览器。</span><button id="guide-save" class="button primary">保存我的学习计划</button><button id="guide-export" class="button secondary">导出学习记录 ↗</button></div></section>`;
 paintGuidePath(id);
 host.querySelectorAll('[data-guide-path]').forEach(button=>button.addEventListener('click',()=>{r.path=button.dataset.guidePath;r.updated=new Date().toISOString();persist();paintGuidePath(id);$('guide-save-status').textContent='学习路线已保存，可随时重新选择。';}));
 host.querySelectorAll('[data-guide-check]').forEach(input=>input.addEventListener('change',()=>{r.checks[input.dataset.guideCheck]=input.checked;r.updated=new Date().toISOString();persist();$('guide-check-summary').textContent=`已自评 ${guideCheckCount(id)}/${g.checks.length} 项 · 请同时留下支持判断的学习证据。`;$('guide-save-status').textContent='自评已保存。';}));
 for(const [element,key]of [['guide-goal','goal'],['guide-reflection','reflection']])$(element).addEventListener('input',()=>{r[key]=$(element).value;r.updated=new Date().toISOString();persist();$('guide-save-status').textContent='已自动保存至当前浏览器。';});
 $('guide-save').addEventListener('click',()=>{r.goal=$('guide-goal').value;r.reflection=$('guide-reflection').value;r.updated=new Date().toISOString();persist();$('guide-save-status').textContent='学习计划已保存，导出学习记录时会包含本章目标、路线、自评与反思。';toast('本章学习计划已保存。');});$('guide-export').addEventListener('click',exportProgress);
}
function paintGuidePath(id){const r=guideRecord(id),path=GUIDES[id].paths[r.path];document.querySelectorAll('[data-guide-path]').forEach(button=>{const selected=button.dataset.guidePath===r.path;button.classList.toggle('selected',selected);button.setAttribute('aria-pressed',String(selected));});$('guide-path-detail').innerHTML=`<div><small>你选择的路线</small><h4>${GUIDE_PATHS[r.path].title}</h4><p>${escapeHTML(path.task)}</p></div><div class="guide-topic-links"><span>可从这些知识点开始</span>${path.topics.map(topic=>guideTopicLink(id,topic)).join('')}</div>`;const recommended=document.querySelector('.guide-page-tools .button.secondary');if(recommended)recommended.href=`#chapter-${id}/topic/${path.topics[0]}`;}
function scrollToChapterGuide(){const target=$('chapter-guide');if(target)requestAnimationFrame(()=>target.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));}
function updateChapterLocation(){if(!activeChapter)return;const c=CHAPTERS[activeChapter-1];$('crumb').textContent=activeGuide?`第${activeChapter}章 · 本章学习指南`:`第${activeChapter}章 · ${c.short}`;document.title=activeGuide?`第${activeChapter}章学习指南 | C语言学习实验室`:`第${activeChapter}章 ${c.short} | C语言程序设计—学习实验室`;}
