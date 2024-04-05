import nlw from '../assets/nlw-unite-icon.svg';


export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlw} alt="NLW Unite" />

      <nav className="flex items-center gap-5">
        <a className="font-medium text-sm text-zinc-300" href="/eventos">Eventos</a>
        <a className="font-medium text-sm text-zinc-300" href="/participantes">Participantes</a>
      </nav>
    </div>
  );
}