<template>
	<div id="header">
		<header>
			<div class="container-fluid">
				<nav
					class="navbar navbar-expand-lg navbar-light bg-white text-black fixed-top"
				>
					<div class="container">
						<a class="navbar-brand" href="/">
							<img
								class="img-fluid"
								:src="
									require('../assets/images/logo/logo.png')
								"
								alt="Stack House"
							/>
						</a> 
						<button
							class="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarTogglerDemo02"
							aria-controls="navbarTogglerDemo02"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>

						<div
							class="collapse navbar-collapse"
							id="navbarTogglerDemo02"
						>
							<ul class="navbar-nav ml-auto mt-2 mt-lg-0">
								<li
									class="nav-item"
									v-for="item in navItem"
									:key="item.li"
								>
									<a class="nav-link" v-scroll-to="`#${item.id}`">
										{{ item.li }}
									</a>  
								</li> 
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</header>
	</div>
</template>

<script> 

	export default {
		name: "Header", 

		data() {
			return {
				navItem: [
					{ li: "home", id: "home" },
					{ li: "about", id: "about" },
					{ li: "menu", id: "menu" },
					{ li: "gallery", id: "gallery" },
					{ li: "reservation", id: "reservation" },					
					{ li: "find us", id: "gmap" },
					{ li: "contact", id: "footer" },
				],
			};
		},
	};
</script> 
