import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-['Open_Sans',_sans-serif] m-0">
      <header className="bg-[#2b2d42] text-[#8d99ae] w-full">
        <div className="max-w-[950px] mx-auto p-12 overflow-auto">
          <Image src="/img1.png" width={200} height={200} alt="Srishti Singh" className="rounded-full" />
          <div>
            <h1 className="font-['Caveat',_cursive] font-normal text-2xl text-[#edf3f4] m-0">Srishti Singh</h1>
            <h2 className="font-['Caveat',_cursive] font-normal text-xl text-[#edf3f4] mt-0">Jack of all trades, Master of some</h2>
            <p className="text-sm my-2.5 mx-0">
              Hi, I am .....
            </p>
            <p className="text-sm my-2.5 mx-0">
              <b>Work interest ....</b>
            </p>
            <nav className="space-x-4">
              {['Work Experience', 'Education', 'Skills', 'Projects', 'Achievement', 'Volunteer', 'Contact'].map((item) => (
                <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[#ef233c] hover:no-underline">{item}</Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section id="work" className="bg-[#edf2f4]">
          <div className="max-w-[950px] mx-auto p-12 overflow-auto">
            <h2 className="font-['Caveat',_cursive] font-normal text-2xl mt-0">Work Experience</h2>
            {/* Add work experience details here */}
          </div>
        </section>

        <section id="education" className="bg-[#8d99ae]">
          <div className="max-w-[950px] mx-auto p-12 overflow-auto">
            <h2 className="font-['Caveat',_cursive] font-normal text-2xl mt-0">Education</h2>
            {/* Add education details here */}
          </div>
        </section>

        <section id="more-work" className="bg-[#edf2f4]">
          <div className="max-w-[950px] mx-auto p-12 overflow-auto">
            <h2 className="font-['Caveat',_cursive] font-normal text-2xl mt-0">Workshops</h2>
            {/* Add workshop details here */}
          </div>
        </section>

        <section id="skill" className="bg-[#8d99ae]">
          <div className="max-w-[950px] mx-auto p-12 overflow-auto">
            <h2 className="font-['Caveat',_cursive] font-normal text-2xl mt-0">Skills and Tools</h2>
            {/* Add skills and tools details here */}
          </div>
        </section>

        <section id="project" className="bg-[#edf2f4]">
          <div className="max-w-[950px] mx-auto p-12 overflow-auto">
            <h2 className="font-['Caveat',_cursive] font-normal text-2xl mt-0">Personal Projects</h2>
            {/* Add personal projects details here */}
          </div>
        </section>

        <section id="achievement" className="bg-[#8d99ae]">
          <div className="max-w-[950px] mx-auto p-12 overflow-auto">
            <h2 className="font-['Caveat',_cursive] font-normal text-2xl mt-0">Awards and Honours</h2>
            {/* Add awards and honours details here */}
          </div>
        </section>

        <section id="volunteer" className="bg-[#edf2f4]">
          <div className="max-w-[950px] mx-auto p-12 overflow-auto">
            <h2 className="font-['Caveat',_cursive] font-normal text-2xl mt-0">Volunteering</h2>
            {/* Add volunteering details here */}
          </div>
        </section>
      </main>

      <footer id="footer" className="bg-[#2b2d42] text-[#8d99ae] w-full text-center">
        <div className="max-w-[950px] mx-auto p-12 overflow-auto">
          <h2 className="font-['Caveat',_cursive] font-normal text-2xl mt-0">Let's Keep in Touch!</h2>
          <div className="contact-info space-x-4">
            {['Email', 'Website', 'Github', 'StackOverflow', 'LinkedIn', 'Instagram'].map((item) => (
              <a key={item} href="#" className="text-[#ef233c] hover:no-underline inline-block py-2.5 px-0">{item}</a>
            ))}
          </div>
          <p className="text-sm italic my-2.5 mx-0">Fuel for the day:🍵</p>
        </div>
      </footer>
    </div>
  );
}