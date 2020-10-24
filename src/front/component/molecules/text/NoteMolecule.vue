<template>
  <div class="note-molecule">
    <note-atom :note="note" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import NoteAtom from '@/front/component/atoms/text/NoteAtom.vue';
export default Vue.extend({
  props: {
    note: {
      type: String,
      default: '',
    },
  },
  components: {
    'note-atom': NoteAtom,
  },
});
</script>
<style scoped>
@media screen and (min-width: 481px) {
  .note-molecule {
    margin: 11px 0px 3px;
    text-align: center;
  }
}
@media screen and (min-width: 321px) and (max-width: 480px) {
  .note-molecule {
    margin: 12px 0px 3px;
    text-align: center;
  }
}
@media screen and (max-width: 320px) {
  .note-molecule {
    margin: 5px 0px 3px;
    text-align: center;
  }
}
</style>
