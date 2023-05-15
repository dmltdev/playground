# Educatio Bootstrap theme  

## Author: Dmytro Lutsenko | [Website](https://dmytrolutsenko.com)  

---
After installing the theme, run `npm install` to install all required dependencies listed in package.json

VS Code users may customize SCSS with [Watch Sass](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)  
Others may utilize npm sass compiler:

```bash
    npm install sass --save-dev
```

Add the below scripts in package.json:

```json
    "scripts": {
      "sass-dev": "sass --watch --update --style=expanded assets/scss:assets/css",
      "sass-prod": "sass --no-source-map --style=compressed assets/scss:assets/css"
}
```

To enable script for development, run `npm run sass-dev`. If you want to make a minified file, use `npm run sass-prod`.
