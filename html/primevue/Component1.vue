<template>
	<div>
		<h1>Component1</h1>
		<i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
		{{a}}
	</div>
</template>

<script>

export default {
	data() {
		return {
			a: 1,
		};
	},
	abc: {
		aa:1,
		bb:2,
		cc:3
	},
	mounted(){
		console.log('mounted');
		window.a = this;
	}
}
	
</script>