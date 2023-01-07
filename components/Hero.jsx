export default function Hero(props) {
	return (
		<header className="w-full h-screen flex flex-col">
			<div className="grow"></div>
			<div className="font-bold text-6xl py-4 px-4">
				<h1>
					Abel Schupp <br/>
					<span className="font-normal">Designer</span> + <span className="font-normal">Developer</span>
				</h1>
				<p className="font-medium text-white">hallo@abelschupp.nl</p>
			</div>
		</header>
	);
}