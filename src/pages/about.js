import React from 'react'
import { FormattedMessage as TranslatedContent } from 'react-intl'

import Layout from '../components/layout'

export default ({ pathContext: { locale } }) => (
	<Layout locale={locale}>
		<h1>
			<TranslatedContent id="about-headline" />
		</h1>
		<p>
			<TranslatedContent id="about-body" />
		</p>
	</Layout>
)
