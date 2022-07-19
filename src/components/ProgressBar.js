import { useState } from "react";

const ProgressBar = (props) => {
	const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${props.percentage}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div>
      <h2>{props.teamName}</h2>
      <div className="progress">
        <div className="progress-done" style={style}>
          {props.percentage > 0 ? <p>{props.percentage}%</p> : ''}
        </div>
		  </div>
    </div>
	)
}

export default ProgressBar;