import React from 'react';
import TipJarIcon from '../TipJarIcon/TipJarIcon';


class TipJarButton extends React.Component {
    componentDidMount() {
        // var a = document.querySelectorAll('.dtj-tip-button')[0];
        // var i = document.createElement('IFRAME');
        // i.setAttribute('src', "https://digitaltipjar.com/lepeaks/widgets/tip?_external=true");
        // i.setAttribute('frameborder','0');
        // i.style.height = 70 +'px';
        // i.style.width = 120 +'px';
        // a.parentNode.insertBefore(i,a);
        // a.parentNode.removeChild(a);
    }
    render() {

        return (
            <a href="https://digitaltipjar.com/lepeaks?_external=true" target="_blank" rel="noopener noreferrer" className={`dtj-tip-button button ${this.props.context}`} data-username="lepeaks">
                Tip Jar&nbsp;&nbsp;
                <TipJarIcon color={"#FFFFFF"} pseudoState={"normal"}/>
                <TipJarIcon color={"#000000"} pseudoState={"hover"}/>
            </a>
        )
    }
}

export default TipJarButton;

