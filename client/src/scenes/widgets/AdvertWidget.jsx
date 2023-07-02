import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Static Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="Ad"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Radiant Glow</Typography>
        <Typography color={medium}>radiantglow.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Introducing Radiant Glow, the face care company that illuminates your
        beauty. With our luxurious products crafted from natural ingredients,
        your skin will feel pampered and rejuvenated. From cleansers to serums,
        we offer a complete range of solutions tailored to your unique needs.
        
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
