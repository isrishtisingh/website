import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-['Open_Sans',_sans-serif] m-0">
      <Header />

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

        <section id="skills" className="bg-[#8d99ae]">
          <div className="max-w-[950px] mx-auto p-12 overflow-auto">
            <h2 className="font-['Caveat',_cursive] font-normal text-2xl mt-0">Skills and Tools</h2>
            {/* Add skills and tools details here */}
          </div>
        </section>

        <section id="projects" className="bg-[#edf2f4]">
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

      <Footer />
    </div>
  );
}