import React , {Component}   from 'react' ;
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux' ;
import {changeDimension} from '../actions/index.js';
import {clearall} from '../actions/index.js';
import {setMode} from '../actions/index.js';

class PageSetup extends Component {

  constructor(props){
     super(props);

  }



  func =()=>{
    console.log("star");;
    this.props.changeDimension(this.refs.wid.value ,  this.refs.hei.value) ;

  }

funcstart =(mode) =>{
  console.log("zaki");
   this.props.setMode(mode);
}
stopit = (mode)=>{
console.log("zaki");
 this.props.setMode(mode);

}
clearall = () =>{

this.props.clearall() ;


}


  render(){
    return(

      <div className ="bar">

      <div className="btns">

      <input  id="b1" placeholder="height" ref="wid" > </input>
      <input  id="b2" placeholder="width" ref="hei"> </input>
      <button className="btn btn-primary"onClick={this.func}  >SetSize </button>
      <button className="btn btn-primary" onClick={()=>this.funcstart('A')} >Start </button>
      <button className="btn btn-primary" onClick={()=>this.funcstart('S')} >Stop </button>
      <button className="btn btn-primary" onClick={this.clearall} >Clear </button>
      </div>
      <p>Generation : {this.props.generation}  </p>



      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({changeDimension:changeDimension ,  clearall:clearall    , setMode:setMode},dispatch);
}

function mapStateToProps(state){
  //console.log(state.gridreducer.generation);
  return {
    generation:state.gridreducer.generation
  }
}


export default connect (mapStateToProps,mapDispatchToProps)(PageSetup);
