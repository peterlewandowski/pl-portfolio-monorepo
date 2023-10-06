import Image from "next/image";
import man from "../images/image-man-eating.webp";
import { ReactComponent as LeftCurve } from "../images/pattern-curved-line-left.svg";

export const WhatYourBMI = () => {
    return (
        <div className="mt-52 flex gap-4 [&>*]:basis-1/2">
            <div className="h-96 w-96 rounded-3xl bg-sky-100">
                <Image src={man} alt="A man eating sushi" width={468} height={533} />L
            </div>
            <div className="flex flex-col">
                <LeftCurve className="self-end" />
                <h1 className="text-heading-l">What your BMI result means</h1>
                <div className="text-body-m text-electricBlue">
                    A BMI range of 18.5 to 24.9 is considered a &apos;healthy weight.&apos;
                    Maintaining a healthy weight may lower your chances of experiencing health
                    issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet
                    with reduced fat and sugar content, incorporating ample fruits and vegetables.
                    Additionally, strive for regular physical activity, ideally about 30 minutes
                    daily for five days a week.
                </div>
            </div>
        </div>
    );
};
