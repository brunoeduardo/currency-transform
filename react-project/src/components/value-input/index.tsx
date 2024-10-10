const ValueInput = (
    { value, inputType = 'text', onChange }:
        { value: number, inputType: string, onChange: any }
) => {
    return (
        <input type={inputType} value={value} onChange={event => onChange(event.currentTarget.value)} />
    )

}

export default ValueInput;