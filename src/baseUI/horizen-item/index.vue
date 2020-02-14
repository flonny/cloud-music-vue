<template>
  <Scroll
    ref="horizenScroll"
    direction="horizental"
  >
    <div
      ref="category"
    >
      <div class="list">
        <span>{{ title }}</span>
        <span
          v-for="item in list"
          :key="item.key"
          class="list-item"
          :class="{'selected':(oldVal ===item.key)}"
        >{{ item.name }}</span>
      </div>
    </div>
  </Scroll>
</template>
<script>
import Scroll from '../scroll/index.vue';

export default {
  components: { Scroll },
  props: {
    list: { type: Array, default: () => [] },
    oldVal: { type: String, default: '' },
    title: { type: String, default: '' },
  },
  mounted() {
    this.initHorizen();
  },
  methods: {
    handleClick(val) {
      this.$emit('handleClick', val);
    },
    initHorizen() {
      const categoryDOM = this.$refs.category;
      const tagElems = categoryDOM.querySelectorAll('span');
      let totalWidth = 0;
      Array.from(tagElems).forEach((ele) => {
        totalWidth += ele.offsetWidth;
      });
      categoryDOM.style.width = `${totalWidth}px`;
      this.$refs.horizenScroll.refresh();
    },
  },
};
</script>
<style lang="stylus" scoped>
.list {
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;

  >span:first-of-type {
    display: block;
    flex: 0 0 auto;
    padding: 5px 0;
    margin-right: 5px;
    color: grey;
    font-size: font-size-m;
    vertical-align: middle;
  }
}

.list-item {
  flex: 0 0 auto;
  font-size: font-size-m;
  padding: 5px 8px;
  border-radius: 10px;

  &.selected {
    color: theme-color;
    border: 1px solid theme-color;
    opacity: 0.8;
  }
}
</style>
