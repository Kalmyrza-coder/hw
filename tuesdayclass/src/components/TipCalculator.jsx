import React from 'react';

class TipCalculator extends React.Component{
    constructor(){
        super()
        this.state= ({
            billAmount:0,
            service:0,
            peopleAmount: 0,
            tip: 0
        })
    }
    onChangeBillAmount(e){
        this.setState({billAmount:e.target.value})
    }

    onChangeService(e){
        this.setState({service:e.target.value})
    }

    onChangePeopleAmount(e){
        this.setState({peopleAmount:e.target.value})
    }

    calculateTip(e){
        const amount = this.state.billAmount * this.state.service + this.state
    }
    render(){
        return(
        <form>
            <div>
            <p>How much was your bill?</p>
            <input type="number" step="0.5" min="0" value={this.state.billAmount} onChange={(e)=>this.onChangeBillAmount(e)}/>
            </div>
            <div>
                <select value={this.state.service} onChange={(e)=>this.onChangeService(e)}>
                    <option value="0.3" >30% Great</option>
                    <option value="0.2">20% good</option>
                    <option value="0.15">15% ok</option>
                    <option value="0.1">10% bad</option>
                </select>
            </div>
            <div>
                <p>How many people are sharing the bill?</p>
                <input type="text" step="1" min="1" value={this.state.peopleAmount} onChange={(e)=>this.onChangePeopleAmount(e)}/>
            </div>
            <button >Calculate</button>
            <p>The total tips {this.state.tip}$</p>
        </form>
        )
    }
}

export default TipCalculator