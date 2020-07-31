# Qilin Store library

## Build

```bash
yarn build
```

## Install in ohther project

```bash
yarn add https://github.com/qilin/store-library#version-tag
```

## Usage

```tsx
import React from "react";
import { Skeleton, VkontakteIcon, H2Bold, COLORS, Grid } from "store-library";

const { RED_500, GRAY_900, GRAY_700 } = COLORS;

class Example extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: RED_500 }}>
        <H2Bold>Hello world!</H2Bold>
        <Grid.Row gap="20px">
          <Grid.Col xs={6} md={3} lg={2}>
            <Skeleton from={GRAY_700} to={GRAY_900} />
          </Grid.Col>
          <Grid.Col xs={6} md={3} lg={2}>
            <Skeleton from={GRAY_700} to={GRAY_900} />
          </Grid.Col>
          <Grid.Col xs={6} md={3} lg={2}>
            <Skeleton from={GRAY_700} to={GRAY_900} />
          </Grid.Col>
        </Grid.Row>
        <VkontakteIcon />
      </div>
    );
  }
}

```

## Development

In Store library

```bash
cd store-library
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
yarn link store-library
```

In Store library

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
yarn add https://github.com/qilin/store-library#new-version
```

## License

MIT ©
