import React from 'react'
import { navigate } from 'gatsby'
import { FormattedMessage as TranslatedContent } from 'react-intl'

import Layout from '../components/layout'
import PrimaryButton from '../components/primary-button'

export default ({ pathContext: { locale } }) => (
	<Layout locale={locale}>
		<h1>
			<TranslatedContent id="landing-headline" />
		</h1>
		<p>
			<TranslatedContent id="landing-body" />
		</p>
		<div
			style={{ marginTop: `9rem`, display: `flex`, justifyContent: `center` }}
		>
			<PrimaryButton onClick={() => navigate('/contact/')}>
				<TranslatedContent id="contact-button-text" />
			</PrimaryButton>
		</div>
	</Layout>
)
