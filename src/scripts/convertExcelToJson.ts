// src/scripts/convertExcelToJson.ts
import xlsx from 'xlsx';
import fs from 'fs';
import path from 'path';

type Row = {
  Mode: string;
  Type: string;
  "Word/Phrase": string;
};

const filePath = path.join(__dirname, '../data/story_words_real_200_per_type.xlsx');
const workbook = xlsx.readFile(filePath);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = xlsx.utils.sheet_to_json<Row>(sheet);

const wordBank: Record<string, string[]> = {};

data.forEach((row) => {
  const type = row.Type?.toLowerCase();
  const phrase = row["Word/Phrase"];
  if (type && phrase) {
    if (!wordBank[type]) wordBank[type] = [];
    wordBank[type].push(phrase);
  }
});

const outputPath = path.join(__dirname, '../data/story_word_bank.json');
fs.writeFileSync(outputPath, JSON.stringify(wordBank, null, 2));
console.log('✅ Word bank JSON saved to:', outputPath);
