import React, { Component } from 'react'

export default class SubDeleteImage extends Component {

    componentWillUnmount() {
        this.props.changeImage("Gambar Telah Dihapus")
    }

  render() {
    return (
      <div></div>
    )
  }
}
