import React, {Component} from 'react';

class FilterObject extends Component {
    constructor(props){
        super(props);

        this.state = {
            family: [
                {
                    name: 'Grayson',
                    age: 19,
                    hairColor: 'blonde'
                },
                {
                    name: 'Cory',
                    jobTitle: 'entreprenuer',
                    hobby: 'biking'
                },
                {
                    name: 'Natalie',
                    siblings: true
                }
            ],
            userInput: '',
            filteredFamily: []
        }
    }

    handleChange = (val) => {
        this.setState({
            userInput: val
        })
    }

    filterFamily = (prop) => {
        let lukers = this.state.family;
        let filteredLukers = [];

        for(let i = 0; i < lukers.length; i++){
            if(lukers[i].hasOwnProperty(prop)){
                filteredLukers.push(lukers[i])
            }
        }

        this.setState({
            filteredFamily: filteredLukers
        })
    }

    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Orignial: {JSON.stringify(this.state.family, null, 10)}</span>
                <input 
                className="inputLine"
                onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filterFamily(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">New: {JSON.stringify(this.state.filteredFamily, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject;