import { useMediaQuery } from "@mui/material";

/**
 *
 * @returns {{isMobile: boolean}}
 */
const useMobileDetect = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return { isMobile };
};

export default useMobileDetect;
