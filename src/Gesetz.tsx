import React, {Component} from 'react';

type Staat = 'Berlin' | 'Hessen' | 'Hamburg'
type GesetzProp = {
    staat: Staat,
    gesetz: string
}
type GesetzState = {
    counter: number
}

class Gesetz extends Component <GesetzProp, GesetzState>{
    state : GesetzState = {
        counter: 0
    }
    render() {
        return (
            <div>
                <div className="section-container p-4 m-4 rounded elevation-8 bg-primary relative select-none">
                    <div className="counter-container absolute top-1 right-1 w-12 h-12 rounded-3xl flex justify-center items-center bg-black text-white"><span data-testid="counter">{this.state.counter}</span></div>
                    <div className="section font-bold text-2xl">{this.props.staat}</div>
                    <div className="section">{this.props.gesetz}</div>
                    <div className="action-container flex justify-end">
                        <div onClick={this.incrementCounter.bind(this)} className="action-item hover:bg-black border bg-secondary text-white p-2 m-2 rounded cursor-pointer" data-testid="voteUp">UP</div>
                        <div onClick={this.decrementCounter.bind(this)} className="action-item hover:bg-black border bg-secondary text-white p-2 m-2 rounded cursor-pointer" data-testid="voteDown">DOWN</div>
                    </div>
                </div>
            </div>
        );
    }

    private incrementCounter() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    private decrementCounter() {
        this.setState({
            counter: this.state.counter - 1
        })
    }
}

export default Gesetz;