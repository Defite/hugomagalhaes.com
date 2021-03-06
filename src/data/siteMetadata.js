const languages = require('./languages');

module.exports = {
  siteUrl: 'https://www.hugomagalhaes.com',
  description: 'Senior software engineer and agile manager. React, and Node.js enthusiast. Engineering Lead @ BCG Digital Ventures. Berlin, Germany',
  author: {
    name: 'Hugo Nogueira',
    bio: 'Senior software engineer and agile manager. React, and Node.js enthusiast. <br/> Engineering Lead @ <a href="https://www.bcgdv.com">BCG Digital Ventures</a>. Berlin, Germany',
    homeCity: 'Berlin',
    email: 'hugomn@gmail.com',
    twitter: 'hugomn',
    defaultLink: 'https://github.com/hugomn'
  },
  sourceCodeLink: 'https://github.com/hugomn/hugomagalhaes.com',
  disqusShortname: 'hugomagalhes',
  menu: [
    {label: 'home', slug: '/'},
    {label: 'blog', slug: '/blog/'},
    {label: 'about', slug: '/about/'},
    {label: 'contact', slug: '/contact/'},
    {label: 'call', link: 'http://call.hugomagalhaes.com/'},
  ],  
  languages,
  contact: [
    {
      type: 'email',
      value: 'hugomn@gmail.com',
      link: 'mailto:hugomn@gmail.com'
    },
    {
      type: 'phone',
      value: '+49 151 74477807',
      country: 'de',
      link: 'tel:+49 151 74477807'
    }
  ]
};
