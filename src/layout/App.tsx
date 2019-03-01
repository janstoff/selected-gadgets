import React from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'

// Styling
import styles from './app.module.scss'

// Components
import Header from '../elements/header'

// Locale data
import enData from 'react-intl/locale-data/en'
import deData from 'react-intl/locale-data/de'

// Translations
import en from '../i18n/en.json'
import de from '../i18n/de.json'

const translations = { en, de }

addLocaleData([...enData, ...deData])

interface AppProps {
	readonly locale: string
	readonly children: any
}

const AppLayout: React.SFC<AppProps> = ({ locale, children }: AppProps) => (
	<IntlProvider
		locale={locale}
		messages={translations[locale]}
		textComponent={React.Fragment}
	>
		<div className={styles.App}>
			<Header locale={locale} />
			{children}
		</div>
	</IntlProvider>
)

export default AppLayout
