const { Targetables } = require('@magento/pwa-buildpack')


module.exports = (targets) => {
    const targetables = Targetables.using(targets);

    targets.of("@magento/venia-ui").routes.tap((routes) => {
        routes.push({
            name: "MyGreetingRoute",
            pattern: "/greeting/:who?",
            path: require.resolve("@leo/theme/components/GreetingPage/greetingPage.js"),
        });
        return routes;
    });

    const ProductDetailComponent = targetables.reactComponent(
        '@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail'
    );

    const ShortDescription = ProductDetailComponent.addImport(
        "ShortDescription from '@leo/theme/components/ShortDescription'"
    );

    ProductDetailComponent.insertAfterJSX('<section className={classes.title} />', `<${ShortDescription} productSku={productDetails.sku} />`)
};
