import React from "react"
import Select from "react-select"

import { LANGUAGES } from "../../../constants/languages";

export const LanguageNav = ({lang, handleChangeLanguageApp}) => {
  
    return (
        <Select 
            value={LANGUAGES[lang]} 
            styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  padding: "0",
                  border: "none",
                  backgroundColor: 'inherit',
                }),
              }}
            onChange={handleChangeLanguageApp}
            options={Object.values(LANGUAGES)}
        />
    )
}