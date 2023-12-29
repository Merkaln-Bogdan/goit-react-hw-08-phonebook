import React from "react"
import { LANGUAGES } from "../../../constants/languages";
import style from './LanguageNav.module.css'

export const LanguageNav = ({lang, handleChangeLanguageApp}) => {

    return (
        <select defaultValue={lang} className={style.language} onChange={handleChangeLanguageApp}>
            {LANGUAGES.map(el => (
                <option key={el.code} value={el.code} style={{padding: "5px", background: "#0093E9"}}>{el.flag}</option>
            ))}        
        </select>
    )
}