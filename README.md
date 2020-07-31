# Qilin Admin library

## Build

```bash
yarn build
```

## Install in ohther project

```bash
yarn add https://github.com/qilin/admin-library#version-tag
```

## Development

In Admin library

```bash
cd admin-library
yarn link

cd node_modules/react
yarn link

cd ../react-dom/
yarn link
```

In you project

```bash
yarn link react
yarn link react-dom
yarn link admin-library
```

In Admin library

```bash
yarn start
```

Making changes.
All changes will aply to your project.

After push changes in master-branch:

```
git tag // watch the latest version
git tag -a new-version -m new-version
git push --tags
```

In you project

```bash
yarn add https://github.com/qilin/admin-library#new-version
```

## License

MIT ©
