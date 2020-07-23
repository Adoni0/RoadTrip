import React from 'react';
import './style.css';


class DistanceDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="gmap-text-container">
                {/*<h3> Results</h3>*/}
                <p>
                    <span className="label">Start</span>
                    {this.props.origin}
                </p>
                <ul className="gmap-text-stops">
                    {this.props.stops.map(stop =>
                        <li key={stop}>
                            <ion-icon name="pin" />
                            {stop}
                        </li>
                    )}
                </ul>
                <p>
                    <span className="label">Dest</span>
                    {this.props.destination}
                </p>
                <ul className="gmap-text-data">
                    <li>
                        <span className="subtext">Duration</span>
                        {this.props.duration}
                    </li>
                    <li>
                        <span className="subtext">Distance</span>
                        {this.props.distance}
                    </li>
                </ul>
            </div>
        );
    }
}

export default DistanceDisplay;

// export default function DistanceDisplay(props) {

//     const divStyle = {
//         // float: 'right'
//         position: 'relative',
//         left: 700,
//         bottom: 700
//     }

//     const cardStyle = {
//         width: 200
//     }

//     const rowStyle = {
//         width: 450
//     }



//     return (

//         <div style={divStyle}>

//             <h3> Results</h3>
//             <p>Distance: {this.props.distance}</p>
//             <p>Duration: {this.props.duration}</p>
//             <YelpBusinesses />

//             <div className="row row-cols-1 row-cols-md-2" style={rowStyle}>
//                 <div className="col mb-4" style={cardStyle}>
//                     <div className="card">
//                         <img src="https://th.bing.com/th/id/OIP.F0FOGtdS-vxLAd9b052oxwHaER?w=287&h=180&c=7&o=5&dpr=2&pid=1.7" className="card-img-top" alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">Card title</h5>
//                             <p className="card-text">These can show hotels, food places along the route.</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col mb-4" style={cardStyle}>
//                     <div className="card">
//                         <img src="https://th.bing.com/th/id/OIP.F0FOGtdS-vxLAd9b052oxwHaER?w=287&h=180&c=7&o=5&dpr=2&pid=1.7" className="card-img-top" alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">Card title</h5>
//                             <p className="card-text">These can show hotels, food places along the route.</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col mb-4" style={cardStyle}>
//                     <div className="card">
//                         <img src="https://th.bing.com/th/id/OIP.F0FOGtdS-vxLAd9b052oxwHaER?w=287&h=180&c=7&o=5&dpr=2&pid=1.7" className="card-img-top" alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">Card title</h5>
//                             <p className="card-text">These can show hotels, food places along the route.</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* <div className="col mb-4" style={cardStyle}>
//                     <div className="card">
//                         <img src="https://th.bing.com/th/id/OIP.F0FOGtdS-vxLAd9b052oxwHaER?w=287&h=180&c=7&o=5&dpr=2&pid=1.7" className="card-img-top" alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">Card title</h5>
//                             <p className="card-text">These can show hotels, food places along the route.</p>
//                         </div>
//                     </div>
//                 </div> */}

//             </div>

//         </div>
//     )
// }




