import React from 'react';
import { useStyletron } from 'baseui';
import { Grid, Cell } from 'baseui/layout-grid';
import Github from '../assets/images/github.svg';
import Twitter from '../assets/images/twitter.svg';

function Footer() {
  return (
    <div className="footer">
      <Outer>
        <Grid>
          <Cell span={[12, 12, 12]}>
            <Inner>
              <p className="footer__content">
                Made with <span role="img" aria-label="heart">❤️</span> from <span role="img" aria-label="palm-tree">🌴</span>
              </p>
            </Inner>
          </Cell>
          <Cell span={[12, 12, 12]}>
            <Inner>
              <p className="footer__externals">
                <a
                  href="https://github.com/mecm1993/dockerexplorer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__links"
                >
                  <img className="footer__icons" alt="Github" src={Github} />
                </a>
                <a
                  href="https://twitter.com/mecm1993"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__links"
                >
                  <img className="footer__icons" alt="Twitter" src={Twitter} />
                </a>
              </p>
            </Inner>
          </Cell>
        </Grid>
      </Outer>
    </div>
  );
}

const Outer: React.FunctionComponent<{}> = ({children}) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        background: theme.colors.mono300,
      })}
    >
      {children}
    </div>
  );
};

const Inner: React.FunctionComponent<{}> = ({children}) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: theme.colors.mono300,
        color: theme.colors.accent700,
        padding: '.25rem',
      })}
    >
      {children}
    </div>
  );
};

export default Footer;
