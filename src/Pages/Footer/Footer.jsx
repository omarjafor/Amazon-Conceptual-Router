const Footer = () => {
    return (
        <div>
            <footer className="rounded-lg shadow m-4 bg-red-200">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm sm:text-center text-black">
                        © 2023{" "}
                        <a href="https://flowbite.com/" className="hover:underline">
                            Amazoon
                        </a>
                        . All Rights Reserved by OmarJafor.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black sm:mt-0">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;