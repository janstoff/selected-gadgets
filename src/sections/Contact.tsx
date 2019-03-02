import React from 'react'
import {
	FormattedMessage as Translated,
	injectIntl,
	InjectedIntlProps,
} from 'react-intl'

import styles from './contact.module.scss'
import PrimaryButton from '../components/PrimaryButton'
import SectionLayout from '../layout/Section'

interface ContactProps extends InjectedIntlProps {}

const Contact: React.FunctionComponent<ContactProps> = ({
	intl: { formatMessage },
}: ContactProps) => (
	<SectionLayout id="contact">
		<form action="https://formspree.io/jan.steinhoff@gmail.com" method="POST">
			<h1>
				<Translated id="contact-header" />
			</h1>
			<div>
				<div className={styles.formGroup}>
					<input type="email" name="email" required placeholder="email" />
					<label htmlFor="email">email</label>
				</div>
				<div className={styles.formGroup}>
					<input name="name" required placeholder="name" />
					<label htmlFor="name">name</label>
				</div>
			</div>
			<div className={styles.formGroup}>
				<textarea
					name="message"
					required
					placeholder={formatMessage({ id: 'message-label' })}
				/>
				<label htmlFor="message">
					<Translated id="message-label" />
				</label>
			</div>
			<div className={styles.formGroup}>
				<PrimaryButton type="submit">send</PrimaryButton>
			</div>
		</form>
	</SectionLayout>
)

export default injectIntl(Contact)
