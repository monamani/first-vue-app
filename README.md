# first-vue-app

## Project setup
```
yarn install
```
### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


1. From the nav whn we click on link it will not change automatically
the content of the pageViewer so we have 2 options 

 1.1 : we call $watch on the created 
 1.2 will pass propos on router and then we add watch() 