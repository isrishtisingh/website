import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-[#2b2d42] text-[#8d99ae] w-full">
            <div className="max-w-[950px] flex flex-row gap-20 mx-auto p-12 overflow-auto">
                <Image src="/img1.png" width={200} height={200} alt="Srishti Singh" className="rounded-full" />
                <div>
                    <h1 className="font-['Caveat',_cursive] font-normal text-2xl text-[#edf3f4] m-0">Srishti Singh</h1>
                    <h2 className="font-['Caveat',_cursive] font-normal text-xl text-[#edf3f4] mt-0">Jack of all trades, Master of some!</h2>
                    <p className="text-sm my-2.5 mx-0">
                        Hi, I am .....
                    </p>
                    <p className="text-sm my-2.5 mx-0">
                        <b>Work interest ....</b>
                    </p>
                    <nav className="space-x-4">
                        {['Experience', 'Education', 'Skills', 'Projects', 'Achievement', 'Volunteer', 'Contact'].map((item) => (
                            <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[#ef233c] hover:no-underline">{item}</Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;