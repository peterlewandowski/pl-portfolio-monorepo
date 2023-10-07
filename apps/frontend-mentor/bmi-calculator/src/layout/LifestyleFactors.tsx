import { Container } from "../components/Container";
import { ReactComponent as EatingIcon } from "../images/icon-eating.svg";
import { ReactComponent as ExerciseIcon } from "../images/icon-exercise.svg";
import { ReactComponent as SleepIcon } from "../images/icon-sleep.svg";

const factorsData = [
    {
        icon: <EatingIcon />,
        title: "Healthy eating",
        description:
            "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
    },
    {
        icon: <ExerciseIcon />,
        title: "Regular exercise",
        description:
            "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
    },
    {
        icon: <SleepIcon />,
        title: "Adequate sleep",
        description:
            "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
    },
];

export const LifestyleFactors = () => {
    return (
        <section id="lifestyle-factors">
            <Container className="flex gap-8 pt-40 pb-24">
                {factorsData.map((item) => (
                    <div key={item.title}>
                        {item.icon}
                        <h2 className="text-heading-m mb-6 mt-10">{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </Container>
        </section>
    );
};
