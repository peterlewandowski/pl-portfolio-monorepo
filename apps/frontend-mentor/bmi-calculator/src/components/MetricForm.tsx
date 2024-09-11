import { FormInputs } from "./BmiCalculator";
import { CustomNumberInput } from "./CustomNumberInput";

interface Props {
    formValues: FormInputs;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MetricForm = ({ formValues, handleInputChange }: Props) => {
    return (
        <div className="flex items-start justify-start gap-6 self-stretch">
            <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-2">
                <label
                    htmlFor="cm"
                    className="text-sm font-normal leading-tight text-slate-500">
                    Height
                </label>
                <CustomNumberInput
                    value={formValues.cm}
                    id="cm"
                    name="cm"
                    onChange={handleInputChange}
                />
            </div>
            <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-2">
                <label
                    htmlFor="kg"
                    className="text-sm font-normal leading-tight text-slate-500">
                    Weight
                </label>
                <CustomNumberInput
                    value={formValues.kg}
                    id="kg"
                    name="kg"
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
};
