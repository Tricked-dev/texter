const pastamap = require('./pastamap');
let MAX_EMOJIS_PER_BLOCK = 2;

module.exports = function (text) {
	let blocks = splitIntoBlocks(text);
	let newBlocks = [];
	blocks.forEach((block) => {
		newBlocks.push(block);
		emojis = generateEmojisFrom(block);
		if (emojis) {
			newBlocks.push(' ' + emojis);
		}
	});
	return newBlocks.join('');
};

function splitIntoBlocks(text) {
	return text.match(/\s*[^\s]*/g);
}

function generateEmojisFrom(block) {
	let trimmedBlock = trimNonAlphanumericalChars(block);
	let matchingEmojis = getMatchingEmojis(trimmedBlock);
	let emojis = [];
	if (matchingEmojis) {
		let numEmojis = Math.floor(Math.random() * (MAX_EMOJIS_PER_BLOCK + 1));
		for (let i = 0; i < numEmojis; i++) {
			emojis.push(
				matchingEmojis[Math.floor(Math.random() * matchingEmojis.length)]
			);
		}
	}
	return emojis.join('');
}

function trimNonAlphanumericalChars(text) {
	return text.replace(/^\W*/, '').replace(/\W*$/, '');
}

function getMatchingEmojis(word) {
	let key = getAlphanumericPrefix(word.toLowerCase());
	if (key in pastamap) {
		return pastamap[key];
	}
	return [];
}

function getAlphanumericPrefix(s) {
	return s.match(/^[a-z0-9]*/i);
}
