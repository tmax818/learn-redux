import {connect } from 'react-redux';
import {inc, dec} from './actions'

const mapStateToProps = state => {
  return {
    count: state.counter
  }
}

const mapDispatchToProps = {
  inc,
  dec
}

const App = (props) => {
console.log(props)
  return (
    <div className="App">
      <h1>Count: {props.count}</h1>
      <button onClick={() => props.inc()}>+</button>

      <button onClick={() => props.dec()}>-</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
