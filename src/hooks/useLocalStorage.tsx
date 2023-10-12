import {useState, useEffect} from "react";


const useLocalStorage = (key: string , initialValue: string  ) => {
    const [value, setValue] = useState(
      JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue))
    )

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    },[key, value]);
    return [value, setValue];
}
export default useLocalStorage;