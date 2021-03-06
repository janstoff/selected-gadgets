import React from 'react'

import styles from './header.module.scss'

import LanguageSwitch from '../components/LanguageSelect'
import NavigationMenu from '../components/NavigationMenu'
import LocalizedLink from '../components/LocalizedLink'

interface HeaderProps {
	readonly locale: string
}

const HomeLink: React.SFC = () => (
	<LocalizedLink className={styles.homeLink} to="/">
		<img src={require('../styling/images/home.svg')} alt="Home" />
	</LocalizedLink>
)

const Header: React.SFC<HeaderProps> = ({ locale }: HeaderProps) => (
	<div className={styles.header}>
		<LanguageSwitch locale={locale} />
		<HomeLink />
		<NavigationMenu />
	</div>
)

export default Header
