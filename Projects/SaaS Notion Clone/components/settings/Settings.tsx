import React from "react";
import CustomDialogTrigger from "../global/custom-dialog-trigger";
import SettingsForm from "./settings-form";

type Props = {
  children: React.ReactNode;
};

function Settings({ children }: Props) {
  return (
    <CustomDialogTrigger header="Setting" content={<SettingsForm />}>
      {children}
    </CustomDialogTrigger>
  );
}

export default Settings;
