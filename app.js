// var Eggs = () => (
//   <li>Eggs</li>
// );

// var Milk = () => (
//   <li>Milk</li>
// );

// var item = ['Eggs', 'Milk', 'Butter'];

class GroceryListItem extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      bold: false
    };
  }

  onListItemHover() {
      this.setState(
        {bold: !this.state.bold}
      );
  }


  render() {
    var style = {
      fontWeight: this.state.bold ? '800' : '200'
    };

    return <li style={style} onMouseOver={this.onListItemHover.bind(this)} onMouseOut={this.onListItemHover.bind(this)}>{this.props.item}</li>;
  }

}

var GroceryList = (props) => (
  <ul>
    {
      props.items.map( (item) => (
      <GroceryListItem item={item}/>
    ))
    }
  </ul>
);

ReactDOM.render(<GroceryList items={['Eggs', 'Milk', 'Butter']}/>, document.getElementById("app"));