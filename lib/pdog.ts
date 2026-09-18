// ─────────────────────────────────────────────────────────────
// EDIT HERE: replace the value below with the real contract address.
// Leave it as "" (empty string) while the token is not live.
export const CONTRACT_ADDRESS = ""
export const CONTRACT_PLACEHOLDER = "IL_TUO_CA_REALE"

// EDIT HERE: official links
export const X_URL = "https://x.com/peacefuldog"
export const BUY_URL = "" // empty = button stays inactive ("COMING SOON")
// ─────────────────────────────────────────────────────────────

export type StoryImage = {
  src: string
  width: number
  height: number
  alt: string
}

export type Chapter = {
  number: string
  title: string
  lines: string[]
  quote?: string
  image: StoryImage
}

export const chapters: Chapter[] = [
  {
    number: "01",
    title: "The First Time He Heard About Doge",
    lines: [
      "PDOG is working at a construction site, exhausted and covered in sweat.",
      "Behind him, another dog talks about a strange new internet coin. PDOG doesn't say anything. He simply listens, and keeps working.",
    ],
    quote: "Have you heard about Dogecoin?",
    image: {
      src: "/pdog/workinghard.png",
      width: 1254,
      height: 1254,
      alt: "PDOG working at a construction site while other dogs talk about Dogecoin",
    },
  },
  {
    number: "02",
    title: "The First Buy",
    lines: [
      "July 25, 2014. Dogecoin was still considered a joke. A meme. A worthless internet coin.",
      "PDOG didn't care. He put his last $500 into Dogecoin — about 2,173,193 DOGE at about $0.00023 each.",
      "Then he forgot about it.",
    ],
    quote: "My last five hundred bucks...",
    image: {
      src: "/pdog/thebuy.png",
      width: 1254,
      height: 1254,
      alt: "PDOG at his desk in July 2014 after buying Dogecoin",
    },
  },
  {
    number: "03",
    title: "The Accident",
    lines: [
      "Shortly after, PDOG gets into a serious car accident. A rainy day. An old car, partially destroyed.",
      "He survives. But something changes.",
    ],
    image: {
      src: "/pdog/theaccident.png",
      width: 1312,
      height: 1199,
      alt: "PDOG lying on a rainy road after a car accident while other dogs look on",
    },
  },
  {
    number: "04",
    title: "The Memory",
    lines: [
      "PDOG wakes up in the hospital. Injured. Confused.",
      "His mother comes to visit him. He looks at her. He knows she is familiar. But he can't remember why.",
    ],
    image: {
      src: "/pdog/hospital.png",
      width: 1254,
      height: 1254,
      alt: "PDOG in a hospital bed with his mother sitting beside him",
    },
  },
  {
    number: "05",
    title: "The Years Pass",
    lines: [
      "From 2014 to 2019, PDOG goes back to his normal life. Construction sites. Long days. Small paychecks. Bills. Home. Sleep. Repeat.",
      "He works hard just to make it to the end of every month. He doesn't know that somewhere in his past, he owns something that will one day change his life forever.",
    ],
    image: {
      src: "/pdog/years-2014-2019.png",
      width: 1312,
      height: 1199,
      alt: "Six panels showing PDOG working and resting through the years 2014 to 2019",
    },
  },
  {
    number: "06",
    title: "2020",
    lines: [
      "Then the world changes. COVID arrives.",
      "PDOG puts on a mask and continues living his life. He still doesn't remember the Dogecoin he bought years earlier.",
    ],
    image: {
      src: "/pdog/covid.png",
      width: 1312,
      height: 1199,
      alt: "PDOG wearing a mask, looking out of a window during the COVID lockdown",
    },
  },
  {
    number: "07",
    title: "The Doge Boom",
    lines: [
      "Then comes 2021. Dogecoin suddenly explodes. X is flooded with Dogecoin posts. Elon Musk posts about it. The internet goes crazy.",
      "PDOG sits at his computer and watches everything unfold. Something about Dogecoin feels familiar. But he doesn't know why.",
    ],
    image: {
      src: "/pdog/hearingdogecoin.png",
      width: 1312,
      height: 1199,
      alt: "PDOG reading Dogecoin posts on X on his laptop at night",
    },
  },
  {
    number: "08",
    title: "May 5, 2021",
    lines: [
      "That night, PDOG is relaxing at home. Couch. Beer. Television.",
      "The news reports that Elon Musk will host Saturday Night Live, and that something important could happen.",
      "PDOG watches. He has no idea how connected he already is to Dogecoin.",
    ],
    image: {
      src: "/pdog/chillingoncouch.png",
      width: 1374,
      height: 1145,
      alt: "PDOG on the couch with a beer watching breaking news about Elon Musk hosting SNL",
    },
  },
]

export const finalChapter: Chapter = {
  number: "11",
  title: "That Same Night...",
  lines: [
    "That same night, PDOG realized he was sitting on more than $1.3M.",
    "He had forgotten about the wallet. He had forgotten about the DOGE.",
    "But he definitely wasn't going to forget this night. He was a millionaire. And this is only the beginning.",
  ],
  image: {
    src: "/pdog/thenight.png",
    width: 1312,
    height: 1199,
    alt: "PDOG celebrating his first night as a millionaire with friends",
  },
}

export const timeline = [
  { year: "2014", label: "The Buy" },
  { year: "2014", label: "The Accident" },
  { year: "", label: "Memory Loss" },
  { year: "2014–2019", label: "Years of Work" },
  { year: "2020", label: "Covid" },
  { year: "2021", label: "Doge Boom" },
  { year: "May 5", label: "SNL News" },
  { year: "Wallet", label: "Discovery" },
  { year: "$500 → $1.3M+", label: "He Forgot" },
]

export const comingSoon = [
  "More PDOG Lore",
  "Memes",
  "Telegram",
  "Dexscreener",
  "Buy $PDOG",
  "Merch",
]

export const gallery: StoryImage[] = [
  { src: "/pdog/workinghard.png", width: 1254, height: 1254, alt: "PDOG at the construction site" },
  { src: "/pdog/thebuy.png", width: 1254, height: 1254, alt: "PDOG buying Dogecoin in July 2014" },
  { src: "/pdog/theaccident.png", width: 1312, height: 1199, alt: "The accident" },
  { src: "/pdog/hospital.png", width: 1254, height: 1254, alt: "PDOG in the hospital" },
  { src: "/pdog/years-2014-2019.png", width: 1312, height: 1199, alt: "The years 2014 to 2019" },
  { src: "/pdog/covid.png", width: 1312, height: 1199, alt: "PDOG during COVID" },
  { src: "/pdog/hearingdogecoin.png", width: 1312, height: 1199, alt: "The Dogecoin boom" },
  { src: "/pdog/chillingoncouch.png", width: 1374, height: 1145, alt: "May 5, 2021" },
  { src: "/pdog/themoment.png", width: 1536, height: 1024, alt: "The wallet discovery" },
  { src: "/pdog/thenight.png", width: 1312, height: 1199, alt: "That same night" },
  { src: "/pdog/pdog-hero.png", width: 1254, height: 1254, alt: "PDOG by the sea" },
  { src: "/pdog/logo-pdog.png", width: 1254, height: 1254, alt: "PDOG in the pool" },
  { src: "/pdog/wallpaper-real-pdog.png", width: 2172, height: 724, alt: "The real PDOG in the water" },
]
