import React, { Component, Fragment } from 'react'
import faxios, { baseURL } from '../../../axios'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class submit_task extends Component {
    task_id = Number(this.props.match.params.task_id)
    state = {
        error: {},
        task: {},
        up_percentage: 0,
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
    }

    componentDidMount() {
        // this.proof_by = `${this.props.auth.first_name.toUpperCase()} ${this.props.auth.last_name.toUpperCase()}`
        console.log(this.props.auth)

        faxios().get(`/portal/tasks/${this.task_id}/`).then(d => {
            console.log(d.data)
            let task = d.data

            let task_date = new Date(task.created_at)
            task.created_at = task_date.toDateString()

            this.setState({ task })
        })
    }



    _createSubmitReview = e => {
        e.preventDefault()

        var data = new FormData();
        var request = new XMLHttpRequest();
        data.append('proof_by', this.props.auth.id)
        data.append('proof_pic', this.state.proof_pic);
        data.append('task', this.task_id);


        // load event
        request.addEventListener('load', (e) => {
            this.props.history.goBack()
        });

        // monitor progress of upload
        request.upload.addEventListener('progress', (e) => {
            var up_percentage = Math.round((e.loaded / e.total) * 100)
            this.setState({ up_percentage })
        })

        request.responseType = 'json';
        request.open('post', baseURL + `/portal/submit_task/`);
        request.setRequestHeader('Authorization', this.props.auth.token)
        request.send(data);
    }

    _select_img = e => {
        e.preventDefault()

        let input_img = document.createElement('input')
        input_img.type = 'file'
        input_img.accept = "image/x-png,image/gif,image/jpeg"
        input_img.click()

        input_img.addEventListener('change', e => {
            let file = e.target.files[0]

            var fr = new FileReader();
            fr.addEventListener('load', e => {
                this.setState({ 
                    imgsrc: fr.result,
                    proof_pic: file
                 })
            })
            fr.readAsDataURL(file)

        })
    }



    render() {
        const errors = this.state.error
        console.log({ errors })
        const err_msg = Object.keys(errors).map(x => <div className='text-danger text-center' key={x}>{x}: {errors[x].join('')}</div>)

        const img_upload =
            <div>
                <img src={this.state.imgsrc} alt="selected_img" style={{ width: '300px' }} />
                <div className="progress">
                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: `${this.state.up_percentage}%` }}></div>
                </div>
                <div className="font-weight-bold">{this.state.up_percentage}%</div>
            </div>

        return (
            <div className='user_detail container'>
                <div className="d-flex my-5 justify-content-between">
                    <button className='btn btn-warning' onClick={() => this.props.history.goBack()}>go back</button>
                    <h2>Submit for review</h2>
                    <div></div>
                </div>

                <div className="task">
                    <div>
                        <span className="font-weight-bold mr-3">Post title:</span>
                        <span>{this.state.task.name}</span>
                    </div>
                    <div>
                        <span className="font-weight-bold mr-3">Description:</span>
                        <span>{this.state.task.description ? this.state.task.description : 'none'}</span>
                    </div>
                    <div>
                        <span className="font-weight-bold mr-3">Platform:</span>
                        <span>{this.state.task.platform}</span>
                    </div>

                    <div>
                        <span className="font-weight-bold mr-3">URL:</span>
                        <span>{this.state.task.url ? this.state.task.url : 'none'}</span>
                    </div>
                    <div>
                        <span className="font-weight-bold mr-3">Create on:</span>
                        <span>{this.state.task.created_at}</span>
                    </div>

                </div>

                <form className=''>
                    {err_msg}
                    {this.state.error ? err_msg : null}

                    <div className="text-center">
                        {this.state.up_percentage > 0 ? null : <button onClick={this._select_img} className="btn btn-primary"><i className="fa fa-image"></i> Select screenshot</button>}
                        {this.state.imgsrc ? img_upload : null}
                    </div>

                    {this.state.up_percentage > 0 || !this.state.imgsrc ? null : <div className="text-center mt-3">
                        <button onClick={this._createSubmitReview} className="btn btn-success">Submit</button>
                    </div>}
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(submit_task)
