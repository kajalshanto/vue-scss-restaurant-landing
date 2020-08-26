<template>
	<div id="reservation">
		<div class="container">
			<div class="reservation-content">
				<div class="row">
					<!-- Reservation left -->
					<div class="col-md-5  col-sm-12 mb-30">
						<div class="reservation-opening">
							<!-- Reservation time -->
							<div class="reservation-time">
								<div class="time-title text-center">
									<h3>Opening Time</h3>
									<img
										class="img-fluid mt-5"
										:src="
											require('../assets/images/logo/section-logo.png')
										"
										alt="staek with knife"
										width="70"
									/>
								</div>
								<div class="wok-days">
									<table
										class="table table-borderless text-white"
									>
										<tbody>
											<tr>
												<td>Monday- Friday</td>
												<td>8AM - 5PM</td>
											</tr>
											<tr>
												<td>Sunday</td>
												<td>12PM - 5PM</td>
											</tr>
											<tr>
												<td>Saturday</td>
												<td>Close</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<!--/. Reservation time -->

							<!-- Reservation social -->
							<div class="reservation-social text-center">
								<h5>All Time Available In Online</h5>
								<a href="#" class="soc-icon">
									<LogoFacebookIcon w="30px" h="30px" />
								</a>
								<a href="#" class="soc-icon">
									<LogoTwitterIcon w="30px" h="30px" />
								</a>
								<a href="#" class="soc-icon">
									<LogoGoogleplusIcon w="30px" h="30px" />
								</a>
								<a href="#" class="soc-icon">
									<LogoInstagramIcon w="30px" h="30px" />
								</a>
								<a href="#" class="soc-icon">
									<LogoLinkedinIcon w="30px" h="30px" />
								</a>
							</div>
							<!--/. Reservation social -->
						</div>
					</div>
					<!--/. Reservation left -->
					<!-- Reservation right -->
					<div class="col-md-7 col-sm-12 mb-30">
						<div class="reservatin-form">
							<div
								class="reservatin-form-title text-center text-white"
							>
								<h3>Reservation Form</h3>
							</div>

							<div class="reservatin-form-area">
								<form action="#">
									<div class="form-group">
										<input
											type="text"
											class="form-control"
											placeholder="Full Name"
										/>
									</div>
									<div class="form-group">
										<input
											type="email"
											class="form-control"
											placeholder="Email Adress"
										/>
									</div>
									<div class="form-group">
										<input
											type="text"
											class="form-control"
											placeholder="Mobile Number"
										/>
									</div>
									<div class="form-group">
										<datetime
											type="datetime"
											v-model="datetime12"
											use12-hour
											class="form-control"
											placeholder="Select Data and Time"
										></datetime>
									</div>
									<button
										type="submit"
										class="btn btn-custom btn-white-border btn-lg btn-block"
									>
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
					<!--/. Reservation right -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import LogoFacebookIcon from "vue-ionicons/dist/logo-facebook.vue";
	import LogoTwitterIcon from "vue-ionicons/dist/logo-twitter.vue";
	import LogoGoogleplusIcon from "vue-ionicons/dist/logo-googleplus.vue";
	import LogoInstagramIcon from "vue-ionicons/dist/logo-instagram.vue";
	import LogoLinkedinIcon from "vue-ionicons/dist/logo-linkedin.vue";
	import { Datetime } from "vue-datetime";

	export default {
		name: "Reservation",

		components: {
			LogoFacebookIcon,
			LogoTwitterIcon,
			LogoGoogleplusIcon,
			LogoInstagramIcon,
			LogoLinkedinIcon,
			datetime: Datetime,
		},
	};
</script>
