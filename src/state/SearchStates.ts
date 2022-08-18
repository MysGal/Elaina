import {atom} from "recoil";

const searchKeyWordState = atom({
    key: "searchKeyWord",
    default: ''
})

const searchPagesState = atom({
    key: "searchPages",
    default: 0
})

export {searchKeyWordState, searchPagesState}