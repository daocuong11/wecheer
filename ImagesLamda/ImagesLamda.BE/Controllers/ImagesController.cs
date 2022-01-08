using ImagesLamda.BE.Models;
using ImagesLamda.BE.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImagesLamda.BE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        private readonly ImageService imageService;

        public ImagesController(ImageService imageService)
        {
            this.imageService = imageService;
        }

        [HttpGet]
        [Route("GetLastImage")]
        public ActionResult GetLastImage()
        {
            return Ok(imageService.GetLastImage());
        }

        [HttpGet]
        [Route("GetImageInHour")]
        public ActionResult GetImageInHour()
        {
            return Ok(imageService.GetImageInHour());
        }

        [HttpPost]
        public ActionResult ÂddImage([FromBody] Image img)
        {
            imageService.Add(img);
            return new ObjectResult(img) { StatusCode = StatusCodes.Status201Created };
        }
    }
}
