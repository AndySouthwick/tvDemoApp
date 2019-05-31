import React, {Component} from 'react'
import Sidebar from '../../components/sidebar'
import './index.css'

class ManagePage extends Component{
    render(){
      // console.log(this.state, 'from manage page')
        return(
             <div className="manage-page">

               <ul>
                 {this.props.theShowList.map((show, i)=> {
                return <Sidebar show={show} key={i}/>
                 })}
               </ul>

              <div className="form-box">
               <input type="text" placeholder="Show Name" defaultValue={this.props.tvShow.name} onChange={e => {
                 this.setState({
                   name: e.target.value
                 })
               }}/>
               <input type="text" placeholder="Img Url" defaultValue={this.props.tvShow.imgUrl} onChange={e => {
                 this.setState({
                   imgUrl: e.target.value
                 })
               }}/>
               <input type="text" placeholder="Rating" defaultValue={this.props.tvShow.rating} onChange={e => {
                 this.setState({
                  rating: e.target.value
                 })
               }}/>
               <button onClick={() => {
                return this.props.updateShow(this.state)
               }} >
                 Create New Show
               </button>
              </div>

             </div>
        )
    }
}

export default ManagePage