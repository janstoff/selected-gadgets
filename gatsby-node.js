const locales = require('./src/utils/constants/locales.js')

// For each page, basically just deleting it (so we can take over)
// and creating it again for each language passing the locale to the page context.
exports.onCreatePage = ({ page, actions }) => {
	const { createPage, deletePage } = actions

	return new Promise(resolve => {
		deletePage(page)

		Object.keys(locales).map(language => {
			// add locale to path only if it is not the default language, i.e. "en"
			const localizedPath = locales[language].default
				? page.path
				: locales[language].path + page.path

			return createPage({
				...page,
				path: localizedPath,
				context: {
					locale: language,
				},
			})
		})

		resolve()
	})
}
