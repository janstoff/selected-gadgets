import React from 'react'
import { FormattedMessage as Translated } from 'react-intl'

import AppLayout from '../layout/App'
import Landing from '../elements/Landing'
import ContactForm from '../elements/ContactForm'
import About from '../elements/About'
import LocalizedLink from '../components/LocalizedLink'

export default ({ pathContext: { locale } }): JSX.Element => (
	<AppLayout locale={locale}>
		<Landing />
		<About />
		<ContactForm />
		<LocalizedLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
			<Translated id="back-to-top-link" />
		</LocalizedLink>
	</AppLayout>
)
