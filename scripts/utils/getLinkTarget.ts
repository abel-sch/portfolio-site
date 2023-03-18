export const getLinkTarget = (href: string): string | undefined => {
	return href.startsWith('/') ? undefined : '_blank';
}