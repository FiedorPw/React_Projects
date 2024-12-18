import {useInput} from '../hooks';


export default function AddColorForm ({onNewColor = f => f}) {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
    
    const submit = event => {
        event.preventDefault();
        onNewColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };
    
    return (
        <form onSubmit={submit}>
            <input {...titleProps} type="text" placeholder = "Nazwa koloru ..." required />
            <input {...colorProps} type="color" required />
            <button>DODAJ</button> 
        </form>
    )
}


