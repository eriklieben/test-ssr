import Aurelia, { RouterConfiguration, StyleConfiguration } from 'aurelia';
import { MyApp } from './my-app';
import shared from './shared.css';


(async () => {

  await Aurelia
    .register(StyleConfiguration.shadowDOM({
      sharedStyles: [shared]
    }))
    .register(RouterConfiguration)
      // To use HTML5 pushState routes, replace previous line with the following
      // customized router config.
      // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
    .app(MyApp)
    .start();

    [...document.querySelectorAll('[data-ssr="serialized"]')]
		.forEach(el => {
      el.childNodes.forEach(node => {
        node.parentElement.removeChild(node);
			});
			el.setAttribute('data-ssr', 'hydrated');
		}
	);
})();  