import { useState } from "react";
export default function Player({name,symbol}){
    const [isEditing,setIsEditing]= useState(false);

    function handleEditClick(){
        //it is not a good practice because when you execute the function you are invoking just the previous state for all the editing functions
        //setIsEditing(!isEditing); //change state into true
        //setIsEditing(!isEditing); //change state into true
        // while here it is a good practice if you want to change the changed state. and it is a recommandation by recat developer
        //setIsEditing(editing => !editing);
        //setIsEditing(editing => !editing);
        setIsEditing(editing => !editing);
    }

    let playerName=<span className='player-name'>{name}</span>;
    if(isEditing){
        playerName= <input type='text' required value={name} />;
    }
    


    return (
      <li>
        <span className="player">
          {playerName}
          <span className='player-symbol'>{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
      </li>
    );b
}