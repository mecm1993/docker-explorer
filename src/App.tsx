import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import { Grid, Cell } from 'baseui/layout-grid';
import { Select } from 'baseui/select';
import { SIZE } from 'baseui/input';
import { Footer, Nav, Typer } from './components/index';
import { primary, secondary } from './data/index';
import { Command } from './models/Command';
import { CommandOption } from './models/CommandOption';

const engine = new Styletron();

function App() {
  const [first, setFirst] = React.useState({
    prevValue: String(),
    currentValue: String(),
    selectedValue: undefined,
    options: primary,
  });
  const [second, setSecond] = React.useState({
    prevValue: String(),
    currentValue: String(),
    selectedValue: undefined,
    options: Array<Command>(),
    visible: false,
  });
  const [third, setThird] = React.useState({
    prevValue: String(),
    currentValue: String(),
    selectedValue: undefined,
    options: Array<any>(),
    visible: false,
  });
  const [text, setText] = React.useState({
    usage: String(),
    comments: String(),
    options: String(),
    optionList: Array<CommandOption>(),
  });

  const onFirstValueChange = (e: any) => {
    setText({
      usage: String(),
      comments: String(),
      options: String(),
      optionList: Array<CommandOption>(),
    });
    setFirst({
      prevValue: first.currentValue,
      currentValue: e.option.value,
      selectedValue: e.value,
      options: first.options,
    });
  }

  const onSecondValueChange = (e: any) => {
    setText({
      usage: String(),
      comments: String(),
      options: String(),
      optionList: Array<CommandOption>(),
    });
    setSecond({
      prevValue: second.currentValue,
      currentValue: e.option.value,
      selectedValue: e.value,
      options: second.options,
      visible: true,
    });
  }

  const onThirdValueChange = (e: any) => {
    console.log('TBD');
  }

  React.useEffect(() => {
    if (first.currentValue === undefined) {
      return;
    }
    if (first.prevValue !== first.currentValue) {
      setSecond({
        prevValue: String(),
        currentValue: String(),
        selectedValue: undefined,
        options: secondary[first.currentValue!],
        visible: true,
      });
    }
  }, [first]);

  React.useEffect(() => {
    if (second.selectedValue === undefined) {
      return;
    }

    if (second.prevValue !== second.currentValue) {
      setThird({
        prevValue: String(),
        currentValue: String(),
        selectedValue: undefined,
        options: [],
        visible: false,
      });

      if (second.selectedValue![0]['usage'] === undefined) {
        setThird({
          prevValue: String(),
          currentValue: String(),
          selectedValue: undefined,
          options: [],
          visible: true,
        });
      } else {
        setText({
          usage: second.selectedValue![0]['usage'],
          comments: String(),
          options: String(),
          optionList: Array<CommandOption>(),
        });
      }
      
      if (second.selectedValue![0]['nb'] !== undefined) {
        setText({
          usage: second.selectedValue![0]['usage'],
          comments: second.selectedValue![0]['nb'],
          options: String(),
          optionList: Array<CommandOption>(),
        });
      }

      if (second.selectedValue![0]['options'] !== undefined) {
        const opts: Array<CommandOption> = second.selectedValue![0]['options'];
        let result = '';
        for (const option of opts) {
          result += `${option.flag} ${option.message}\n`;
        }
        setText({
          usage: second.selectedValue![0]['usage'],
          comments: second.selectedValue![0]['nb'],
          options: result,
          optionList: opts,
        });
      }
    } else {
      setThird({
        prevValue: String(),
        currentValue: String(),
        selectedValue: undefined,
        options: [],
        visible: false,
      });
    }
  }, [second]);

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
                      size={SIZE.compact}
                      clearable={false}
                      options={first.options}
                      labelKey="label"
                      valueKey="value"
                      value={first.selectedValue}
                      placeholder="..."
                      onChange={(params) => onFirstValueChange(params) }
                    />
                    <br />
                    {second.visible ? (
                      <Select
                        size={SIZE.compact}
                        clearable={false}
                        options={second.options}
                        labelKey="label"
                        valueKey="value"
                        value={second.selectedValue}
                        placeholder="..."
                        onChange={(params) => onSecondValueChange(params) }
                      />
                    ) : null}
                    <br />
                    {third.visible ? (
                      <Select
                        size={SIZE.compact}
                        clearable={false}
                        options={third.options}
                        labelKey="label"
                        valueKey="value"
                        value={third.selectedValue}
                        placeholder="..."
                        onChange={(params) => onThirdValueChange(params) }
                      />
                    ) : null}
                  </div>
                </Cell>
                <Cell span={[12, 8, 7]}>
                  <h2>Usage</h2>
                  <div className="console">
                    <pre>
                      <Typer message={[text.usage || '']} />
                    </pre>
                  </div>
                  { text.comments.length < 1 ?
                    null
                    : <>
                      <h2>Comments</h2>
                      <div className="console">
                        <pre>
                          <Typer message={[text.comments || '']} />
                        </pre>
                      </div>
                    </>
                  }
                  { text.options.length < 1 ?
                    null
                    : <>
                      <h2>Options</h2>
                      <div className="console">
                        <pre>
                          <Typer message={[text.options || '']} ></Typer>
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
