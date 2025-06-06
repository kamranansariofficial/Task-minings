// ----------------------------------------------------------------------
import { Montserrat, Open_Sans } from 'next/font/google';
const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});
function pxToRem(value: any) {
  return `${value / 16}rem`;
}

function responsiveFontSizes({ ...props }) {
  const { sm, md, lg } = props;
  return {
    '@media (max-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}
// type error
const typography: any = {
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  fontWeightExtraBold: 800,
  fontWeightBlack: 900,
  fontFamily: montserrat.style.fontFamily,
  h1: {
    fontWeight: 900,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 30, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 24, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 24, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 16, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 16, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    fontFamily: openSans.style.fontFamily,
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
    fontFamily: openSans.style.fontFamily,
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    fontFamily: openSans.style.fontFamily,
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
    fontFamily: openSans.style.fontFamily,
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(10),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(14),
    // letterSpacing: 1.1,
    textTransform: 'capitalize',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
    fontFamily: openSans.style.fontFamily,
  },
};

export default typography;
