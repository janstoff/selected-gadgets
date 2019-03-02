import React, { Fragment } from 'React'

import styles from './languageSelect.module.scss'
import locales from '../config/locales'
import { navigate } from '@reach/router'

interface LanguageSwitchProps {
	readonly locale: string
}

const LanguageSwitch: React.SFC<LanguageSwitchProps> = ({
	locale,
}: LanguageSwitchProps) => {
	const languageOptions = Object.keys(locales)

	return (
		<div className={styles.languageSwitchContainer}>
			{languageOptions.map(language => (
				<button
					key={language}
					disabled={language === locale}
					className={
						language === locale ? styles.switchBtnActive : styles.switchBtn
					}
					onClick={() => navigate(language === 'de' ? '/' : '/en/')}
				>
					{language}
				</button>
			))}
		</div>
	)
}

export default LanguageSwitch
