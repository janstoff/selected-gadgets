import React from 'React'

import styles from './languageSwitch.module.css'
import locales from '../utils/constants/locales'
import { navigate } from '@reach/router'

export default ({ locale }) => {
	const languageOptions = Object.keys(locales)

	return languageOptions.map(language => (
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
	))
}
