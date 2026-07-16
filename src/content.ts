// All page copy lives here so it's easy to edit without touching layout.

export const intro = {
  name: "Code_流苏",
  initial: "C", // used for the corner script monogram
  lines: [
    "Hi, I'm Code_流苏 — a tech writer based in China, writing on CSDN since the autumn of 2021.",
    "A full-time builder of AI apps and writing about C/C++ & Python, computer fundamentals, and tool推荐 — the kind that actually saves you hours.",
    "Off the keyboard I'm tracking AI模型深度解析, or hosting my 粉丝社群 — talking tech with anyone who'll listen.",
  ],
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
  { label: "CSDN 原创技术博主（AI 应用 · 编程教程 · 计算机科普）", date: "2021–至今" },
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

export const artifacts: Entry[] = [
  {
    label: "DeepSeek V4 Pro 测评：不只是更强，而是更适合复杂任务",
    date: "2026.05",
    href: "https://blog.csdn.net/qq_51646682/article/details/161323743",
  },
  {
    label: "DeepSeek V4 Flash 测评：更快、更省，日常体验依旧很稳",
    date: "2026.05",
    href: "https://blog.csdn.net/qq_51646682/article/details/161289758",
  },
  {
    label: "一篇看懂 AI 进阶概念：MCP、Agent、Agent Skill",
    date: "2026.05",
    href: "https://blog.csdn.net/qq_51646682/article/details/160721590",
  },
  {
    label: "一篇看懂现代 AI 的五大概念：LLM、Token、Context、Prompt、Tool",
    date: "2026.05",
    href: "https://blog.csdn.net/qq_51646682/article/details/160721057",
  },
  {
    label: "GPT-5.1 深度解析：更智能更自然，日常体验依旧出色",
    date: "2025.12",
    href: "https://blog.csdn.net/qq_51646682/article/details/155914263",
  },
  {
    label: "Gemini 3 Pro 深度解析：当 Google 真正学会 Deep Think",
    date: "2025.12",
    href: "https://blog.csdn.net/qq_51646682/article/details/155879672",
  },
  {
    label: "Doubao-Seed-Code 测评：强大的视觉编程模型",
    date: "2025.11",
    href: "https://blog.csdn.net/qq_51646682/article/details/155143300",
  },
  {
    label: "Qwen3-Max 深度解析：阿里最强 AI 大模型全面升级",
    date: "2025.09",
    href: "https://blog.csdn.net/qq_51646682/article/details/152041234",
  },
  {
    label: "DeepSeek-V3.1-Terminus 深度解析",
    date: "2025.09",
    href: "https://blog.csdn.net/qq_51646682/article/details/152003836",
  },
  {
    label: "Seedream 4.0：对标 Nano Banana，4K 出图玩法多样",
    date: "2025.09",
    href: "https://blog.csdn.net/qq_51646682/article/details/151805825",
  },
  {
    label: "Gemini in Chrome 深度解析：开启 AI 智能浏览时代",
    date: "2025.09",
    href: "https://blog.csdn.net/qq_51646682/article/details/151898129",
  },
  {
    label: "AI 热点周报（09.14~09.20）",
    date: "2025.09",
    href: "https://blog.csdn.net/qq_51646682/article/details/151894701",
  },
  {
    label: "Qwen3-Next 深度解析：3% 参数如何超越全参数模型",
    date: "2025.09",
    href: "https://blog.csdn.net/qq_51646682/article/details/151874264",
  },
  {
    label: "AI 热点周报（8.31~9.6）",
    date: "2025.09",
    href: "https://blog.csdn.net/qq_51646682/article/details/151251792",
  },
  {
    label: "AI 热点周报（8.24~8.30）",
    date: "2025.08",
    href: "https://blog.csdn.net/qq_51646682/article/details/151046642",
  },
  {
    label: "Coze Studio 深度解析：字节开源，AI Agent 开发进入全民时代",
    date: "2025.08",
    href: "https://blog.csdn.net/qq_51646682/article/details/150698017",
  },
  {
    label: "AI 热点周报（8.17~8.23）",
    date: "2025.08",
    href: "https://blog.csdn.net/qq_51646682/article/details/150646029",
  },
  {
    label: "DeepSeek V3.1 深度解析：一个模型两种思维，迈向 Agent 时代",
    date: "2025.08",
    href: "https://blog.csdn.net/qq_51646682/article/details/150636193",
  },
  {
    label: "AI 热点周报（8.10~8.16）",
    date: "2025.08",
    href: "https://blog.csdn.net/qq_51646682/article/details/150447179",
  },
  {
    label: "Qwen3-Coder 深度解析：实测惊艳的开源编程助手",
    date: "2025.07",
    href: "https://blog.csdn.net/qq_51646682/article/details/149686820",
  },
  {
    label: "Gemini CLI 震撼发布：开源免费的 AI 编程助手",
    date: "2025.06",
    href: "https://blog.csdn.net/qq_51646682/article/details/149005690",
  },
  {
    label: "Claude 4 深度解析：全球最强编程模型来了？",
    date: "2025.05",
    href: "https://blog.csdn.net/qq_51646682/article/details/148171675",
  },
  {
    label: "Chalk.ist：程序员代码截图神器",
    date: "2025.05",
    href: "https://blog.csdn.net/qq_51646682/article/details/148308917",
  },
  {
    label: "Lucide：一款精美的开源矢量图标库",
    date: "2025.05",
    href: "https://blog.csdn.net/qq_51646682/article/details/148130612",
  },
  {
    label: "VSCode 搭建 Python 编程环境 2024 新版图文安装教程",
    date: "2024.12",
    href: "https://blog.csdn.net/qq_51646682/article/details/144577810",
  },
  {
    label: "《硬件视界1》什么是 N 卡和 A 卡？区别是什么？",
    date: "2024.06",
    href: "https://blog.csdn.net/qq_51646682/article/details/139883176",
  },
  {
    label: "IDEA2024 最新版详细图文安装教程",
    date: "2024.01",
    href: "https://blog.csdn.net/qq_51646682/article/details/135349076",
  },
  {
    label: "Visual Studio 2022 最新版安装教程（数千字图文详解）",
    date: "2022.01",
    href: "https://blog.csdn.net/qq_51646682/article/details/122332082",
  },
];

// `heart: true` marks a "support me" link (rendered with a hand-drawn heart) so
// it reads as a CTA rather than just another profile link.
// `qrcode: true` flags a link whose details live offline — hovering it pops a
// little pinned note with the QR image (e.g. 公众号), rather than navigating.
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
  { label: "关于 & 商务合作", href: "https://blog.csdn.net/qq_51646682/article/details/147541436" },
  { label: "粉丝社群", href: "https://bbs.csdn.net/topics/619710422", heart: true },
];