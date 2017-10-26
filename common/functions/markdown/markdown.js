import { Handlebars } from '../../lib/handlebars.js';

export const markdown = {
  name: 'markdown',
  aliases: [],
  type: 'render',
  help: 'An element for rendering markdown text. Great for single numbers, metrics or paragraphs of text.',
  context: {
    types: ['datatable', 'null'],
  },
  args: {
    _: {
      types: ['string'],
      help: 'A string containing markdown. You can pass this multiple times to achieve concatenation',
      default: '',
      multi: true,
    },
    font: {
      types: ['style'],
      help: 'Font settings. Technically you can stick other styles in here too!',
      default: '{font}',
    },
  },
  fn: (context, args) => {
    const compileFunctions = args._.map(str => Handlebars.compile(String(str)));
    const ctx = Object.assign({
      columns: [],
      rows: [],
      type: null,
    }, context);

    return {
      type: 'render',
      as: 'markdown',
      value: {
        content: compileFunctions.map(fn => fn(ctx)).join(''),
        font: args.font,
      },
    };
  },
};
