<template>
  <Layout :title="$page.skill.name" section="Skills">
    <div v-html="$page.skill.description"></div>
  </Layout>
</template>

<page-query>
query Skill ($path: String!) {
  skill: skill (path: $path) {
    name
    description
  }
}
</page-query>

<script>
import Layout from "~/layouts/Default.vue";
export default {
  components: {
    Layout
  },
  metaInfo() {
    return {
      title: "Skills: " + this.data.title
    };
  }
};
</script>
