// All page copy lives here so it's easy to edit without touching layout.

export const intro = {
  name: "Code_流苏",
  initial: "C", // used for the corner script monogram
  signature: "在代码中寻诗意，在实践中觅真知。",
  highlight: "逻辑与创造",
  lines: [
    "古诗词让我领略文学之美，编程让我享受逻辑与创造！",
    "AI 应用、编程实践、计算机科普与效率工具，从一个概念，到一次真正动手。",
  ],
  readingNote: "这里整理阅读线索，完整文章在 CSDN 与你见面。",
  // Shown as the blue marginalia note.
  status:
    "持续输出 AI 应用开发 · 编程教程 · 计算机科普 — 融合技术深度与人文温度。",
  github: "https://github.com/yueliusu",
  message: "mailto:shachangjunmoxiao@gmail.com",
} as const;

// A dated row: the label on the left, the date on the right.
export type Entry = {
  label: string;
  date: string;
  href?: string;
};

export const experience: Entry[] = [
  {
    label: "CSDN 原创技术博主（AI 应用 · 编程教程 · 计算机科普）",
    date: "2021–至今",
  },
  { label: "《硬件视界》专栏作者 系统化硬件科普", date: "2024–至今" },
  { label: "粉丝技术社群运营 & 内容 IP 体系化构建", date: "2025–至今" },
];

// A project. `date` shows on the row's hand-cut sticky tag. `href` is optional
// — omit it for closed-source / unlinked projects. `site` is an optional live /
// official site shown next to the repo link. `blurb` and `stack` fill the detail
// revealed when the row is clicked. `stamp` is the short word scrawled in the
// hand-drawn marker stamp on that detail, and `color` picks the marker accent
// it's inked in.
export type Project = {
  label: string;
  date: string;
  color: "red" | "green" | "blue";
  stamp: string;
  href?: string;
  site?: string;
  blurb?: string;
  stack?: string[];
};

export const projects: Project[] = [
  {
    label: "《硬件视界》 — 计算机硬件系统化科普专栏",
    href: "https://blog.csdn.net/qq_51646682/article/details/139883176",
    date: "2024",
    color: "green",
    stamp: "popular",
    blurb:
      "一套面向大众的计算机硬件科普专栏：输入设备、CPU、GPU、内存、存储、主板、散热、电源、显示接口，再到 Thunderbolt / USB / NVMe 高速传输技术。模块化拆解硬件原理与选型要点，兼顾初学者入门、学生学习与开发者底层认知提升。",
    stack: ["计算机组成", "硬件", "科普"],
  },
  {
    label: "AI 模型深度解析 — Claude / DeepSeek / Qwen / Gemini",
    href: "https://blog.csdn.net/qq_51646682/article/details/148171675",
    date: "2025",
    color: "red",
    stamp: "new",
    blurb:
      "对前沿大模型做实测与深度解析：Claude 4 连续七小时的工作能力、DeepSeek-V3.1-Terminus 的语言一致性、Qwen3-Coder 的开源编程体验、GPT-OSS 的民主化里程碑，以及 MCP / Agent / Agent Skill 等 AI 进阶概念的系统解读。",
    stack: ["大模型", "AI 编程", "测评"],
  },
  {
    label: "编程环境搭建教程 — C/C++ · Python · Java 全流程图文",
    href: "https://blog.csdn.net/qq_51646682/article/details/146221068",
    date: "2025",
    color: "blue",
    stamp: "classic",
    blurb:
      "从零到能跑的环境搭建图解：Visual Studio 2022、IDEA 2024、VSCode + C/C++、VSCode + Python，含 MinGW / JDK 配置、环境变量、运行测试与背景图设置。单篇破 19 万阅读，是许多人入门编程的第一站。",
    stack: ["C/C++", "Python", "Java", "IDE"],
  },
  {
    label: "实用软件与高效工具 — 《实用软件与高效工具》汇总",
    href: "https://blog.csdn.net/qq_51646682/article/details/137990337",
    date: "2024",
    color: "red",
    stamp: "trove",
    blurb:
      "持续更新的宝藏工具合集：Geek Uninstaller、Translucent TB、7-Zip、TrafficMonitor、WizTree、ShareX、Everything、uTools …… 亲测每一款，写明适用场景与上手要点，让你少踩坑、多省时间。",
    stack: ["软件安利", "Windows", "效率工具"],
  },
  {
    label: "AI 热点周报 — 跟踪大模型与 AI 行业动态",
    href: "https://blog.csdn.net/qq_51646682/article/details/151650942",
    date: "2025",
    color: "blue",
    stamp: "weekly",
    blurb:
      "每周一期，梳理 GPT-OSS、Realtime API、Grok 2.5 开源、Qwen3-Next 架构创新、Anthropic 模型性能波动等行业大事。从参数规模转向架构创新、成本优化和场景专用，帮你看清 AI 竞争的方向。",
    stack: ["AI 行业", "大模型", "周报"],
  },
  {
    label: "趣味 C 语言 — 从打印心形到超级玛丽",
    href: "https://blog.csdn.net/qq_51646682/article/details/121664115",
    date: "2021",
    color: "green",
    stamp: "fun",
    blurb:
      "把枯燥的语法变成有趣的产出：逐行分析如何用 C 输出心形图案、用 C/C++/Python 打印超级玛丽，再到杨辉三角形、栈的输出序列、scanf + EOF 的多组输入。让初学者在动手里记住知识点。",
    stack: ["C", "算法", "数据结构"],
  },
];

// The review date describes this curated index, never an article update time.
export const contentReviewedAt = "2026-09-08";

export type CategoryId = "ai" | "coding" | "computing" | "tools";

export const categories: { id: CategoryId; label: string }[] = [
  { id: "ai", label: "AI与应用" },
  { id: "coding", label: "编程学习" },
  { id: "computing", label: "计算机与人物" },
  { id: "tools", label: "效率工具" },
];

export type Article = {
  id: string;
  title: string;
  summary: string;
  // Preserve source precision: YYYY-MM or a verified YYYY-MM-DD.
  publishedAt: string;
  category: CategoryId;
  tags: string[];
  url: string;
  featuredReason?: string;
};

// Existing article URLs and month-level dates are retained from the original index.
// July/August 2026 additions: titles, publication dates and hrefs checked against
// the author's public CSDN homepage on 2026-09-08; summaries are editorial copy.
export const articles: Article[] = [
  {
    id: "163725927",
    title: "布兰登·艾克：10 天创造 JavaScript，却改变了整个 Web 世界",
    summary:
      "沿着布兰登·艾克与 JavaScript 的故事认识 Web 技术的发展，把熟悉的编程语言放回它诞生的时代。",
    publishedAt: "2026-08-13",
    category: "computing",
    tags: ["计算机名人堂", "JavaScript", "技术史"],
    url: "https://yueliusu.blog.csdn.net/article/details/163725927",
  },
  {
    id: "163716989",
    title: "格蕾丝·霍珀：她让计算机开始“听懂人话”，也让编程走向大众",
    summary:
      "从格蕾丝·霍珀的经历出发，认识编程语言走向易用的探索，了解今天的开发体验背后有哪些人的努力。",
    publishedAt: "2026-08-13",
    category: "computing",
    tags: ["计算机名人堂", "编程语言", "技术史"],
    url: "https://yueliusu.blog.csdn.net/article/details/163716989",
  },
  {
    id: "163699974",
    title: "Pot：免费开源的跨平台划词翻译和 OCR 工具",
    summary:
      "从阅读英文网页和识别图片文字的需求出发，介绍 Pot 的划词翻译、截图 OCR 与上手方法，减少来回切换。",
    publishedAt: "2026-08-12",
    category: "tools",
    tags: ["翻译", "OCR", "开源工具"],
    url: "https://yueliusu.blog.csdn.net/article/details/163699974",
  },
  {
    id: "163668605",
    title: "CopyQ：免费开源的剪贴板管理工具，快速找到复制内容",
    summary:
      "围绕找回复制内容这一日常问题，认识 CopyQ 剪贴板管理工具，了解如何让经常使用的文字更容易找到。",
    publishedAt: "2026-08-11",
    category: "tools",
    tags: ["剪贴板", "效率", "开源工具"],
    url: "https://yueliusu.blog.csdn.net/article/details/163668605",
  },
  {
    id: "163640495",
    title: "我用 Doubao-Seed-Evolving 做了一个每天可以刷的“AI 朋友圈” Agent",
    summary:
      "从每天获取 AI 信息的想法出发，记录使用 Seed Evolving 制作智能体的实践，看看模型如何参与具体应用开发。",
    publishedAt: "2026-08-11",
    category: "ai",
    tags: ["Agent", "豆包", "应用实践"],
    url: "https://yueliusu.blog.csdn.net/article/details/163640495",
  },
  {
    id: "163505183",
    title: "网易 UU 远程：支持 4K 画质的远程控制工具",
    summary:
      "围绕远程使用电脑的场景介绍网易 UU 远程，整理它的使用方向与体验，帮助读者了解远程控制工具。",
    publishedAt: "2026-08-05",
    category: "tools",
    tags: ["远程控制", "桌面工具"],
    url: "https://yueliusu.blog.csdn.net/article/details/163505183",
  },
  {
    id: "163495241",
    title: "LocalSend：免费开源的跨平台文件传输工具",
    summary:
      "从不同设备间传文件的需求出发，认识 LocalSend 的跨平台互传方式，为日常整理与分享文件提供一个选择。",
    publishedAt: "2026-08-05",
    category: "tools",
    tags: ["文件传输", "跨平台", "开源工具"],
    url: "https://yueliusu.blog.csdn.net/article/details/163495241",
  },
  {
    id: "163140907",
    title: "豆包 Evolving 实测：用 AI 做世界杯复盘",
    summary:
      "把世界杯复盘作为具体测试任务，记录豆包 Evolving 的实际表现，从应用过程认识持续迭代模型的特点。",
    publishedAt: "2026-07-23",
    category: "ai",
    tags: ["豆包", "模型测评", "应用实践"],
    url: "https://yueliusu.blog.csdn.net/article/details/163140907",
  },
  {
    id: "161323743",
    title: "DeepSeek V4 Pro 测评：不只是更强，而是更适合复杂任务",
    summary:
      "从长文写作、代码分析和方案设计等任务出发，记录 Pro 与 Flash 的表现差异，帮助读者按任务选择模型。",
    publishedAt: "2026-05",
    category: "ai",
    tags: ["DeepSeek", "模型测评"],
    url: "https://blog.csdn.net/qq_51646682/article/details/161323743",
  },
  {
    id: "161289758",
    title: "DeepSeek V4 Flash 测评：更快、更省，日常体验依旧很稳",
    summary:
      "把日常写作、内容总结和脚本编写放进实际测试，观察轻量模型在速度、表达和完成任务方面的表现。",
    publishedAt: "2026-05",
    category: "ai",
    tags: ["DeepSeek", "模型测评"],
    url: "https://blog.csdn.net/qq_51646682/article/details/161289758",
  },
  {
    id: "160721590",
    title: "一篇看懂 AI 进阶概念：MCP、Agent、Agent Skill",
    summary:
      "接着基础概念继续往前，梳理 MCP、Agent 与 Agent Skill 的分工，理解模型如何连接工具并完成任务。",
    publishedAt: "2026-05",
    category: "ai",
    tags: ["MCP", "Agent", "Agent Skill"],
    url: "https://blog.csdn.net/qq_51646682/article/details/160721590",
  },
  {
    id: "160721057",
    title: "一篇看懂现代 AI 的五大概念：LLM、Token、Context、Prompt、Tool",
    summary:
      "从 LLM、Token 到上下文、提示词与工具，串起日常使用 AI 会遇到的概念，为后续实践建立共同语言。",
    publishedAt: "2026-05",
    category: "ai",
    tags: ["AI 入门", "LLM", "Prompt"],
    url: "https://blog.csdn.net/qq_51646682/article/details/160721057",
    featuredReason: "先把常见术语串起来，再开始你的 AI 应用实践。",
  },
  {
    id: "155914263",
    title: "GPT-5.1 深度解析：更智能更自然，日常体验依旧出色",
    summary:
      "围绕 GPT-5.1 的能力变化与使用体验展开，结合写作、对话等任务，理解模型升级对实际使用的影响。",
    publishedAt: "2025-12",
    category: "ai",
    tags: ["GPT", "模型解析"],
    url: "https://blog.csdn.net/qq_51646682/article/details/155914263",
  },
  {
    id: "155879672",
    title: "Gemini 3 Pro 深度解析：当 Google 真正学会 Deep Think",
    summary:
      "结合多种应用场景观察 Gemini 3 Pro，梳理推理与综合任务表现，为理解模型特点提供阅读入口。",
    publishedAt: "2025-12",
    category: "ai",
    tags: ["Gemini", "模型解析"],
    url: "https://blog.csdn.net/qq_51646682/article/details/155879672",
  },
  {
    id: "155143300",
    title: "Doubao-Seed-Code 测评：强大的视觉编程模型",
    summary:
      "围绕设计稿转代码这一具体场景，记录视觉编程模型的使用过程，观察它怎样理解页面并生成实现。",
    publishedAt: "2025-11",
    category: "ai",
    tags: ["豆包", "AI 编程", "视觉理解"],
    url: "https://blog.csdn.net/qq_51646682/article/details/155143300",
  },
  {
    id: "152041234",
    title: "Qwen3-Max 深度解析：阿里最强 AI 大模型全面升级",
    summary:
      "从模型能力与使用场景介绍 Qwen3-Max，梳理这一代通义千问的变化，帮助读者理解它的应用方向。",
    publishedAt: "2025-09",
    category: "ai",
    tags: ["Qwen", "模型解析"],
    url: "https://blog.csdn.net/qq_51646682/article/details/152041234",
  },
  {
    id: "152003836",
    title: "DeepSeek-V3.1-Terminus 深度解析",
    summary:
      "梳理 DeepSeek-V3.1-Terminus 在语言一致性和 Agent 能力上的调整，结合已有版本理解升级重点。",
    publishedAt: "2025-09",
    category: "ai",
    tags: ["DeepSeek", "Agent", "模型解析"],
    url: "https://blog.csdn.net/qq_51646682/article/details/152003836",
  },
  {
    id: "151805825",
    title: "Seedream 4.0：对标 Nano Banana，4K 出图玩法多样",
    summary:
      "围绕图像生成与编辑场景了解 Seedream 4.0，整理出图玩法和使用思路，适合对 AI 视觉创作感兴趣的读者。",
    publishedAt: "2025-09",
    category: "ai",
    tags: ["Seedream", "AI 图像"],
    url: "https://blog.csdn.net/qq_51646682/article/details/151805825",
  },
  {
    id: "151898129",
    title: "Gemini in Chrome 深度解析：开启 AI 智能浏览时代",
    summary:
      "了解 Gemini 与 Chrome 的结合方式，从浏览网页的日常任务出发，观察 AI 如何进入浏览器使用流程。",
    publishedAt: "2025-09",
    category: "ai",
    tags: ["Gemini", "浏览器"],
    url: "https://blog.csdn.net/qq_51646682/article/details/151898129",
  },
  {
    id: "151894701",
    title: "AI 热点周报（09.14~09.20）",
    summary:
      "回顾当周浏览器集成、模型记忆与新架构落地等动态，把分散消息放在一起，观察 AI 应用的发展线索。",
    publishedAt: "2025-09",
    category: "ai",
    tags: ["AI 周报", "Gemini", "Claude"],
    url: "https://blog.csdn.net/qq_51646682/article/details/151894701",
  },
  {
    id: "151874264",
    title: "Qwen3-Next 深度解析：3% 参数如何超越全参数模型",
    summary:
      "从激活参数与模型架构切入 Qwen3-Next，梳理效率设计背后的思路，帮助读者理解参数之外的能力变化。",
    publishedAt: "2025-09",
    category: "ai",
    tags: ["Qwen", "模型架构"],
    url: "https://blog.csdn.net/qq_51646682/article/details/151874264",
  },
  {
    id: "151251792",
    title: "AI 热点周报（8.31~9.6）",
    summary:
      "整理 Qwen3-Max-Preview、GLM 迁移支持与家庭 AI 等当周信息，连接模型发布与具体产品场景。",
    publishedAt: "2025-09",
    category: "ai",
    tags: ["AI 周报", "Qwen", "GLM"],
    url: "https://blog.csdn.net/qq_51646682/article/details/151251792",
  },
  {
    id: "151650942",
    title: "AI 热点周报（9.7~9.13）",
    summary:
      "整理 Qwen3-Next 发布、Claude 记忆能力与服务变化等动态，结合模型规范化进展回顾这一周的 AI 行业。",
    publishedAt: "2025-09",
    category: "ai",
    tags: ["AI 周报", "Qwen", "Claude"],
    url: "https://blog.csdn.net/qq_51646682/article/details/151650942",
  },
  {
    id: "151046642",
    title: "AI 热点周报（8.24~8.30）",
    summary:
      "回顾 Grok 开源、Realtime API 与行业合作动态，为跟踪 AI 发展的读者保留一份当周事件索引。",
    publishedAt: "2025-08",
    category: "ai",
    tags: ["AI 周报", "开源模型"],
    url: "https://blog.csdn.net/qq_51646682/article/details/151046642",
  },
  {
    id: "150698017",
    title: "Coze Studio 深度解析：字节开源，AI Agent 开发进入全民时代",
    summary:
      "了解 Coze Studio 的开源背景与智能体搭建方式，从工作流和应用开发视角梳理它能解决的问题。",
    publishedAt: "2025-08",
    category: "ai",
    tags: ["Coze", "Agent", "开源"],
    url: "https://blog.csdn.net/qq_51646682/article/details/150698017",
  },
  {
    id: "150646029",
    title: "AI 热点周报（8.17~8.23）",
    summary:
      "串起 Pixel 10、DeepSeek V3.1 与算力行业的当周动态，观察模型、终端与基础设施之间的联系。",
    publishedAt: "2025-08",
    category: "ai",
    tags: ["AI 周报", "DeepSeek"],
    url: "https://blog.csdn.net/qq_51646682/article/details/150646029",
  },
  {
    id: "150636193",
    title: "DeepSeek V3.1 深度解析：一个模型两种思维，迈向 Agent 时代",
    summary:
      "围绕混合推理与 Agent 场景介绍 DeepSeek V3.1，梳理模型的工作方式及这一轮版本变化。",
    publishedAt: "2025-08",
    category: "ai",
    tags: ["DeepSeek", "模型架构"],
    url: "https://blog.csdn.net/qq_51646682/article/details/150636193",
  },
  {
    id: "150447179",
    title: "AI 热点周报（8.10~8.16）",
    summary:
      "回顾 GPT-5 发布后的讨论、开源模型与算力竞争，为读者整理当周值得继续关注的事件和问题。",
    publishedAt: "2025-08",
    category: "ai",
    tags: ["AI 周报", "GPT", "行业动态"],
    url: "https://blog.csdn.net/qq_51646682/article/details/150447179",
  },
  {
    id: "149686820",
    title: "Qwen3-Coder 深度解析：实测惊艳的开源编程助手",
    summary:
      "从编程助手的实际使用出发，记录 Qwen3-Coder 的任务表现，了解开源模型参与开发工作的方式。",
    publishedAt: "2025-07",
    category: "ai",
    tags: ["Qwen", "AI 编程", "开源"],
    url: "https://blog.csdn.net/qq_51646682/article/details/149686820",
  },
  {
    id: "149005690",
    title: "Gemini CLI 震撼发布：开源免费的 AI 编程助手",
    summary:
      "介绍 Gemini CLI 的使用入口和命令行交互方式，帮助开发者了解如何把 AI 助手放进自己的工作流程。",
    publishedAt: "2025-06",
    category: "ai",
    tags: ["Gemini", "命令行", "AI 编程"],
    url: "https://blog.csdn.net/qq_51646682/article/details/149005690",
  },
  {
    id: "148171675",
    title: "Claude 4 深度解析：全球最强编程模型来了？",
    summary:
      "围绕 Claude 4 的编程与长任务能力展开，结合使用场景了解模型特点，建立进一步实测的观察角度。",
    publishedAt: "2025-05",
    category: "ai",
    tags: ["Claude", "AI 编程", "模型解析"],
    url: "https://blog.csdn.net/qq_51646682/article/details/148171675",
  },
  {
    id: "148308917",
    title: "Chalk.ist：程序员代码截图神器",
    summary:
      "介绍 Chalk.ist 的代码截图用途与上手方式，把代码片段整理为便于分享的图片，适合写教程和展示项目。",
    publishedAt: "2025-05",
    category: "tools",
    tags: ["代码截图", "写作工具"],
    url: "https://blog.csdn.net/qq_51646682/article/details/148308917",
  },
  {
    id: "148130612",
    title: "Lucide：一款精美的开源矢量图标库",
    summary:
      "认识 Lucide 图标库的风格与使用场景，为界面设计和前端开发寻找统一的图标素材，减少重复整理。",
    publishedAt: "2025-05",
    category: "tools",
    tags: ["Lucide", "图标", "前端"],
    url: "https://blog.csdn.net/qq_51646682/article/details/148130612",
  },
  {
    id: "146221068",
    title: "VSCode 搭建 C/C++ 编程环境 2025 新版图文安装教程",
    summary:
      "从 VSCode 与 MinGW-w64 安装开始，依次完成环境变量、编译工具链配置及运行测试，搭建 C/C++ 学习环境。",
    publishedAt: "2025-03",
    category: "coding",
    tags: ["C/C++", "VSCode", "环境搭建"],
    url: "https://blog.csdn.net/qq_51646682/article/details/146221068",
  },
  {
    id: "144577810",
    title: "VSCode 搭建 Python 编程环境 2024 新版图文安装教程",
    summary:
      "按 Python 安装、VSCode 配置到运行测试的顺序搭建开发环境，配合图文完成第一次代码运行。",
    publishedAt: "2024-12",
    category: "coding",
    tags: ["Python", "VSCode", "环境搭建"],
    url: "https://blog.csdn.net/qq_51646682/article/details/144577810",
    featuredReason: "适合想动手写 Python、还没配好环境的你。",
  },
  {
    id: "139883176",
    title: "《硬件视界1》什么是 N 卡和 A 卡？区别是什么？",
    summary:
      "从常见的 N 卡与 A 卡称呼入手，了解显卡厂商、产品差异和相关概念，作为认识计算机硬件的第一站。",
    publishedAt: "2024-06",
    category: "computing",
    tags: ["硬件视界", "GPU", "计算机科普"],
    url: "https://blog.csdn.net/qq_51646682/article/details/139883176",
    featuredReason: "从熟悉的显卡问题，走进计算机硬件的工作世界。",
  },
  {
    id: "137990337",
    title: "《实用软件与高效工具》汇总",
    summary:
      "按实际使用需求汇集软件、插件与 AI 工具，作为工具文章的总入口，方便从日常问题找到后续阅读方向。",
    publishedAt: "2024-04",
    category: "tools",
    tags: ["工具合集", "Windows", "效率"],
    url: "https://blog.csdn.net/qq_51646682/article/details/137990337",
  },
  {
    id: "135349076",
    title: "IDEA2024 最新版详细图文安装教程",
    summary:
      "从 Java 环境到 IDEA 安装和运行测试，按步骤搭好学习工具，并整理汉化与界面设置的操作方法。",
    publishedAt: "2024-01",
    category: "coding",
    tags: ["Java", "IDEA", "环境搭建"],
    url: "https://blog.csdn.net/qq_51646682/article/details/135349076",
  },
  {
    id: "122332082",
    title: "Visual Studio 2022 最新版安装教程（数千字图文详解）",
    summary:
      "通过图文步骤完成 Visual Studio 2022 安装与程序运行，了解开发环境配置以及背景图等个性设置。",
    publishedAt: "2022-01",
    category: "coding",
    tags: ["C/C++", "Visual Studio", "环境搭建"],
    url: "https://blog.csdn.net/qq_51646682/article/details/122332082",
  },
  // Original title/date matched in category_11512879.html on 2026-09-08.
  {
    id: "121664115",
    title: "趣味 C 语言 01：逐行分析如何输出心形图案",
    summary:
      "用一个能看见结果的小练习走近 C 语言，逐行理解心形图案的输出过程，在动手中练习循环与图形规律。",
    publishedAt: "2021-12",
    category: "coding",
    tags: ["C/C++", "趣味编程", "入门练习"],
    url: "https://blog.csdn.net/qq_51646682/article/details/121664115",
  },
];

export type Topic = {
  id: CategoryId;
  title: string;
  description: string;
  audience: string;
  articleIds: string[];
  columns: { title: string; url: string }[];
};

// Ordered reading suggestions, followed by the author's original CSDN columns.
// Column URLs verified from https://blog.csdn.net/qq_51646682 on 2026-09-08.
export const topics: Topic[] = [
  {
    id: "ai",
    title: "AI与应用",
    description: "先理解模型与工具，再跟着具体场景动手，把概念变成能用的应用。",
    audience: "想弄懂 AI、开始做应用的你",
    articleIds: ["160721057", "160721590", "150698017", "163640495"],
    columns: [
      {
        title: "AI知识图谱",
        url: "https://blog.csdn.net/qq_51646682/category_12867340.html",
      },
      {
        title: "Coze实战教程",
        url: "https://blog.csdn.net/qq_51646682/category_12978953.html",
      },
    ],
  },
  {
    id: "coding",
    title: "编程学习",
    description:
      "从配好开发环境、运行第一段代码开始，选择适合自己的语言继续练习。",
    audience: "刚开始学编程，或准备换一门语言的你",
    articleIds: ["144577810", "146221068", "121664115", "135349076"],
    columns: [
      {
        title: "Python星球日记",
        url: "https://blog.csdn.net/qq_51646682/category_12934146.html",
      },
      {
        title: "C/C++语言入门学习",
        url: "https://blog.csdn.net/qq_51646682/category_11434021.html",
      },
    ],
  },
  {
    id: "computing",
    title: "计算机与人物",
    description:
      "一边拆解硬件原理，一边认识技术背后的人，沿着问题与故事理解计算机。",
    audience: "对计算机原理和技术史好奇的你",
    articleIds: ["139883176", "163716989", "163725927"],
    columns: [
      {
        title: "硬件视界",
        url: "https://blog.csdn.net/qq_51646682/category_12713339.html",
      },
      {
        title: "计算机名人堂",
        url: "https://blog.csdn.net/qq_51646682/category_12938516.html",
      },
    ],
  },
  {
    id: "tools",
    title: "效率工具",
    description:
      "从日常的小麻烦出发，找一件顺手的工具，再看看它如何融入自己的工作。",
    audience: "想少做重复操作、多留一点时间的你",
    articleIds: ["137990337", "163699974", "163668605", "163495241"],
    columns: [
      {
        title: "实用软件与高效工具",
        url: "https://blog.csdn.net/qq_51646682/category_11507118.html",
      },
    ],
  },
];

// Compatibility for older presentation components; new views use articles.
export const artifacts: Entry[] = articles.map((article) => ({
  label: article.title,
  date: article.publishedAt.replaceAll("-", "."),
  href: article.url,
}));

// `heart: true` marks a "support me" link (rendered with a hand-drawn heart) so
// it reads as a CTA rather than just another profile link.
// `qrcode` provides an existing image for the accessible contact dialog.
export type Link = {
  label: string;
  href: string;
  heart?: boolean;
  qrcode?: string;
};

export const links: Link[] = [
  { label: "CSDN 博客", href: "https://blog.csdn.net/qq_51646682" },
  { label: "GitHub", href: "https://github.com/yueliusu" },
  { label: "知乎", href: "https://www.zhihu.com/people/jun-zhi-10-52-38" },
  { label: "邮箱", href: "mailto:shachangjunmoxiao@gmail.com" },
  {
    label: "公众号",
    href: "#",
    qrcode: "/gzh_QRcode.jpg",
  },
  {
    label: "关于 & 商务合作",
    href: "https://blog.csdn.net/qq_51646682/article/details/147541436",
  },
  {
    label: "粉丝社群",
    href: "https://bbs.csdn.net/topics/619710422",
    heart: true,
  },
];
