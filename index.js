/* eslint-disable */

const { Plugin } = require('powercord/entities');
const uwufy = require('./uwufy');

//Non repeating code but complex > repeating code shut up
let functions = {};
createMapper(require('./maps'));
function createMapper(mod) {
	for (const [key, value] of Object.entries(mod)) {
		functions[key] = (input) =>
			[...input.toLowerCase()].map((l) => value[l] || l).join('');
	}
}

module.exports = class Texter extends Plugin {
	startPlugin() {
		powercord.api.commands.registerCommand({
			command: 'fw',
			description: 'ｆｕｌｌ　ｗｉｄｔｈｓ　ｙｏｕｒ　ｔｅｘｔ',
			usage: '{c} [Text you want to flip]',
			executor: (args) => ({
				send: true,
				result: functions.fullWidthLetters(args.join(' ')),
			}),
		});

		powercord.api.commands.registerCommand({
			command: 'zwsit',
			description:
				'Add zero width spaces between your message useful in some cases',
			usage: '{c} [ZWS]',
			executor: (args) => ({
				send: true,
				result: '\u200b' + args.join(' ').split('').join('\u200b') + '\u200b',
			}),
		});

		powercord.api.commands.registerCommand({
			command: 'nozws',
			description: 'Removes all the zero width spaces from your message',
			usage: '{c} [ZWS]',
			executor: (args) => ({
				send: true,
				result: args.join(' ').replace(/\u200b/gi, ''),
			}),
		});

		powercord.api.commands.registerCommand({
			command: 'emoji',
			description: 'Turn your text into big emoji letters',
			usage: '{c} [Text to Emojify]',
			executor: (args) => ({
				send: true,
				result: functions.emojiLetters(
					args.join(' ').split('').join(' ').emoji()
				),
			}),
		});

		powercord.api.commands.registerCommand({
			command: 'fullwidth',
			description: 'ｆｕｌｌ　ｗｉｄｔｈｓ　ｙｏｕｒ　ｔｅｘｔ',
			usage: '{c} [Text you want to flip]',
			executor: (args) => ({
				send: true,
				result: functions.fullWidthLetters(args.join(' ')),
			}),
		});

		powercord.api.commands.registerCommand({
			command: 'shrug',
			description: 'appends ¯\\_(ツ)_/¯ to you message',
			usage: '{c} [.shrug]',
			executor: (args) => ({
				send: true,
				result: args.join(' ') + '¯\\_(ツ)_/¯',
			}),
		});

		powercord.api.commands.registerCommand({
			command: 'small',
			description: 'makes your text smaller',
			usage: '{c} [text that you want to make small]',
			executor: (args) => ({
				send: true,
				result: functions.smallLetters(args.join(' ')),
			}),
		});

		powercord.api.commands.registerCommand({
			command: 'smaller',
			description: 'Makes your text tiny',
			usage: '{c} [tiny input]',
			executor: (args) => ({
				send: true,
				result: functions.smallerLetters(args.join(' ')),
			}),
		});

		powercord.api.commands.registerCommand({
			command: 'reverse',
			description: 'Reverse some text',
			usage: '{c} [text to reverse!]',
			executor: (args) => ({
				send: true,
				result: args.join(' ').split('').reverse().join(''),
			}),
		});
		powercord.api.commands.registerCommand({
			command: 'reflip',
			description: 'reflips your text',
			usage: '{c} [text to reflip!]',
			executor: (args) => ({
				send: true,
				result: functions.flipLetters(
					args.join(' ').split('').reverse().join('')
				),
			}),
		});

		powercord.api.commands.registerCommand({
			command: 'encode',
			description: 'Encodes your text with base64 encoding',
			usage: '{c} [Text to encode]',
			executor: (args) => ({
				send: true,
				result: Buffer.from(args.join(' '), 'utf-8').toString('base64'),
			}),
		});

		powercord.api.commands.registerCommand({
			command: 'decode',
			description: 'Decodes your text from base64 encoding',
			usage: '{c} [Text to encode]',
			executor: (args) => ({
				send: true,
				result: Buffer.from(args.join(' '), 'base64').toString('utf-8'),
			}),
		});

		powercord.api.commands.registerCommand({
			command: 'uwufy',
			description: 'Not even gonna bother explaining this one',
			usage: '{c} [...........]]',
			executor: (args) => ({
				send: true,
				result: uwufy(args.join(' ')),
			}),
		});

		powercord.api.commands.registerCommand({
			command: 'clap',
			description: 'adds clap emojis to your text',
			usage: '{c} [Text to clap]',
			executor: (args) => ({
				send: true,
				result: '👏' + args.join('👏') + '👏',
			}),
		});

		powercord.api.commands.registerCommand({
			command: 'flip',
			description: 'flips your text',
			usage: '{c} [input]',
			executor: (args) => ({
				send: true,
				result: functions.flipLetters(args.join(' ')),
			}),
		});

		powercord.api.commands.registerCommand({
			command: 'space',
			description:
				'Like .clap except it lets you pick anything you want to put inbetween the words.',
			usage: '{c} [space <char> [sentence...]]',
			executor: (args) => ({
				send: true,
				result: space(args),
			}),
		});
	}

	pluginWillUnload() {
		for (const command of [
			'flip',
			'fw',
			'clap',
			'reflip',
			'reverse',
			'small',
			'smaller',
			'shrug',
			'fullwidth',
			'emoji',
			'uwufy',
			'space',
		]) {
			powercord.api.commands.unregisterCommand(command);
		}
	}
};

function space(args) {
	const char = args[0];
	const str = args.slice(1).join(char);
	return str + char;
}
