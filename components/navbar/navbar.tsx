export const Navbar = () => {
    return (
        <nav className="bg-gray-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Next.js Demo</span>
                </a>
                <div className="flex md:order-2">
                    <a href="/sign-in" className="text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 md:mr-0">Login</a>
                    <a href="/register" className="text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 md:mr-0">Register</a>
                </div>
            </div>
        </nav>
    );
};