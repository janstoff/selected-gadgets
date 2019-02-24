import React from 'react'
import { navigate } from 'gatsby'
import { FormattedMessage as Translated } from 'react-intl'

import Layout from '../components/layout'
import PrimaryButton from '../components/primary-button'

export default ({ pathContext: { locale } }) => (
	<Layout locale={locale}>
		<h1>
			<Translated id="landing-headline" />
		</h1>
		<p>
			<Translated id="landing-body" />
		</p>
		<div
			style={{ marginTop: `9rem`, display: `flex`, justifyContent: `center` }}
		>
			<PrimaryButton onClick={() => navigate('/contact/')}>
				<Translated id="contact-button-text" />
			</PrimaryButton>
		</div>
	</Layout>
)
