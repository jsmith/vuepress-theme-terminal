# vuepress-theme-terminal
> A terminal theme for VuePress!

[Demo](https://jsmith.github.io/vuepress-theme-terminal)
[My Portfolio](https://jsmith.github.io)

## Usage
See the `demo/` folder for a working example!

Here is a brief overview:
```
# yourprojectfolder/.vuepress/config.js
module.exports = {
  ...
  theme: 'terminal',
  ...
}
```

```
# yourprojectfolder/README.md

---
user: john
welcome: Welcome to John's Portfolio!
about: Current Software Engineering Student @ BUC. My name is John!
socials:
    - title: github
      link: github.com/john
    - title: linkedin
      link: linkedin.com/in/john
    - title: email
      link: john@john.ca
projects:
    -   title: vue-terminal
        link: github.com/jsmith/prompt
        description: >
            `vue-terminal` is the Vue component library I made to power this website. It tries
            its best to mimic a regular zsh shell (tab completion, simple commands, etc.).
    -   title: another-project
        description: An awsome project basically!
        link: github.com/john/another-project
---
```

## Development
```
npm i

npm run serve  # run hot reload
npm run lint  # fix linter errors
```
