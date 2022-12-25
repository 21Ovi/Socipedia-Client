import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={`${process.env.REACT_APP_SERVER}/assets/info4.jpeg`}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>CoffeeConnoisseur</Typography>
        <Typography color={medium}>
          <a
            href="https://coffeestoresnearme.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Click to visit Website
          </a>
        </Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Find amazing coffee stores near you by just giving your location access
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
