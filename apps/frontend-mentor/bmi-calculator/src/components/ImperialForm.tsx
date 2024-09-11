import { FormInputs } from "./BmiCalculator";
import { CustomNumberInput } from "./CustomNumberInput";

interface Props {
    formValues: FormInputs;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ImperialForm = ({ formValues, handleInputChange }: Props) => {
    return (
        <div className="flex flex-col items-start justify-start gap-6 self-stretch">
            <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-2">
                <label
                    htmlFor="ft"
                    className="font-['Inter'] text-sm font-normal leading-tight text-slate-500">
                    Height
                </label>
                <div className="flex gap-6">
                    <CustomNumberInput
                        value={formValues.ft}
                        id="ft"
                        name="ft"
                        onChange={handleInputChange}
                    />
                    <CustomNumberInput
                        value={formValues.inches}
                        name="inches"
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-2">
                <label
                    htmlFor="weight_st"
                    className="font-['Inter'] text-sm font-normal leading-tight text-slate-500">
                    Weight
                </label>
                <div className="flex gap-6">
                    <CustomNumberInput
                        value={formValues.st}
                        id="st"
                        name="st"
                        onChange={handleInputChange}
                    />
                    <CustomNumberInput
                        value={formValues.lbs}
                        name="lbs"
                        onChange={handleInputChange}
                    />
                </div>
            </div>
        </div>
    );
};
