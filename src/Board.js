import React, { Component } from 'react';
import Note from './Note';

class Board extends Component {
    constructor(){
        super()
        this.state = {
            notes: [
                {
                    id: 34,
                    note: "Call John"
                },
                {
                    id: 33, 
                    note: "Email Juju"
                }
            ]            
        }
        this.eachNote = this.eachNote.bind(this)
    }
    eachNote(note, i){
        return (
            <Note key={i} index={i}>{note.note}</Note>    
        )
        
    }
    render(){
        return (
            <div>
                {this.state.notes.map(this.eachNote)}
            </div>
        )
    }
}

export default Board