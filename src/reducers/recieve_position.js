const initialState = {

     cells : [
      [0,0,1,0,0,1,0] ,
      [0,0,1,0,0,1,0] ,
      [0,0,0,0,0,0,0] ,
      [0,0,1,0,0,1,0] ,
      [0,0,1,0,0,0,0] ,
      [0,0,1,0,0,1,0] ,
      [0,0,0,0,0,1,0]
    ] ,
    width :6 ,
    height:6

};

export default function (state =initialState, action) {
  console.log("SR");
  console.log(state);

  switch (action.type) {
    case 'POSITIONOFELEMENT':

    if(state==null)
    {
      const cells = [...initialState.cells];
      console.log(cells);
      cells[action.x][action.y]= 1;
      //console.log(cells);
      console.log({...initialState,cells});

      return {...initialState,cells} ;

    }
    console.log(action.x,action.y,state);
    /**
     * Copy cells.
     */

    /*const cells = [...state.cells];
    const {x, y} = action;

    const val = cells[y * state.width + x];

    /**
     * Toggle the value.
     */
    //cells[y * state.width + x] = val === 1 ? 0 : 1;

    /**
     * Return the next state.
     *
    return {
      ...state,
      cells
    };
      /*console.log("aD");
      //const cells = [...state.cells];
      console.log(state);

      Object.assign({},action.x) ;
      //const cells = [...state.cells];
      //const {x, y} = action;
      //return [action.xc , action.yc] ;
    /*  //return [action.xc,action.yc];
      return Object.assign({}, state, {//  visibilityFilter: action.filter
      })*/
      //return { ...state, state[action.xc][action.yc] = 1 }


  }
return state ;

}
