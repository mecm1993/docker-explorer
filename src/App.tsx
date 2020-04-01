import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import { Grid, Cell } from 'baseui/layout-grid';
import { Select, Value, Option } from 'baseui/select';
import { Footer, Nav, Typer } from './components/index';
import { primary, secondary } from './data/index';
import './App.css';

const engine = new Styletron();

function App() {
  const [firstValue, setFirstValue] = React.useState<Value>();
  const [secondOptionVisibility, setSecondOptionVisibility] = React.useState<boolean>(false);
  const [secondValue, setSecondValue] = React.useState<Value>();
  const [secondOption, setSecondOption] = React.useState<any>();
  const [thirdOptionVisibility, setThirdOptionVisibility] = React.useState<boolean>(false);
  const [thirdValue, setThirdValue] = React.useState<Value>();
  const [thirdOption, setThirdOption] = React.useState<any>();
  const [usage, setUsage] = React.useState<string>();
  const [comment, setComment] = React.useState<string>();
  const [options, setOptions] = React.useState<string>();

  const onFirstChange = (option: Option|undefined): void => {
    if (option === undefined || option === null) {
      return;
    }
    let options = secondary[option.value];
    if (options === undefined
        || options.length < 1) {
      setSecondOptionVisibility(false);
      setSecondOption([]);
      setSecondValue(undefined);
      setThirdOptionVisibility(false);
      setThirdOption([]);
      setThirdValue(undefined);
      setUsage(undefined);
      setComment(undefined);
      setOptions(undefined);
    } else {
      setSecondOptionVisibility(true);
      setSecondOption(options);
    }
  };

  const onSecondChange = (option: Option|undefined): void => {
    if (option === undefined || option === null) {
      return;
    }
    if (option.usage) {
      setUsage(option.usage);
      setComment(option.nb);
      if (option.options) {
        let result = '';
        for(let { flag, message } of option.options) {
          result += `${flag} ${message}\n`;
        }
        setOptions(result);
      }
      // this.setState({ nb: '', usage: '' }, () => {
      //   this.setState({
      //     secondOption: selectedOption,
      //     showThird: false,
      //     nb: selectedOption.nb,
      //     usage: selectedOption.usage,
      //     thirdOption: null
      //   });
      // });
    } else {
      setUsage(undefined);
      setComment(undefined);
      setOptions(undefined);
      setThirdOptionVisibility(true);
      setThirdOption(null);
      // this.setState({
      //   secondOption: selectedOption,
      //   showThird: true,
      //   thirdOption: null,
      //   nb: '',
      //   usage: ''
      // });
    }
  };

  const onThirdChange = (option: Option|undefined): any => {
    if (option === undefined || option === null) {
      return;
    }
  }

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <div className="home">
          <div className="container">
            <Nav />
            <div className="content">
              <Grid>
                <Cell span={[12, 4, 5]}>
                  <h2 className="content__title  dark-white">
                    Docker <span>Command</span> Explorer
                  </h2>
                  <p className="content__subtitle dark-grey">
                    Find the right commands you need without digging through the web.
                  </p>
                  <div className="options">
                    <h4 className="options__title">I want to:</h4>
                    <Select
                      clearable={false}
                      options={primary}
                      labelKey="label"
                      valueKey="value"
                      value={firstValue}
                      placeholder="..."
                      onChange={({value, option}) => {
                        setFirstValue(value);
                        onFirstChange(option)
                      }}
                    />
                    <br />
                    {secondOptionVisibility ? (
                      <Select
                        clearable={false}
                        options={secondOption}
                        labelKey="label"
                        valueKey="value"
                        value={secondValue}
                        placeholder="..."
                        onChange={({value, option}) => {
                          setSecondValue(value);
                          onSecondChange(option)
                        }}
                      />
                    ) : null}
                    <br />
                    {thirdOptionVisibility ? (
                      <Select
                        clearable={false}
                        options={thirdOption}
                        labelKey="label"
                        valueKey="value"
                        value={thirdValue}
                        placeholder="..."
                        onChange={({value, option}) => {
                          setThirdValue(value);
                          onThirdChange(option)
                        }}
                      />
                    ) : null}
                  </div>
                </Cell>
                <Cell span={[12, 8, 7]}>
                  <h2 className="board__title  dark-white">Usage</h2>
                  <div className="board board--1">
                    <pre>
                      <Typer message={[usage || '']} />
                    </pre>
                  </div>
                  { comment === undefined || comment.length < 1 ?
                    null
                    : <>
                      <h2 className="board__title  dark-white">Comments</h2>
                      <div className="board board--1">
                        <pre>
                          <Typer message={[comment || '']} />
                        </pre>
                      </div>
                    </>
                  }
                  { options === undefined || options.length < 1 ?
                    null
                    : <>
                      <h2>Options</h2>
                      <div>
                        <pre>
                          <Typer message={[options || '']} ></Typer>
                        </pre>
                      </div>
                    </>
                  }
                </Cell>
              </Grid>
            </div>
            <Footer />
          </div>
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
