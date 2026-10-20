interface SumeryCardProps {
    label: string;
    value: string;
}

export default function SumeryCard(props:SumeryCardProps) {
    return <div>
        <p>{props.label}</p>
        <p>{props.value}</p>  
    </div>;
}
