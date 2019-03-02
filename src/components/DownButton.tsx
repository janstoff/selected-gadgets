import React from 'react'

import styles from './downButton.module.scss'
import LocalizedLink from './LocalizedLink'
import { sections } from '../sections/__config'

interface DownButtonProps {
	readonly children?: any
}

const DownButton: React.SFC<DownButtonProps> = ({
	children,
}: DownButtonProps) => {
	const firstSection = sections[0]

	return (
		<LocalizedLink className={styles.downButton} to={`/#${firstSection}`}>
			{children}
			<img src={require('../styling/images/down-arrow-white.svg')} alt="down" />
		</LocalizedLink>
	)
}

export default DownButton
