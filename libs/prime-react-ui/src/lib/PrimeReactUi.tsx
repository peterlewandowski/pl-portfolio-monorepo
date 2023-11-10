import "./PrimeReactUi.css";

/* eslint-disable-next-line */
export type PrimeReactUiProps = {
    title?: string;
};

export const PrimeReactUi: React.FC<PrimeReactUiProps> = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default PrimeReactUi;
