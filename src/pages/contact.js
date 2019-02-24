import React from 'react'
import { FormattedMessage as Translated } from 'react-intl'

import Layout from '../components/layout'
import ContactForm from '../components/contact-form'

export default ({ pathContext: { locale } }) => (
	<Layout locale={locale}>
		<h1>
			<Translated id="contact-headline" />
		</h1>
		<ContactForm />
	</Layout>
)
