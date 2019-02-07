import React from 'react'
import { Link } from "gatsby"
import styles from './header.module.css'

const ListLink = props => (
    <li className={styles.listLink}>
      <Link to={props.to} style={{ color: `grey`}} activeStyle={{ color: `white` }}>{props.children}</Link>
    </li>
  )

export default () => (
    <header>
			<Link to="/" style={{ color: `grey`, textShadow: `none`, backgroundImage: `none` }} activeStyle={{ color: `white` }}>
				<h3>MySweetSite</h3>
			</Link>
			<ul className={styles.navigationList}>
				<ListLink to="/about/">About</ListLink>
				<ListLink to="/contact/">Contact</ListLink>
			</ul>
	  </header>
    )
