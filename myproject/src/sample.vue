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
					<form class="search" action="/">
						<div class="input-field">
							<input type="text" id="key" name="key" class="autocomplete  p-2" placeholder="Search anything..." >
							<button><img src="./assets/images/searchicon.png"/></button>
							<div class="autocomplete-content dropdown-content"></div>
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
	</section>
    </div>

</template>

<script>
export default {
    
}
</script>