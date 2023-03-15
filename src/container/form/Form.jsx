import React, { Component } from 'react'
import "./form.css"
import Modal from '../../component/modal/Modal';

export default class Form extends Component {
    constructor(props) {
        super(props);
      
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.state = {
             open:true

           };
      }

  onOpenModal() {
     this.setState({open: this.props.openModal});
  }

  onCloseModal() {
     this.setState({open:false});
  }

 render() {

 const {open} = this.state;
       return (
           <div>
                <div className="card">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <Modal open={open} onClose={this.onCloseModal} little>
                        </Modal>
                    </form>
                </div>
            </div>
       );
    }
}