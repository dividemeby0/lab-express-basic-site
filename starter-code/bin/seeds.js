const mongoose = require("mongoose");
const Skater = require("./../models/skater");

const ladies = [
  { 
    name: "Loena HENDRICKX",
    country: "Belgium",
    record: "Number one skater in Belgium",
    description: "I like her skating a lot but her international career hasn't really taken off yet, and unfortunately she's been injured for a while last year. I really hope this will be her season.",
    program1: "Diferente",
    image: "https://www.loenahendrickx.com/afbeeldingen/1/11707/media-photo/loenahendrixwkkunstschaatsen201901.jpg",
  },
  {
    name: "Laurine LECAVELIER",
    country: "France",
    record: "2017 French national champion",
    description: "Laurine had her Grand Prix debut last year and she represented France at Worlds last season. She is perhaps more consistent than Maé-Bérénice Méité, and she is sweet and talented, even though her skating is not my favorite."
  },
  {
    name: "Maé-Bérénice MÉITÉ",
    country: "France",
    record: "Best skater in France since ~2014",
    description: "She's a sweetheart and I love her. Moreover, it's quite exceptional to see such an athletic black woman in figure skating. Unfortunately, she lacks consistensy  and it's always heartbreaking to see her fall during a program or miss an element in spite of her talent.",
    program1: "Stay",
    program2: "Halo",
    image: "https://www.esvitry-club.fr/media/uploaded/sites/325/actualite/5a93b61e12ed5_maeBereniceMeite.jpg"
  },
  {
    name: "Wakaba HIGUCHI",
    country: "Japan",
    record: "Silver medal at the 2018 World Championships, silver medal at the 2017 Japanese nationals",
    description: "Litteraly my favorite skater in the world. I would die for her. Her skating is very energetic and powerful, and she has great musicality. She didn't get to go to the 2018 Olympics, which is an absolute shame, and her latest season has been a difficult one, as she spent most of it off the ice because of an injury.",
    program1: "Wakabond",
    program2: "Energia",
    image: "https://66.media.tumblr.com/3d607aa0582d67432732e44ae2c98567/tumblr_p0q88g2vuR1vljgffo2_540.png"
  },
  {
    name: "Kaori SAKAMOTO",
    country: "Japan",
    record: "Current Japanese champion, Four Continents gold medalist in 2018",
    description: "She's adorable! A great skater: well-rounded, incredibly graceful and technically solid. Her triple loop is gorgeous, in my opinion one of the most beautiful jumps in the biz.",
    program1: "The Piano",
    program2: "Amélie",
    image: "https://www.goldenskate.com/wp-content/uploads/2018/12/Kaori-Sakamoto.jpg"
  },
  {
    name: "Alena KOSTORNAIA",
    country: "Russia",
    record: "Gold medalist at the latest Junior Grand Prix Final",
    description: "15 year old Alena is part of a wave of junior Russian skaters making their senior debut this season. But according to me she is the most talented of the bunch: she's balanced, has strong technique, excellent skating skills (the best among the juniors) and she might be the one most likely to sustain a career in the long run. I'm thrilled to see her skating live. She will skate to Muse's Supermassive Blackhole for her new short program...",
    program1: "",
    program2: "",
    image: "https://i.pinimg.com/originals/af/a7/8e/afa78ed4bf375107828bf754854be451.jpg"
  },
  // {
  //   name: "Maria SOTSKOVA",
  //   country: "Russia",
  //   record: "",
  //   description: "",
  //   program1: "",
  //   program2: ""
  // },
  {
    name: "Alina ZAGITOVA",
    country: "Russia",
    record: "Olympic gold medalist in 2018, World Champion in 2019, gold medalist at both of her Grand Prix in 2018 (she didn't win the GP Final but I think we can agree that this is still a pretty impressive record)",
    description: "I like her a lot, even though I'm scared about her health, be it physical of mental. Her programs can be unbalanced and not well choreographed (hence the small scandal that ensued her olympic victory: she was accused of having a weaker program that GaMiFiEd the points system). However, the medals can only lie to an extent, and to me she's an undeniably talented kid who's just doing her best.",
    program1: "Don Quixote",
    program2: "Black Swan",
    image: "https://media1.popsugar-assets.com/files/thumbor/CxdN1eGQBHSlHaet9FZhjKmOvmM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/02/22/236/n/1922729/tmp_fyDUtv_03d402aa3cf5afe3_GettyImages-923188442.jpg"
  },
  {
    name: "Mariah BELL",
    country: "USA",
    record: "Bronze medal at 2019 US Nationals",
    description: "Honestly, I love Mariah as a skater. Her cheery all-American girl persona really gets to shine on the ice, she has good skating skills and there's a softness to her skating that makes it very pleasant to watch. But she might not be as sweet as she lets on. At the latest World Championships she hurt her Korean rinkmate and competitor Eun-Soo Lim during practice, and there is reason to think the attack was intentional and that she has bullied Lim for a while.",
    program1: "",
    program2: ""
  },
  // {
  //   name: "Ting CUI",
  //   country: "USA",
  //   record: "",
  //   description: "",
  //   program1: "",
  //   program2: ""
  // }
]

module.exports = ladies;

Skater.create(ladies)
.then (dbSkaters => {
  console.log("skaters added:", dbSkaters);
})
.catch (err => {
  console.log(err);
});

function newFunction() {
  return "https://www.loenahendrickx.com/afbeeldingen/1/11707/media-photo/loenahendrixwkkunstschaatsen201901.jpg";
}

