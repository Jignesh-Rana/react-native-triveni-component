# react-native-triveni-component

Triveni custom component library

## Installation

```sh
npm install react-native-triveni-component
```

## Usage


```js
import { CustomButton } from 'react-native-triveni-component';

// ...

<CustomButton title="Submit"/>
```

## CustomButton Component

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

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
