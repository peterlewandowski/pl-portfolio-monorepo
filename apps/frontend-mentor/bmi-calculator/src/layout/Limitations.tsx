import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { ReactComponent as AgeIcon } from "../images/icon-age.svg";
import { ReactComponent as GenderIcon } from "../images/icon-gender.svg";
import { ReactComponent as MuscleIcon } from "../images/icon-muscle.svg";
import { ReactComponent as PregnancyIcon } from "../images/icon-pregnancy.svg";
import { ReactComponent as RaceIcon } from "../images/icon-race.svg";

export type CardData = {
    icon: React.ReactNode;
    title: string;
    content: string;
};

const cardsData: CardData[] = [
    {
        icon: <GenderIcon />,
        title: "Gender",
        content:
            "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
    },
    {
        icon: <AgeIcon />,
        title: "Age",
        content:
            "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
    },
    {
        icon: <MuscleIcon />,
        title: "Muscle",
        content:
            "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
    },
    {
        icon: <PregnancyIcon />,
        title: "Pregnancy",
        content:
            "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
    },
    {
        icon: <RaceIcon />,
        title: "Race",
        content:
            "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
    },
];

const cardDataHashMap: Record<string, CardData> = {};
console.log("cardDataHashMap: ", cardDataHashMap);

for (const card of cardsData) {
    cardDataHashMap[card.title] = card;
}

export const Limitations = () => {
    const genderCard = cardDataHashMap["Gender"];
    const ageCard = cardDataHashMap["Age"];
    const muscleCard = cardDataHashMap["Muscle"];
    const pregnancyCard = cardDataHashMap["Pregnancy"];
    const raceCard = cardDataHashMap["Race"];

    return (
        <section id="limitations">
            <Container className="flex flex-col pt-16">
                <div className="flex gap-36 pr-24">
                    <div className="w-2/5">
                        <h1 className="text-heading-l mb-8">Limitations of BMI</h1>
                        <p className="text-body-m">
                            Although BMI is often a practical indicator of healthy weight, it is not
                            suited for every person. Specific groups should carefully consider their
                            BMI outcomes, and in certain cases, the measurement may not be
                            beneficial to use.
                        </p>
                    </div>
                    <Card
                        key={genderCard.title}
                        icon={genderCard.icon}
                        title={genderCard.title}
                        content={genderCard.content}
                    />
                </div>
            </Container>
        </section>
    );
};
