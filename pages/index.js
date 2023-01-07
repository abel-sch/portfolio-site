import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '../components/Hero';

export default function Home() {
	return (
		<>
			<Head>
				<title>Abel Schupp</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero/>
			<div className="flex flex-col">
				<Row title="Design"/>
				<Row title="Development"/>
				<Row title="Type"/>
			</div>
		</>
	)
}

function Row(props) {
	const {
		title
	} = props;

	return <Link href="#" className="text-8xl font-bold px-4 py-12 shadow-top bg-grey hover:bg-black hover:text-white transition">
		{title}
	</Link>
}