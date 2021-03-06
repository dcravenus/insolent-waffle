'use strict';
var React  = require('react');
var api = require('server-api')
var ExhibitList = require('ExhibitList');

var Collection = React.createClass({
    getInitialState: function () {
        return {
            title: '',
            subtitle: '',
            exhibits: []
        }
    },

    componentDidMount: function () {
        setTimeout(() => {
            api.getCollection(this.props.params.id, (collection) => {
                this.setState({
                    title: collection.title,
                    subtitle: collection.summary,
                    exhibits: collection.exhibits
                })
            });
        }, 100)
    },

    componentWillReceiveProps: function () {
        setTimeout(() => {
            api.getCollection(this.props.params.id, (collection) => {
                this.setState({
                    title: collection.title,
                    subtitle: collection.summary,
                    exhibits: collection.exhibits
                })
            });
        }, 100)
    },

    render: function() {
        return (

            <div className='container'>
                <h1>{this.state.title}</h1>
                <div className="collection-subtitle">{this.state.subtitle}</div>
                <ExhibitList
                    collectionName={this.state.title}
                    collectionId={this.props.params.id}
                    exhibits={this.state.exhibits}
                    resetCollection={this.resetCollection}
                />
            </div>

        );
    }
});

module.exports = Collection;
