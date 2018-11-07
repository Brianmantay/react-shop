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
        public ProductsPaged Post([FromBody] ProductsFilter filter)
        {
            var products = Data.Products.Where(p => filter.SizeFilters.Contains(p.Size));
            return new ProductsPaged
            {
                Products = products
                    .Skip((filter.Page - 1) * filter.PageSize)
                    .Take(filter.PageSize)
                    .ToArray(),
                Total = products.Count()
            };
        }
    }

    public class ProductsPaged
    {
        public Product[] Products { get; set; }
        public int Total { get; set; }
    }

    public class ProductsFilter
    {
        public List<string> SizeFilters { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
    }
}
