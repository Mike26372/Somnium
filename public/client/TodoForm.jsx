
class TodoForm extends React.Component {
  constructor() {
    super()
  }

  handleSubmit(e) {
    e.preventDefault();
    // Create submission to pass into AJAX
    var todoSubmission = {
      userId: this.props.userId,
      user: this.props.user,
      task: this.task.value
    }
    // Make AJAX request
      // On success, update state with database objects
    var TodoFormContext = this;

    $.ajax({
      method: 'POST',
      url: 'http://127.0.0.1:3000/list',
      data: JSON.stringify(todoSubmission),
      contentType: 'application/json',
      success: function(data) {
        console.log('List submission success!');
        TodoFormContext.props.updateList();
      },
      error: function(err) {
        console.error('List submission failed :(');
      }
    });

    this.todoForm.reset();

  }

  render() {
    return (
      <div>
        <div className="row">
          <form className="col s12" 
                onSubmit={(e) => this.handleSubmit(e)} 
                ref={(input) => this.todoForm = input}>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">mode_edit</i>
                <input id="icon_prefix2" type="text" className="validate"
                ref={(input) => this.task = input} ></input>
                <label htmlFor="icon_prefix2">Enter a todo</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}