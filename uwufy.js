//https://git.holllo.cc/Bauke/owofy/src/branch/main/source/index.js
/**
 * The faces owofy will randomly insert at exclamation marks.
 */
const faces = [
    '(*^ω^)',
    '(◕‿◕✿)',
    '(◕ᴥ◕)',
    'ʕ•ᴥ•ʔ',
    'ʕ￫ᴥ￩ʔ',
    '(*^.^*)',
    'owo',
    '(｡♥‿♥｡)',
    'uwu',
    '(*￣з￣)',
    '>w<',
    '^w^',
    '(つ✧ω✧)つ',
    '(/ =ω=)/'
];

/**
 * Owofies your text! owo
 * @param {string} input The input string to owofy.
 */
function owofy(input) {
    return input
        .replace(/[lr]/g, 'w')
        .replace(/[LR]/g, 'W')
        .replace(/n([aeiou])/g, 'ny$1')
        .replace(/N([aeiou])/g, 'Ny$1')
        .replace(/N([AEIOU])/g, 'Ny$1')
        .replace(/ove/g, 'uv')
        .replace(/!+/g, `! ${faces[Math.floor(Math.random() * faces.length)]}`);
}

// Attach the faces to the owofy function.
// Essentially doing `export const faces ...`.
owofy.faces = faces;

// Export the owofy function as default.
// Essentially doing `export default function owofy ...`.
module.exports = owofy;