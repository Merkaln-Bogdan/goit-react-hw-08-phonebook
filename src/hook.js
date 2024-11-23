import React from "react";
import { useTranslation } from "react-i18next";

function withTranslation(Component) {
  return function WrappedComponent(props) {
    const { t } = useTranslation();
    return <Component {...props} transationHook={t} />;
  }
}

export default withTranslation