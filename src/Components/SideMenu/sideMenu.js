import React from 'react';
import foto from './assets/perfil.jpg'
import './assets/sideMenu.scss'
import styled from 'styled-components'


const SideMenu = (props) => {
	console.log(props);
	const MaincontainerStyle = styled.div`
		display: flex;
		animation-name: sideMenu;
		width: 30%;
		flex-flow: row wrap;
		justify-content: flex-start;
		background-color: blue;
		position: relative;
		animation-duration: 1s;
	`;


	const MaincontainerStyleExit = styled.div`
		width: 30%;
		display; flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		background-color: blue;
		position: relative;
		animation-duration: 1s;	
		animation-name: sideMenuExit;
		animation-fill-mode: forwards;
	`;

	const SideContainer = styled.div`
		margin-top: 2%;
		height: 100%;
		display: flex;
		flex-flow: column wrap; 	
	`
	const Container = styled.div`
		width: 100%;
		display: flex;
		flex-flow: row wrap;
		justify-content: center;	
	`
	const ItemContainer = styled.div`
		width: 100%; 
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
	`

	const Profileimage = styled.img`
		width: 30%;
		border-radius: 50%;
	`
	return(
		<div>

			{
				props.flag ? 
				<MaincontainerStyle >
					<SideContainer>
					<Container>
						<ItemContainer>
							<Profileimage src={foto} alt="">
							</Profileimage>
						</ItemContainer>
						<ItemContainer>Lorem .</ItemContainer>
					</Container>
				
					<Container>
						<ItemContainer>Lorem ipsum dolor sit amet consec</ItemContainer>
						<ItemContainer>Lorem ipsum dolor sit amet consec</ItemContainer>
						<ItemContainer>Lorem ipsum dolor sit amet consec</ItemContainer>
						<ItemContainer>Lorem ipsum dolor sit amet consec</ItemContainer>
						<ItemContainer>Lorem ipsum dolor sit amet consec</ItemContainer>
						<ItemContainer>Lorem ipsum dolor sit amet consec</ItemContainer>
					</Container>
				</SideContainer>
				</MaincontainerStyle> : 
				<MaincontainerStyleExit >
					<SideContainer>
					<Container>
						<ItemContainer>
							<Profileimage src={foto} alt="">
							</Profileimage>
						</ItemContainer>
						<ItemContainer>Lorem .</ItemContainer>
					</Container>
				
					<Container>
						<ItemContainer>Lorem ipsum dolor sit amet consec</ItemContainer>
						<ItemContainer>Lorem ipsum dolor sit amet consec</ItemContainer>
						<ItemContainer>Lorem ipsum dolor sit amet consec</ItemContainer>
						<ItemContainer>Lorem ipsum dolor sit amet consec</ItemContainer>
						<ItemContainer>Lorem ipsum dolor sit amet consec</ItemContainer>
						<ItemContainer>Lorem ipsum dolor sit amet consec</ItemContainer>
					</Container>
				</SideContainer>	
				</MaincontainerStyleExit> 
			}
		</div>
    )
}

export default SideMenu