using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImagesLamda.BE.Models
{
    public class Image
    {
        public string ImageUrl { get; set; }
        public string Description { get; set; }
        public DateTime AddedTime { get; set; }
    }
}
