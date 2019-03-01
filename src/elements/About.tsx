import React from 'react'
import { FormattedMessage as Translated } from 'react-intl'

import styles from './about.module.scss'

const About: React.FunctionComponent = () => (
	<div id="about" className={styles.container}>
		<h1>
			<Translated id="about-headline" />
		</h1>
		<p>
			<Translated id="about-body" />
		</p>
	</div>
)

export default About
