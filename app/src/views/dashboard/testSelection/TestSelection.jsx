import React from 'react';
import TestItem from '../../../components/testChooseItem/TestChooseItem';

function TestSelection() {
	return (
		<React.Fragment>
			<TestItem
				abbreviation='SUS'
				decryption='System Usability Scale'
				description='Описание'
			/>
			<TestItem
				abbreviation='PSSUQ'
				decryption='Post-Study System Usability Questionnaire'
				description='Описание'
			/>
			<TestItem
				abbreviation='MDT'
				decryption='Post-Study System Usability Questionnaire'
				description='Описание'
			/>
		</React.Fragment>
	);
}

export default TestSelection;
