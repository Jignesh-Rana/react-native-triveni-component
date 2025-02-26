# react-native-triveni-component

Triveni custom component library

## Installation

```sh
npm install react-native-triveni-component
```

## Installing dependencies into a bare React Native project

```sh
npm install react-native-device-info
```

### ios

```sh
npx pod-install
```

## Usage

## CustomButton Component

```js
import { CustomButton } from 'react-native-triveni-component';

// ...

<CustomButton title="Submit"/>
```

Properties used to customize the rendering:

| Prop              | Default     | Type | Description |
|-------------------|-------------|------|-------------|
| **title** | - |`string` | To define button title |
| **variant** | default | `enum` | Display the button as per the variant, default and border |
| **radius** | round | `enum` | Radius of button, total radius type none, normal and round |
| **icon** | - | `ReactNode` | Display the icon with title |
| **btnBgColor** | primary | `enum` | background color of button |
| **isBottomMargin** | false | `boolean` | Add bottom marge |
| **btnTitleStyle** | - | `object` | Add additional button title style |
| **style** | - | `object` | Add additional button style |
| **onPress** | - | `function` | onPress of button |

## CustomText Component

```js
import { CustomText } from 'react-native-triveni-component';

// ...

<CustomText>Your Text</CustomText>
```

Properties used to customize the rendering:

| Prop              | Default     | Type | Description |
|-------------------|-------------|------|-------------|
| **size** | base |`enum` | Size of text component like xxs, xs, base, sm, md, xl, xl2, xl3, xl4 |
| **font** | Regular | `enum` | Custom font of text component like Bold, SemiBold, Medium, Regular |
| **textColor** | black | `enum` | Color of text component |
| **icon** | - | `ReactNode` | Display the icon with title |
| **btnBgColor** | primary | `enum` | background color of button |
| **style** | - | `object` | Add additional text style |
| **onPress** | - | `function` | onPress of text component |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
