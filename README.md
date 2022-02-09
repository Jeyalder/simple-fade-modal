# simple-react-modal

## Modal pluggin for [project 14 : Pass a jQuery library to React](https://github.com/Keidaten/JeremyAlderweireldt_14_01012022)

A simple react modal (conversion of the [jquery modal](https://github.com/kylefox/jquery-modal))

[Npm](https://www.npmjs.com/package/rs-react-modal)

1. [Installation](#Installation)
2. [Examples](#Example)
3. [Props](#Props)

<div id='Installation'>

## Installation

Install simple-react-modal with npm:
`npm i simple-fade-modal`

## How to use

#### Basic usage

```js
import { Modal } from 'simple-fade-modal';

function MyModal() {
	const [modalState, setModalState] = useState(false);

	const toggle = () => {
		setModalState((prev) => !prev);
	};

	return (
		<>
			<button onClick={toggle}>Save</button>
			<Modal toggleModal={toggle} modalState={modalState}>
				I'm the content
			</Modal>
		</>
	);
}
```

#### Customized

```js
const myContentStyle = {
	fontSize: '1.25rem',
	color: 'red',
	background: 'beige',
};

<Modal toggleModal={toggle} modalState={modalState} fadeDuration="200ms" contentStyle={myContentStyle} />;
//fadeDuration is 400ms by default
```

<div id='Props'>

## Proptypes

```js
Modal.propTypes = {
	modalState: PropTypes.bool.isRequired,
	toggleModal: PropTypes.func.isRequired,
	fadeDuration: PropTypes.string,
	contentStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	backgroundStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
```
