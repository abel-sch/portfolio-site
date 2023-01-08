module.exports = {
	webpack: config => {
		config.module.rules = [
			...config.module.rules,
			{
				test   : /\.md$/,
				loader : 'frontmatter-markdown-loader',
				options: {
					mode: ['html']
				}
			}
		];

		return config;
	}
};