# react-native-triveni-component

The `react-native-triveni-component` is a custom component library developed by **Triveni Global Software Services LLP** for React Native applications. This library provides a collection of reusable, high-quality, and customizable UI components to accelerate the development process and maintain consistency across projects.

## Installation

```sh
npm install react-native-triveni-component
```

## Installing dependencies into a bare React Native project

```sh
npm install react-native-device-info
```

```sh
npm install react-native-fast-image
```

### ios

```sh
npx pod-install
```


## CustomButton Component

```js
import { CustomButton } from 'react-native-triveni-component';

// ...

<CustomButton title="Submit"/>
```

### Preview
![Hosted Image](https://raw.githubusercontent.com/Jignesh-Rana/react-native-triveni-component/refs/heads/main/assets/ButtonPreview.png "CustomButton Preview")

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

### Preview
![Hosted Image](https://raw.githubusercontent.com/Jignesh-Rana/react-native-triveni-component/refs/heads/main/assets/TextPreview.png "CustomText Preview")

Properties used to customize the rendering:

| Prop              | Default     | Type | Description |
|-------------------|-------------|------|-------------|
| **size** | base |`enum` | Size of text component like xxs, xs, base, sm, md, xl, xl2, xl3, xl4 |
| **font** | Regular | `enum` | Custom font of text component like Bold, SemiBold, Medium, Regular |
| **textColor** | black | `enum` | Color of text component |
| **style** | - | `object` | Add additional text style |
| **onPress** | - | `function` | onPress of text component |

## CustomInput Component

```js
import { CustomInput } from 'react-native-triveni-component';

// ...

<CustomInput
    title='First Name'
    placeholder='First Name'
/>
```

### Preview
![Hosted Image](https://raw.githubusercontent.com/Jignesh-Rana/react-native-triveni-component/refs/heads/main/assets/CustomInput.png "CustomInput Preview")

Properties used to customize the rendering:

| Prop              | Default     | Type | Description |
|-------------------|-------------|------|-------------|
| **title** | undefine |`string` | Input title |
| **value** | undefine |`string` | The value to show for the text input |
| **renderLeftIcon** | undefine | `ReactNode` | Render left input icon |
| **renderRightIcon** | undefine | `ReactNode` | Render right input icon |
| **renderErrorIcon** | undefine | `ReactNode` | Render error input icon |
| **errorText** | undefine | `string` | Input error text |
| **inputContainer** | undefine | `ViewStyle` | Add additional input container style |
| **mainContainer** | undefine | `ViewStyle` | Add additional main container style |
| **titleTxtStyle** | undefine | `TextStyle` | Add additional title text style |
| **style** | undefine | `TextStyle` | Add additional input style |
| **onChangeText** | undefine | `function` | Callback that is called when the text input's text changes. Changed text is passed as a single string argument to the callback handler |

## CustomImage Component

```js
import { CustomImage } from 'react-native-triveni-component';

// ...

<CustomImage
    source={{ uri: "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY" }}
/>
<CustomImage
    source={require('../images/Test.png')}
/>
```

### Preview
![Hosted Image](https://raw.githubusercontent.com/Jignesh-Rana/react-native-triveni-component/refs/heads/main/assets/CustomImage.png "CustomLoader Preview")

Properties used to customize the rendering:

| Prop              | Default     | Type | Description |
|-------------------|-------------|------|-------------|
| **resizeMode** | undefine |`enum` | contain, cover, stretch and center |
| **style** | undefine |`ImageStyle` | A React Native style. Supports using borderRadius. |
| **source** | undefine | `object` | Source for the remote image to load. Remote url to load the image from. e.g. 'https://facebook.github.io/react/img/logo_og.png'. Headers to load the image with. e.g. { Authorization: 'someAuthToken' }. |

## CustomLoader Component

```js
import { CustomLoader } from 'react-native-triveni-component';

// ...

<CustomLoader size="small"/>
<CustomLoader size="large"/>
<CustomLoader size={200}/>
```

### Preview
![Hosted Image](https://raw.githubusercontent.com/Jignesh-Rana/react-native-triveni-component/refs/heads/main/assets/CustomLoader.gif "CustomLoader Preview")

Properties used to customize the rendering:

| Prop              | Default     | Type | Description |
|-------------------|-------------|------|-------------|
| **color** | primary |`enum` | Loader color. |
| **size** | large |`enum` | Loader size like large, small and number. |
| **loaderViewStyle** | undefine | `ViewStyle` | Loader view style |
| **backgroundViewStyle** | undefine | `ViewStyle` | Loader background view style. |

## CustomTag Component

```js
import { CustomTag } from 'react-native-triveni-component';

// ...

<CustomTag
    title='Custom'
    tagBackgroundColor='blue'
    textColor='white'
    fontSize='md'
/>
```

### Preview
![Hosted Image](https://raw.githubusercontent.com/Jignesh-Rana/react-native-triveni-component/refs/heads/main/assets/CustomTag.png "CustomLoader Preview")

Properties used to customize the rendering:

| Prop              | Default     | Type | Description |
|-------------------|-------------|------|-------------|
| **title** | undefine |`string` | Tag title |
| **height** | 10 |`number` | Height of tag (This is a container with padding acting as height on both sides.) |
| **width** | 20 | `number` | Width of tag (This is a container with padding acting as width on both sides.). |
| **tagBackgroundColor** | blue | `string` | Background color of tag. |
| **tagViewStyle** | undefine | `Object` | Add additional style of customTag. |
| **fontSize** | base | `enum` | Font size of tagView title. |
| **fontFamily** | Regular | `enum` | Font family of tagView title. |
| **textColor** | black | `string` | Color of tag title. |

# Custom Hooks

A custom hook in React is a reusable function that starts with the prefix `use` and lets you encapsulate logic for managing state or side effects. It enables you to extract logic from components and share it across multiple components, making your code cleaner, modular, and easier to maintain.

## useHasNotch

A custom React hook that detects whether the device has a notch (common on modern smartphones). It returns a boolean value (`true` if the device has a notch, `false` otherwise). This can be useful for adjusting UI layouts or spacing to accommodate devices with notches.

```js
import { useHasNotch } from 'react-native-triveni-component';

// ...

const hasNotch = useHasNotch();
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
