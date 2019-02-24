import React from 'react'
import { FormattedMessage as Translated } from 'react-intl'

import LanguageSwitch from './language-switch'
import LocalizedLink from './localized-link'
import styles from './header.module.css'

const ListLink = props => (
	<li className={styles.listLink}>
		<LocalizedLink
			to={props.to}
			style={{ color: `grey` }}
			activeStyle={{ color: `white` }}
		>
			{props.children}
		</LocalizedLink>
	</li>
)

const Header = ({ locale }) => {
	return (
		<header>
			<LocalizedLink
				to="/"
				style={{ color: `grey`, textShadow: `none`, backgroundImage: `none` }}
				activeStyle={{ color: `white` }}
			>
				<h3>
					<Translated id="title" />
				</h3>
			</LocalizedLink>
			<ul className={styles.navigationList}>
				<ListLink to="/about/">
					<Translated id="about" />
				</ListLink>
				<ListLink to="/contact/">
					<Translated id="contact" />
				</ListLink>
				<LanguageSwitch locale={locale} />
			</ul>
		</header>
	)
}

export default Header
