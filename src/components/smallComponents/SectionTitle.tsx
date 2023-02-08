interface Props {
    text: string;
}

const SectionTitle = ({ text }: Props) => {
    return (
        <div className="text-center relative my-16 md:my-24">
            <h2 className="mb-6 font-bold text-3xl md:text-4xl uppercase section-title">{ text }</h2>
        </div>
    )
}

export default SectionTitle;