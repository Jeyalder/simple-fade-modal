import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Modal } from '../components/Modal';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
	const [modalState, setModalState] = useState(false);

	const toggle = () => {
		setModalState((prev) => !prev);
	};

	return (
		<div className="form">
			<button onClick={toggle}>Save</button>
			<Modal toggleModal={toggle} modalState={modalState}>
				Employee created !
			</Modal>
		</div>
	);
});
