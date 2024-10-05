import React from 'react';

const Footer = () => {
    return (
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
    );
};

export default Footer;