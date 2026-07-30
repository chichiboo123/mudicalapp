import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ko: {
    translation: {
      site_title: "치수쌤의 뮤.디.컬",
      site_subtitle: "뮤지컬 × 디지털 × 컬래버레이션 | 모두의 뮤지컬 수업을 위한 디지털 도구 플랫폼",
      open_app: "앱 열기",
      footer_author: "Created by. 교육뮤지컬 꿈꾸는 치수쌤",
      footer_notice: "아이디어와 콘텐츠를 존중해 주세요. 허락 없이 복제·변형·재배포를 금합니다.",
      toggle_lang: "English",
      categories: {
        foundation: "기반",
        story: "이야기/대본",
        music: "음악",
        movement: "움직임",
        stage: "무대미술",
        performance: "공연",
        appreciation: "감상수업"
      },
      tools: {
        emotion_card: {
          name_ko: "감정카드",
          name_en: "Emotion Card",
          desc: "로버트 플루치크의 '감정의 바퀴' 이론을 바탕으로 24가지 감정을 쉽고 직관적인 카드 형태로 활용할 수 있습니다."
        },
        our4to: {
          name_ko: "우리네컷",
          name_en: "Our4to",
          desc: "네컷 사진 촬영 후 다양한 디자인 기능을 활용해 장식합니다."
        },
        finger_people: {
          name_ko: "핑거피플",
          name_en: "Finger People",
          desc: "손가락 하나를 한 명의 인물로 상상해 특징을 기록하고 직접 그림을 그려 인물 카드로 완성하는 캐릭터 창작 지원 도구입니다."
        },
        story_card: {
          name_ko: "스토리텔링 카드",
          name_en: "Story Card",
          desc: "랜덤 이미지 및 이야기 입력창을 제공하여 발상과 표현을 돕습니다."
        },
        character_matrix: {
          name_ko: "인물도감",
          name_en: "Character Matrix",
          desc: "인물의 외모, 취향, 성격, 핵심대사 등을 상상하고, 드로잉툴을 이용해 인물의 모습을 시각화 합니다."
        },
        script_note: {
          name_ko: "뮤지컬 대본 노트",
          name_en: "Script Note",
          desc: "해설, 대사, 노래 등을 블록 형태로 쉽게 작성할 수 있으며 저장, 불러오기 기능을 지원합니다."
        },
        easy_lyrics: {
          name_ko: "가사 바꾸기 마법사",
          name_en: "Easy Lyrics",
          desc: "입력한 노래 가사를 네모칸 형태로 변환하여 학생들이 쉽게 가창 연습을 하고 가사를 바꿀 수 있도록 돕습니다."
        },
        easy_piano: {
          name_ko: "여기 있어 피아노",
          name_en: "Easy Piano",
          desc: "피아노 연주, 코드 진행과 자동 반주, 단계별 발성 연습을 지원하여 언제든지 꺼내 사용할 수 있는 포켓 피아노입니다."
        },
        easy_score: {
          name_ko: "너를 위한 악보",
          name_en: "Easy Score",
          desc: "악보를 읽지 못해도 가사의 위치와 길이로 음의 높낮이와 길이를 표현하며, 노래 익히기와 가사 바꿔 쓰기를 할 수 있는 시각적 악보 웹앱입니다."
        },
        blocking_note: {
          name_ko: "뮤지컬 동선 노트",
          name_en: "Blocking Note",
          desc: "뮤지컬 안무 및 연기 동선을 아이콘과 도형으로 시각화하여 무대에서의 움직임을 구상하고 기록합니다."
        },
        my_stage: {
          name_ko: "마이 스테이지",
          name_en: "My Stage",
          desc: "마인크래프트처럼 블록을 쌓고 소품, 배우, 조명을 배치해 다양한 무대 디자인을 3D로 만들어볼 수 있습니다."
        },
        sound_box: {
          name_ko: "여기 있어 효과음",
          name_en: "Sound Box",
          desc: "무대, 자연, 인물, 일상의 다양한 효과음을 쉽게 재생하고 순서대로 구성하여 수업과 공연에 활용할 수 있습니다."
        },
        poster_studio: {
          name_ko: "뮤지컬 포스터 스튜디오",
          name_en: "Poster Studio",
          desc: "배경색, 텍스트, 주요 이미지 등을 단계별로 입력하며 포스터 초안을 디자인합니다."
        },
        stagebill: {
          name_ko: "스테이지빌",
          name_en: "Stagebill",
          desc: "경기도뮤지컬교육연구회 STAGE 선생님들이 큐레이션한 뮤지컬 작품과 추천 넘버, 수업 아이디어를 온라인에서 탐색하고 추천 받을 수 있습니다."
        }
      }
    }
  },
  en: {
    translation: {
      site_title: "Chisu's Mu.Di.Cal",
      site_subtitle: "Musical × Digital × Collaboration | A Digital Tool Platform for Musical Theater Teachers",
      open_app: "Open App",
      footer_author: "Created by. Chisu, a Teacher Dreaming of Educational Musicals",
      footer_notice: "Please respect the ideas and content. Reproduction, modification, or redistribution without permission is prohibited.",
      toggle_lang: "한국어",
      categories: {
        foundation: "Foundation",
        story: "Story / Script",
        music: "Music",
        movement: "Movement",
        stage: "Stage Design",
        performance: "Performance",
        appreciation: "Appreciation"
      },
      tools: {
        emotion_card: {
          name_ko: "감정카드",
          name_en: "Emotion Card",
          desc: "Based on Robert Plutchik's \"Wheel of Emotions,\" explore 24 emotions in an easy, intuitive card format."
        },
        our4to: {
          name_ko: "우리네컷",
          name_en: "Our4to",
          desc: "Take a 4-cut photo and decorate it using various design features."
        },
        finger_people: {
          name_ko: "핑거피플",
          name_en: "Finger People",
          desc: "Imagine each finger as a character, record traits, and draw to create a character card."
        },
        story_card: {
          name_ko: "스토리텔링 카드",
          name_en: "Story Card",
          desc: "Provides random images and story input fields to spark imagination and expression."
        },
        character_matrix: {
          name_ko: "인물도감",
          name_en: "Character Matrix",
          desc: "Imagine a character's appearance, preferences, personality, and key lines, then visualize them with a drawing tool."
        },
        script_note: {
          name_ko: "뮤지컬 대본 노트",
          name_en: "Script Note",
          desc: "Write narration, dialogue, and songs in block format with save/load support."
        },
        easy_lyrics: {
          name_ko: "가사 바꾸기 마법사",
          name_en: "Easy Lyrics",
          desc: "Converts lyrics into a grid format to help students practice singing and rewrite songs."
        },
        easy_piano: {
          name_ko: "여기 있어 피아노",
          name_en: "Easy Piano",
          desc: "A pocket piano supporting piano play, chord progressions, auto-accompaniment, and step-by-step vocal exercises."
        },
        easy_score: {
          name_ko: "너를 위한 악보",
          name_en: "Easy Score",
          desc: "A visual score app that shows pitch and length through lyrics position, even without music reading ability."
        },
        blocking_note: {
          name_ko: "뮤지컬 동선 노트",
          name_en: "Blocking Note",
          desc: "Visualize musical choreography and acting movements with icons and shapes to plan and record stage blocking."
        },
        my_stage: {
          name_ko: "마이 스테이지",
          name_en: "My Stage",
          desc: "Stack blocks like Minecraft and arrange props, actors, and lights to design a 3D stage."
        },
        sound_box: {
          name_ko: "여기 있어 효과음",
          name_en: "Sound Box",
          desc: "Easily play and sequence various sound effects for stage, nature, characters, and everyday life."
        },
        poster_studio: {
          name_ko: "뮤지컬 포스터 스튜디오",
          name_en: "Poster Studio",
          desc: "Design a musical poster draft by entering background, text, and main images step by step."
        },
        stagebill: {
          name_ko: "스테이지빌",
          name_en: "Stagebill",
          desc: "Explore and get recommendations for musical works, recommended numbers, and lesson ideas curated by STAGE teachers."
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ko", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
