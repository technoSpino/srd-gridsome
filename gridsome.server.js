// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async store => {
    const { data } = await axios.get('http://dnd5eapi.co/api/skills')

    const skills = store.addContentType({
      typeName: 'Skill',
      route: '/skills/:slug'
      // refs: {
      //   abilityscore
      // }
    })

    for (const item of data.results) {
      let path = `/skills/${item.index}`
      console.log(item.url);
      const { data } = await axios.get(item.url)
      const skill = data
      console.log(skill);
      skills.addNode({
        id: item.index,
        title: item.name,
        fields: {
          name: skill.name,
          description: skill.desc
        }
      })
    }
  })
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          whitelist: [/^vuetify/]
        })
      ])
    }
  })
}