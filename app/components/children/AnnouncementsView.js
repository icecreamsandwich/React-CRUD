var React = require("react");

var AnnouncementsView = React.createClass({
    render: function() {
        return (
            <div className="card-panel">
                <div className="row">
                    <div className="col s12">
                        <h5>Latest announcement</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        {/* <h5>{this.state.title}</h5> */}
                        <h5>{this.props.title}</h5>
                        <p>{this.props.content}</p>
                        {/* <p>{this.state.content}</p> */}
                        <table className="highlight" id="allEmployees">
                            <thead>
                                <tr>
                                    <th data-field="name">Announcements</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.data.map(function(Announcements, i) {
                                    return (
                                        <tr key={i}>
                                            <td>
                                                {Announcements.title} {Announcements.content}
                                            </td>
                                        </tr>
                                    );
                                }, this)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = AnnouncementsView;