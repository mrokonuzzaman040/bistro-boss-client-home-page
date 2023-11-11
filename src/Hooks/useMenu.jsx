import { useEffect } from "react";
import { useState } from "react";

const useMenu = ({ catagory }) => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const filterData = data.filter(item => item.category === `${catagory}`);
                setMenu(filterData);
                setLoading(false);
            })
    }, [])
    return [menu, loading];
};
export default useMenu;