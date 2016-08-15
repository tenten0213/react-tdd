import React, { Component } from 'react';

export class BeerListContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        beers: []
        };
    }
    
    render() {
        return (
            <div>
                <InputArea onSubmit={this.addItem}/>
                <BeerList/>
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
    render() {
        return <input/>
    }
}

export class BeerList extends Component {
    render() {
        return <ul/>
    }
}

InputArea.PropTypes = {
    onSubmit: React.PropTypes.func.isRequired
};
