import React from 'react'
import styles from './header.module.scss'
import LanguageSelect from './LanguageSelect'

// import NavigationMenu from "../components/NavigationMenu";

interface HeaderProps {
	readonly locale: string
}

// const HomeLink: React.SFC = () => (
//   <LocalizedLink className={styles.homeLink} to="/">
//     <img src={require("../styling/images/home.svg")} alt="Home" />
//   </LocalizedLink>
// );

const Header: React.SFC<HeaderProps> = ({ locale }: HeaderProps) => (
	<div className={styles.header}>
		<LanguageSelect locale={locale} />
		{/* <HomeLink /> */}
		{/* <NavigationMenu /> */}
	</div>
)

export default Header
