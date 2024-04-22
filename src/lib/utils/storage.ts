export const storage = {
    getParams: () => {
        const obj = JSON.parse(localStorage.getItem("params") as string);
        return obj || { search: "", category: "", source: "", date: "" };
    },
    setParams: (type: string, param: string) => {
        const obj = JSON.parse(localStorage.getItem("params") as string);
        const newObj = {
            ...obj,
            [type]: param,
        };
        localStorage.setItem("params", JSON.stringify(newObj));
    },
    clearParams: () => localStorage.removeItem("params"),
};
