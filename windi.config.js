import { defineConfig } from 'windicss/helpers'

const plugin = require('windicss/plugin');

export default defineConfig({
  extract: {
    include: ['app/**/*.{vue,html,jsx,tsx,erb}'],
    exclude: ['node_modules', '.git'],
  },
  plugins: [
    plugin(({ addComponents }) => {
      const avatars = {
        '.underlined-h1': {
          textDecoration: 'none',
          fontWeight: 'normal',
          margin: '0 auto',
        },
      };
      addComponents(avatars);
    }),
  ]
})
