import React, { useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";
import { useStore } from "../../store";
import Switch from "react-switch";
import { darken } from "polished";

function SwitchTheme() {
  const { colors } = useContext(ThemeContext);
  const { state, dispatch } = useStore();
  useEffect(() => console.log(state.theme), [state]);

  return (
    <div styles={{ position: "absolute", top: 5, left: 5 }}>
      <Switch
        onChange={() => dispatch({ type: "TOGGLE_THEME" })}
        checked={state.theme.title === "dark" ? true : false}
        checkedIcon={false}
        uncheckedIcon={false}
        width={40}
        height={10}
        handleDiameter={20}
        offColor={darken(0.2, colors.text)}
        onColor={colors.text}
      />
    </div>
  );
}

export default SwitchTheme;
