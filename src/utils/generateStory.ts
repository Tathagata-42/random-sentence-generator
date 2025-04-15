import wordBank from "../data/story_word_bank.json";

function getRandom(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)] || "";
}

function parseTemplate(template: string[]): string {
  return template
    .map((line) =>
      line
        .replace(/{character}/g, getRandom(wordBank.character))
        .replace(/{place}/g, getRandom(wordBank.place))
        .replace(/{adjective}/g, getRandom(wordBank.adjective))
        .replace(/{connector}/g, getRandom(wordBank.connector))
        .replace(/{action}/g, getRandom(wordBank.action))
        .replace(/{emotion}/g, getRandom(wordBank.emotion))
        .replace(/{subject}/g, getRandom(wordBank.subject))
    )
    .join(" ");
}

function filterByLimit(text: string, lineLimit?: number, charLimit?: number): string {
  const lines = text.split(/(?<=\.)\s+/); // split by sentence endings
  let output = "";
  for (const line of lines) {
    if (lineLimit && output.split(".").length > lineLimit) break;
    if (charLimit && output.length + line.length > charLimit) break;
    output += line + " ";
  }
  return output.trim();
}

export const generateStory = (mode: string, lineLimit?: number, charLimit?: number): string => {
  const storyStructures = [
    ["{character} found themselves in {place}, a {adjective} land forgotten by time.", "{connector}, they {action}.", "A {subject} shimmered in the distance, full of {emotion}.", "{connector}, the path twisted into {adjective} mystery.", "{character} whispered, 'This is just the beginning.'"],
    ["{connector}, a {subject} blocked their way.", "{character} raised their {subject}, eyes glowing with {emotion}.", "Every {place} they passed echoed with {adjective} memories.", "{connector}, silence returned."],
    ["In {place}, the {subject} came alive.", "{character} had heard legends, but never believed them.", "{connector}, the air turned {adjective} and thick with {emotion}.", "They {action} with trembling hands.", "A {subject} stared back, unblinking."],
    ["{connector}, a {subject} moved.", "{character} chased the sound into {place}.", "What they saw was {adjective} — and unforgettable.", "{connector}, {emotion} took over."],
    ["The {subject} spoke.", "{character} fell to their knees in {emotion}.", "No one believed stories about {place}, but it was real.", "They {action}, guided by the {adjective} light."],
    ["{character} was never meant to return to {place}.", "But {connector}, they found the {subject} intact.", "{emotion} flooded their thoughts.", "The {adjective} truth was hidden in plain sight.", "They {action} — and this time, they wouldn’t run."]
  ];

  const professionalStructures = [
    ["{connector} aligned with our Q3 vision.", "{character} led a {adjective} initiative at {place}.", "This resulted in {emotion} from stakeholders and {adjective} business impact."],
    ["{connector}, the {subject} strategy proved {adjective}.", "{character} leveraged innovation from {place}.", "It enhanced cross-functional {emotion} within the team."],
    ["Our {adjective} plan began at {place}.", "{character} initiated the project.", "The {subject} revealed {emotion}-driven insights.", "{connector}, ROI peaked."],
    ["{connector}, a new proposal was tabled.", "The {adjective} approach caught {character}'s attention.", "{emotion} filled the boardroom."],
    ["{character} analyzed {subject} data from {place}.", "Findings were {adjective} and actionable.", "{connector}, leadership endorsed full implementation."]
  ];

  const creativeStructures = [
    ["{character} danced through {place}, arms wide.", "The {subject} glimmered with {emotion}.", "{connector}, the world turned {adjective}."],
    ["{character}'s brush swirled across the {subject}.", "{emotion} spilled into every stroke.", "{connector}, the art breathed life."],
    ["{place} sang with {adjective} rhythm.", "{character} painted with {emotion} in their heart."],
    ["{connector}, a {subject} took flight.", "{character} followed it into a {adjective} dream.", "In that world, {emotion} ruled."]
  ];

  const horrorStructures = [
    ["{character} heard whispers from the {place}.", "{connector}, {subject} moved in the shadows.", "Their {adjective} breath fogged the mirror as {emotion} gripped their heart."],
    ["{connector}, a {subject} creaked in the darkness.", "{character} stepped into {place}, trembling.", "{emotion} thickened the air.", "The {adjective} silence roared."],
    ["{character} opened the {adjective} door.", "Nothing but {emotion} waited.", "{connector}, footsteps followed."],
    ["{place} was too quiet.", "{character} knew {subject} watched.", "{emotion} settled under their skin."],
    ["{character}'s shadow twitched.", "In {place}, the {adjective} truth unveiled.", "{connector}, screams echoed."]
  ];

  const codingStructures = [
    ["function {character}() {", "  const {subject} = \"{adjective}_{emotion}\";", "  console.log(\"{connector}: {action}\");", "}"],
    ["const {subject} = () => {", "  console.log(\"{adjective} logic activated.\");", "  return \"{emotion}\";", "}"],
    ["let {subject} = \"{place}_{adjective}\";", "if({subject}) console.log(\"{emotion}!\");"]
  ];

  const structureMap: Record<string, string[][]> = {
    story: storyStructures,
    professional: professionalStructures,
    creative: creativeStructures,
    horror: horrorStructures,
    coding: codingStructures
  };

  const selectedStructures = structureMap[mode];
  if (!selectedStructures) return "Select a mode to generate something awesome!";

  // const raw = parseTemplate(getRandom(selectedStructures as string[][]));

  const structure = selectedStructures[Math.floor(Math.random() * selectedStructures.length)];
const raw = parseTemplate(structure);


  return filterByLimit(raw, lineLimit, charLimit);
};
