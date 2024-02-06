const Menu = ({items}) => {
    console.log(items)
    return (
        <ul>
            {
                items.map((item, index) => (
                        <li key={index} > {item} </li>
                ))
            }
        </ul>
    )
}

export default Menu