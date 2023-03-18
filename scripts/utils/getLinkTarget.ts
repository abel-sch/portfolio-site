export const getLinkTarget = (href: string): string | false => {
	return href.startsWith('/') ? false : '_blank';
}