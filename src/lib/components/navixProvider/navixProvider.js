import { NavixSource } from "../../context/navixProvider";

export default function NavixProvider(props) {
  return (
    <NavixSource.Provider value={props.theme ?? "blue"}>
      {props.children}
    </NavixSource.Provider>
  );
}
