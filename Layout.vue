<template>
  <div class="terminal__container">
    <div id="terminal-mount"></div>
    <i class="info-button fas fa-info-circle" @click="open = true"></i>
    <model v-model="open">
      <i class="fas fa-code icon-text"></i> by
      <a class="link" href="https://github.com/jacsmith21" target="_blank"> @jacsmith21</a>
    </model>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Model from './Modal'

  // noinspection JSUnusedGlobalSymbols
  export default {
    name: 'Layout',
    data: () => ({open: false}),
    components: { Model },
    computed: {
      data () {
        return this.$page.frontmatter
      },
      fs () {
        return {
          home: {
            [this.data.user]: {
              projects: this.projects,
              '.bashrc': 'cd ~\nalias ll="ls -l"',
              'About.txt': this.data.about,
              'Socials.txt': this.socials
            }
          }
        }
      },
      projects () {
        let p = {}
        this.data.projects.map(project => {
          p[`${project.title}.txt`] = `Title: ${project.title}\nLink: ${project.link}\nDescription: ${project.description}`
        })
        return p
      },
      config () {
        return {
          user: this.data.user,
          welcome: this.data.welcome,
          fileSystem: this.fs
        }
      },
      socials () {
        return this.data.socials.map(social =>  `${social.title} -> ${social.link}`).join('\n')
      }
    },
    mounted () {
      // eslint-disable-next-line
      import('@jsmith21/vue-terminal').then(Terminal => {
        const Component = Vue.extend({
          render: (h) => h(Terminal.default, { props: this.config, class: 'terminal--component' })
        })
        new Component().$mount('#terminal-mount')
      })
    }
  }
</script>

<style scoped lang="stylus">
@import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css')

.terminal__container
  display flex
  justify-content center
  align-items: center
  position absolute
  left 0
  top 0
  height 100%
  width 100%

  >>> .terminal--component
    box-shadow 6px 6px 36px 4px rgba(0,0,0,0.38)
    padding 0

  .info-button
    position absolute
    top 10px
    right 12px
    color rgb(30, 31, 41)
    opacity 0.4
    font-size 1.3em

    &:hover
      cursor pointer
      opacity 0.8

  .icon-text
    opacity 0.7
    margin 0 5px

  .link
    text-decoration: none
    margin-left: 5px
    font-weight: 600
    color rgba(0,0,0,0.8)
</style>
