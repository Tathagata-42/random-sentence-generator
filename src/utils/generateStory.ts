import wordBank from "../data/story_word_bank.json";

function getRandom(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)] || "";
}

export const generateStory = (mode: string): string => {
  switch (mode) {
    case "story":
      return [
        `${getRandom(wordBank.character)} arrived at ${getRandom(wordBank.place)}, a ${getRandom(wordBank.adjective)} place full of secrets.`,
        `${getRandom(wordBank.connector)}, they ${getRandom(wordBank.action)}.`,
        `The ${getRandom(wordBank.subject)} nearby looked ${getRandom(wordBank.adjective)} in the fading light.`,
        `${getRandom(wordBank.connector)}, a sound echoed that filled them with ${getRandom(wordBank.emotion)}.`,
        `They paused, wondering if it was just the ${getRandom(wordBank.subject)} playing tricks.`,
        `${getRandom(wordBank.connector)}, they took a deep breath and moved toward the ${getRandom(wordBank.adjective)} path ahead.`
      ].join(" ");

    case "professional":
      return [
        `${getRandom(wordBank.connector)} aligned with our Q3 vision,`,
        `${getRandom(wordBank.character)} led a ${getRandom(wordBank.adjective)} initiative at ${getRandom(wordBank.place)}.`,
        `This resulted in ${getRandom(wordBank.emotion)} from stakeholders and ${getRandom(wordBank.adjective)} business impact.`
      ].join(" ");

    case "creative":
      return [
        `${getRandom(wordBank.character)} danced through ${getRandom(wordBank.place)}, arms wide,`,
        `as ${getRandom(wordBank.subject)} glimmered with ${getRandom(wordBank.emotion)}.`,
        `The ${getRandom(wordBank.adjective)} wind whispered secrets only dreamers could hear.`
      ].join(" ");

    case "horror":
      return [
        `${getRandom(wordBank.character)} heard whispers from the ${getRandom(wordBank.place)}.`,
        `${getRandom(wordBank.connector)}, ${getRandom(wordBank.subject)} moved in the shadows.`,
        `Their ${getRandom(wordBank.adjective)} breath fogged the mirror as ${getRandom(wordBank.emotion)} gripped their heart.`
      ].join(" ");

    case "coding":
      return [
        `function ${getRandom(wordBank.character)}() {`,
        `  const ${getRandom(wordBank.subject)} = "${getRandom(wordBank.adjective)}_${getRandom(wordBank.emotion)}";`,
        `  console.log("${getRandom(wordBank.connector)}: ${getRandom(wordBank.action)}");`,
        `}`
      ].join("\n");

    default:
      return "Select a mode to generate something awesome!";
  }
};