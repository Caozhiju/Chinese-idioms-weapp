// 惯用语英文翻译和解释

const idiomsTranslations = {
  1: {
    name_en: "Fox Borrows Tiger's Ferocity",
    meaning_en: "Using someone else's power to bully others; intimidation through borrowed authority",
    source_en: "Aesop's Fables / Chinese folklore",
    examples_en: {
      "初级": "He bullies classmates using his father's power.",
      "中级": "The new official intimidates subordinates through borrowed authority.",
      "高级": "Using the corporation's influence, he bullied others but eventually faced legal consequences."
    },
    background_en: "From traditional fables. A fox hides behind a tiger and uses the tiger's power to frighten other animals. It reflects ancient Chinese moral education.",
    commonError_en: "Don't confuse with '纸老虎' (paper tiger), which means something that looks strong but is actually weak."
  },
  
  2: {
    name_en: "Hidden Tiger, Crouching Dragon",
    meaning_en: "Hidden talents or latent power; a place with many talented people",
    source_en: "I Ching and ancient Chinese literature",
    examples_en: {
      "初级": "This small town is full of hidden talent.",
      "中级": "Although this startup is unknown, it has excellent employees.",
      "高级": "This region is full of talented people, producing many successful entrepreneurs and artists."
    },
    background_en: "Reflects traditional Chinese views on talent. Tiger and dragon symbolize power; 'crouching' and 'hidden' suggest this power is not yet shown.",
    commonError_en: "Don't use as a negative word or confuse it with 'hiding' in the negative sense."
  },
  
  3: {
    name_en: "One Sound Astonishes All",
    meaning_en: "To achieve sudden fame or success; to make a big impression on debut",
    source_en: "Records of the Grand Historian (Sima Qian)",
    examples_en: {
      "初级": "This new writer achieved sudden fame with her first book.",
      "中级": "Xiaoli completed three months of work in one month at the company.",
      "高级": "This unknown person delivered a brilliant speech and achieved sudden fame."
    },
    background_en: "From ancient Chinese history about a talented person who made an impact upon first speaking.",
    commonError_en: "Don't use it for negative situations. It's always a positive term."
  },
  
  4: {
    name_en: "Ten Years of Polishing the Sword",
    meaning_en: "Years of preparation and practice; long-term accumulation of skills",
    source_en: "Chinese ancient poetry and literature",
    examples_en: {
      "初级": "After ten years of practice, he became an excellent technician.",
      "中级": "This director's new film won international awards after ten years of preparation.",
      "高级": "The research team finally breakthrough after ten years of dedicated work."
    },
    background_en: "Emphasizes long-term preparation and accumulated experience before achieving success.",
    commonError_en: "Don't confuse with '一鸣惊人' (sudden success). '十年磨剑' emphasizes the process, not the sudden result."
  },
  
  5: {
    name_en: "Refined through Thousand Strikes, Hundred Tempers",
    meaning_en: "Perfected through repeated polish, test, and improvement",
    source_en: "Chinese ancient literature and craftsmanship culture",
    examples_en: {
      "初级": "This product has been refined and is of excellent quality.",
      "中级": "This team has achieved excellence through rigorous training.",
      "高级": "The carefully refined cultural icon has become a national symbol."
    },
    background_en: "From ancient Chinese craftsman culture emphasizing continuous improvement and perfection.",
    commonError_en: "Don't completely equate with '十年磨剑'. '千锤百炼' emphasizes repeated improvement; '十年磨剑' emphasizes long-term preparation."
  },
  
  6: {
    name_en: "Heart Cut Like Knife",
    meaning_en: "Extreme sorrow and pain; heartbreak",
    source_en: "Chinese ancient poetry",
    examples_en: {
      "初级": "I was heartbroken hearing this bad news.",
      "中级": "Mother's heart was broken seeing her child leave for far away.",
      "高级": "Losing his long-time friend, he was so heartbroken that he couldn't recover for a long time."
    },
    background_en: "A vivid metaphor for sadness from Chinese ancient poetry, reflecting the richness of Chinese emotional expression.",
    commonError_en: "Only use for extreme sadness. Don't use it for mild unhappiness."
  },
  
  7: {
    name_en: "Eyes High, Hands Low",
    meaning_en: "High standards and ambitions but lacking practical ability; great expectations but poor execution",
    source_en: "Ancient Chinese descriptions of character flaws",
    examples_en: {
      "初级": "He looks down on others, thinking he's very clever.",
      "中级": "Many young people look down on entry-level work.",
      "高级": "This manager has grand plans but poor execution, causing project failure."
    },
    background_en: "Reflects the Chinese emphasis on balance between theory and practice, matching Confucian concepts of unifying knowledge and action.",
    commonError_en: "Don't confuse with '高瞻远瞩' (far-sighted). The key difference is whether there's actual ability to execute."
  },
  
  8: {
    name_en: "Painting Dragon's Eyes",
    meaning_en: "The finishing touch that completes and perfects a work",
    source_en: "Ancient Chinese legend",
    examples_en: {
      "初级": "Adding this color is the finishing touch for this design.",
      "中级": "The actor's final performance elevated the entire movie to a new level.",
      "高级": "The concluding quote perfectly echoes the main theme, unifying the entire article."
    },
    background_en: "From an ancient legend about a painter who didn't dare paint the dragon's eyes until the end, when it came alive.",
    commonError_en: "Don't completely equate with '锦上添花' (gilding the lily). '画龙点睛' emphasizes completion; '锦上添花' emphasizes beautification."
  },
  
  9: {
    name_en: "Travel South but Head North",
    meaning_en: "Acting in opposition to one's goal; moving in the wrong direction",
    source_en: "Ancient Chinese fable",
    examples_en: {
      "初级": "He wants to lose weight but drinks sugary drinks every day.",
      "中级": "The company wants innovation but keeps using outdated management methods.",
      "高级": "While seeking an equal society, using authoritarian methods is counterproductive."
    },
    background_en: "From ancient Chinese storytelling emphasizing rational thinking and checking if actions align with goals.",
    commonError_en: "This is quite literary. Use carefully and ensure proper context alignment."
  }
};

// 获取翻译后的惯用语
function getTranslatedIdiom(idiomId, language = 'zh') {
  const idiom = idiomsDatabase.find(i => i.id === idiomId);
  if (!idiom) return null;
  
  if (language === 'zh') {
    return idiom;
  } else if (language === 'en') {
    const translation = idiomsTranslations[idiomId];
    if (!translation) return idiom; // 如果没有翻译，返回原文
    
    return {
      ...idiom,
      name: translation.name_en,
      meaning: translation.meaning_en,
      source: translation.source_en,
      examples: translation.examples_en,
      background: translation.background_en,
      commonError: translation.commonError_en
    };
  }
  
  return idiom;
}
