import React from 'react'
import { Link } from 'react-router-dom'

const Modal = () => {
  return (
    <div>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Sign In
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Selamat datang kembali</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <h1 className="caption">Anda Berhasil Login !</h1>
                <button type="button" class="btn btn-primary">
                <Link to="/Home" >Ok!</Link>
                </button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Modal