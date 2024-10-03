const ValueInput = (
    { value, onChange }:
        { value: string, onChange: any }
) => {
    return (
        <input type="text" value={value} onChange={event => onChange(event.currentTarget.value)} />
    )

}

export default ValueInput;