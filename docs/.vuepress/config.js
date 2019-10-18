module.exports = {
  plugins: {
    sitemap: {
      hostname: "https://hands-on-vue.netlify.com"
    }
  },
  title: "Hands on Vue",
  description: "Coding dojo to learn Vue",
  themeConfig: {
    editLinkText: "Edit cette page sur Github",
    lastUpdated: "Mis à jour le",
    repo: "mathieumure/hands-on-vue",
    repoLabel: "Contribue !",
    docsRepo: "mathieumure/hands-on-vue",
    docsDir: "docs",
    editLinks: true,
    sidebar: [
      "/",
      "/SUMMARY.md",
      "/TP1.md",
      "/TP2.md",
      "/TP3.md",
      "/TP4.md",
      "/TP5.md",
      "/TP6.md"
    ],
    nav: [{ text: "Home", link: "/" }]
  }
};
