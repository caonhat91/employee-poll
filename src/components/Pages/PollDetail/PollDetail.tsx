import { useParams } from "react-router-dom";

export default function PollDetail() {
    const param = useParams();
    return (<><h1>PollDetail</h1><span>{JSON.stringify(param, null, 2)}</span></>);
}