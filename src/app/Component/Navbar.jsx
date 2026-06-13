
const Navbar = () => {
    return(
        <div className="border-b-1">
            <div className="max-w-7xl mx-auto">
                <nav className="flex justify-between items-center py-4 ">
                    <div className="text-lg font-bold"><span>Keen</span><span className="text-green-800">Keeper</span></div>
                    <div className="text-sm">
                        <ul className="flex gap-3">
                            <li className="font-semibold cursor-pointer">Home</li>
                            <li className="font-semibold cursor-pointer">Timeline</li>
                            <li className="font-semibold cursor-pointer">Stats</li>
                        </ul>     
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;