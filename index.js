const { Plugin } = require('powercord/entities');
/* eslint-disable */
module.exports = class Texter extends Plugin {
  startPlugin() {
    for (const alias of ["fw", "fullwidth"]) {
      powercord.api.commands.registerCommand({
        command: alias,
        description: 'ｆｕｌｌ　ｗｉｄｔｈｓ　ｙｏｕｒ　ｔｅｘｔ',
        usage: '{c} [Text you want to flip]',
        executor: (args) => ({
          send: true,
          result: args.join(' ').fullWidth(),
        }),
      });
    }
    powercord.api.commands.registerCommand({
      command: 'shrug',
      description: 'appends ¯\\_(ツ)_/¯ to you message',
      usage: '{c} [.shrug]',
      executor: (args) => ({
        send: true,
        result: args.join(' ') + "¯\\_(ツ)_/¯",
      }),
    });
    powercord.api.commands.registerCommand({
      command: 'small',
      description: 'makes your text smaller',
      usage: '{c} [text that you want to make small]',
      executor: (args) => ({
        send: true,
        result: args.join(' ').small(),
      }),
    });

    powercord.api.commands.registerCommand({
      command: 'smaller',
      description: 'Makes your text tiny',
      usage: '{c} [tiny input]',
      executor: (args) => ({
        send: true,
        result: args.join(' ').smaller()
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
        result: args.join(' ').split('').reverse().join('').flip(),
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
        result: args.join(' ').flip(),
      }),
    });
    powercord.api.commands.registerCommand({
      command: 'space',
      description: 'Like .clap except it lets you pick anything you want to put inbetween the words.',
      usage: '{c} [space <char> [sentence...]]',
      executor: (args) => ({
        send: true,
        result: space(args),
      }),
    });
  }

  pluginWillUnload() {
    for (const command of ["flip", "fw", "clap", "reflip", "reverse", "small", "smaller", "shrug"]) {
      powercord.api.commands.unregisterCommand(command)
    }
  }
};

function space(args) {
  const char = args[0];
  const str = args.slice(1).join(char);
  return str + char;
}
/**
 * 
 * @returns ǫ ᴡ ᴇ ʀ ᴛ ʏ ᴜ ɪ ᴏ ᴘ ᴀ s ᴅ ꜰ ɢ ʜ ᴊ ᴋ ʟ ᴢ x ᴄ ᴠ ʙ ɴ ᴍ
 */
String.prototype.small = function () {
  return this
    .replace(/q/ig, 'ǫ')
    .replace(/w/gi, 'ᴡ')
    .replace(/e/gi, 'ᴇ')
    .replace(/r/gi, 'ʀ')
    .replace(/t/gi, 'ᴛ')
    .replace(/y/gi, 'ʏ')
    .replace(/u/gi, 'ᴜ')
    .replace(/i/gi, 'ɪ')
    .replace(/o/gi, 'ᴏ')
    .replace(/p/gi, 'ᴘ')
    .replace(/a/gi, 'ᴀ')
    .replace(/s/gi, 's')
    .replace(/d/gi, 'ᴅ')
    .replace(/f/gi, 'ꜰ')
    .replace(/g/gi, 'ɢ')
    .replace(/h/gi, 'ʜ')
    .replace(/j/gi, 'ᴊ')
    .replace(/k/gi, 'ᴋ')
    .replace(/l/gi, 'ʟ')
    .replace(/z/gi, 'ᴢ')
    .replace(/x/gi, 'x')
    .replace(/c/gi, 'ᴄ')
    .replace(/v/gi, 'ᴠ')
    .replace(/b/gi, 'ʙ')
    .replace(/n/gi, 'ɴ')
    .replace(/m/gi, 'ᴍ');
};

/**
 * 
 * @returns ᑫ ʷ ᵉ ʳ ᵗ ʸ ᵘ ᶦ ᵒ ᵖ ᵃ ˢ ᵈ ᶠ ᵍ ʰ ʲ ᵏ ˡ ᶻ ˣ ᶜ ᵛ ᵇ ⁿ ᵐ
 */
String.prototype.smaller = function () {
  return this.replace(/q/gi, 'ᑫ')
    .replace(/w/gi, 'ʷ')
    .replace(/e/gi, 'ᵉ')
    .replace(/r/gi, 'ʳ')
    .replace(/t/gi, 'ᵗ')
    .replace(/y/gi, 'ʸ')
    .replace(/u/gi, 'ᵘ')
    .replace(/i/gi, 'ᶦ')
    .replace(/o/gi, 'ᵒ')
    .replace(/p/gi, 'ᵖ')
    .replace(/a/gi, 'ᵃ')
    .replace(/s/gi, 'ˢ')
    .replace(/d/gi, 'ᵈ')
    .replace(/f/gi, 'ᶠ')
    .replace(/g/gi, 'ᵍ')
    .replace(/h/gi, 'ʰ')
    .replace(/j/gi, 'ʲ')
    .replace(/k/gi, 'ᵏ')
    .replace(/l/gi, 'ˡ')
    .replace(/z/gi, 'ᶻ')
    .replace(/x/gi, 'ˣ')
    .replace(/c/gi, 'ᶜ')
    .replace(/v/gi, 'ᵛ')
    .replace(/b/gi, 'ᵇ')
    .replace(/n/gi, 'ⁿ')
    .replace(/m/gi, 'ᵐ');
};
/**
 * 
 * @returns q ʍ ǝ ɹ ʇ ʎ u ı o d ɐ s d ɟ ƃ ɥ ɾ ʞ l z x ɔ ʌ q u ɯ
 */
String.prototype.flip = function () {
  return this.replace(/a/gi, '\u0250')
    .replace(/b/gi, 'q')
    .replace(/c/gi, '\u0254')
    .replace(/d/gi, 'p')
    .replace(/p/gi, 'd')
    .replace(/e/gi, '\u01DD')
    .replace(/f/gi, '\u025F')
    .replace(/g/gi, '\u0183')
    .replace(/h/gi, '\u0265')
    .replace(/i/gi, '\u0131')
    .replace(/j/gi, '\u027E')
    .replace(/k/gi, '\u029E')
    .replace(/m/gi, '\u026F')
    .replace(/n/gi, 'u')
    .replace(/r/gi, '\u0279')
    .replace(/t/gi, '\u0287')
    .replace(/v/gi, '\u028C')
    .replace(/w/gi, '\u028D')
    .replace(/y/gi, '\u028E')
    .replace(/\./gi, '\u02D9')
    .replace(/\[/gi, ']')
    .replace(/\(/gi, ')')
    .replace(/{/gi, '}')
    .replace(/\?/gi, '\u00BF')
    .replace(/!/gi, '\u00A1')
    .replace(/'/gi, ',')
    .replace(/</gi, '>')
    .replace(/>/gi, '<')
    .replace(/_/gi, '\u203E')
    .replace(/;/gi, '\u061B')
    .replace(/\u203F/gi, '\u2040')
    .replace(/\u2045/gi, '\u2046')
    .replace(/\u2234/gi, '\u2235')
    .replace(/\r/gi, '\n');
};
/**
 * 
 * @returns ｑ　ｗ　ｅ　ｒ　ｔ　ｙ　ｕ　ｉ　ｏ　ｐ　ａ　ｓ　ｄ　ｆ　ｇ　ｈ　ｊ　ｋ　ｌ　ｚ　ｘ　ｃ　ｖ　ｂ　ｎ　ｍ
 */
String.prototype.fullWidth = function () {
  return this
    .replace(/ /gi, "　")
    .replace(/q/ig, 'ｑ')
    .replace(/w/gi, 'ｗ')
    .replace(/e/gi, 'ｅ')
    .replace(/r/gi, 'ｒ')
    .replace(/t/gi, 'ｔ')
    .replace(/y/gi, 'ｙ')
    .replace(/u/gi, 'ｕ')
    .replace(/i/gi, 'ｉ')
    .replace(/o/gi, 'ｏ')
    .replace(/p/gi, 'ｐ')
    .replace(/a/gi, 'ａ')
    .replace(/s/gi, 'ｓ')
    .replace(/d/gi, 'ｄ')
    .replace(/f/gi, 'ｆ')
    .replace(/g/gi, 'ｇ')
    .replace(/h/gi, 'ｈ')
    .replace(/j/gi, 'ｊ')
    .replace(/k/gi, 'ｋ')
    .replace(/l/gi, 'ｌ')
    .replace(/z/gi, 'ｚ')
    .replace(/x/gi, 'ｘ')
    .replace(/c/gi, 'ｃ')
    .replace(/v/gi, 'ｖ')
    .replace(/b/gi, 'ｂ')
    .replace(/n/gi, 'ｎ')
    .replace(/m/gi, 'ｍ');
};