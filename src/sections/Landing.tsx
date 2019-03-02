import React from 'react'
import { FormattedMessage as Translated } from 'react-intl'

import styles from './landing.module.scss'
import LocalizedLink from '../components/LocalizedLink'
import DownButton from '../components/DownButton'

interface ContactButtonProps {
	readonly children: any
	readonly to: string
}

const ContactButton: React.SFC<ContactButtonProps> = ({
	children,
	to,
}: ContactButtonProps) => (
	<LocalizedLink className={styles.contactButton} to={to}>
		{children}
	</LocalizedLink>
)

const Landing: React.SFC = () => (
	<div className={styles.base}>
		<header className={styles.heading}>
			<h1>
				<span className={styles.headingMain}>
					<Translated id="brand-name" />
				</span>
				<span className={styles.headingSub}>
					<Translated id="brand-heading-slogan" />
				</span>
			</h1>
			<ContactButton to="/#contact">
				<Translated id="contact-button-text" />
			</ContactButton>
		</header>
		<DownButton>
			<Translated id="learn-more-button-text" />
		</DownButton>
	</div>
)

export default Landing
