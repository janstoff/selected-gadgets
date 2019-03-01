import React from 'react'
import styles from './header.module.scss'
// import { Link } from "react-router-dom";
import LanguageSwitch from '../components/LanguageSwitch'

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
	<header className={styles.header}>
		<LanguageSwitch locale={locale} />
		{/* <HomeLink /> */}
		{/* <NavigationMenu /> */}
	</header>
)

export default Header
