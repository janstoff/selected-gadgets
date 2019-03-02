import React from 'react'
import { FormattedMessage as Translated } from 'react-intl'

import AppLayout from '../layout/App'
import Landing from '../sections/Landing'
import Contact from '../sections/Contact'
import About from '../sections/About'
import LocalizedLink from '../components/LocalizedLink'

if (typeof window !== 'undefined') {
	// Make scroll behavior of internal links smooth
	require('smooth-scroll')('a[href*="#"]', {
		speed: 100,
		speedAsDuration: true,
	})
}

export default ({ pathContext: { locale } }): JSX.Element => (
	<AppLayout locale={locale}>
		<Landing />
		<About />
		<Contact />
	</AppLayout>
)
