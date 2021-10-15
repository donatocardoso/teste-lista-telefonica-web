export enum Themes {
  Light = "light",
  Dark = "dark"
}

export type MenuContextType = {
  theme: "light" | "dark";

  setTheme: React.Dispatch<React.SetStateAction<Themes>>;
};
