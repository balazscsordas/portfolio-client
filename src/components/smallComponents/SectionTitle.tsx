interface Props {
    text: string;
}

const SectionTitle = ({ text }: Props) => {
    return (
        <div className="text-center relative mb-28">
            <h2 className="pt-24 mb-6 font-bold text-4xl uppercase section-title">{ text }</h2>
        </div>
    )
}

export default SectionTitle;