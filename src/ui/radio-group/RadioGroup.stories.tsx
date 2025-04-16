import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';
import { useState } from 'react';
import { OptionType } from 'src/constants/articleProps';

const meta: Meta<typeof RadioGroup> = {
	component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const RadioGroupWithState = () => {
	const options: OptionType[] = [
		{ title: '1 опция', value: '1 опция', className: '' },
		{ title: '2 опция', value: '2 опция', className: '' },
		{ title: '3 опция', value: '3 опция', className: '' },
		{ title: '4 опция', value: '4 опция', className: '' },
	];
	const [value, setValue] = useState<OptionType>(options[0]);

	return (
		<>
			<RadioGroup
				value={value}
				name='radio'
				onChange={setValue}
				options={options}
				title='Название радиогруппы'
			/>
		</>
	);
};

export const RadioGroupStory: Story = {
	render: () => <RadioGroupWithState />,
};
