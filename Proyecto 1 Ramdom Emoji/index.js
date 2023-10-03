const btnRandomEl = document.getElementById('btn-random');
const emojiNameEl = document.getElementById('emoji-name');

const emoji = [];

async function getEmoji() {
  let response = await fetch('https://emoji-api.com/emojis?access_key=76fcf49306e52221062e433d720300d40911456d');

  data = await response.json()

  for(let i = 0; i<1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    })
  }
}

getEmoji();

console.log(emoji)

btnRandomEl.addEventListener('click', ()=> {
  const randomNum = Math.floor(Math.random()*emoji.length);
  btnRandomEl.innerText = emoji[randomNum].emojiName;
  emojiNameEl.innerText = emoji[randomNum].emojiCode;
})