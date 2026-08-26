import type { ThemeConfig } from "antd"

export const auriumTheme: ThemeConfig = {
  token: {
    colorPrimary:    "#1B6B3A",
    colorLink:       "#1B6B3A",
    colorLinkHover:  "#14502C",
    colorBgBase:     "#F5F2EE",
    colorTextBase:   "#1E2020",
    fontFamily:      '"Lato", "Segoe UI", sans-serif',
    borderRadius:    6,
    borderRadiusLG:  8,
    borderRadiusSM:  4,
  },
  components: {
    Button: {
      colorPrimary:      "#1B6B3A",
      colorPrimaryHover: "#14502C",
      borderRadius:      6,
    },
    Layout: {
      headerBg: "#1E2020",
      footerBg: "#1E2020",
      bodyBg:   "#F5F2EE",
    },
  },
}
