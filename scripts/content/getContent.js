import path from 'path';
import markDown from 'markdown-it';

const markdown = markDown({
	html   : true,
	linkify: true
});

const dash2camel = string => string.replace(/(-[a-z])/g, $1 => $1.toUpperCase().replace('-', ''));

function md2html(c) {
	if (c?.markdown) {
		return {
			...c,
			html: markdown.render(c.markdown).replace(/\[\^([0-9]+)\]/gi, '<a class="footnote" href="#footnote-$1"><sup>$1</sup></a>')
		};
	}

	if (c instanceof Array) {
		return c.map(o => md2html(o));
	}

	if (c instanceof Object) {
		return {
			...Object.entries(c).reduce((c, [key, value]) => {
				c[dash2camel(key)] = md2html(value);

				return c;
			}, {})
		};
	}

	return c;
}

export default async function getContent(file) {
	const data = await import(`content/${file}`);

	const content = data?.attributes?.content?.map(md2html) || null;

	return {
		slug      : path.parse(file).name,
		attributes: {
			...Object.entries(data.attributes).reduce((c, [key, value]) => {
				c[dash2camel(key)] = value;

				return c;
			}, {}),	
			content
		},
		html: data.html,
		intro: data?.attributes?.intro ? markdown.render(data.attributes.intro) : null,
	};
}