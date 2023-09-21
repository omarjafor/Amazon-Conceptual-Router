import { Outlet } from "react-router-dom";

const Mainlayout = () => {
    return (
        <div>
            <section>
                <nav>
                    <ul>
                        <li>
                            <a href="http://"></a>
                        </li>
                        <li>
                            <a href="http://"></a>
                        </li>
                        <li>
                            <a href="http://"></a>
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