import Image from "next/image";
import emily from "../images/image-emily.jpg";
import jennie from "../images/image-jennie.jpg";
import thomas from "../images/image-thomas.jpg";

const data = [
    {
        imageUrl: emily,
        name: "Emily B.",
        title: "Marketing Director",
        text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    },
    {
        imageUrl: thomas,
        name: "Thomas S.",
        title: "Chief Operating Officer",
        text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    },
    {
        imageUrl: jennie,
        name: "Jennie F.",
        title: "Business Owner",
        text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    },
];

export const Testimonials = () => {
    return (
        <section id="testimonials" className="flex flex-col gap-20 px-6 py-16 md:p-40">
            <h2 className="text-center font-fraunces text-xl font-black text-zinc-400">
                CLIENT TESTIMONIALS
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-7 text-center">
                {data.map((item) => (
                    <div
                        key={item.name}
                        className="flex flex-1 flex-col items-center justify-between gap-16"
                    >
                        <div className="flex flex-col items-center gap-14">
                            <Image
                                src={item.imageUrl}
                                alt={item.name}
                                width={72}
                                height={72}
                                className="rounded-full"
                            />
                            <p className="text-lg font-semibold text-gray-600">
                                {item.text}
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="font-fraunces font-bold">{item.name}</h3>
                            <h4 className="text-sm font-semibold text-zinc-400">
                                {item.title}
                            </h4>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
