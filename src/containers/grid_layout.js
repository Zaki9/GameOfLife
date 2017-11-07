import React , {Component} from 'react' ;
import {connect} from 'react-redux' ;
import {bindActionCreators} from 'redux' ;
import {positionToChange} from '../actions/index.js'  ;
import {changeDimension} from '../actions/index.js';
var arr= []  ;
var weed =0;
class Grid_Layout extends Component {


  constructor(props){
     super(props);
    this.state = {
      generation : 0
    } ;

    this.func = this.func.bind(this);
    this.passNewState = this.passNewState.bind(this);
  }

  passNewState = () =>{
  //   console.log("pa",arr);
    if(weed==0)
    {
     return;
    }
    this.props.positionToChange(arr);
    //arr=[] ;

  }
/*
   isItAlive = (i, j,val)=>{

     var hit = 0  ;
     var ly =j-1 ,  ry = j+1 , ux=i-1 , dx = i+1 ;
     //console.log(ilx , irx , jly , juy , i  ,j , this.props.width , this.props.height);
     if(i==0){

      ux = this.props.height - 1 ;
    }

     else if(i==this.props.height-1)
    {

      dx = 0;
    }


    if(j==0){

      ly = this.props.width - 1 ;
    }
    else  if(j==this.props.width-1)
    {

      ry = 0;
    }

  //  console.log(ly , ry , ux , dx , i  ,j);


     if(this.props.state[i][ly]==1)
     {
       hit++;
     }
     if(this.props.state[i][ry]==1)
     {
       hit++;
     }
     console.log(ly , ry , ux , dx , i  ,j);
     if(this.props.state[ux][j]==1) //0
     {
       hit++;
     }
     if(this.props.state[dx][j]==1) // 1
     {
       hit++;
     }
     if(this.props.state[ux][ly]==1)
     {
       hit++;
     }
     if(this.props.state[ux][ry]==1)
     {
       hit++;
     }
     if(this.props.state[dx][ly]==1)
     {
       hit++;
     }
     if(this.props.state[dx][ry]==1)
     {
       hit++;
     }
      if((hit<2||hit>3)&&val==1){
    //change color pass position
    //console.log(arr);
    arr.push([i,j,0]) ;
    weed=weed+1;
     //this.props.positionToChange(i,j,0) ;

     }
     else if(hit==3)
     {
       arr.push([i,j,1]) ;
       weed=weed+1;


     }

   }

/**/
isItAlive = (i, j,val)=>{

     var hit = 0  ;
     var iux =i-1 ,  ilx = i+1 , jlx=j-1 , jrx = j+1 ;
     //console.log(iux , ilx , jlx , jrx , i  ,j);
     if(i==0){

      iux = this.props.height - 1 ;
    }
    else if(i==this.props.height-1)
    {

      ilx = 0;
    }

    if(j==0){

      jlx = this.props.width - 1 ;
    }
    else if(j==this.props.width-1)
    {

      jrx = 0;
    }

   //console.log(iux , ilx , jlx , jrx , i ,j);


     if(this.props.state[i][jlx]==1)
     {
       hit++;
     }
     if(this.props.state[i][jrx]==1)
     {
       hit++;
     }
     if(this.props.state[iux][j]==1) //0
     {
       hit++;
     }
     if(this.props.state[ilx][j]==1) // 1
     {
       hit++;
     }
     if(this.props.state[iux][jlx]==1)
     {
       hit++;
     }
     if(this.props.state[iux][jrx]==1)
     {
       hit++;
     }
     if(this.props.state[ilx][jlx]==1)
     {
       hit++;
     }
     if(this.props.state[ilx][jrx]==1)
     {
       hit++;
     }
      if((hit<2||hit>3)&&val==1){
    //change color pass position
    //console.log(arr);
    arr.push([i,j,0]) ;
    weed=weed+1;
     //this.props.positionToChange(i,j,0) ;

     }
     else if(hit==3)
     {
       arr.push([i,j,1]) ;
       weed=weed+1;


     }

   }

    starttime(){
      setTimeout (()=>{this.passNewState()}, 200);

    }
    callMe = (i,j,val)=>{
      console.log("callMe",i,j,val);
      arr.push([i,j,val]) ;
      //this.props.positionToChange(arr);
      //setTimeout (()=>{this.props.positionToChange(arr)}, 1000); later
      //this.passNewState();  later
     if(weed==0){
       this.props.positionToChange(arr);

     }
    }
    func()  {
       // console.log("ficn",this.props.state);

       console.log("this",arr,weed);
        arr=[]; weed=0;
       console.log("that",arr,weed);
          return  this.props.state.map((row,rindex)=>{
           var x = row.map((col,cindex)=>{
          if(this.props.mode=='A')
         {this.isItAlive(rindex,cindex,col)   ;}


          if(col==1){
            return (<td key={cindex} className="cell red" onClick={()=>this.callMe(rindex,cindex,0)}> </td>)  ;
          }
          else if(col==0){
            return (<td key={cindex} className="cell white" onClick={()=>this.callMe(rindex,cindex,1)}>  </td>)  ;

          }//7893711022   123asd456,.



        })
      return (<tr key={rindex}>{x}</tr>) ;
      })  ;

    }
  render () {
    console.log("Rend");
   //  this.setState({generation:1});
    return (
      <div className ="container">
      <table >
      <tbody>
      {this.func()
      }
      {this.starttime()}
      </tbody>
      </table>
      </div>
    );
  }
}
function mapStateToProps (state) {
  console.log('mapStateToProps', state);
  return {state : state.gridreducer.cells,
          width: state.gridreducer.width ,
          height:state.gridreducer.height,
          mode:state.gridreducer.mode
         }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators( {positionToChange : positionToChange} ,  dispatch  ) ;
}

export default connect (mapStateToProps, mapDispatchToProps) (Grid_Layout) ;
