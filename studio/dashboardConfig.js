export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebdb31aed34be6e03e30018',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-yzgy4w6y',
                  apiId: '571ddbaa-c436-40f1-a5ea-9919c83c0770'
                },
                {
                  buildHookId: '5ebdb31a504c4021e4897251',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-nfcmde3d',
                  apiId: '5578fead-b46e-4c9c-95c8-c4eebd969d9a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/krsnaa/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-nfcmde3d.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
