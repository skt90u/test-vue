(function(){
	
	const { loadModule } = window['vue3-sfc-loader'];
	const loadModuleOptions = {
      moduleCache: {
        vue: Vue
      },
      async getFile(url) {
        
        //return '<template>hello</template>';
        const res = await fetch(url);
        if ( !res.ok )
          throw Object.assign(new Error(res.statusText + ' ' + url), { res });
        return {
          getContentData: asBinary => asBinary ? res.arrayBuffer() : res.text(),
        }
      },
      addStyle(textContent) {
        const style = Object.assign(document.createElement('style'), { textContent });
        const ref = document.head.getElementsByTagName('style')[0] || null;
        document.head.insertBefore(style, ref);
      },
    }

    const app = Vue.createApp({
	  data() {
		return {
		};
	  },
	  components: {
        'Component1': Vue.defineAsyncComponent( () => loadModule('./Component1.vue', loadModuleOptions) ),
		'Component2': Vue.defineAsyncComponent( () => loadModule('./Component2.vue', loadModuleOptions) ),
      },
      
    });

	// https://primevue.org/installation
	app.component('InputText', primevue.inputtext);
	app.component('RadioButton', primevue.radiobutton);
	app.component('SelectButton', primevue.selectbutton);
	app.component('Editor', primevue.editor);

	  
    app.mount('#app');
	
})();
