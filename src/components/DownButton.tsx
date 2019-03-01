import React from 'react'

import styles from './downButton.module.scss'
import LocalizedLink from './LocalizedLink'

interface DownButtonProps {
	readonly children: any
}

const DownButton: React.SFC<DownButtonProps> = ({
	children,
}: DownButtonProps) => (
	<LocalizedLink className={styles.downButton} to="/#about">
		{children}
		<img src={require('../styling/images/down-arrow.svg')} alt="down" />
	</LocalizedLink>
)

export default DownButton
