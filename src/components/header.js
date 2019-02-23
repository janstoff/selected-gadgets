import React from 'react'
import { FormattedMessage as TranslatedContent } from 'react-intl'
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

const Header = () => (
	<header>
		<LocalizedLink
			to="/"
			style={{ color: `grey`, textShadow: `none`, backgroundImage: `none` }}
			activeStyle={{ color: `white` }}
		>
			<h3>
				<TranslatedContent id="title" />
			</h3>
		</LocalizedLink>
		<ul className={styles.navigationList}>
			<ListLink to="/about/">
				<TranslatedContent id="about" />
			</ListLink>
			<ListLink to="/contact/">
				<TranslatedContent id="contact" />
			</ListLink>
		</ul>
	</header>
)

export default Header
