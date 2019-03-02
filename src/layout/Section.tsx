import React from 'react'

import styles from './section.module.scss'

const SectionLayout = ({ id, children }) => (
	<section id={id} className={styles.section}>
		{children}
	</section>
)

export default SectionLayout
