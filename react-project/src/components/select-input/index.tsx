const SelectInput = () => {
    const list: Array<string> = [
        'USD',
        'BRL',
        'EUR'
    ]

    return (
        <select>
            <option value="" selected > - </option>
            {
                list.map((e: string) => <option value={e} > {e}</option>)
            }
        </select>
    )
}

export default SelectInput;