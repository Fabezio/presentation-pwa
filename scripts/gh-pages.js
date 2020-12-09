const ghPages = require('gh-pages')

ghPages.publish(
  '__sapper__/export',
  {
    branch: 'main',
    repo: 'presentation.git',
    user: {
      name: 'fabezio',
      email: 'fabezio@outlook.fr',
    },
  },
  () => {
    console.log('Deploy complete!')
  },
)
