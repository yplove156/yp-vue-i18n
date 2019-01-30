<template>
  <div id="app">
    <div id="nav">
      <a href="#" @click.prevent="lang('zh-CN')">简体中文</a> |
      <a href="#" @click.prevent="lang('en-US')">English</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    lang (language) {
      localStorage.setItem('language', language)
      window.location.reload()
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
