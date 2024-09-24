using System.Web;
using System.Web.Optimization;

namespace HieuPhamBeauty
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new Bundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/css/bootstrap.css",
                      "~/Content/css/site.css"));

            bundles.Add(new StyleBundle("~/Content/css/landingpage").Include(
                      "~/Content/css/landingpage/bootstrap.min.css",
                      "~/Content/css/landingpage/owl.carousel.min.css",
                      "~/Content/css/landingpage/style.css",
                      "~/Content/css/landingpage/responsive.css"));

            bundles.Add(new StyleBundle("~/Content/css/lib").Include(
                     "~/Content/css/lib/bootstrap.min.css",
                     "~/Content/css/lib/ionicons.min.css",
                     "~/Content/css/lib/simple-line-icons.css",
                     "~/Content/css/lib/lineIcons.css",
                     "~/Content/css/lib/font-awesome.min.css",
                     "~/Content/css/lib/animate.css",
                     "~/Content/css/lib/swiper.min.css",
                     "~/Content/css/lib/range-slider.css",
                     "~/Content/css/lib/fancybox.min.css",
                     "~/Content/css/lib/slicknav.css",
                     "~/Content/css/lib/owlcarousel.min.css",
                     "~/Content/css/lib/owltheme.min.css",
                     "~/Content/css/lib/spacing.css"));

            bundles.Add(new ScriptBundle("~/Scripts/lib").Include(
                      "~/Scripts/lib/modernizr.js",
                      "~/Scripts/lib/jquery-main.js",
                      "~/Scripts/lib/jquery-migrate.js",
                      "~/Scripts/lib/bootstrap.min.js",
                      "~/Scripts/lib/jquery.appear.js",
                      "~/Scripts/lib/swiper.min.js",
                      "~/Scripts/lib/fancybox.min.js",
                      "~/Scripts/lib/slicknav.js",
                      "~/Scripts/lib/waypoints.js",
                      "~/Scripts/lib/owlcarousel.min.js",
                      "~/Scripts/lib/jquery-match-height.min.js",
                      "~/Scripts/lib/jquery-zoom.min.js",
                      "~/Scripts/lib/countdown.js"));
        }
    }
}
