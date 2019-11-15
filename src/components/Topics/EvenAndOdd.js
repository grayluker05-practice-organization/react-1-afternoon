import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor(props){
        super(props);

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange = (val) => {
        this.setState({
            userInput: val
        })
    }

    sortEvenAndOdd = (userInput) => {
        let str = userInput.split(',');
        let even = [];
        let odd = [];

        for(let i = 0; i < str.length; i++){
            if(str[i] % 2 === 0){
                even.push(parseInt(str[i]))
            } else {
                odd.push(parseInt(str[i]))
            }
        }

        this.setState({
            evenArray: even,
            oddArray: odd
        })
    }

    render(){
        const {userInput} = this.state;
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input 
                    className="inputLine"
                    onChange={(e) => this.handleChange(e.target.value)}/>
                <button 
                    className="confirmationButton"
                    onClick={() => this.sortEvenAndOdd(userInput)}
                    >Sort</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd;