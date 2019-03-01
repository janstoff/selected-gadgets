import React from 'react'
import { Link } from 'gatsby'
import { injectIntl, InjectedIntlProps } from 'react-intl'

import locales from '../utils/constants/locales'

interface LocalizedLinkProps extends InjectedIntlProps {
	readonly to: string
	readonly children?: any
	readonly className?: string
	readonly style?: object
}

const LocalizedLink: React.SFC<LocalizedLinkProps> = ({
	to,
	children,
	intl: { locale },
	...props
}) => {
	const path = locales[locale].default ? to : `/${locale}${to}`

	return (
		<Link {...props} to={path}>
			{children}
		</Link>
	)
}

export default injectIntl(LocalizedLink)
