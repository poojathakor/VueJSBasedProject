<template>
    <div class="header">
    	<section id="header" class="py-3">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-2 col-sm-2 col-xs-2">
					<div class="logo">
						<a href="/"><img src="./assets/images/iconscout-logo-white.svg" alt=""> </a>
					</div>
				</div>
				<div class="col-md-5 col-sm-5">
					<form class="search" action="/"  @submit.prevent="submitsearch">
						<div class="input-field">
							<input type="text" id="key" name="key" class="autocomplete  p-2" placeholder="Search anything..." v-model="key">
							<button type="submit"><img src="./assets/images/searchicon.png"/></button>
						</div>
					</form>
				</div>
				<div class="col-md-5 col-sm-5">
					<div>
						<ul class="list-inline d-flex align-items-center justify-content-end mb-0">
							<li class="mx-2"><a href="register.html">My Scout</a> </li>
							<li class="mx-2"><a href="login.html">Sign In</a> </li>
							<li class="mx-2"><a href="db-listing-add.html"><i class="fa fa-plus" aria-hidden="true"></i> Add Listing</a> </li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div v-if="locationSetup">
			
		</div>
	</section>
    </div>

</template>

<script>
	import axios from 'axios';
export default {
    data(){
    	return{
    		key : '',
    		info: '',
    		locationSetup : false
    	}
    },
    methods:{
    	submitsearch(){
    		// console.log(this.key);
    		window.location.href = "/#/search";
    		locationSetup = true;
    		axios
		      .get('https://api.iconscout.com/v2/search?product_type=item&asset=icon&sort=&per_page=&price=free')
		      .then(response => {
		        this.info = response.data.bpi
		        console.log(response);
		      })
		      .catch(error => {
		        console.log(error)
		        this.errored = true
		      })
		      .finally(() => this.loading = false)
    	}
    }
}
</script>