const config = {
  title: 'Sambafied',
  tagline: 'Your assets. Your desktop. Your flow.',
  favicon: 'img/favicon.ico',
  url: 'https://sambafied.me',
  baseUrl: '/',
  organizationName: 'sambafied',
  projectName: 'sambafied-docs',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'throw'}},
  presets: [['classic', {
    docs: {sidebarPath: require.resolve('./sidebars.js'), routeBasePath: 'docs'},
    blog: false,
    theme: {customCss: require.resolve('./src/css/custom.css')},
  }]],
  themeConfig: {
    image: 'img/social.jpg',
    colorMode: {defaultMode: 'dark', disableSwitch: true, respectPrefersColorScheme: false},
    navbar: {
      title: '',
      logo: {alt: 'Sambafied home', src: 'img/umbrella-emblem.svg', width: 48, height: 48},
      items: [
        {type: 'dropdown', label: 'Products', position: 'left', items: [
          {label: 'DAM Client', to: '/products/dam-client'},
        ]},
        {to: '/docs', label: 'Documentation', position: 'left'},
        {to: '/docs/dam-client/status', label: 'Development status', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Explore', items: [{label: 'DAM Client', to: '/products/dam-client'}, {label: 'Documentation', to: '/docs'}]},
        {title: 'Evaluate', items: [{label: 'Getting started', to: '/docs/dam-client/getting-started'}, {label: 'Readiness & limits', to: '/docs/dam-client/status'}, {label: 'Adobe desktop app context', to: '/docs/dam-client/adobe-context'}]},
      ],
      copyright: 'Sambafied is an independent project and is not affiliated with Adobe. Adobe and Adobe Experience Manager are trademarks of Adobe.',
    },
  },
};
module.exports = config;
