



export default function Btn({title, click}) {
    return (
        <>
        <button type="button" onClick={click}>{title}</button>
        </>
    );

};