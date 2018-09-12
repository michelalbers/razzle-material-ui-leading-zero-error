import React from 'react';
import Button from '@material-ui/core/Button';

class App extends React.PureComponent {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <Button variant={'raised'} color={'primary'}>Le Test</Button>
    );
  }
}

export default App;
