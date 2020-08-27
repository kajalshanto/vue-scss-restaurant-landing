<template>
	<div id="footer">
		<div class="footer-top">
			<div class="container">
				<div class="footer_content">
					<div class="row">
						<div
							class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-start align-items-center footer-single"
						>
							<img
								class="img-fluid"
								:src="
									require('../assets/images/logo/footer-logo.png')
								"
								alt="coffee cup"
							/>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-12 footer-single">
							<h4 class="text-uppercase">contact us</h4>
							<address class="footer-p">
								<strong>Adress</strong>
								:House No 08, Road No 08 Dia Bari, Dhaka
							</address>
							<p class="footer-p">
								<strong>email :</strong
								><a href="#"> username@gmail.com</a>
								<a href="#"> demo@gmail.com</a>
							</p>
							<p class="footer-p">
								<strong>phone: </strong> (+660 256 24857) (+660
								256 24857)
							</p>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-12 footer-single">
							<h4 class="text-uppercase">subscribe us</h4>
							<p class="footer-p mb-25">
								Nulla tempor, nisl sed bibendum pretium, diam
								nisi mattisss lectus, eu varius lorem mauris
								posuere dui.
							</p>

							<form action="#">
								<input
									type="text"
									placeholder="Your email address"
								/>
								<button type="submit" class="btn submit-icon">
									<MdPaperPlaneIcon
										w="50px"
										h="50px"
										animate="beat"
									/>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-botom">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 text-center py-3">
						<p>
							Copyright &copy; {{ new Date().getFullYear() }}
							<a
								href="https://shantosblackbox.com/"
								target="_blank"
							>
								<strong>Shanto's Blackbox</strong></a
							>. All Rights Reserved.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import MdPaperPlaneIcon from "vue-ionicons/dist/md-paper-plane.vue";	

	export default {
		name: "Footer",

		components: {
			MdPaperPlaneIcon,
		},
	};
</script>

<style scoped>
	.btn.focus, .btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0rem !important;
}
</style>
