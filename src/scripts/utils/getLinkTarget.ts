export const getLinkTarget = (href: string): string | undefined => {
	return href.startsWith('http') ? '_blank' : undefined;
}

export const formatLink = (href: string): string => {
	if (href.startsWith('http') || href.startsWith('/')) return href
	return `/${href}`
}