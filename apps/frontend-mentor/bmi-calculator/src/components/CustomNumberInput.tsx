import { InputHTMLAttributes } from "react";

interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputUnit: string;
}

export const CustomNumberInput = ({ inputUnit, ...props }: NumberInputProps) => {
    return (
        <div className="flex items-center justify-start gap-6 self-stretch rounded-xl border border-zinc-200 bg-white px-6 py-5">
            <input
                className="input input-ghost w-full max-w-xs"
                type="number"
                placeholder="0"
                {...props}
            />
            <p className="font-['Inter'] text-2xl font-semibold text-blue-600">{inputUnit}</p>
        </div>
    );
};
