/* eslint-disable */

import React from 'react'
import Clarifai from 'clarifai'
import '../css/style.css'

const app = new Clarifai.App({ apiKey: '2d7718ce14934d9194e650c3d371394a' })

class StoreIndex extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fileInput = React.createRef()
    this.state = {
      file: '',
      imagePreviewUrl: '',
      imagePredictions: 'nothing to show',
    }
  }
  handleSubmit(event) {
    // event.preventDefault()
    // alert(`Selected file - ${this.fileInput.current.files[0].name}`)
    // const uploadedFile = this.fileInput.current.files[0]
    let reader = new FileReader()
    let file = event.target.files[0]

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      })
    }
    reader.readAsDataURL(file)
  }

  render() {
    let { imagePreviewUrl } = this.state
    let $imagePreview = null
    let imagePredictions = ''
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />

      /*  */
      /*  */
      /*  */
      console.log(imagePreviewUrl.split(',')[1])
      app.models
        .predict(Clarifai.GENERAL_MODEL, {
          base64: imagePreviewUrl.split(',')[1],
        })
        .then(
          function(response) {
            response['outputs'][0]['data']['concepts'].map(data => {
              if (data.value > 0.8) {
                return (imagePredictions += `<span class="item">${
                  data.name
                }</span>`)
              }
              console.log(imagePredictions)
            })
            document.querySelector('.predictions').innerHTML = imagePredictions
          },
          function(err) {
            console.log('error occured')
            console.log(err)
            // there was an error
          }
        )
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      )
    }
    return (
      <div>
        <div id="drop-area">
          <form onChange={this.handleSubmit} className="my-form">
            <input type="file" id="fileElem" ref={this.fileInput} />
            <label className="button" htmlFor="fileElem">
              Select some file
            </label>
            {/* <button type="submit">Submit</button> */}
          </form>
          <div className="imgPreview">{$imagePreview}</div>
        </div>
        <div className="predictions">{imagePredictions}</div>
      </div>
    )
  }
}

export default StoreIndex
