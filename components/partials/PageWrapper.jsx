import Head from 'next/head';
import MailButton from '@components/MailButton';

export default function PageWrapper(props) {
	const {
		className = '',
		children
	} = props;

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div
				className={`wrapper flex flex-col relative ${className}`}>
				{ children }
				<MailButton/>
			</div>
		</>
	)
}