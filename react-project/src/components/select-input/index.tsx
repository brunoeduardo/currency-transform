const SelectInput = (
    { value, onChange }:
        { value: string, onChange: any }
) => {
    const list: Array<string> = [
        'USD',
        'BRL',
        'EUR'
    ]

    return (
        <select value={value} onChange={event => onChange(event.target.value)}>
            <option value="" selected > - </option>
            {
                list.map((e: string) => <option value={e} > {e}</option>)
            }
        </select>
    )
}

export default SelectInput;