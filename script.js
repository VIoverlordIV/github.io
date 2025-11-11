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
    "p1-title": "RecomMap（仮）",
    "p1-meta": "Android / 個人制作",
    "p1-text":
      "Google Maps と連携し、お気に入りスポットを登録・分類・検索できるシンプルなアプリ。Room データベースで保存し、カテゴリと位置情報で絞り込みが可能です。",
    "p2-title": "FunnyCamera（仮）",
    "p2-meta": "iOS / チーム開発（3名） / 自分：機能実装・UI調整担当",
    "p2-text":
      "写真にスタンプやフィルターを追加できるカメラアプリ。SwiftUI と CoreImage を使い、分かりやすいUIになるよう調整を担当しました。",
    "p3-title": "Web ポートフォリオサイト",
    "p3-meta": "個人制作 / このページ",
    "p3-text":
      "GitHub Pages 上で公開しているポートフォリオサイト。新卒採用のご担当者様が情報を確認しやすい構成を意識して作成しました。",
    "p4-title": "「ひとりじゃない」メンタルサポートApp（企画）",
    "p4-meta": "企画・UI案 / 個人",
    "p4-text":
      "匿名で相談できるチャット型アプリの企画。重くなりすぎないUIや、利用者が安心しやすい導線を意識して画面構成を考えました。",
    "p4-tag1": "企画",
    "p4-tag2": "ユーザー視点",

    "history-title": "学びと経験",
    "history-1-title": "2024–2026 日本電子専門学校",
    "history-1-text":
      "モバイルアプリケーション開発科にて、iOS／Android開発、Web基礎、チーム開発などを学習。",
    "history-2-title": "2024–現在 個人制作",
    "history-2-text":
      "授業外でも簡単なアプリやWebページを作成し、GitHubでコード管理と振り返りを行っています。",

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

    "resume-label": "📄 履历书：",
    "resume-download": "下载 PDF",

    "hero-label": "2026 届・求职中工程师",
    "hero-name": "赵 锐（チョウ エイ）",
    "hero-sub":
      "日本电子专门学校・移动应用开发科在读",
    "hero-text":
      "通过课程和自学，我一边做小项目一边学习游戏和网站是如何运作的。希望今后能在日本作为工程师工作，做出对使用者来说简单、顺手、不会增加负担的服务。",
    "btn-projects": "▶ 查看项目",
    "btn-github": "GitHub 主页",
    "tag-web": "前端开发",
    "tag-uiux": "UI/UX",
    "tag-team": "团队开发",

    "about-title": "自我介绍",
    "about-main":
      "来自中国，目前就读于日本电子专门学校移动应用开发科，学习 iOS/Android 应用以及 Web 开发基础。平时会尝试做一些小工具和网页，在实际动手中理解开发流程。今后希望能在日本从事开发工作，参与制作贴近用户、实用可靠的产品。",
    "about-strength":
      "优势：遇到不懂的内容会主动查资料和尝试；做事比较细心，注意到界面和体验的小地方；会站在使用者和企业双方角度来考虑需求。",

    "skills-title": "技能",
    "skills-lang-title": "语言・框架",
    "skills-tools-title": "经验・工具",
    "skills-team": "团队开发演习",
    "skills-uiux": "UI/UX 基础",

    "projects-title": "项目示例",
    "p1-title": "RecomMap（暂定）",
    "p1-meta": "Android / 个人开发",
    "p1-text":
      "与 Google Maps 联动，用于记录和分类喜欢的地点，并通过类别和位置进行筛选查询，练习数据库与地图 API 的结合。",
    "p2-title": "FunnyCamera（暂定）",
    "p2-meta": "iOS / 3人团队 / 负责功能与界面调整",
    "p2-text":
      "可以为照片添加贴纸和滤镜的相机应用，使用 SwiftUI 和 CoreImage，实现基础功能并参与界面细节讨论。",
    "p3-title": "个人作品集网站",
    "p3-meta": "个人制作 / 本页面",
    "p3-text":
      "部署在 GitHub Pages，用简洁布局展示项目与技能，方便企业快速了解我的背景。",
    "p4-title": "「不是一个人」心理支援应用（企划）",
    "p4-meta": "企划 / 界面草图",
    "p4-text":
      "思考如何提供匿名倾诉空间的概念应用，尝试从用户角度设计不过度打扰又能提供支持的界面和动线。",
    "p4-tag1": "企划",
    "p4-tag2": "用户视角",

    "history-title": "学习与经历",
    "history-1-title": "2024–2026 日本电子专门学校",
    "history-1-text":
      "系统学习移动应用与 Web 开发基础，以及团队协作开发流程。",
    "history-2-title": "2024–至今 个人开发",
    "history-2-text":
      "在课堂之外尝试制作小项目，并将代码整理到 GitHub 中，作为练习与记录。",

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
      "I learn by building small apps and websites and gradually understanding how they work. My goal is to work in Japan as an engineer and create services that are simple, reliable, and comfortable for people to use.",
    "btn-projects": "▶ View Projects",
    "btn-github": "GitHub Profile",
    "tag-web": "Web Frontend",
    "tag-uiux": "UI/UX",
    "tag-team": "Team Dev",

    "about-title": "About Me",
    "about-main":
      "I am from China and currently studying Mobile Application Development at Nihon Electronics College, focusing on the basics of iOS/Android and web development. I like to learn by making small projects on my own and using that process to understand real development workflows. In the future, I hope to work in Japan as an engineer and contribute to practical, user-friendly products.",
    "about-strength":
      "Strengths: willing to research and try things by myself, careful with details, and mindful of both user and client perspectives when thinking about UI and specifications.",

    "skills-title": "Skill Set",
    "skills-lang-title": "Languages & Frameworks",
    "skills-tools-title": "Experience & Tools",
    "skills-team": "Team Development Exercises",
    "skills-uiux": "Basic UI/UX Design",

    "projects-title": "Selected Projects",
    "p1-title": "RecomMap (prototype)",
    "p1-meta": "Android / Solo",
    "p1-text":
      "A simple map app that lets users save and categorize favorite spots using Google Maps and Room DB, created as practice for API and database usage.",
    "p2-title": "FunnyCamera (prototype)",
    "p2-meta": "iOS / 3-member team / Role: implementation & UI tuning",
    "p2-text":
      "A camera app to add stickers and filters to photos. Built with SwiftUI and CoreImage; I worked mainly on core features and UI adjustments.",
    "p3-title": "Portfolio Website",
    "p3-meta": "Solo / This site",
    "p3-text":
      "A clean portfolio hosted on GitHub Pages so recruiters can quickly see my skills and projects.",
    "p4-title": "\"Not Alone\" Mental Support App (concept)",
    "p4-meta": "Concept & UI draft",
    "p4-text":
      "A concept for an anonymous support app, exploring flows and layouts that feel safe and not overwhelming for users.",
    "p4-tag1": "Concept",
    "p4-tag2": "User-focused",

    "history-title": "Education & Experience",
    "history-1-title": "2024–2026 Nihon Electronics College",
    "history-1-text":
      "Studying mobile app and web development, plus basic team-based development.",
    "history-2-title": "2024–Present Personal Projects",
    "history-2-text":
      "Building small apps and websites outside of class and managing the code on GitHub as practice.",

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
