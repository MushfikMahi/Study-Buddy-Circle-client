import Banner from "./Banner/Banner";
import Faq from "./FAQ/Faq";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center my-14">Futures</h3>
            <h3 className="text-3xl font-bold text-center my-14">Frequently Asked Questions ?</h3>
            <div>
                <Faq></Faq>
            </div>
            </div>
        </div>
    );
};

export default Home;