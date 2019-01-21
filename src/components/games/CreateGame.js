import React, {Component} from 'react'
import {createGame} from '../../store/actions/gameActions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import AsyncSelect from 'react-select/lib/Async';
import './CreateGame.css'

var props_flag = true;
var   options=[
];

const loadOptions1 = (inputValue, callback) => {
    setTimeout(() => {
        callback(filterNames(inputValue));
    }, 1000);
    console.log("loadOption1 is called");
  };
  const loadOptions2 = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterNames(inputValue));
    }, 1000);
    console.log("loadOption2 is called");
  };

  const filterNames = (inputValue) => {
    return options.filter(i =>
      i.label.includes(inputValue)
    );
  };
  

class CreateGame extends Component {


    state={
        p1_name:'',
        p1_score:0,
        p1_id:'',
        p2_name:'',
        p2_score:0,
        p2_id:'',
        referee:'',
        date:'',
        location:'',
        selectedOption1: null,
        selectedOption2: null,
        inputValue: '',
    }


    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        });
        console.log("submit",this.state);
    }
    handleChange1 = (selectedOption) => {
        console.log(selectedOption);
        this.setState({ p1_name: selectedOption.label, p1_id: selectedOption.value });
    }
    handleChange2 = (selectedOption) => {
        this.setState({ p2_name: selectedOption.label, p2_id: selectedOption.value });
    }
     handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
        this.props.createGame(this.state);
        this.props.history.push('/');
    }


    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        const {users} = nextProps;
        if(users != null && props_flag){
            users.forEach(element => {
                options.push({value: element.id, label: element.name})
            });
            props_flag = false;
        }
    }
    handleInputChange1 = (newValue) => {
        this.setState({ inputValue: newValue });
        return newValue;
      };
      handleInputChange2 = (newValue) => {
        this.setState({ inputValue: newValue });
        return newValue;
      };
    
    render(){
        // Route Gaurding
        const {auth} = this.props;
        const { selectedOption1,selectedOption2 } = this.state;


        if(!auth.uid) return <Redirect to='/signin'/>
        return(
            <div className="container create-game">
                <h3 className='center-align'>경기 기록</h3>
                <form onSubmit={this.handleSubmit} className="white">
                        <div className="row center-align valign-wrapper">
                             <div className="input-field col s5 m5 l5">
                                <select id="p1_score" className="browser-default" onChange={this.handleChange}>
                                    <option value="0" defaultValue>0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                             </div>
                            
                            <h3 className="col s2 m2 l2">:</h3>                 
                            <div className="input-field col s5 m5 l5">
                                <select  id="p2_score" className="browser-default" onChange={this.handleChange}>
                                    <option value="0" defaultValue>0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                             </div>
                        </div>
                        <div className="row center-align">
                            <div className="input-field col s5 m5 center-align">
                                <label htmlFor="p1_name">player1</label>
                                <AsyncSelect
                                    loadOptions={loadOptions1}
                                    defaultOptions
                                    cacheOptions
                                    onInputChange={this.handleInputChange1}
                                    onChange={this.handleChange1}
                                    isSearchable

                                />
                            </div>
                            <h6 className="col s2 m2 "></h6>
                            <div className="input-field col s5 m5 center-align">
                                <label htmlFor="p2_name">player2</label>
                                <AsyncSelect
                                    loadOptions={loadOptions2}
                                    cacheOptions
                                    defaultOptions
                                    onInputChange={this.handleInputChange2}
                                    onChange={this.handleChange2}
                                    isSearchable
                                />
                            </div>
                        </div>
                        <div className="row">
                        <div className="input-field center-align col s12">
                            <button className="btn red lighten-3">확인</button>
                        </div>
                        </div>
                        
                </form>
 
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth,
        users: state.firestore.ordered.users,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        createGame: (game)=> dispatch(createGame(game))
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        // 어떤 collection을 연결할지 설정        
        { collection: 'users',orderBy:['name','desc']},
    ])
)(CreateGame);