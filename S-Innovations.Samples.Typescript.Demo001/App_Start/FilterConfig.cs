using System.Web;
using System.Web.Mvc;

namespace S_Innovations.Samples.Typescript.Demo001
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}