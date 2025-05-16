<template>
	<nav class="navbar bg-body-tertiary">
  <div class="container">
    <RouterLink to="/" class="navbar-brand">
      <img src="https://www.gregdesplaces.com/pluginfile.php/1/core_admin/logo/0x200/1744478460/blue-round.png" alt="Bootstrap" width="30" height="30">
    </RouterLink>
		<!-- Je crée un bouton qui affichera le panier -->
		 <ul class="nav">
			<li class="nav-item">
				<RouterLink :to="{name: 'cart'}" class="nav-link" aria-current="page"><i class="bi bi-basket3-fill"></i></RouterLink>
			</li>
		</ul>
		 
  </div>

</nav>
</template>