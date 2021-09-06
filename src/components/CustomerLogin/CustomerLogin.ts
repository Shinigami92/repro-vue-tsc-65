import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'CustomerLogin',
  setup(_props, { root }) {
    const publicPath: string = '/'; // Defaults to /
    const basePath: string = '/'; // Defaults to /customer/
    // URL correction: The base/customer path (or root if public path is not root)
    // will be redirected to the public path.
    const customerPath: string = publicPath !== basePath ? basePath : publicPath !== '/' ? '/' : '/customer/';

    root.$router.replace({
      path: root.$route.path.replace(customerPath, publicPath),
      params: root.$route.params,
      query: root.$route.query
    });
  }
});
