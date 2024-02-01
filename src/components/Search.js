import { useState } from "react";
import { POKE_API } from "../Api";
import { AsyncPaginate } from "react-select-async-paginate";




const Search = () => {
    const [search,setSearch] = useState(null);

    return(
        <AsyncPaginate  />
    )
};

export default Search;