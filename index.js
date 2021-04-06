const { Plugin } = require('powercord/entities');

module.exports = class Texter extends Plugin {
  startPlugin() {
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
        result: args
          .join(' ')
          .split('')
          .reverse()
          .join('')
          .replace(/a/gi, '\u0250')
          .replace(/b/gi, 'q')
          .replace(/c/gi, '\u0254')
          .replace(/d/gi, 'p')
          .replace(/e/gi, '\u01DD')
          .replace(/f/gi, '\u025F')
          .replace(/g/gi, '\u0183')
          .replace(/h/gi, '\u0265')
          .replace(/i/gi, '\u0131')
          .replace(/j/gi, '\u027E')
          .replace(/k/gi, '\u029E')
          .replace(/m/gi, '\u026F')
          .replace(/n/gi, 'u')
          .replace(/p/gi, "d")
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
          .replace(/_/gi, '\u203E')
          .replace(/;/gi, '\u061B')
          .replace(/\u203F/gi, '\u2040')
          .replace(/\u2045/gi, '\u2046')
          .replace(/\u2234/gi, '\u2235')
          .replace(/\r/gi, '\n'),
      }),
    });
    powercord.api.commands.registerCommand({
      command: 'flip',
      description: 'flips your text',
      usage: '{c} [Text you want to flip]',
      executor: (args) => ({
        send: true,
        result: args
          .join(' ')
          .replace(/a/gi, '\u0250')
          .replace(/b/gi, 'q')
          .replace(/c/gi, '\u0254')
          .replace(/d/gi, 'p')
          .replace(/p/gi, "d")
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
          .replace(/_/gi, '\u203E')
          .replace(/;/gi, '\u061B')
          .replace(/\u203F/gi, '\u2040')
          .replace(/\u2045/gi, '\u2046')
          .replace(/\u2234/gi, '\u2235')
          .replace(/\r/gi, '\n'),
      }),
    });
  }

  pluginWillUnload() {
    powercord.api.commands.unregisterCommand('flip');
    powercord.api.commands.unregisterCommand('reflip');
    powercord.api.commands.unregisterCommand('reverse');
  }
};
