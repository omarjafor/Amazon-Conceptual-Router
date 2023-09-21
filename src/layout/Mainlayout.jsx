import { Outlet } from "react-router-dom";

const Mainlayout = () => {
    return (
        <div>
            <section>
                <div className="py-5 shadow-lg">Nav</div>
                <Outlet></Outlet>
                <div>Footer section here</div>
            </section>
        </div>
    );
};

export default Mainlayout;