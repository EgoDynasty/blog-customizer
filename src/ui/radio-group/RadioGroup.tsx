import clsx from 'clsx';
import { OptionType } from 'src/constants/articleProps';
import styles from './RadioGroup.module.scss';

export type RadioGroupProps = {
	name?: string;
	title?: string;
	options: OptionType[];
	value: OptionType;
	onChange?: (value: OptionType) => void;
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
	name,
	title,
	options,
	value,
	onChange,
}) => {
	return (
		<div className={styles.radioGroup}>
			{title && <span className={styles.title}>{title}</span>}
			{options.map((option) => (
				<label key={option.value} className={styles.radioLabel}>
					<input
						type='radio'
						name={name}
						value={option.value}
						checked={option.value === value.value}
						onChange={() => onChange?.(option)}
						className={styles.radioInput}
					/>
					<span
						className={clsx(styles.radioCustom, {
							[styles.active]: option.value === value.value,
						})}>
						{option.title}
					</span>
				</label>
			))}
		</div>
	);
};
