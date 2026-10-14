import { TiWeatherCloudy } from "react-icons/ti";
import { HiOutlineScissors } from "react-icons/hi";
import { MdOutlineFileDownload, MdOutlineQrCode2, MdMusicNote } from "react-icons/md";
import { PiBombBold, PiMusicNotesFill } from "react-icons/pi";

export default function Home() {
  return (
    <div className="w-[80dvw] font-mono text-gray-200 min-h-screen bg-transparent justify-evenly flex flex-col">
      <div className="p-5 text-6xl font-semibold"><h2>pkk</h2></div>
      <div className="p-5">
        <p className="text-2xl my-4">Random shit i&apos;ve made</p>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <a className="p-2 m-2 text-xl flex items-center hover:text-transparent bg-white bg-clip-text hover:bg-gradient-to-r focus:text-transparent focus:bg-gradient-to-r from-fuchsia-400 from-10% to-pink-200 to-100%" href="https://orbitune.pkk.in.eu.org">
            <PiMusicNotesFill className="text-fuchsia-400" />
            <p className="p-1">Orbitune</p>
          </a>
          <a className="p-2 m-2 text-xl flex items-center hover:text-transparent focus:text-transparent focus:bg-gradient-to-r bg-white bg-clip-text hover:bg-gradient-to-r from-yellow-400 from-10% to-blue-600 to-100%" href="https://wether.pkk.in.eu.org">
            <TiWeatherCloudy className="text-yellow-400" />
            <p className="p-1">Weather</p>
          </a>
          <a className="p-2 m-2 text-xl flex items-center hover:text-transparent bg-white bg-clip-text hover:bg-gradient-to-r focus:text-transparent focus:bg-gradient-to-r from-sky-400 from-10% to-violet-600 to-100%" href="https://shorten.pkk.in.eu.org">
            <HiOutlineScissors className="text-sky-400" />
            <p className="p-1">URL Shortner</p>
          </a>
          <a className="p-2 m-2 text-xl flex items-center hover:text-transparent bg-white bg-clip-text hover:bg-gradient-to-r focus:text-transparent focus:bg-gradient-to-r from-sky-400 from-10% to-purple-600 to-100%" href="https://addons.mozilla.org/en-GB/firefox/addon/temp-url-shortener/">
            <HiOutlineScissors className="text-sky-400" />
            <p className="p-1">URL Shortner Addon</p>
          </a>
          <a className="p-2 m-2 text-xl flex items-center hover:text-transparent bg-white bg-clip-text hover:bg-gradient-to-r focus:text-transparent focus:bg-gradient-to-r from-orange-400 from-10% to-fuchsia-600 to-100%" href="https://upi.pkk.in.eu.org">
            <MdOutlineQrCode2 className="text-orange-400" />
            <p className="p-1">UPI QR Maker</p>
          </a>
          <a className="p-2 m-2 text-xl flex items-center hover:text-transparent bg-white bg-clip-text hover:bg-gradient-to-r focus:text-transparent focus:bg-gradient-to-r from-red-400 from-10% to-emerald-600 to-100%" href="https://minesweeper.pkk.in.eu.org">
            <PiBombBold className="text-red-400" />
            <p className="p-1">Minesweeper</p>
          </a>
        </div>
      </div>
      <div className="text-gray-400 items-center justify-center w-full flex">Contact: <a href="mailto:contact@pkk.in.eu.org">contact@pkk.in.eu.org</a></div>
    </div>
  );
}
