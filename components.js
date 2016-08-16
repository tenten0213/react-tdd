import React, { Component } from 'react';

export class BeerListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            beers: []
        };
        this.addItem = this.addItem.bind(this);
    }

    render() {
        return (
            <div>
                <InputArea onSubmit={this.addItem}/>
                <BeerList items={this.state.beers}/>
            </div>
        )
    }

    addItem(name) {
        this.setState({
            // 既存の状態(state)を弄らずに、空の配列に元の状態を突っ込んで、それにnameを追加している
            // Reduxを使う場合は常に確実にレンダリングビューとを現在の状態と同期させることができるため、重要なtips
            beers: [].concat(this.state.beers).concat([name])
        });
    }

}

export class InputArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.setText = this.setText.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    setText(event) {
        this.setState({text: event.target.value});
    }

    handleClick() {
        this.props.onSubmit(this.state.text);
    }

    render() {
        return (
            <div>
                <input value={this.state.text} onChange={this.setText}/>
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

export class BeerList extends Component {
    render() {
        return this.props.items ?
            (<ul>
                {this.props.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>)
            : null;
    }
}

BeerList.propTypes = {
    items: React.PropTypes.array.isRequired
};

InputArea.PropTypes = {
    onSubmit: React.PropTypes.func.isRequired
};
