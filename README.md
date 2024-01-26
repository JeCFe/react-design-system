[![Build and deploy storybook](https://github.com/JeCFe/react-design-system/actions/workflows/storybook.yml/badge.svg)](https://github.com/JeCFe/react-design-system/actions/workflows/storybook.yml)
[![Package Deployment](https://github.com/JeCFe/react-design-system/actions/workflows/release-package.yml/badge.svg?event=release)](https://github.com/JeCFe/react-design-system/actions/workflows/release-package.yml)

# Using this package

To install and use this package you will need to set up an npm registry pathway, you can do this by the following:

```bash
 npm config set @jecfe:registry https://npm.pkg.github.com
```

This will tell npm installer that any packages with `@jecfe` to look at github packages.

# Installing

```bash
npm i @jecfe/react-design-system
```

# Local build

You can locally by this by

```bash
npm run build
```

You can locally build TypeScript and JavaScript bundles by

```bash
// Typescript
npm run build:esm

//JavaScript
npm run build:cjs
```

# Storybook

You can view the UI storybook here:
[https://jecfe.github.io/react-design-system/](https://jecfe.github.io/react-design-system/)

# Storybook local

You will be able to run storybook locally:

```bash
npm run storybook
```

Then nagivating to `localhost:6006`
