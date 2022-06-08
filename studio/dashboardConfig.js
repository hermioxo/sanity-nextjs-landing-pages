export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62a0140b8d704120f8dcd805',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rygicqs4',
                  apiId: '6e370ead-d742-4e82-844e-587ab9e095d7'
                },
                {
                  buildHookId: '62a0140bf7cb631fb7a4240b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-13x1y47u',
                  apiId: '4781f04e-c3f8-4c49-8d1d-b1c692cd3eba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hermioxo/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-13x1y47u.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
