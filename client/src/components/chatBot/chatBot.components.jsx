import React from 'react';
// import { connect } from 'react-redux'
// import { toggleChatBotHidden } from '../../redux/chatBot/chatbot.actions'
// import { ContentContainer, ChatBotContainer, CloseButton, ContentWrappeer, ChatBotWrapper, InputWrapper, ResultWrapper,ResultTableRow, Result} from './chatBot.styles.jsx';

class ChatBot extends React.Component {
	componentDidMount() {
	    (function(d, m){
	        var kommunicateSettings = 
	            {"appId":"11a82a46d7e88f112e02b31480750923d","popupWidget":true,"automaticChatOpenOnNavigation":true};
	        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
	        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
	        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
	        window.kommunicate = m; m._globals = kommunicateSettings;
	    })(document, window.kommunicate || {});     
	}

	render(){
	// const { toggleChatBotHidden  } = this.props;
		return(
		<div></div>
		// <ChatBotWrapper>
			// <ChatBotContainer>
			// 	<CloseButton onClick={()=> toggleChatBotHidden()}>
			// 		<p>x</p>
			// 	</CloseButton>
			// 	<ContentWrappeer>
			// 		<ContentContainer>
			// 		<ResultWrapper>
			// 			<tbody>
			// 				<ResultTableRow>
			// 					<Result>

			// 						<div>hello</div>
			// 					</Result>
		// 					</ResultTableRow>
		// 				</tbody>
		// 			</ResultWrapper>
		// 		<InputWrapper /> 
		// 		</ContentContainer>
		// 	</ContentWrappeer>
		// 	</ChatBotContainer>
		// </ChatBotWrapper>
		);
	};
};

// const mapDispatchToProps = dispatch => ({
// 	toggleChatBotHidden: () => dispatch(toggleChatBotHidden())
// })

export default ChatBot;