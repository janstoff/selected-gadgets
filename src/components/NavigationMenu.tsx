import React, { Component, Fragment } from 'react'
import { HashLink } from 'react-router-hash-link'

import styles from './navigationMenu.module.scss'

class NavigationMenu extends Component {
	state = {
		menuOpen: false,
	}

	private handleMenuClick(): void {
		this.setState(state => ({
			menuOpen: this.state.menuOpen ? false : true,
		}))
	}

	private handleMenuHover(): void {
		this.setState(() => ({
			menuOpen: true,
		}))
	}

	private handleMenuClose(): void {
		this.setState(() => ({
			menuOpen: false,
		}))
	}

	private renderNavOptions(): JSX.Element | null {
		if (this.state.menuOpen) {
			return (
				<ul
					className={styles.menuList}
					onMouseLeave={() => this.handleMenuClose()}
				>
					<HashLink
						scroll={el =>
							el.scrollIntoView({ behavior: 'smooth', block: 'start' })
						}
						to="/contact#contact"
					>
						contact
					</HashLink>
					<HashLink
						scroll={el =>
							el.scrollIntoView({ behavior: 'smooth', block: 'start' })
						}
						to="/about#about"
					>
						about
					</HashLink>
				</ul>
			)
		}
		return null
	}

	public render(): JSX.Element {
		return (
			<div className={styles.menuContainer}>
				<button
					className={styles.menuButton}
					onMouseEnter={() => this.handleMenuHover()}
					onClick={() => this.handleMenuClick()}
				>
					<img src={require('../styling/images/menu.svg')} alt="Menu" />
				</button>
				{this.renderNavOptions()}
			</div>
		)
	}
}

export default NavigationMenu
