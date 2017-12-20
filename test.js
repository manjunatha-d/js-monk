const race = "100m Dash";
const winners = ["Hunter Gath", "Singa Song", "Imda Bos"];

const winnersObj = winners.map((name, position) => ({
  winner: name,
  place: position + 1,
  race: race
}));

console.log(winnersObj);

const ages = [23, 62, 45, 234, 2, 62, 234, 62, 34];

const old = ages.filter(age => age <= 30);

console.log(old);

console.log(null || "hahaa");
