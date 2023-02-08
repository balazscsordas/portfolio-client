import { PrimaryButton } from "./smallComponents/Buttons";

const MainBanner = () => {
    return (
        <section id="banner" className="h-screen bg-slate-100 grid justify-center items-center bg-banner">
            <div className="text-center">
                <h1 className="uppercase font-bold tracking-wide text-6xl">HEY, I am Balazs Csordas</h1>
                <p className="mt-10 text-xl">Junior Full Stack developer</p>
                <PrimaryButton 
                    href="#projects"
                    text="Projects"
                />
            </div>
        </section>
    )
}

export default MainBanner;