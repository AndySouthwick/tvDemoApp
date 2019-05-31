import React, {Component} from 'react'
import Sidebar from "../../components/sidebar/index";
import './index.css'
class PreviewPage extends Component{
  state = {
    showName: '',
    showImgUrl: '',
    showRating: ''
  }

  render(){
    console.log(this.props.theShowList)
    return(
      <div className="preview-page">

        <ul>
          {this.props.theShowList.map((show, i)=> {
            return (
              <div key={i}>
                <Sidebar show={show}  />
                <button onClick={() => {
                  console.log(this.state)
                  this.setState({
                    showName: show.name,
                    showImgUrl: show.imgUrl,
                    showRating: show.rating
                  })
                }}>view show</button>
              </div>


            )
          })}
        </ul>

        <div className="form-box">
         <h2>display selected show</h2>
        </div>
        <p>
          Show Name: {this.state.showName}
        </p>
        <p>
          Show Image: <img src={this.state.showImgUrl} alt="" width="200"/>
        </p>
        <p>
          Show Rating {this.state.showRating}
        </p>
      </div>
    )
  }
}

export default PreviewPage