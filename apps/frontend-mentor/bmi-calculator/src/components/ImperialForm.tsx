import { CustomNumberInput } from "./CustomNumberInput";

interface Props {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ImperialForm = ({ handleInputChange }: Props) => {
    return (
        <div className="flex flex-col items-start justify-start gap-6 self-stretch">
            <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-2">
                <label
                    htmlFor="height_ft"
                    className="font-['Inter'] text-sm font-normal leading-tight text-slate-500">
                    Height
                </label>
                <div className="flex gap-6">
                    <CustomNumberInput
                        id="height_ft"
                        name="height_ft"
                        inputUnit="ft"
                        onChange={handleInputChange}
                    />

                    <CustomNumberInput
                        name="height_in"
                        inputUnit="in"
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
                        id="weight_st"
                        name="weight_st"
                        inputUnit="st"
                        onChange={handleInputChange}
                    />
                    <CustomNumberInput
                        name="weight_kg"
                        inputUnit="kg"
                        onChange={handleInputChange}
                    />
                </div>
            </div>
        </div>
    );
};
