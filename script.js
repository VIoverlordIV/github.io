// 多语言
const translations = {
  ja: {
    "nav-logo": "PORTFOLIO / 趙 鋭",
    "nav-about": "自己紹介",
    "nav-skills": "スキル",
    "nav-projects": "プロジェクト",
    "nav-history": "経歴",
    "nav-contact": "お問い合わせ",

    "resume-label": "📄 履歴書：",
    "resume-download": "PDFをダウンロード",

    "hero-label": "2026年度新卒 エンジニア志望",
    "hero-name": "趙 鋭（チョウ エイ）",
    "hero-sub":
      "日本電子専門学校 モバイルアプリケーション開発科 在籍 / モバイルアプリ・Web開発を学習中",
    "hero-text":
      "ゲームやWebサービスの仕組みに興味があり、課題や個人制作を通して手を動かしながら学んでいます。日本でエンジニアとして働き、使う人にとって素直に使いやすいサービスを作ることを目指しています。",
    "btn-projects": "▶ プロジェクトを見る",
    "btn-github": "GitHub プロフィール",
    "tag-web": "Webフロント",
    "tag-uiux": "UI/UX",
    "tag-team": "チーム開発",

    "about-title": "自己紹介",
    "about-main":
      "中国出身。現在は日本電子専門学校モバイルアプリケーション開発科で、iOS／AndroidアプリやWeb制作の基礎を学んでいます。ゲームやWebサービスの動きに興味を持ち、自分で簡単なアプリやサイトを作りながら少しずつ理解を深めてきました。将来は、日本でエンジニアとして身近に役立つプロダクトに関わりたいと考えています。",
    "about-strength":
      "強み：分からないことを自分で調べて試す姿勢 ／ 小さなところまできちんと確認する丁寧さ ／ 相手の立場を意識して画面や仕様を考えること。",

    "skills-title": "スキルセット",
    "skills-lang-title": "言語・フレームワーク",
    "skills-tools-title": "開発経験・ツール",
    "skills-team": "チーム開発演習",
    "skills-uiux": "UI/UX デザイン基礎",

    "projects-title": "プロジェクト（一部）",

    // P1: 絵描きサイト
    "p1-title": "絵描きサイト（描画アプリ）",
    "p1-meta": "Web / 個人制作",
    "p1-text":
      "ブラシや図形ツールを使って自由に描けるシンプルなウェブアプリ。多言語対応やカラーピッカー、保存機能も実装しています。",

    // P2: ポケモン図鑑アプリ
    "p2-title": "ポケモン図鑑アプリ",
    "p2-meta": "iOS / 個人制作 / SwiftUI",
    "p2-text":
      "『ポケットモンスター スカーレット・バイオレット』の「バイオレット」をテーマカラーにした図鑑検索アプリ。ポケモンの名前やタイプで検索でき、紫を基調としたUIで世界観と見やすさの両立を意識してデザインしました。",

    // P3: フォトマップアプリ
    "p3-title": "フォトマップアプリ",
    "p3-meta": "iOS / 個人制作 / SwiftUI",
    "p3-text":
      "撮影した写真やメモを地図上のピンに紐づけて管理できるアプリ。「どこで・どんな思い出だったか」を地図と一緒に振り返ることができます。位置情報・写真・コメントを組み合わせ、「あとで見返しやすく、人にも共有しやすい」UIを意識して設計しました。",

    // P4: ジャンケンアプリ（Android）
    "p4-title": "ジャンケンアプリ（Android）",
    "p4-meta": "Android / 個人制作 / Kotlin",
    "p4-text":
      "Android Studioで開発したジャンケンゲームアプリ。シンプルなルールに加え、アニメキャラクターを導入し、勝敗に応じて「喜・怒・哀」の表情が変化します。GIFアニメーションをAndroid上で自然に動かす実装に挑戦し、ライブラリ選定やパフォーマンス調整に工夫しました。",
    "p4-tag1": "Android",
    "p4-tag2": "GIFアニメーション",

    "history-title": "学びと経験",
    "history-1-title": "2024–2026 日本電子専門学校",
    "history-1-text":
      "モバイルアプリケーション開発科にて、iOS／Android開発、Web基礎、チーム開発などを学習。",
    "history-2-title": "2024–現在 個人制作",
    "history-2-text":
      "授業外でもアプリやWebページを制作し、GitHubでコード管理と振り返りを行っています。",

    "contact-title": "Contact",
    "contact-message-title": "採用ご担当者様へ",
    "contact-message-body":
      "こちらのメールアドレスまたはGitHub経由でご連絡いただけますと幸いです。"
  },

  zh: {
    "nav-logo": "作品集 / 赵锐",
    "nav-about": "关于我",
    "nav-skills": "技能",
    "nav-projects": "项目",
    "nav-history": "经历",
    "nav-contact": "联系方式",

    "resume-label": "📄 简历：",
    "resume-download": "下载 PDF",

    "hero-label": "2026 届・求职中的工程师",
    "hero-name": "赵 锐（チョウ エイ）",
    "hero-sub": "日本电子专门学校・移动应用开发科在读",
    "hero-text":
      "通过课程和自学，一边做小项目一边学习游戏和网站的运作方式。希望今后能在日本作为工程师工作，做出对用户来说自然、好用、不添负担的服务。",
    "btn-projects": "▶ 查看项目",
    "btn-github": "GitHub 主页",
    "tag-web": "前端开发",
    "tag-uiux": "UI/UX",
    "tag-team": "团队开发",

    "about-title": "自我介绍",
    "about-main":
      "来自中国，目前就读于日本电子专门学校移动应用开发科，学习 iOS/Android 应用以及 Web 开发基础。平时会尝试做一些小工具和网页，在实际动手中理解开发流程。今后希望能在日本从事开发工作，参与制作贴近用户、实用可靠的产品。",
    "about-strength":
      "优势：遇到不懂的内容会主动查资料和尝试；做事细心，注意界面和体验的细节；会从用户和企业双方视角思考需求。",

    "skills-title": "技能",
    "skills-lang-title": "语言・框架",
    "skills-tools-title": "经验・工具",
    "skills-team": "团队开发演习",
    "skills-uiux": "UI/UX 基础",

    "projects-title": "项目示例",

    // P1: 绘画网站
    "p1-title": "绘画网站（画图应用）",
    "p1-meta": "Web / 个人制作",
    "p1-text":
      "使用画笔和图形工具在浏览器中自由绘制的简单 Web 应用，支持多语言、颜色选择和保存功能。",

    // P2: 宝可梦图鉴
    "p2-title": "宝可梦图鉴 App",
    "p2-meta": "iOS / 个人制作 / SwiftUI",
    "p2-text":
      "以《宝可梦 朱/紫》中“紫”的配色为主题的图鉴搜索应用。可以按名字和属性搜索宝可梦，同时在 UI 上兼顾系列世界观与信息可读性。",

    // P3: 照片地图
    "p3-title": "Photo Map 照片地图 App",
    "p3-meta": "iOS / 个人制作 / SwiftUI",
    "p3-text":
      "将拍摄的照片与备注绑定到地图上的 Pin，方便按地点回顾回忆。通过整合位置信息、照片与评论，追求“方便日后回看、也便于与他人分享”的界面设计。",

    // P4: 剪刀石头布（Android）
    "p4-title": "剪刀石头布 App（Android）",
    "p4-meta": "Android / 个人制作 / Kotlin",
    "p4-text":
      "在 Android Studio 开发的剪刀石头布小游戏。规则简单，但加入动漫角色，根据胜负切换“喜怒哀”等表情提升趣味性。为实现 GIF 在 Android 中顺畅播放，尝试并调整了相关库和实现方式。",
    "p4-tag1": "Android",
    "p4-tag2": "GIF 动画",

    "history-title": "学习与经历",
    "history-1-title": "2024–2026 日本电子专门学校",
    "history-1-text":
      "系统学习移动应用开发、Web 基础以及团队协作开发流程。",
    "history-2-title": "2024–至今 个人项目",
    "history-2-text":
      "在课堂之外持续制作小应用和网页，并使用 GitHub 进行代码管理和回顾。",

    "contact-title": "联系方式",
    "contact-message-title": "致招聘负责人：",
    "contact-message-body":
      "如对我感兴趣，欢迎通过邮件或 GitHub 与我联系。"
  },

  en: {
    "nav-logo": "PORTFOLIO / ZHAO RUI",
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-history": "History",
    "nav-contact": "Contact",

    "resume-label": "📄 Resume:",
    "resume-download": "Download PDF",

    "hero-label": "Aspiring Engineer / Class of 2026",
    "hero-name": "Zhao Rui (Cho Ei)",
    "hero-sub":
      "Nihon Electronics College – Mobile Application Development",
    "hero-text":
      "I learn by building small apps and websites and gradually understanding how they work. My goal is to work in Japan as an engineer and create services that feel simple, reliable, and comfortable to use.",
    "btn-projects": "▶ View Projects",
    "btn-github": "GitHub Profile",
    "tag-web": "Web Frontend",
    "tag-uiux": "UI/UX",
    "tag-team": "Team Dev",

    "about-title": "About Me",
    "about-main":
      "I am from China and currently studying Mobile Application Development at Nihon Electronics College, focusing on iOS/Android and web fundamentals. I like to experiment with small projects to understand real workflows. In the future, I hope to work in Japan and contribute to practical, user-friendly products.",
    "about-strength":
      "Strengths: proactive in researching and trying solutions, careful with details, and able to consider both user and client perspectives when designing UI and specs.",

    "skills-title": "Skill Set",
    "skills-lang-title": "Languages & Frameworks",
    "skills-tools-title": "Experience & Tools",
    "skills-team": "Team Development Exercises",
    "skills-uiux": "Basic UI/UX Design",

    "projects-title": "Selected Projects",

    // P1: Drawing app
    "p1-title": "Drawing Web App",
    "p1-meta": "Web / Solo",
    "p1-text":
      "A simple browser-based drawing tool with brushes and shapes. Includes multi-language support, color picker, and save functionality.",

    // P2: Pokemon Dex
    "p2-title": "Pokémon Dex App",
    "p2-meta": "iOS / Solo / SwiftUI",
    "p2-text":
      "A Pokédex-style search app themed around Pokémon Violet. Users can search by name or type. The purple UI is designed to match the game's world while keeping information easy to read.",

    // P3: Photo Map
    "p3-title": "Photo Map App",
    "p3-meta": "iOS / Solo / SwiftUI",
    "p3-text":
      "An app that links photos and notes to pins on a map so users can revisit where memories were made. Combines location, photos, and comments with a UI focused on easy review and sharing.",

    // P4: Janken Android
    "p4-title": "Janken Game (Android)",
    "p4-meta": "Android / Solo / Kotlin",
    "p4-text":
      "A rock-paper-scissors game built with Android Studio. The rules are simple, but an anime-style character reacts with different emotions (joy, anger, sadness) depending on the result. A key challenge was playing GIF animations smoothly on Android, solved by choosing suitable libraries and tuning performance.",
    "p4-tag1": "Android",
    "p4-tag2": "GIF Animation",

    "history-title": "Education & Experience",
    "history-1-title": "2024–2026 Nihon Electronics College",
    "history-1-text":
      "Studying mobile app development (iOS/Android), web basics, and team development.",
    "history-2-title": "2024–Present Personal Projects",
    "history-2-text":
      "Building small apps and websites outside class and managing code on GitHub as ongoing practice.",

    "contact-title": "Contact",
    "contact-message-title": "To Recruiters",
    "contact-message-body":
      "Please feel free to contact me via email or GitHub."
  }
};

// 应用语言
function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.documentElement.lang =
    lang === "zh" ? "zh-CN" : lang === "en" ? "en" : "ja";

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage("ja");

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.dataset.lang);
    });
  });
});