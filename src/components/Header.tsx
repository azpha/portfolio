export default function Header() {
  return (
    <div className="text-white bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 w-fit rounded-full border border-solid border-zinc-700 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
      <div className="px-4 py-2 space-x-4">
        <a href="/">
          <h1 className="text-2xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] inline">
            Alex Frantz
          </h1>
        </a>

        <ul className="inline-block space-x-5">
          <a href="/#what-i-do">
            <li className="inline">Work</li>
          </a>
          <a href="/#about-me">
            <li className="inline">About</li>
          </a>
          <a href="/links">
            <li className="inline">Links</li>
          </a>
          <a href="/#contact">
            <li className="inline">Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
