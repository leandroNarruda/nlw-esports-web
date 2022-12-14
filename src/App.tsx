import './styles/main.css';
import logo from './assets/logo-nlw-esports.svg';
import { MagnifyingGlassPlus } from 'phosphor-react';
function App() {
	return (
		<div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
			<img src={logo} />

			<h1 className="text-6xl text-white font-black mt-20">
				Seu <span className="bg-nlw-gradient text-transparent bg-clip-text">duo</span> está aqui
			</h1>

			<div className="grid grid-cols-6 gap-6 mt-16">
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/game-1.png" alt="" />
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
						<strong className="font-bold text-white block">League of Legends</strong>
						<span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
					</div>
				</a>
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/game-2.png" alt="" />
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
						<strong className="font-bold text-white block">Dota 2</strong>
						<span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
					</div>
				</a>
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/game-3.png" alt="" />
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
						<strong className="font-bold text-white block">Counter Strike</strong>
						<span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
					</div>
				</a>
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/game-4.png" alt="" />
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
						<strong className="font-bold text-white block">Apex Legends</strong>
						<span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
					</div>
				</a>
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/game-5.png" alt="" />
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
						<strong className="font-bold text-white block">Fortnite</strong>
						<span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
					</div>
				</a>
				<a href="" className="relative rounded-lg overflow-hidden">
					<img src="/game-6.png" alt="" />
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
						<strong className="font-bold text-white block">World of Warcraft</strong>
						<span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
					</div>
				</a>
			</div>

			<div className="self-stretch mt-8 rounded-lg bg-nlw-gradient pt-1">
				<div className="bg-[#2A2634] px-8 py-6">
					<div className="flex items-center justify-between">
						<div>
							<strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
							<span className="text-zinc-400">Publique um anúncio para encontrar novos players!</span>
						</div>
						<button className="px-3 py-4 hover:bg-violet-700 bg-violet-500 text-white rounded flex items-center gap-3">
							<MagnifyingGlassPlus size={24} />
							Publicar anúncio
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
