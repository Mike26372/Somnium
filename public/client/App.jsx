
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: 1,
      user: 'Michael',
      list: ['state not updated']
    };
    this.updateList = this.updateList.bind(this);
    this.spliceTodo = this.spliceTodo.bind(this);
  }

  componentWillMount() {
    this.updateList();
  }

  updateList() {
    var appContext = this;
    console.log('Update list called from App');
    $.ajax({
      method: 'GET',
      url: 'http://127.0.0.1:3000/list',
      dataType: 'json',
      success: function(data) {
        console.log('List update request success!');
        console.log({data});
        appContext.setState({list: data});
      },
      error: function(error) {
        console.log('List update request error booo');
      }
    });
  }

  spliceTodo(index) {
    var list = this.state.list.slice();
    list.splice(index, 1);
    this.setState({list: list});
  }

  render() {
    return (
      <div>
        <TodoForm userId={this.state.userId} 
                  user={this.state.user}
                  updateList={this.updateList}/>
        <TodoList list={this.state.list}
                  updateList={this.updateList}
                  spliceTodo={this.spliceTodo}/>
        <InspirationalQuote />
      </div>
    );
  }
}