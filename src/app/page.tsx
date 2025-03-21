import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <div className="max-w-lg text-center">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={100}
          height={100}
          className="profile-pic"
        />
        
        <h1 className="title">
          Hi, I'm <span className="text-white">João</span>, but you can call me{' '}
          <span className="text-blue-500">JoaumDev</span>
        </h1>

        <p className="subtitle">
          I'm a <span className="text-white">Full-Stack Developer </span>
          Currently developing at <span className="text-white"> <a href="https://zafire.cloud">Zafire Cloud</a></span>.
        </p>

        <div className="skills">
          <h2 className="skills-title">My skills</h2>
          <p className="skills-text">TypeScript · React · Next.js · Node.js · Java</p>
        </div>

        <button className="button"><a href="mailto:me@joaum.dev">Contact me </a> </button>

        <div className="links">
          <a href="https://github.com/JoaumDev">Github</a>
          <a href="https://x.com/JoaumDev">Twitter / X</a>

        </div>
      </div>
    </div>
  );
}