export const SITE = {
  website: "https://vikingtactical.us", // replace this with your deployed domain
  author: "Sigvaldr Nótthrafn",
  profile: "https://notthrafn.com",
  desc: "Gaming clan built on brotherhood",
  title: "Viking Tactical",
  ogImage: "wallpaper.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://fuck.you",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/New_York", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
