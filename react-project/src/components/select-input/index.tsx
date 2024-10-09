const SelectInput = (
    { list, value, onChange }:
        { list: Array<string>, value: string, onChange: any }
) => {

    return (
        <select value={value} onChange={event => onChange(event.target.value)}>
            <option value="" > - </option>
            {
                list.map((e: string) => <option key={e} value={e} > {e}</option>)
            }
        </select>
    )
}

export default SelectInput;