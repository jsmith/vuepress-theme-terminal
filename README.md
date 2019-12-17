# vuepress-theme-terminal
<img src="https://i.ibb.co/gJc6psR/image.png" alt="image" border="0">

> A terminal (portfolio) theme for VuePress!

> WARNING: This package may be broken at the moment due to weird WebPack issues I've encountered when upgrading packages. I will try to fix when I have more motivation.

## Demos
[Basic Demo](https://jsmith.github.io/vuepress-theme-terminal)

## Usage
This theme is best used for a portfolio site.

See the `demo/` folder for a working example!

Here is a brief overview:
```javascript
// yourprojectfolder/.vuepress/config.js
module.exports = {
  ...
  theme: 'terminal',
  ...
}
```

```yaml
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
        description: An awesome project basically!
        link: github.com/john/another-project
---
```

> Beware of using project names with spaces as this is not currently supported.

## Missing a feature?
This project was developed for my personal portfolio. As such, I only implemented the features I needed. If there is a new feature you'd like to see implemented, create a issue or put up a PR (contributions are very welcome).

## Development
Install the dependencies:
```
npm i
```

Symlink this folder to node_modules
```
n -s $(pwd) $(pwd)/node_modules/vuepress-theme-terminal so that vuepress can find out the files :)
```

then run the development server!
```
npm run dev  # run hot reload
```

### Publishing
```
VERSION="YOUR_VERSION"
git add .
git commit -m "$VERSION"
git tag v$VERSION
git push
npm publish
```
