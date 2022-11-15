<script>
	import Router from "svelte-spa-router";
	import {link} from "svelte-spa-router";
	import Home from "./routes/index.svelte";
	export let version;
	export let name;

	$:clip = false;
	$:toggleOne = false;
	$:toggleTwo = true;
	$:toggleThree = true;
</script>
<Router routes={{
	"/": Home
}}/>
<section id="layout">
	<nav class="navigation">
		<div class="nv">

			<div class="brand">
				<a use:link href="/">
					<span class="imgspan">
						<img src="./assets/logo.png" width="35px" alt="logo">
					</span>
					<span>
						<h1>{name}</h1>						
					</span>
				</a>
			</div>

			<div class="options">
				<div class="opt">
					<article class="jere">
						<span>
							<h1>W . JERE</h1>
						</span>
						<span class="svgspan">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" viewBox="0 0 13 13"><defs><clipPath id="a"><rect width="13" height="13" fill="none"/></clipPath></defs><g clip-path="url(#a)"><path d="M0,13V11.375c0-1.788,2.925-3.25,6.5-3.25S13,9.587,13,11.375V13ZM3.25,3.25A3.25,3.25,0,1,1,6.5,6.5,3.25,3.25,0,0,1,3.25,3.25Z" fill="#fff"/></g></svg>

						</span>
					</article>
					<div on:click={()=>{clip = !clip}} class="menu">
						<div class="mn">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 14 14"><defs><clipPath id="a"><rect width="14" height="14" fill="none"/></clipPath></defs><g clip-path="url(#a)"><rect width="12" height="12" fill="none"/><path d="M10.75,14a2,2,0,0,1-2-2V10.75a2,2,0,0,1,2-2H12a2,2,0,0,1,2,2V12a2,2,0,0,1-2,2ZM2,14a2,2,0,0,1-2-2V10.75a2,2,0,0,1,2-2H3.25a2,2,0,0,1,2,2V12a2,2,0,0,1-2,2Zm8.75-8.75a2,2,0,0,1-2-2V2a2,2,0,0,1,2-2H12a2,2,0,0,1,2,2V3.25a2,2,0,0,1-2,2ZM2,5.25a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H3.25a2,2,0,0,1,2,2V3.25a2,2,0,0,1-2,2Z" fill="#fff"/></g></svg>
						</div>
					</div>
				</div>   
			</div>

		</div>
	</nav>

	<div class:clip={clip} class="toogle">
		<div class="tg">
			<div class="content">
				<div class="cnt">		
					<div class="top">
						<div class="tp">
							<div class="tp-img">
								<img src="./assets/logo.png" alt="logo" width="65px" />								
							</div>
							<div class="tp-text">
								<h1>LUANAR</h1>
								<p>VERSION : {version}</p>
							</div>
						</div>
					</div>
					<div class="text">
						<p># DESIGN AND ANALYSIS OF EXPERIMENTS  </p>
					</div>
					<div class="middle">
						<div class="md">
							<ul >
								<li 
								on:click={()=>{toggleOne = !toggleOne}}  class="instruct"
								>
									<h1>INSTRUCTIONS</h1>
									<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="7.1" height="10.4" viewBox="0 0 7.1 10.4"><defs><clipPath id="a"><rect width="7.1" height="10.4" fill="none"/></clipPath></defs><g clip-path="url(#a)"><path d="M5.2,7.1,0,1.63,1.549,0,5.2,3.841,8.851,0,10.4,1.63Z" transform="translate(0 10.4) rotate(-90)" fill="#278deb"/></g></svg>
								</li>
								{#if toggleOne == true}							
								<li>
									<p>- data for each treatment must be a numeric number.</p>
								</li>
								<li>
									<p>- treatment number, must be separated with a "space" on the input field.</p>
								</li>
								<li>
									<p>- to reset the calculations, delete the treatments on the treatment field.</p>
								</li>
								<li>
									<p>- caculations use localstorage, turn of  browser localstorage, if off.</p>
								</li>
								{/if}
							</ul>
							<ul>
								<li 
								on:click={()=>{toggleTwo = !toggleTwo}}
								class="instruct"
								>
								<h1>APP INFO</h1>
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="7.1" height="10.4" viewBox="0 0 7.1 10.4"><defs><clipPath id="a"><rect width="7.1" height="10.4" fill="none"/></clipPath></defs><g clip-path="url(#a)"><path d="M5.2,7.1,0,1.63,1.549,0,5.2,3.841,8.851,0,10.4,1.63Z" transform="translate(0 10.4) rotate(-90)" fill="#278deb"/></g></svg>
							</li>
							{#if toggleTwo == true}	
								<li class="info">
									<a href="/">READ INFO</a>
								</li>
								<li class="info">
									<a href="/">LICENCE</a>
								</li>
								<li class="info">
									<a href="/">ANOVAAPP.APP 2022 v-{version}</a>
								</li>
								{/if}
							</ul>
							<ul class="dev">
								<li 
								on:click={()=>{toggleThree = !toggleThree}}
								class="instruct"
								>
								<h1>DEV</h1>
									<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="7.1" height="10.4" viewBox="0 0 7.1 10.4"><defs><clipPath id="a"><rect width="7.1" height="10.4" fill="none"/></clipPath></defs><g clip-path="url(#a)"><path d="M5.2,7.1,0,1.63,1.549,0,5.2,3.841,8.851,0,10.4,1.63Z" transform="translate(0 10.4) rotate(-90)" fill="#278deb"/></g></svg>

								</li>
								{#if toggleThree == true}	
								<li>
									<p class="notification"></p>
								</li>
								<li>
									<a href="/" class="link">
										<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13.25" height="13.375" viewBox="0 0 13.25 13.375"><defs><clipPath id="a"><rect width="13.25" height="13.375" fill="none"/></clipPath></defs><g clip-path="url(#a)"><rect width="13.125" height="13.125" fill="none"/><path d="M4.594,13.125a4.139,4.139,0,0,1-3.063-1.312A4.225,4.225,0,0,1,0,8.531,4.389,4.389,0,0,1,.328,6.891a3.782,3.782,0,0,1,.766-1.312L3.281,3.391A2.636,2.636,0,0,1,5.25,2.625,2.988,2.988,0,0,1,7.328,3.5,2.808,2.808,0,0,1,8.2,5.688a2.636,2.636,0,0,1-.766,1.969L6.234,8.75a.835.835,0,0,1-.547.219,1.173,1.173,0,0,1-.656-.219,1.555,1.555,0,0,1-.219-.656,1.555,1.555,0,0,1,.219-.656l1.2-1.2a.661.661,0,0,0,.328-.656,1.336,1.336,0,0,0-.437-.984,1.275,1.275,0,0,0-.766-.219,1.581,1.581,0,0,0-.766.219L2.3,6.781a3.026,3.026,0,0,0-.547,1.75,3.2,3.2,0,0,0,.875,2.078,2.269,2.269,0,0,0,1.094.656,1.891,1.891,0,0,0,1.094.109c.328-.109.656-.109.875-.219a2.288,2.288,0,0,0,.656-.437l4.375-4.375a2.4,2.4,0,0,0,.766-1.859A2.865,2.865,0,0,0,10.5,2.406,4.871,4.871,0,0,0,9.188,1.75H8.2a2.316,2.316,0,0,0-.766.328,1.387,1.387,0,0,1-.656.109.727.727,0,0,1-.547-.438c-.109-.109-.109-.328-.109-.656A1.92,1.92,0,0,1,6.563.547,4.308,4.308,0,0,1,8.75,0a4.049,4.049,0,0,1,2.844,1.094,4.615,4.615,0,0,1,1.531,3.281,4.28,4.28,0,0,1-1.2,3.172L7.547,11.922A4.039,4.039,0,0,1,4.594,13.125Z" transform="translate(0 0)" fill="#2699fb"/></g></svg>

										<p>peterethanbutao@gmail.com</p>
									</a>
									
								</li>
								<li>
									<a href="/" class="link">
										<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13.25" height="13.375" viewBox="0 0 13.25 13.375"><defs><clipPath id="a"><rect width="13.25" height="13.375" fill="none"/></clipPath></defs><g clip-path="url(#a)"><rect width="13.125" height="13.125" fill="none"/><path d="M4.594,13.125a4.139,4.139,0,0,1-3.063-1.312A4.225,4.225,0,0,1,0,8.531,4.389,4.389,0,0,1,.328,6.891a3.782,3.782,0,0,1,.766-1.312L3.281,3.391A2.636,2.636,0,0,1,5.25,2.625,2.988,2.988,0,0,1,7.328,3.5,2.808,2.808,0,0,1,8.2,5.688a2.636,2.636,0,0,1-.766,1.969L6.234,8.75a.835.835,0,0,1-.547.219,1.173,1.173,0,0,1-.656-.219,1.555,1.555,0,0,1-.219-.656,1.555,1.555,0,0,1,.219-.656l1.2-1.2a.661.661,0,0,0,.328-.656,1.336,1.336,0,0,0-.437-.984,1.275,1.275,0,0,0-.766-.219,1.581,1.581,0,0,0-.766.219L2.3,6.781a3.026,3.026,0,0,0-.547,1.75,3.2,3.2,0,0,0,.875,2.078,2.269,2.269,0,0,0,1.094.656,1.891,1.891,0,0,0,1.094.109c.328-.109.656-.109.875-.219a2.288,2.288,0,0,0,.656-.437l4.375-4.375a2.4,2.4,0,0,0,.766-1.859A2.865,2.865,0,0,0,10.5,2.406,4.871,4.871,0,0,0,9.188,1.75H8.2a2.316,2.316,0,0,0-.766.328,1.387,1.387,0,0,1-.656.109.727.727,0,0,1-.547-.438c-.109-.109-.109-.328-.109-.656A1.92,1.92,0,0,1,6.563.547,4.308,4.308,0,0,1,8.75,0a4.049,4.049,0,0,1,2.844,1.094,4.615,4.615,0,0,1,1.531,3.281,4.28,4.28,0,0,1-1.2,3.172L7.547,11.922A4.039,4.039,0,0,1,4.594,13.125Z" transform="translate(0 0)" fill="#2699fb"/></g></svg>

										<p>0880164455</p>
									</a>
									
								</li>
								<li>
									<a href="/" class="link">
										<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13.25" height="13.375" viewBox="0 0 13.25 13.375"><defs><clipPath id="a"><rect width="13.25" height="13.375" fill="none"/></clipPath></defs><g clip-path="url(#a)"><rect width="13.125" height="13.125" fill="none"/><path d="M4.594,13.125a4.139,4.139,0,0,1-3.063-1.312A4.225,4.225,0,0,1,0,8.531,4.389,4.389,0,0,1,.328,6.891a3.782,3.782,0,0,1,.766-1.312L3.281,3.391A2.636,2.636,0,0,1,5.25,2.625,2.988,2.988,0,0,1,7.328,3.5,2.808,2.808,0,0,1,8.2,5.688a2.636,2.636,0,0,1-.766,1.969L6.234,8.75a.835.835,0,0,1-.547.219,1.173,1.173,0,0,1-.656-.219,1.555,1.555,0,0,1-.219-.656,1.555,1.555,0,0,1,.219-.656l1.2-1.2a.661.661,0,0,0,.328-.656,1.336,1.336,0,0,0-.437-.984,1.275,1.275,0,0,0-.766-.219,1.581,1.581,0,0,0-.766.219L2.3,6.781a3.026,3.026,0,0,0-.547,1.75,3.2,3.2,0,0,0,.875,2.078,2.269,2.269,0,0,0,1.094.656,1.891,1.891,0,0,0,1.094.109c.328-.109.656-.109.875-.219a2.288,2.288,0,0,0,.656-.437l4.375-4.375a2.4,2.4,0,0,0,.766-1.859A2.865,2.865,0,0,0,10.5,2.406,4.871,4.871,0,0,0,9.188,1.75H8.2a2.316,2.316,0,0,0-.766.328,1.387,1.387,0,0,1-.656.109.727.727,0,0,1-.547-.438c-.109-.109-.109-.328-.109-.656A1.92,1.92,0,0,1,6.563.547,4.308,4.308,0,0,1,8.75,0a4.049,4.049,0,0,1,2.844,1.094,4.615,4.615,0,0,1,1.531,3.281,4.28,4.28,0,0,1-1.2,3.172L7.547,11.922A4.039,4.039,0,0,1,4.594,13.125Z" transform="translate(0 0)" fill="#2699fb"/></g></svg>

										<p>peterethanbutao@gmail.com</p>
									</a>
									
								</li>
								
								{/if}
							</ul>
						</div>
					</div>
					<div class="bottom"></div>
				
				</div>
			</div>
			<div class="copy">
				<a href="http://butaopeter.netlify.app">
					 <p>© COPYRIGHT | 2022 BUTAO UX / UI DEV </p>
				</a>
			</div>
		

		</div>
	</div>
	
</section>

<style lang="scss">
	:global(body){
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	:root{
		--bc: #278deb;
		--lbc: #278ceb23;
		--dbc:#154d80;
		--gc: #006612;
		--lgc: #00661335;
		--dtc: black;
		--wtc:  seashell;
		--jr: #E99E3C;
	}
	@mixin font($c, $s, $w) {
        font-family:Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
        color:$c;
        font-size: $s;
        font-weight:$w;

    }
	#layout{
		.navigation{
			background-color: var(--gc);
			position: fixed; 
			top:0;
			left: 0;
			width: 100%;
			z-index:9;
			box-shadow: rgba(0, 0, 0, 0.267) 0 4px;

			.nv{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 1.25rem;
				margin: auto;
				//brand / logo name section
				.brand{
					a{
						display: flex;
						align-items: center;
						.imgspan{

							padding:  0.3125rem;
							img{
								width: 2.1875rem;
							}
						}
						span{
							h1{
								@include font(var(--wtc), 18px, 500);
								padding: 0px 1.25rem;
								margin: 0;
							}
						}
					}
				}

				//jere section
				.options{					
					.opt{
						display: flex;
						align-items: center;
						padding: 0 1.25rem;
						.jere{
							display: flex;
							align-items: center;
							border: solid 0.09px var(--jr);
							border-radius: 4rem;
							background: rgba(0, 0, 0, 0.405);
							.svgspan{
								background-color: rgba(0, 0, 0, 0.398);
								padding:0.1875rem 0.5rem;
								border-radius: 4rem;

							}
							span{
								padding: 0 0.4375rem;
								h1{
									@include font(var(--wtc), 0.6875rem, 500);
									margin: 0;
									margin: 0.1875rem;

								}
							}
						}
						// toogle menu section
						.menu{

							background:rgba(0, 0, 0, 0.404);
							border: solid transparent 1px;
							border-radius: 4rem;
							margin-left: 1.25rem;
							transition: 0.5s all ease;
							.mn{
								padding: 0.5625rem 0.875rem;
							}
							&:hover{
								background: transparent;
								border: black solid 1px;
								
							}

						}
					}
				}
			}
		}
		
		.toogle{
		//	background: #d7eafb;
			background:hsl(131, 100%, 4.5%);
			position: fixed;
			width:  28.125rem;
			height: 100vh;
			top: 0;
			right: 0;
			z-index: 8;
			pointer-events: none;
			clip-path: circle(0px at 90%);
			-webkit-clip-path: circle(0px at 90%);
			transition: 1s all ease-in-out;
			.tg{

				width: 100%;
				height: 100%;
				display:flex;
				flex-direction: column;
				.copy{
					text-align: center;
					position: relative;
					left:0;
					margin-top: auto !important;					
					box-shadow: rgba(0, 0, 0, 0.39) 0 -0.3125rem 6px 1px;
					p{
						@include font(var(--wtc), 0.875rem, 500)
					}
				}
				.content{
					padding-right: 1.25rem;
					padding-left: 0.625rem;
					padding-right: 0.625rem;
					
					.cnt{
						padding-top: 10vh;
						
						.top{
							.tp{
								display: flex;
								align-items: center;
								padding-bottom: 0.625rem;
								border-bottom: var(--bc) solid 1px;
								.tp-text{
									padding: 0 0.9375rem;
									h1{
										@include font(var(--wtc), 0.875rem, 500);
										margin: 0.3125rem 0;
										padding:0;
									}
									p{
										@include font(var(--wtc), 0.75rem, 550);
										margin: 0;
										padding:0;
									}
								}
							}
						}
						.text{
							text-align: center;
							p{
								@include font(var(--dbc), 0.875rem, 550);
								letter-spacing: 0.125rem;
							}
						}
						.middle{
							.md{
								ul{

									padding:0.625rem 0;
									margin:0;
									padding-left: 1.25rem;
									.instruct{
										border-left: var(--bc) solid 1px;
										display: flex;
										align-items: center;
										background: var(--lbc);
										padding: 0.625rem 0.3125rem;
										cursor: pointer !important;
										h1{
											margin-right: 0.625rem !important;
										}
										
									}

									.info{
										margin: 0.625rem  !important;
										padding-left: 1.25rem;
										a{
											padding: 0.3125rem 0;
										}
									}

									li{
										list-style: none;
										.link{
											margin: 0.625rem 0;
											display: flex !important;
											align-items: center !important;
											p{
												padding: 0 0.9375rem;
											}
										}

										
										h1{
											margin: 0;
											padding:0;
											@include font(var(--bc), 0.875rem, 500)
										}
										p{
											padding-left:1.25rem;
											@include font(var(--wtc), 0.7825rem, 450)
										}
										a{
											
											width: 100%;
											padding-left:1.25rem;
											text-decoration: none;
											@include font(var(--wtc), 0.7825rem, 450)
										}
									}
								}
							}
						}
					}
				}

			}
		}
		//js class
		.clip{
			pointer-events: all;
			clip-path: circle(1200px at 90%);
			-webkit-clip-path: circle(1200px at 90%);
		}
	}
	


</style>