import { ReactComponent as Logo } from "../images/logo.svg";

export const Hero = () => {
    return (
        <section id="hero" className="relative ">
            <div className="absolute -z-50 h-[46.0625rem] w-[61.125rem] rounded-bl-3xl rounded-br-3xl bg-gradient-to-r from-blue-50 to-cyan-100" />
            <div className="px-36">
                <div className="pt-20">
                    <Logo />
                </div>
                <div className="mt-7 flex gap-4 [&>*]:basis-1/2">
                    <div className="">
                        <h1 className="text-heading-xl">Body Mass Index Calculator</h1>
                        <div className="text-body-m text-electricBlue">
                            Better understand your weight in relation to your height using our body
                            mass index (BM) calculator. While BMI is not the sole determinant of a
                            healthy weight, it offers a valuable starting point to evaluate your
                            overall health and well-being.
                        </div>
                    </div>
                    <div className="p-4">
                        <h2 className="text-heading-m">Enter your details below</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};
