import { useCallback, useEffect, useState } from "react";
import { ImperialForm } from "./ImperialForm";
import { MetricForm } from "./MetricForm";

export interface FormInputs {
    cm: string;
    kg: string;
    ft: string;
    inches: string;
    st: string;
    lbs: string;
}

export const BmiCalculator = () => {
    const [unit, setUnit] = useState("metric");
    const [inputs, setInputs] = useState<FormInputs>({
        cm: "",
        kg: "",
        ft: "",
        inches: "",
        st: "",
        lbs: "",
    });
    console.log("inputs: ", inputs);
    const [metricBmi, setMetricBmi] = useState<string>("");
    const [imperialBmi, setImperialBmi] = useState<string>("");

    const handleUnitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUnit(e.target.value);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs((prevState) => ({ ...prevState, [name]: value }));
    };

    const calculateBMI = useCallback(() => {
        const { cm, kg, ft, inches, st, lbs } = inputs;
        if (cm && kg) {
            const bmiMetric = Number(kg) / (Number(cm) / 100) ** 2;
            setMetricBmi(bmiMetric.toFixed(1));
        } else {
            setMetricBmi("");
        }

        if (ft && inches && st && lbs) {
            const heightInches = Number(ft) * 12 + Number(inches);
            const weightLbsTotal = Number(st) * 14 + Number(lbs);
            const bmiImperial = (weightLbsTotal / heightInches ** 2) * 703;
            setImperialBmi(bmiImperial.toFixed(1));
        } else {
            setImperialBmi("");
        }
    }, [inputs]);

    useEffect(() => {
        calculateBMI();
    }, [calculateBMI]);

    return (
        <div className="inline-flex w-[35rem] flex-col items-start justify-start gap-8 rounded-2xl bg-white p-8 shadow-[16px_32px_56px_0_rgba(143,174,207,0.25)]">
            <div className="flex flex-col items-start justify-start gap-2">
                <div className="text-2xl font-semibold text-slate-800">
                    Enter your details below
                </div>
            </div>
            <div className="inline-flex items-start justify-start gap-6 self-stretch">
                <div className="flex h-8 shrink grow basis-0 items-center justify-start gap-4">
                    <input
                        type="radio"
                        id="metric"
                        name="unit"
                        value="metric"
                        className="radio checked:bg-blue-600"
                        defaultChecked
                        onChange={handleUnitChange}
                    />

                    <label
                        htmlFor="metric"
                        className="text-base font-semibold leading-normal text-slate-800">
                        Metric
                    </label>
                </div>
                <div className="flex h-8 shrink grow basis-0 items-center justify-start gap-4">
                    <input
                        type="radio"
                        id="imperial"
                        name="unit"
                        value="imperial"
                        className="radio checked:bg-blue-600"
                        onChange={handleUnitChange}
                    />
                    <label
                        htmlFor="imperial"
                        className="text-base font-semibold leading-normal text-slate-800">
                        Imperial
                    </label>
                </div>
            </div>
            <div className="inline-flex items-start justify-start gap-6 self-stretch">
                <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2">
                    {unit === "metric" ? (
                        <MetricForm formValues={inputs} handleInputChange={handleInputChange} />
                    ) : (
                        <ImperialForm formValues={inputs} handleInputChange={handleInputChange} />
                    )}
                </div>
            </div>
            <div className="flex w-full rounded-l-2xl rounded-r-[10rem] bg-gradient-to-r from-blue-600 to-indigo-500 p-8">
                {metricBmi || imperialBmi ? (
                    <div className="inline-flex items-center justify-center gap-6 self-stretch">
                        <div className="inline-flex shrink grow basis-0 flex-col items-start justify-center gap-2">
                            <div className="self-stretch text-base font-semibold leading-normal text-white">
                                Your BMI is...
                            </div>
                            <div className="text-6xl font-semibold leading-10 text-white">
                                {unit === "metric" ? metricBmi : imperialBmi}
                            </div>
                        </div>
                        <div className="shrink grow basis-0">
                            <span className="text-sm font-normal leading-tight text-white">
                                Your BMI suggests you&apos;re a healthy weight. Your ideal weight is
                                between{" "}
                            </span>
                            <span className="text-sm font-bold leading-tight text-white">
                                63.3kgs - 85.2kgs
                            </span>
                            <span className="text-sm font-normal leading-tight text-white">.</span>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col text-white">
                        <h2 className="text-heading-m">Welcome!</h2>
                        <p className="text-body-s">
                            Enter your height and weight and you&apos;ll see your BMI result here
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
