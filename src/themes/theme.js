import * as fonts from '../constants/fonts';

const round = (x, n) => Math.round(x * (n * 10)) / (n * 10);
const scaleN = (n) => round(Math.pow(1.2, n), 3);
const scale = n => `${scaleN(n)}rem`;

const colors = {
  white: '#FFFFFF',
  black: '#212529', 
  red: '#FF0000',
  darkBlue: '#587B7F',
  blue: '#85B9BF',
  green: '#00ab6b',
  darkGreen: '#038252',
  lightGreen: '#00ab6b2e',
  gray: '#343a40',
  darkGray: '#1d2124',
  lightGray: 'rgba(0, 0, 0, 0.44)',

  blackShades: [
    '#393E41',
  ]
};

const theme = {
  scale,
  scaleN,
  colors,
  fonts,
  color: colors.black,
  bg: colors.white,
  padding: `4rem ${scaleN(1)}rem ${scaleN(4)}rem ${scaleN(0)}rem`,
  margin: '0 auto',
  maxWidth: '71.25rem',
  borderRadius: '0.2rem',
  lineHeight: 1.5,
  focus: {
    border: '0.4rem red solid'
  },
  p: {
    fontSize: scale(1.25),
    lineHeight: 1.58,
  },
  a: {
    color: colors.green,
    textDecoration: 'none',
    hover: {
      color: colors.darkGreen
    }
  },
  header: {
    height: 64,
    title: {
      fontSize: scale(3),
      textAlign: 'left',
      padding: `${scale(0)} 0 0 0`,
      margin: `0 0 ${scale(6)} 0`,
      lineHeight: scaleN(0)
    },
    subTitle: {
      fontSize: `${scale(0)}`,
      padding: `${scale(-4)} 0 0 0`,
      margin: `${scale(-20)} 0 0 0`,
      lineHeight: scaleN(-1)
    },
    isHome: {
      title: {
        fontSize: scale(7),
        textAlign: 'center',
        padding: `${scale(2)} 0 0 0`,
        margin: `${scale(0)} 0 ${scale(4)} 0`,
        lineHeight: scaleN(0)
      },
      subTitle: {
        fontSize: `${scale(0)}`,
        padding: `${scale(-4)} 0 0 0`,
        margin: `0`,
        lineHeight: scaleN(-1)
      }
    }
  },
  menu: {
    mobile: {
      padding: `${scale(3)} ${scale(3)}`,
      opened: {
        bg: colors.blackShades[0]
      },
      closed: {
        bg: 'transparent'
      },
      label: {
        width: scale(3),
        height: scale(3),
        fontSize: scale(3.2)
      },
      a: {
        fontFamily: fonts.SansSerif,
        fontSize: scale(1.5),
        padding: `0 0 ${scale(1)}`,
        textAlign: 'left',
        color: colors.white,
        active: {
          color: colors.green
        }
      },
      ul: {
        margin: `${scale(0.2)} 0 0 ${scale(0.2)}`,
      }
    },
    desktop: {
      padding: `${scale(2.2)} 0`,
      bg: 'transparent',
      a: {
        fontFamily: fonts.System,
        fontSize: scale(-0.5),
        fontWeight: 400,
        padding: `${scale(1)} ${scale(-0.4)}`,
        textAlign: 'left',
        color: colors.lightGray,
        active: {
          color: colors.darkGreen
        },
        hover: {
          color: colors.darkGreen
        }
      },
      ul: {
        margin: `0 ${scale(1)} 0 auto`,
      }
    },
  },
  socialLinks: {
    margin: `0`,
    padding: 0,
    a: {
      color: colors.black,
      fontSize: scale(2.5),
      margin: `0 0 ${scale(0)}`,
      padding: `0`,
      hover: {
        color: colors.green
      }
    }
  },
  welcome: {
    marginTop: scale(6),
    marginBottom: scale(2),
  },
  h1: {
    fontSize: scale(5.8),
    margin: 0,
    padding: `${scale(8)} 0 0 0`
  },
  h2: {
    fontSize: scale(3.8),
    margin: 0,
    padding: `${scale(8)} 0 0 0`
  },
  h3: {
    fontSize: scale(3),
    margin: 0,
    padding: `${scale(6)} 0 0 0`
  },
  h4: {
    fontSize: scale(2),
    margin: 0,
    padding: `${scale(6)} 0 0 0`
  },
  h5: {
    fontSize: scale(1),
    margin: 0,
    padding: `${scale(4)} 0 0 0`
  },
  h6: {
    fontSize: scale(1),
    margin: 0,
    padding: `${scale(4)} 0 0 0`
  },
  blog: {
    author: {
      fontFamily: fonts.System,
      fontSize: scale(-0.7),
      lineHeight: scaleN(2),
      time: {
        color: colors.lightGray
      }
    },
    list: {
      margin: `0 0 ${scale(4)} 0`,
      header: {
        fontSize: scale(6),
        padding: `${scale(1)} 0 0 0`,
        margin: `${scale(4)} 0 0 0`,
      },
      ul: {
        padding: `0`,
        margin: `0`,
      },
      item: {
        border: '1px solid rgba(0,0,0,.125);',
        padding: scale(1.2),
        hover: {
          backgroundColor: colors.blackShades[0]
        },
        title: {
          fontFamily: fonts.SansSerif,
          fontSize: scale(1.2),
          lineHeight: scaleN(1),
          margin: `0 0 ${scale(-0.8)}`,
          color: colors.gray,
          hover: {
            color: colors.darkGray
          }
        },
        text: {
          fontFamily: fonts.System,
          fontSize: scale(-0.3),
          color: colors.lightGray,
          lineHeight: scaleN(2),
          padding: `0`,
          margin: `0`,
        },
      }
    },
    post: {
      padding: '20px',
      margin: `${scale(4)} auto 0`,
      maxWidth: '46.25rem',
      header: {
        fontFamily: fonts.SansSerif,
        fontSize: '2.6rem',
        margin: `0 0 ${scale(4)}`,
      },
      content: {
        fontFamily: fonts.Serif,
        code: {
          color: colors.white,
          fontSize: scale(1),
          borderRadius: '0.2rem',
          margin: `0`,
          padding: `${scale(-8)} ${scale(-4)}`,
          backgroundColor: colors.gray,
        },
        highlight: {
          backgroundColor: null,
          borderRadius: '0.2rem',
          margin: `${scale(0)} -50rem`,
          padding: `0 50rem`,
          code: {
            color: colors.white
          }
        },
        a: {
          color: colors.green
        },
        p: {
          fontSize: scale(1),
          margin: 0,
          padding: `2rem 0 0 0`
        },
        ul: {
          fontSize: scale(1),
          margin: 0,
          padding: `${scale(0)}`
        }
      }
    }
  },
  page: {
    padding: '20px',
    margin: `${scale(0)} auto ${scale(4)}`,
    maxWidth: '60rem',
    header: {
      fontFamily: fonts.SansSerif,
      fontSize: '2.4rem',
      margin: `0 0 ${scale(2)}`,
    },
    content: {
      fontFamily: fonts.Serif,
      p: {
        fontSize: scale(1),
        margin: 0,
        padding: `2rem 0 0 0`
      },
    }
  },
  i18n: {
    selectLanguage: {
      li: {
        margin: `0 0 0 5px`,
        padding: `${scale(-8)} ${scale(-2)} ${scale(-5)} ${scale(-2)}`,
        fontSize: scale(3),
        borderRadius: '0.2rem',
        selected: {
          backgroundColor: colors.lightGreen
        }
      }
    }
  }
};

export default theme;
