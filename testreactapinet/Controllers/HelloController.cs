using Microsoft.AspNetCore.Mvc;
using static System.Net.Mime.MediaTypeNames;

namespace testreactapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HelloController : ControllerBase
    {

        private static List<Image> images = new List<Image>
        {
            new Image { Description = "Description1" },
            new Image { Description = "Description2" }
        };
        private static List<Image> images2 = new List<Image>
        {
            new Image { Description = "Description3" },
            new Image { Description = "Description4" }
        };
        private static List<Image> images3 = new List<Image>
        {
            new Image { Description = "Description5" },
            new Image { Description = "Description6" }
        };

        [HttpGet]
        [Route("yolo")]
        public ActionResult<IEnumerable<Image>> GetItems1()
        {
            return Ok(images);
        }
        [HttpGet]
        [Route("yeet")]
        public ActionResult<IEnumerable<Image>> GetItems2()
        {
            return Ok(images2);
        }
        [HttpGet]
        [Route("yay")]
        public ActionResult<IEnumerable<Image>> GetItems3()
        {
            return Ok(images3);
        }
    }
}
