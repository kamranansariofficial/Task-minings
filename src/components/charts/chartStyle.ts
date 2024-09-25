import { styled } from "@mui/material/styles";

const ChartStyled = styled("div")(({ theme }) => ({
  // Tooltip
  ".apexcharts-tooltip": {
    border: "0 !important",
    color: `${theme.palette.text.primary} !important`,
    borderRadius: `1px !important`,
  },
  ".apexcharts-xaxistooltip": {
    backgroundColor: `${
      theme.palette.mode === "light"
        ? theme.palette.common.black
        : theme.palette.common.white
    } !important`,
    color: `${
      theme.palette.mode === "light"
        ? theme.palette.common.white
        : theme.palette.common.black
    } !important`,
    padding: "4px 24px !important",
    borderRadius: "6px !important",
    "&:before": {
      display: "none !important",
    },
    "&:after": {
      display: "none !important",
    },
  },
  ".apexcharts-tooltip-title": {
    border: "0 !important",
    fontWeight: theme.typography.fontWeightBold,
    color:
      theme.palette.text[
        theme.palette.mode === "light" ? "secondary" : "primary"
      ],
  },
  ".apexcharts-xaxistooltip-bottom": {
    "&:before": {
      borderBottomColor: "transparent !important",
    },
    "&:after": {
      borderBottomColor: `${theme.palette.background.paper} !important`,
    },
  },

  // Legend
  ".apexcharts-legend": {
    padding: "0 !important",
  },
  ".apexcharts-legend-series": {
    alignItems: "center",
    display: "flex !important",
  },
  ".apexcharts-marker": {},
  ".apexcharts-legend-text": {
    lineHeight: "18px",
    color: `${theme.palette.text.secondary} !important`,
    textTransform: "capitalize",
  },
}));

export default ChartStyled;
