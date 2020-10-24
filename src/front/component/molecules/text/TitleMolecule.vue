<template>
  <div class="title-molecule">
    <title-atom :title="title" />
    <link-atom
      v-show="showLink"
      :to="to"
      :label="linkLabel"
      class="title-link-atom"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import TitleAtom from '@/front/component/atoms/text/TitleAtom.vue';
import LinkAtom from '@/front/component/atoms/link/LinkAtom.vue';

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: '',
    },
    showLink: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: '',
    },
    linkLabel: {
      type: String,
      default: '',
    },
  },
  components: {
    'title-atom': TitleAtom,
    'link-atom': LinkAtom,
  },
});
</script>
<style scoped>
@media screen and (min-width: 481px) {
  .title-molecule {
    text-align: center;
    position: relative;
  }
  .title-link-atom {
    position: absolute;
    right: 30px;
    top: 0;
    bottom: 0;
    text-decoration: none;
  }
}
@media screen and (min-width: 321px) and (max-width: 480px) {
  .title-molecule {
    text-align: center;
    position: relative;
  }
  .title-link-atom {
    display: none;
  }
}
@media screen and (max-width: 320px) {
  .title-molecule {
    text-align: center;
    position: relative;
  }
  .title-link-atom {
    display: none;
  }
}
</style>
