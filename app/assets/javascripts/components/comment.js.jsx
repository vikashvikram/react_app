var Comment = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    author: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        <div><b>{this.props.author}</b> : {this.props.text}</div>
      </div>
    );
  }
});
