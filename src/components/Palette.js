import React, { Component } from 'react';
import './palette.css';

const Color = ({color, active, onClick}) => {
    return (
        <div className = {`color ${active && 'active'}`} style ={{ background : color }} onClick = { onClick }>

        </div>
    )
}

const Palette = ({colors, selected, onSelect}) => {
    const colorList = colors.map(
        (color) => (<Color color={color} active={selected===color} onClick = {() => onSelect(color)} key = {color}/>)
    );
    return(
      {colorList} 
    );
}

export default Palette;