export const SITE = {
  website: "https://neexa.dev/", // replace this with your deployed domain
  author: "Neexa",
  profile: "https://neexa.dev/",
  desc: "Neexa は、AIを実際に触り続けるエンジニアの探索記録です。話題のツール、気になるプロダクト、使ってみてわかったこと——次に何が来るか」を、一緒に探しましょう。",
  title: "Neexa",
  ogImage: "neexa-og.webp",
  lightAndDarkMode: true,
  postPerIndex: 8,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "ja", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Tokyo", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
