import React, {Component} from 'react';
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal  from "../../widgets/components/modal";
import HandleError from "../../error/containers/handle-error"
import VideoPlayer from "../../player/containers/video-player"


class Home extends Component {

	state = {
		modalVisible: false,
		handleError: false
	}

	handleOpenModal = (event) => {
		this.setState({
			modalVisible: true
		})
	}

	handleCloseModal = (event) => {
		this.setState({
			modalVisible: false,
		})
	}

	componentDidCatch(error, info){
		this.setState({
			handleError: true
		})
	}

	render(){
		console.log(this.props.data.categories)
		if( this.state.handleError) {
			return <p> OHHH hay un error :(</p>
		}
		return (
			<HandleError>
				<HomeLayout>
				<Related />
				
				<Categories categories={this.props.data.categories} handleOpenModal={this.handleOpenModal}></Categories>
				{
					this.state.modalVisible &&
					<ModalContainer>
						<Modal
							handleClick={this.handleCloseModal}>
							<VideoPlayer
								autoplay={false}/>
						</Modal>
					</ModalContainer>
				}
			</HomeLayout>
			</HandleError>
		)
	}
}

export default Home