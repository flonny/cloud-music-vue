<template>
  <div>
    <header class="top">
      <span class="iconfont menu">&#xe65c;</span>
      <span class="title">WebApp</span>
      <span class="iconfont search">&#xe62b;</span>
    </header>
    <nav class="tab">
      <router-link to="/recommend">
        <div class="tab-item">
          <span>推荐</span>
        </div>
      </router-link>
      <router-link to="/singers">
        <div class="tab-item">
          <span>歌手</span>
        </div>
      </router-link>
      <router-link to="/rank">
        <div class="tab-item">
          <span>排行榜</span>
        </div>
      </router-link>
    </nav>
    <router-view />
  </div>
</template>
<style lang="stylus" scoped>
@import './style'
</style>
