import { BmiCalculator } from "../components/BmiCalculator";
import { Container } from "../components/Container";
import { ReactComponent as Logo } from "../images/logo.svg";

export const Hero = () => {
    return (
        <section id="hero" className="relative">
            <div className="absolute left-6 -z-50 h-[46.0625rem] w-2/3 rounded-bl-3xl rounded-br-3xl bg-gradient-to-r from-white to-cyan-100" />
            <Container>
                <div className="grid grid-cols-2 gap-x-32">
                    <div className="col-span-2 pt-20">
                        <Logo />
                    </div>
                    <div className="mt-20 flex">
                        <div className="flex w-[29rem] flex-col space-y-8">
                            <h1 className="text-heading-xl text-balance">
                                Body Mass Index Calculator
                            </h1>
                            <div className="text-body-m text-electricBlue">
                                Better understand your weight in relation to your height using our
                                body mass index (BM) calculator. While BMI is not the sole
                                determinant of a healthy weight, it offers a valuable starting point
                                to evaluate your overall health and well-being.
                            </div>
                        </div>
                    </div>
                    <BmiCalculator />
                </div>
            </Container>
        </section>
    );
};
