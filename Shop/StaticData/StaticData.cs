
    public class Data
    {
        public static Product[] Products =
        {
            new Product {
                Name = "Blue t-shirt",
                ImageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg",
                Cost = 99.00M,
                Description = "A blue t-shirt",
                Size = "M"
            },
            new Product {
                Name = "Red t-shirt",
                ImageUrl = "https://www.ascolour.com.au/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/5/0/5001_staple_tee_red_13.jpg",
                Cost = 100.00M,
                Description = "A red t-shirt",
                Size = "M"
            },
            new Product {
                Name = "Yellow t-shirt",
                ImageUrl = "http://www.richworth.in/media/catalog/product/optimized/9/0/906ed12c07dc39818aa7f2ad245f9525/men_s_round_neck_tshirt_rwst_019-yellow.jpg",
                Cost = 75.50M,
                Description = "A yellow t-shirt",
                Size = "S"
            },
            new Product {
                Name = "Green t-shirt",
                ImageUrl = "https://i.ebayimg.com/images/g/2MoAAOxyUI1TH3TE/s-l300.jpg",
                Cost = 85.50M,
                Description = "A green t-shirt",
                Size = "XL"
            },
            new Product {
                Name = "Black t-shirt",
                ImageUrl = "https://cdn.shopify.com/s/files/1/1477/6546/products/GAGA-1-productmocks-blacktee-r8_1024x1024.png?v=1475618736",
                Cost = 59.00M,
                Description = "A back t-shirt",
                Size = "XL"
            },
            new Product {
                Name = "Pink t-shirt",
                ImageUrl = "https://images-na.ssl-images-amazon.com/images/I/715vzqVPA0L._UX679_.jpg",
                Cost = 100.00M,
                Description = "A pink t-shirt",
                Size = "M"
            },
            new Product {
                Name = "Orange t-shirt",
                ImageUrl = "https://images-na.ssl-images-amazon.com/images/I/61oQftzjO7L._UX679_.jpg",
                Cost = 79.50M,
                Description = "A orange t-shirt",
                Size = "S"
            },
            new Product {
                Name = "Gray t-shirt",
                ImageUrl = "https://images-na.ssl-images-amazon.com/images/I/61LkfHymFsL._UX679_.jpg",
                Cost = 99.50M,
                Description = "A grey t-shirt",
                Size = "XL"
            }
        };

    

    public class Product
    {
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public decimal Cost { get; set; }
        public string Size { get; set; }
        public string Description { get; set; }
    }
}
