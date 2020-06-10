import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "../src/utils";

export const contexts = [
    {
        icon: "box",
        title: "Themes",
        components: [ThemeProvider],
        params: [
            {
                name: "Default Theme", 
                props: {theme: defaultTheme, default: true }
            },
            {
                name: "Dark Theme",
                props: { theme: darkTheme }
            }
        ],
        options: {
            // Pass the value the every child in our components
            deep: true,
            disable: false,
            cancelable: false
        }
    }
];