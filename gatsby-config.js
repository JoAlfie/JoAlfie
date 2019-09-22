/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: "Jo Alfie",
		description:
			"I am a front-end turned full-stack developer based in Cardiff. I love learning new things, building cool stuff, and playing with swords.",
		menuLinks: [
			{ name: "About", link: "/about/" },
			{ name: "Projects", link: "/projects/" },
		],
	},
	plugins: [
		`gatsby-plugin-less`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-html-attributes`,
			options: {
				lang: `en`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Jo Alfie Wimborne`,
				short_name: `JoAlfie`,
				start_url: `/`,
				background_color: `#f7f0eb`,
				theme_color: `#408e8d`,
				display: `standalone`,
				icon: `src/images/me-01.png`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projects`,
				path: `${__dirname}/src/projects/`,
			},
		},
		{
			resolve: `gatsby-plugin-catch-links`,
			options: {
				excludePattern: /(excluded-link|external)/,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: "gatsby-remark-external-links",
						options: {
							target: "_self",
							rel: "nofollow",
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-use-dark-mode`,
			options: {
				classNameDark: `dark-mode`,
				classNameLight: `light-mode`,
				storageKey: "darkMode",
				minify: true,
			},
		},
	],
}
