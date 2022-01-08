using ImagesLamda.BE.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImagesLamda.BE.Services
{
    public class ImageService
    {
        private List<Image> images;

        public ImageService()
        {
            images = new List<Image>();
        }

        public void Add(Image img)
        {
            img.AddedTime = DateTime.Now;
            this.images.Add(img);
        }

        public int GetImageInHour()
        {
            return this.images.Where(e => (DateTime.Now - e.AddedTime).TotalMinutes <= 60).Count();
        }

        public Image GetLastImage()
        {
            return this.images.LastOrDefault();
        }
    }
}
