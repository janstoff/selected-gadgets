import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider, addLocaleData } from 'react-intl'

// Components
import Header from './header'

// Locale data
import enData from 'react-intl/locale-data/en'
import deData from 'react-intl/locale-data/de'

// Translations
import en from '../i18n/en.json'
import de from '../i18n/de.json'

const translations = { en, de }

addLocaleData([...enData, ...deData])

const Layout = ({ locale, children }) => (
	<IntlProvider locale={locale} messages={translations[locale]}>
		<div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
			<Header locale={locale} />
			{children}
		</div>
	</IntlProvider>
)

Layout.propTypes = {
	locale: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]).isRequired,
}

export default Layout
