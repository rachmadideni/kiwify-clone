import clsx from "clsx"
import Label from "components/Label"
const InputGroup = (props) => {
    const { styles = "" } = props;
    return (
        <div className={clsx(`flex-col w-full`, styles)}>{props.children}</div>
    )
}

InputGroup.Label = Label;
export default InputGroup