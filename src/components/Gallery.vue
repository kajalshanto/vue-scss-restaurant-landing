<template>
	<div id="gallery">
		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-12 text-center mt-4">
					<silent-box :gallery="gallery">
						<!-- <template v-slot:silentbox-item="{ silentboxItem }"> 
							<img
								class="image-fluid"
								:src="silentboxItem.src"
								alt="gallery image"
							/>
						</template> -->
						{{ gallery.alt }}
					</silent-box>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import image1 from "../assets/images/gallery/1.jpg";
	import image2 from "../assets/images/gallery/2.jpg";
	import image3 from "../assets/images/gallery/3.jpg";
	import image4 from "../assets/images/gallery/4.jpg";
	import image5 from "../assets/images/gallery/5.jpg";
	import image6 from "../assets/images/gallery/6.jpg";

	export default {
		name: "Gallery",
		data() {
			return {
				gallery: [
					{
						src: image1,
						description:
							"Star Night Sky Ravine by Mark Basarab, from Unsplash.",
						alt: "Blue starry night photo.",
						thumbnailWidth: "280px",
						thumbnailHeight: "230px",
						class: 'col-md-3'
					},
					{
						src: image2,
						description:
							"Corno Nero, Italy by Luca Zanon, from Unsplash.",
						alt: "Landscape photo of mountain with fog.",
						thumbnailWidth: "600px",
						thumbnailHeight: "230px",
						class: 'col-md-6'
					},
					{
						src: image3,
						description:
							"Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.",
						alt: "Low angle photo of pine trees.",
						thumbnailWidth: "280px",
						thumbnailHeight: "230px",
						class: 'col-md-3'
					},
					{
						src: image4,
						description:
							"Star Night Sky Ravine by Mark Basarab, from Unsplash.",
						alt: "Blue starry night photo.",
						thumbnailWidth: "600px",
						thumbnailHeight: "230px",
						class: 'col-md-6'
					},
					{
						src: image5,
						description:
							"Corno Nero, Italy by Luca Zanon, from Unsplash.",
						alt: "Landscape photo of mountain with fog.",
						thumbnailWidth: "280px",
						thumbnailHeight: "230px",
						class: 'col-md-3'
					},
					{
						src: image6,
						description:
							"Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.",
						alt: "Low angle photo of pine trees.",
						thumbnailWidth: "280px",
						thumbnailHeight: "230px",
						class: 'col-md-3'
					},
				],
			};
		},
	};
</script>

<style>
	#gallery {
		background-color: tomato;
		padding: 100px 0;
		overflow: hidden;
	}
	.silentbox-item {
		max-height: 280px;
		width: auto;
		border-radius: 0.5rem;
		margin: 0.5rem;
		overflow: hidden;
		margin-bottom: 20px;
	}
	#silentbox-overlay__description {
		display: block;
		padding-top: 1rem;
		text-align: center !important;
		color: #fff;
		max-width: none;
	}
</style>
