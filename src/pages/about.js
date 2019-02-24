import React from 'react'
import { FormattedMessage as Translated } from 'react-intl'

import Layout from '../components/layout'

export default ({ pathContext: { locale } }) => (
	<Layout locale={locale}>
		<h1>
			<Translated id="about-headline" />
		</h1>
		<p>
			<Translated id="about-body" />
		</p>
	</Layout>
)
