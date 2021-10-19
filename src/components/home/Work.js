import React from 'react';
import { Modal, Button } from 'antd';

class Work extends React.Component {
    state = {
        visible : false
    };

    showModal = () => {
        this.setState({
            visible : true
        });
    };
    handleCancel = () => {
        this.setState({
            visible : false
        });
    };
    render() {
        return (
            <div className="block worksBlock" id="appWork">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>How it works</h2>
                        <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
                    </div>
                    <div className="contentHolder">
                        <Button type="primary" onClick={this.showModal}>
                            <i className="fas fa-play"></i>
                        </Button>
                    </div>
                    <Modal title="YouTube Video Player" visible={this.state.visible} footer={null} width={1000} onCancel={this.handleCancel}>
                        <iframe src="https://www.youtube.com/embed/W0DM5lcj6mw"
                                title="YouTube video player" width="950" height="400"
                                allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Work;