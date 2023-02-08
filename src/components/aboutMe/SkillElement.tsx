interface Props {
    name: string;
}

const SkillElement = ({ name }: Props) => {
    return (
        <span className="py-3 px-4 font-semibold m-2 bg-slate-200 rounded-md shadow-sm text-gray-600">
            { name }
        </span>
    )
}

export default SkillElement;