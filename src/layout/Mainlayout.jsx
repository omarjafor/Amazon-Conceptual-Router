import { Outlet } from "react-router-dom";

const Mainlayout = () => {
    return (
        <div>
            <section>
                <nav className="flex justify-between shadow-md p-8 bg-red-200 text-lg font-bold">
                    <h2>Amazoon</h2>
                    <ul className="flex gap-6">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/products">Products</a>
                        </li>
                        <li>
                            <a href="/dashboard">Dashboard</a>
                        </li>
                    </ul>
                </nav>
                <Outlet></Outlet>
                <div>Footer section here</div>
            </section>
        </div>
    );
};

export default Mainlayout;