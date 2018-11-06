using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using static Data;

namespace Shop.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        [HttpGet]
        public Product[] Get()
        {
            return Data.Products;
        }

        [HttpPost]
        public Product[] Post([FromBody] ProductsFilter filter)
        {
            return Data.Products.Where(p => filter.SizeFilters.Contains(p.Size)).ToArray();
        }
    }

    public class ProductsFilter
    {
        public List<string> SizeFilters { get; set; }
    }
}
