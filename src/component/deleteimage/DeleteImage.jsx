import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import SubDeleteImage from "./SubDeleteImage";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class DeleteImage extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
        title: "PT.Phincon",
        showPagesub : false,
        open: false
      }
    }

    changeImage(value) {
        this.setState({
            title : value
        })
    }

  onOpenModal = () => {
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    return (
      <div style={styles}>
        <h2>{this.state.title}</h2>

        {/* <img src="https://phincon.com/wp-content/uploads/2015/02/Phincon_1.png" alt="" /> */}
        {this.state.showPageSub && <SubDeleteImage changeFruit={(value) => this.changeImage(value)} />}
        
        <button onClick={this.onOpenModal}>Delete Image</button>
        <Modal open={open} onClose={this.onCloseModal}>
          <h2>Simple centered modal</h2>
          <p>
            Are You Sure ?
          </p>
          <button onClick={() => this.setState({showPageSub : !this.state.showPageSub})}>Yes</button>
        </Modal>
      </div>
    )
  }
}


export default DeleteImage;