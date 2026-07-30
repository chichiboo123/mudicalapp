import emotionCardImg from "@assets/1_1785371757493.png";
import our4toImg from "@assets/2_1785371757494.png";
import fingerPeopleImg from "@assets/3_1785371757494.png";
import storyCardImg from "@assets/4_1785371757495.png";
import characterMatrixImg from "@assets/5_1785371757495.png";
import scriptNoteImg from "@assets/6_1785371757495.png";
import easyLyricsImg from "@assets/7_1785371757496.png";
import easyPianoImg from "@assets/8_1785371757496.png";
import easyScoreImg from "@assets/9_1785371757496.png";
import blockingNoteImg from "@assets/10_1785371757497.png";
import myStageImg from "@assets/11_1785371757497.png";
import soundBoxImg from "@assets/12_1785371757497.png";
import posterStudioImg from "@assets/13_1785371757498.png";
import stagebillImg from "@assets/14_1785371757498.png";

export const categories = [
  { id: "foundation", key: "categories.foundation", icon: "foundation" },
  { id: "story", key: "categories.story", icon: "auto_stories" },
  { id: "music", key: "categories.music", icon: "music_note" },
  { id: "movement", key: "categories.movement", icon: "directions_run" },
  { id: "stage", key: "categories.stage", icon: "palette" },
  { id: "performance", key: "categories.performance", icon: "theater_comedy" },
  { id: "appreciation", key: "categories.appreciation", icon: "visibility" },
];

export const tools = [
  {
    id: "emotion_card",
    categoryId: "foundation",
    img: emotionCardImg,
    link: "https://chichiboo123.github.io/emotioncard/",
    key: "tools.emotion_card"
  },
  {
    id: "our4to",
    categoryId: "foundation",
    img: our4toImg,
    link: "https://chichiboo123.github.io/our4to/",
    key: "tools.our4to"
  },
  {
    id: "finger_people",
    categoryId: "foundation",
    img: fingerPeopleImg,
    link: "https://chichiboo123.github.io/finger/",
    key: "tools.finger_people"
  },
  {
    id: "story_card",
    categoryId: "story",
    img: storyCardImg,
    link: "https://chichiboo123.github.io/storycard/",
    key: "tools.story_card"
  },
  {
    id: "character_matrix",
    categoryId: "story",
    img: characterMatrixImg,
    link: "https://chichiboo123.github.io/matrix/",
    key: "tools.character_matrix"
  },
  {
    id: "script_note",
    categoryId: "story",
    img: scriptNoteImg,
    link: "https://chichiboo123.github.io/scriptnote/",
    key: "tools.script_note"
  },
  {
    id: "easy_lyrics",
    categoryId: "music",
    img: easyLyricsImg,
    link: "https://chichiboo123.github.io/easylyrics/",
    key: "tools.easy_lyrics"
  },
  {
    id: "easy_piano",
    categoryId: "music",
    img: easyPianoImg,
    link: "https://chichiboo123.github.io/easypiano/",
    key: "tools.easy_piano"
  },
  {
    id: "easy_score",
    categoryId: "music",
    img: easyScoreImg,
    link: "https://chichiboo123.github.io/easyscore/",
    key: "tools.easy_score"
  },
  {
    id: "blocking_note",
    categoryId: "movement",
    img: blockingNoteImg,
    link: "https://chichiboo123.github.io/musicalblockingnote/",
    key: "tools.blocking_note"
  },
  {
    id: "my_stage",
    categoryId: "stage",
    img: myStageImg,
    link: "https://chichiboo123.github.io/mystage/",
    key: "tools.my_stage"
  },
  {
    id: "sound_box",
    categoryId: "performance",
    img: soundBoxImg,
    link: "https://chichiboo123.github.io/soundbox/",
    key: "tools.sound_box"
  },
  {
    id: "poster_studio",
    categoryId: "performance",
    img: posterStudioImg,
    link: "https://chichiboo123.github.io/posterstudio/",
    key: "tools.poster_studio"
  },
  {
    id: "stagebill",
    categoryId: "appreciation",
    img: stagebillImg,
    link: "https://chichiboo123.github.io/stagebillonline/",
    key: "tools.stagebill"
  }
];