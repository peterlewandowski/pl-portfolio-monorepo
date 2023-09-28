export const Hero = () => {
    return (
        <div className="flex [&>*]:basis-1/2">
            <div className="">
                <div className="text-heading-xl">Body Mass Index Calculator</div>
                <div className="text-body-m text-electricBlue">
                    Better understand your weight in relation to your height using our body mass
                    index (BM) calculator. While BMI is not the sole determinant of a healthy
                    weight, it offers a valuable starting point to evaluate your overall health and
                    well-being.
                </div>
            </div>
            <div className="text-heading-m ">Enter your details below</div>
        </div>
    );
};
