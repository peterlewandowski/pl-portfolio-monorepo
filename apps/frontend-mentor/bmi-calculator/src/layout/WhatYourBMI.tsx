import Image from "next/image";
import { Container } from "../components/Container";
import man from "../images/image-man-eating.webp";
import { ReactComponent as LeftCurve } from "../images/pattern-curved-line-left.svg";

export const WhatYourBMI = () => {
    return (
        <section id="what-your-BMI">
            <Container className="grid grid-cols-2 gap-x-32 pt-48 pb-32">
                <Image src={man} alt="A man eating sushi" width={564} />
                <div className="flex w-[465px] flex-col">
                    <LeftCurve className="self-end" />
                    <h1 className="text-heading-l mb-8 mt-9">What your BMI result means</h1>
                    <div className="text-body-m text-electricBlue">
                        A BMI range of 18.5 to 24.9 is considered a &apos;healthy weight.&apos;
                        Maintaining a healthy weight may lower your chances of experiencing health
                        issues later on, such as obesity and type 2 diabetes. Aim for a nutritious
                        diet with reduced fat and sugar content, incorporating ample fruits and
                        vegetables. Additionally, strive for regular physical activity, ideally
                        about 30 minutes daily for five days a week.
                    </div>
                </div>
            </Container>
        </section>
    );
};
