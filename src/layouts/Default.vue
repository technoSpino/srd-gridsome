<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list>
        <v-list-group>
          <v-list-tile slot="activator">
            <v-list-tile-title>Skills</v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-for="skill in $static.skills.edges" :key="skill.id" avatar>
            <v-list-tile-content>
              <g-link :to="skill.node.path">
                <v-list-tile-title v-text="skill.node.title"></v-list-tile-title>
              </g-link>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-title>{{section}}: {{title}}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <slot/>
      </v-container>
    </v-content>
    <v-footer app>stigg</v-footer>
  </v-app>
</template>

<script>
export default {
  props: ["title", "section"]
};
</script>


<static-query>
query {
skills: allSkill{
    edges{
      node{
        id
        title
        description
        path
      }
    }
  }
}

</static-query>
<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
